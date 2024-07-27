package ma.zs.zyn.service.impl.collaborator.project;


import ma.zs.zyn.zynerator.exception.EntityNotFoundException;
import ma.zs.zyn.bean.core.project.Project;
import ma.zs.zyn.dao.criteria.core.project.ProjectCriteria;
import ma.zs.zyn.dao.facade.core.project.ProjectDao;
import ma.zs.zyn.dao.specification.core.project.ProjectSpecification;
import ma.zs.zyn.service.facade.collaborator.project.ProjectCollaboratorService;
import ma.zs.zyn.zynerator.service.AbstractServiceImpl;
import static ma.zs.zyn.zynerator.util.ListUtil.*;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import ma.zs.zyn.zynerator.util.RefelexivityUtil;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zs.zyn.service.facade.collaborator.collaborator.CollaboratorCollaboratorService ;
import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.service.facade.collaborator.project.RemoteRepoInfoCollaboratorService ;
import ma.zs.zyn.bean.core.project.RemoteRepoInfo ;
import ma.zs.zyn.service.facade.collaborator.project.ConversationCollaboratorService ;
import ma.zs.zyn.bean.core.project.Conversation ;
import ma.zs.zyn.service.facade.collaborator.project.ProjectDetailCollaboratorService ;
import ma.zs.zyn.bean.core.project.ProjectDetail ;

import java.util.List;
@Service
public class ProjectCollaboratorServiceImpl implements ProjectCollaboratorService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Project update(Project t) {
        Project loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{Project.class.getSimpleName(), t.getId().toString()});
        } else {
            updateWithAssociatedLists(t);
            dao.save(t);
            return loadedItem;
        }
    }

    public Project findById(Long id) {
        return dao.findById(id).orElse(null);
    }


    public Project findOrSave(Project t) {
        if (t != null) {
            findOrSaveAssociatedObject(t);
            Project result = findByReferenceEntity(t);
            if (result == null) {
                return dao.save(t);
            } else {
                return result;
            }
        }
        return null;
    }

    public List<Project> findAll() {
        return dao.findAll();
    }

    public List<Project> findByCriteria(ProjectCriteria criteria) {
        List<Project> content = null;
        if (criteria != null) {
            ProjectSpecification mySpecification = constructSpecification(criteria);
            if (criteria.isPeagable()) {
                Pageable pageable = PageRequest.of(0, criteria.getMaxResults());
                content = dao.findAll(mySpecification, pageable).getContent();
            } else {
                content = dao.findAll(mySpecification);
            }
        } else {
            content = dao.findAll();
        }
        return content;

    }


    private ProjectSpecification constructSpecification(ProjectCriteria criteria) {
        ProjectSpecification mySpecification =  (ProjectSpecification) RefelexivityUtil.constructObjectUsingOneParam(ProjectSpecification.class, criteria);
        return mySpecification;
    }

    public List<Project> findPaginatedByCriteria(ProjectCriteria criteria, int page, int pageSize, String order, String sortField) {
        ProjectSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(ProjectCriteria criteria) {
        ProjectSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    public List<Project> findByCollaboratorId(Long id){
        return dao.findByCollaboratorId(id);
    }
    public int deleteByCollaboratorId(Long id){
        return dao.deleteByCollaboratorId(id);
    }
    public long countByCollaboratorId(Long id){
        return dao.countByCollaboratorId(id);
    }
    public List<Project> findByRemoteRepoInfoId(Long id){
        return dao.findByRemoteRepoInfoId(id);
    }
    public int deleteByRemoteRepoInfoId(Long id){
        return dao.deleteByRemoteRepoInfoId(id);
    }
    public long countByRemoteRepoInfoId(Long id){
        return dao.countByRemoteRepoInfoId(id);
    }
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
	public boolean deleteById(Long id) {
        boolean condition = (id != null);
        if (condition) {
            deleteAssociatedLists(id);
            dao.deleteById(id);
        }
        return condition;
    }

    public void deleteAssociatedLists(Long id) {
        conversationService.deleteByProjectId(id);
        projectDetailService.deleteByProjectId(id);
    }




    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<Project> delete(List<Project> list) {
		List<Project> result = new ArrayList();
        if (list != null) {
            for (Project t : list) {
                if(dao.findById(t.getId()).isEmpty()){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Project create(Project t) {
        Project loaded = findByReferenceEntity(t);
        Project saved;
        if (loaded == null) {
            saved = dao.save(t);
            if (t.getConversations() != null) {
                t.getConversations().forEach(element-> {
                    element.setProject(saved);
                    conversationService.create(element);
                });
            }
            if (t.getProjectDetails() != null) {
                t.getProjectDetails().forEach(element-> {
                    element.setProject(saved);
                    projectDetailService.create(element);
                });
            }
        }else {
            saved = null;
        }
        return saved;
    }

    public Project findWithAssociatedLists(Long id){
        Project result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setConversations(conversationService.findByProjectId(id));
            result.setProjectDetails(projectDetailService.findByProjectId(id));
        }
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<Project> update(List<Project> ts, boolean createIfNotExist) {
        List<Project> result = new ArrayList<>();
        if (ts != null) {
            for (Project t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    Project loadedItem = dao.findById(t.getId()).orElse(null);
                    if (isEligibleForCreateOrUpdate(createIfNotExist, t, loadedItem)) {
                        dao.save(t);
                    } else {
                        result.add(t);
                    }
                }
            }
        }
        return result;
    }


    private boolean isEligibleForCreateOrUpdate(boolean createIfNotExist, Project t, Project loadedItem) {
        boolean eligibleForCreateCrud = t.getId() == null;
        boolean eligibleForCreate = (createIfNotExist && (t.getId() == null || loadedItem == null));
        boolean eligibleForUpdate = (t.getId() != null && loadedItem != null);
        return (eligibleForCreateCrud || eligibleForCreate || eligibleForUpdate);
    }

    public void updateWithAssociatedLists(Project project){
    if(project !=null && project.getId() != null){
        List<List<Conversation>> resultConversations= conversationService.getToBeSavedAndToBeDeleted(conversationService.findByProjectId(project.getId()),project.getConversations());
            conversationService.delete(resultConversations.get(1));
        emptyIfNull(resultConversations.get(0)).forEach(e -> e.setProject(project));
        conversationService.update(resultConversations.get(0),true);
        List<List<ProjectDetail>> resultProjectDetails= projectDetailService.getToBeSavedAndToBeDeleted(projectDetailService.findByProjectId(project.getId()),project.getProjectDetails());
            projectDetailService.delete(resultProjectDetails.get(1));
        emptyIfNull(resultProjectDetails.get(0)).forEach(e -> e.setProject(project));
        projectDetailService.update(resultProjectDetails.get(0),true);
        }
    }








    public Project findByReferenceEntity(Project t) {
        return t == null || t.getId() == null ? null : findById(t.getId());
    }
    public void findOrSaveAssociatedObject(Project t){
        if( t != null) {
            t.setCollaborator(collaboratorService.findOrSave(t.getCollaborator()));
            t.setRemoteRepoInfo(remoteRepoInfoService.findOrSave(t.getRemoteRepoInfo()));
        }
    }



    public List<Project> findAllOptimized() {
        return dao.findAllOptimized();
    }

    @Override
    public List<List<Project>> getToBeSavedAndToBeDeleted(List<Project> oldList, List<Project> newList) {
        List<List<Project>> result = new ArrayList<>();
        List<Project> resultDelete = new ArrayList<>();
        List<Project> resultUpdateOrSave = new ArrayList<>();
        if (isEmpty(oldList) && isNotEmpty(newList)) {
            resultUpdateOrSave.addAll(newList);
        } else if (isEmpty(newList) && isNotEmpty(oldList)) {
            resultDelete.addAll(oldList);
        } else if (isNotEmpty(newList) && isNotEmpty(oldList)) {
			extractToBeSaveOrDelete(oldList, newList, resultUpdateOrSave, resultDelete);
        }
        result.add(resultUpdateOrSave);
        result.add(resultDelete);
        return result;
    }

    private void extractToBeSaveOrDelete(List<Project> oldList, List<Project> newList, List<Project> resultUpdateOrSave, List<Project> resultDelete) {
		for (int i = 0; i < oldList.size(); i++) {
                Project myOld = oldList.get(i);
                Project t = newList.stream().filter(e -> myOld.equals(e)).findFirst().orElse(null);
                if (t != null) {
                    resultUpdateOrSave.add(t); // update
                } else {
                    resultDelete.add(myOld);
                }
            }
            for (int i = 0; i < newList.size(); i++) {
                Project myNew = newList.get(i);
                Project t = oldList.stream().filter(e -> myNew.equals(e)).findFirst().orElse(null);
                if (t == null) {
                    resultUpdateOrSave.add(myNew); // create
                }
            }
	}

    @Override
    public String uploadFile(String checksumOld, String tempUpladedFile, String destinationFilePath) throws Exception {
        return null;
    }







    @Autowired
    private CollaboratorCollaboratorService collaboratorService ;
    @Autowired
    private RemoteRepoInfoCollaboratorService remoteRepoInfoService ;
    @Autowired
    private ConversationCollaboratorService conversationService ;
    @Autowired
    private ProjectDetailCollaboratorService projectDetailService ;

    public ProjectCollaboratorServiceImpl(ProjectDao dao) {
        this.dao = dao;
    }

    private ProjectDao dao;
}
