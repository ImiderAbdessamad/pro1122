package ma.zs.zyn.service.impl.agent.inscription;


import ma.zs.zyn.zynerator.exception.EntityNotFoundException;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;
import ma.zs.zyn.dao.criteria.core.inscription.InscriptionCollaboratorCriteria;
import ma.zs.zyn.dao.facade.core.inscription.InscriptionCollaboratorDao;
import ma.zs.zyn.dao.specification.core.inscription.InscriptionCollaboratorSpecification;
import ma.zs.zyn.service.facade.agent.inscription.InscriptionCollaboratorAgentService;
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

import ma.zs.zyn.service.facade.agent.collaborator.CollaboratorAgentService ;
import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.service.facade.agent.packaging.PackagingPlanAgentService ;
import ma.zs.zyn.bean.core.packaging.PackagingPlan ;
import ma.zs.zyn.service.facade.agent.inscription.InscriptionCollaboratorStateAgentService ;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState ;

import java.util.List;
@Service
public class InscriptionCollaboratorAgentServiceImpl implements InscriptionCollaboratorAgentService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public InscriptionCollaborator update(InscriptionCollaborator t) {
        InscriptionCollaborator loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{InscriptionCollaborator.class.getSimpleName(), t.getId().toString()});
        } else {
            dao.save(t);
            return loadedItem;
        }
    }

    public InscriptionCollaborator findById(Long id) {
        return dao.findById(id).orElse(null);
    }


    public InscriptionCollaborator findOrSave(InscriptionCollaborator t) {
        if (t != null) {
            findOrSaveAssociatedObject(t);
            InscriptionCollaborator result = findByReferenceEntity(t);
            if (result == null) {
                return dao.save(t);
            } else {
                return result;
            }
        }
        return null;
    }

    public List<InscriptionCollaborator> findAll() {
        return dao.findAll();
    }

    public List<InscriptionCollaborator> findByCriteria(InscriptionCollaboratorCriteria criteria) {
        List<InscriptionCollaborator> content = null;
        if (criteria != null) {
            InscriptionCollaboratorSpecification mySpecification = constructSpecification(criteria);
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


    private InscriptionCollaboratorSpecification constructSpecification(InscriptionCollaboratorCriteria criteria) {
        InscriptionCollaboratorSpecification mySpecification =  (InscriptionCollaboratorSpecification) RefelexivityUtil.constructObjectUsingOneParam(InscriptionCollaboratorSpecification.class, criteria);
        return mySpecification;
    }

    public List<InscriptionCollaborator> findPaginatedByCriteria(InscriptionCollaboratorCriteria criteria, int page, int pageSize, String order, String sortField) {
        InscriptionCollaboratorSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(InscriptionCollaboratorCriteria criteria) {
        InscriptionCollaboratorSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    public List<InscriptionCollaborator> findByCollaboratorId(Long id){
        return dao.findByCollaboratorId(id);
    }
    public int deleteByCollaboratorId(Long id){
        return dao.deleteByCollaboratorId(id);
    }
    public long countByCollaboratorId(Long id){
        return dao.countByCollaboratorId(id);
    }
    public List<InscriptionCollaborator> findByPackagingPlanId(Long id){
        return dao.findByPackagingPlanId(id);
    }
    public int deleteByPackagingPlanId(Long id){
        return dao.deleteByPackagingPlanId(id);
    }
    public long countByPackagingPlanCode(String code){
        return dao.countByPackagingPlanCode(code);
    }
    public List<InscriptionCollaborator> findByInscriptionCollaboratorStateCode(String code){
        return dao.findByInscriptionCollaboratorStateCode(code);
    }
    public int deleteByInscriptionCollaboratorStateCode(String code){
        return dao.deleteByInscriptionCollaboratorStateCode(code);
    }
    public long countByInscriptionCollaboratorStateCode(String code){
        return dao.countByInscriptionCollaboratorStateCode(code);
    }
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
	public boolean deleteById(Long id) {
        boolean condition = (id != null);
        if (condition) {
            dao.deleteById(id);
        }
        return condition;
    }




    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<InscriptionCollaborator> delete(List<InscriptionCollaborator> list) {
		List<InscriptionCollaborator> result = new ArrayList();
        if (list != null) {
            for (InscriptionCollaborator t : list) {
                if(dao.findById(t.getId()).isEmpty()){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public InscriptionCollaborator create(InscriptionCollaborator t) {
        InscriptionCollaborator loaded = findByReferenceEntity(t);
        InscriptionCollaborator saved;
        if (loaded == null) {
            saved = dao.save(t);
        }else {
            saved = null;
        }
        return saved;
    }

    public InscriptionCollaborator findWithAssociatedLists(Long id){
        InscriptionCollaborator result = dao.findById(id).orElse(null);
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<InscriptionCollaborator> update(List<InscriptionCollaborator> ts, boolean createIfNotExist) {
        List<InscriptionCollaborator> result = new ArrayList<>();
        if (ts != null) {
            for (InscriptionCollaborator t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    InscriptionCollaborator loadedItem = dao.findById(t.getId()).orElse(null);
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


    private boolean isEligibleForCreateOrUpdate(boolean createIfNotExist, InscriptionCollaborator t, InscriptionCollaborator loadedItem) {
        boolean eligibleForCreateCrud = t.getId() == null;
        boolean eligibleForCreate = (createIfNotExist && (t.getId() == null || loadedItem == null));
        boolean eligibleForUpdate = (t.getId() != null && loadedItem != null);
        return (eligibleForCreateCrud || eligibleForCreate || eligibleForUpdate);
    }









    public InscriptionCollaborator findByReferenceEntity(InscriptionCollaborator t) {
        return t == null || t.getId() == null ? null : findById(t.getId());
    }
    public void findOrSaveAssociatedObject(InscriptionCollaborator t){
        if( t != null) {
            t.setCollaborator(collaboratorService.findOrSave(t.getCollaborator()));
        }
    }



    public List<InscriptionCollaborator> findAllOptimized() {
        return dao.findAll();
    }

    @Override
    public List<List<InscriptionCollaborator>> getToBeSavedAndToBeDeleted(List<InscriptionCollaborator> oldList, List<InscriptionCollaborator> newList) {
        List<List<InscriptionCollaborator>> result = new ArrayList<>();
        List<InscriptionCollaborator> resultDelete = new ArrayList<>();
        List<InscriptionCollaborator> resultUpdateOrSave = new ArrayList<>();
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

    private void extractToBeSaveOrDelete(List<InscriptionCollaborator> oldList, List<InscriptionCollaborator> newList, List<InscriptionCollaborator> resultUpdateOrSave, List<InscriptionCollaborator> resultDelete) {
		for (int i = 0; i < oldList.size(); i++) {
                InscriptionCollaborator myOld = oldList.get(i);
                InscriptionCollaborator t = newList.stream().filter(e -> myOld.equals(e)).findFirst().orElse(null);
                if (t != null) {
                    resultUpdateOrSave.add(t); // update
                } else {
                    resultDelete.add(myOld);
                }
            }
            for (int i = 0; i < newList.size(); i++) {
                InscriptionCollaborator myNew = newList.get(i);
                InscriptionCollaborator t = oldList.stream().filter(e -> myNew.equals(e)).findFirst().orElse(null);
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
    private CollaboratorAgentService collaboratorService ;
    @Autowired
    private PackagingPlanAgentService packagingPlanService ;
    @Autowired
    private InscriptionCollaboratorStateAgentService inscriptionCollaboratorStateService ;

    public InscriptionCollaboratorAgentServiceImpl(InscriptionCollaboratorDao dao) {
        this.dao = dao;
    }

    private InscriptionCollaboratorDao dao;
}
