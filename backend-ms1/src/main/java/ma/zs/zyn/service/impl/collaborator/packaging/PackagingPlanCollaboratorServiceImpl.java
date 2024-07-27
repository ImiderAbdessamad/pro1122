package ma.zs.zyn.service.impl.collaborator.packaging;


import ma.zs.zyn.zynerator.exception.EntityNotFoundException;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingPlanCriteria;
import ma.zs.zyn.dao.facade.core.packaging.PackagingPlanDao;
import ma.zs.zyn.dao.specification.core.packaging.PackagingPlanSpecification;
import ma.zs.zyn.service.facade.collaborator.packaging.PackagingPlanCollaboratorService;
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

import ma.zs.zyn.service.facade.collaborator.packaging.PackagingCollaboratorService ;
import ma.zs.zyn.bean.core.packaging.Packaging ;

import java.util.List;
@Service
public class PackagingPlanCollaboratorServiceImpl implements PackagingPlanCollaboratorService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PackagingPlan update(PackagingPlan t) {
        PackagingPlan loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{PackagingPlan.class.getSimpleName(), t.getId().toString()});
        } else {
            dao.save(t);
            return loadedItem;
        }
    }

    public PackagingPlan findById(Long id) {
        return dao.findById(id).orElse(null);
    }


    public PackagingPlan findOrSave(PackagingPlan t) {
        if (t != null) {
            findOrSaveAssociatedObject(t);
            PackagingPlan result = findByReferenceEntity(t);
            if (result == null) {
                return dao.save(t);
            } else {
                return result;
            }
        }
        return null;
    }

    public List<PackagingPlan> findAll() {
        return dao.findAll();
    }

    public List<PackagingPlan> findByCriteria(PackagingPlanCriteria criteria) {
        List<PackagingPlan> content = null;
        if (criteria != null) {
            PackagingPlanSpecification mySpecification = constructSpecification(criteria);
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


    private PackagingPlanSpecification constructSpecification(PackagingPlanCriteria criteria) {
        PackagingPlanSpecification mySpecification =  (PackagingPlanSpecification) RefelexivityUtil.constructObjectUsingOneParam(PackagingPlanSpecification.class, criteria);
        return mySpecification;
    }

    public List<PackagingPlan> findPaginatedByCriteria(PackagingPlanCriteria criteria, int page, int pageSize, String order, String sortField) {
        PackagingPlanSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(PackagingPlanCriteria criteria) {
        PackagingPlanSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    public List<PackagingPlan> findByPackagingId(Long id){
        return dao.findByPackagingId(id);
    }
    public int deleteByPackagingId(Long id){
        return dao.deleteByPackagingId(id);
    }
    public long countByPackagingCode(String code){
        return dao.countByPackagingCode(code);
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
    public List<PackagingPlan> delete(List<PackagingPlan> list) {
		List<PackagingPlan> result = new ArrayList();
        if (list != null) {
            for (PackagingPlan t : list) {
                if(dao.findById(t.getId()).isEmpty()){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PackagingPlan create(PackagingPlan t) {
        PackagingPlan loaded = findByReferenceEntity(t);
        PackagingPlan saved;
        if (loaded == null) {
            saved = dao.save(t);
        }else {
            saved = null;
        }
        return saved;
    }

    public PackagingPlan findWithAssociatedLists(Long id){
        PackagingPlan result = dao.findById(id).orElse(null);
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<PackagingPlan> update(List<PackagingPlan> ts, boolean createIfNotExist) {
        List<PackagingPlan> result = new ArrayList<>();
        if (ts != null) {
            for (PackagingPlan t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    PackagingPlan loadedItem = dao.findById(t.getId()).orElse(null);
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


    private boolean isEligibleForCreateOrUpdate(boolean createIfNotExist, PackagingPlan t, PackagingPlan loadedItem) {
        boolean eligibleForCreateCrud = t.getId() == null;
        boolean eligibleForCreate = (createIfNotExist && (t.getId() == null || loadedItem == null));
        boolean eligibleForUpdate = (t.getId() != null && loadedItem != null);
        return (eligibleForCreateCrud || eligibleForCreate || eligibleForUpdate);
    }









    public PackagingPlan findByReferenceEntity(PackagingPlan t){
        return t==null? null : dao.findByCode(t.getCode());
    }
    public void findOrSaveAssociatedObject(PackagingPlan t){
        if( t != null) {
            t.setPackaging(packagingService.findOrSave(t.getPackaging()));
        }
    }



    public List<PackagingPlan> findAllOptimized() {
        return dao.findAllOptimized();
    }

    @Override
    public List<List<PackagingPlan>> getToBeSavedAndToBeDeleted(List<PackagingPlan> oldList, List<PackagingPlan> newList) {
        List<List<PackagingPlan>> result = new ArrayList<>();
        List<PackagingPlan> resultDelete = new ArrayList<>();
        List<PackagingPlan> resultUpdateOrSave = new ArrayList<>();
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

    private void extractToBeSaveOrDelete(List<PackagingPlan> oldList, List<PackagingPlan> newList, List<PackagingPlan> resultUpdateOrSave, List<PackagingPlan> resultDelete) {
		for (int i = 0; i < oldList.size(); i++) {
                PackagingPlan myOld = oldList.get(i);
                PackagingPlan t = newList.stream().filter(e -> myOld.equals(e)).findFirst().orElse(null);
                if (t != null) {
                    resultUpdateOrSave.add(t); // update
                } else {
                    resultDelete.add(myOld);
                }
            }
            for (int i = 0; i < newList.size(); i++) {
                PackagingPlan myNew = newList.get(i);
                PackagingPlan t = oldList.stream().filter(e -> myNew.equals(e)).findFirst().orElse(null);
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
    private PackagingCollaboratorService packagingService ;

    public PackagingPlanCollaboratorServiceImpl(PackagingPlanDao dao) {
        this.dao = dao;
    }

    private PackagingPlanDao dao;
}
