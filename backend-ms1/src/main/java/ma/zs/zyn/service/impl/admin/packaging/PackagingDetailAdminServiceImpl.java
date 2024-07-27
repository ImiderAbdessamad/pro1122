package ma.zs.zyn.service.impl.admin.packaging;


import ma.zs.zyn.zynerator.exception.EntityNotFoundException;
import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailCriteria;
import ma.zs.zyn.dao.facade.core.packaging.PackagingDetailDao;
import ma.zs.zyn.dao.specification.core.packaging.PackagingDetailSpecification;
import ma.zs.zyn.service.facade.admin.packaging.PackagingDetailAdminService;
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

import ma.zs.zyn.service.facade.admin.packaging.PackagingDetailGroupAdminService ;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup ;
import ma.zs.zyn.service.facade.admin.packaging.PackagingAdminService ;
import ma.zs.zyn.bean.core.packaging.Packaging ;

import java.util.List;
@Service
public class PackagingDetailAdminServiceImpl implements PackagingDetailAdminService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PackagingDetail update(PackagingDetail t) {
        PackagingDetail loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{PackagingDetail.class.getSimpleName(), t.getId().toString()});
        } else {
            dao.save(t);
            return loadedItem;
        }
    }

    public PackagingDetail findById(Long id) {
        return dao.findById(id).orElse(null);
    }


    public PackagingDetail findOrSave(PackagingDetail t) {
        if (t != null) {
            findOrSaveAssociatedObject(t);
            PackagingDetail result = findByReferenceEntity(t);
            if (result == null) {
                return dao.save(t);
            } else {
                return result;
            }
        }
        return null;
    }

    public List<PackagingDetail> findAll() {
        return dao.findAll();
    }

    public List<PackagingDetail> findByCriteria(PackagingDetailCriteria criteria) {
        List<PackagingDetail> content = null;
        if (criteria != null) {
            PackagingDetailSpecification mySpecification = constructSpecification(criteria);
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


    private PackagingDetailSpecification constructSpecification(PackagingDetailCriteria criteria) {
        PackagingDetailSpecification mySpecification =  (PackagingDetailSpecification) RefelexivityUtil.constructObjectUsingOneParam(PackagingDetailSpecification.class, criteria);
        return mySpecification;
    }

    public List<PackagingDetail> findPaginatedByCriteria(PackagingDetailCriteria criteria, int page, int pageSize, String order, String sortField) {
        PackagingDetailSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(PackagingDetailCriteria criteria) {
        PackagingDetailSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    public List<PackagingDetail> findByPackagingId(Long id){
        return dao.findByPackagingId(id);
    }
    public int deleteByPackagingId(Long id){
        return dao.deleteByPackagingId(id);
    }
    public long countByPackagingCode(String code){
        return dao.countByPackagingCode(code);
    }
    public List<PackagingDetail> findByPackagingDetailGroupId(Long id){
        return dao.findByPackagingDetailGroupId(id);
    }
    public int deleteByPackagingDetailGroupId(Long id){
        return dao.deleteByPackagingDetailGroupId(id);
    }
    public long countByPackagingDetailGroupCode(String code){
        return dao.countByPackagingDetailGroupCode(code);
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
    public List<PackagingDetail> delete(List<PackagingDetail> list) {
		List<PackagingDetail> result = new ArrayList();
        if (list != null) {
            for (PackagingDetail t : list) {
                if(dao.findById(t.getId()).isEmpty()){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PackagingDetail create(PackagingDetail t) {
        PackagingDetail loaded = findByReferenceEntity(t);
        PackagingDetail saved;
        if (loaded == null) {
            saved = dao.save(t);
        }else {
            saved = null;
        }
        return saved;
    }

    public PackagingDetail findWithAssociatedLists(Long id){
        PackagingDetail result = dao.findById(id).orElse(null);
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<PackagingDetail> update(List<PackagingDetail> ts, boolean createIfNotExist) {
        List<PackagingDetail> result = new ArrayList<>();
        if (ts != null) {
            for (PackagingDetail t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    PackagingDetail loadedItem = dao.findById(t.getId()).orElse(null);
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


    private boolean isEligibleForCreateOrUpdate(boolean createIfNotExist, PackagingDetail t, PackagingDetail loadedItem) {
        boolean eligibleForCreateCrud = t.getId() == null;
        boolean eligibleForCreate = (createIfNotExist && (t.getId() == null || loadedItem == null));
        boolean eligibleForUpdate = (t.getId() != null && loadedItem != null);
        return (eligibleForCreateCrud || eligibleForCreate || eligibleForUpdate);
    }









    public PackagingDetail findByReferenceEntity(PackagingDetail t) {
        return t == null || t.getId() == null ? null : findById(t.getId());
    }
    public void findOrSaveAssociatedObject(PackagingDetail t){
        if( t != null) {
            t.setPackaging(packagingService.findOrSave(t.getPackaging()));
            t.setPackagingDetailGroup(packagingDetailGroupService.findOrSave(t.getPackagingDetailGroup()));
        }
    }



    public List<PackagingDetail> findAllOptimized() {
        return dao.findAll();
    }

    @Override
    public List<List<PackagingDetail>> getToBeSavedAndToBeDeleted(List<PackagingDetail> oldList, List<PackagingDetail> newList) {
        List<List<PackagingDetail>> result = new ArrayList<>();
        List<PackagingDetail> resultDelete = new ArrayList<>();
        List<PackagingDetail> resultUpdateOrSave = new ArrayList<>();
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

    private void extractToBeSaveOrDelete(List<PackagingDetail> oldList, List<PackagingDetail> newList, List<PackagingDetail> resultUpdateOrSave, List<PackagingDetail> resultDelete) {
		for (int i = 0; i < oldList.size(); i++) {
                PackagingDetail myOld = oldList.get(i);
                PackagingDetail t = newList.stream().filter(e -> myOld.equals(e)).findFirst().orElse(null);
                if (t != null) {
                    resultUpdateOrSave.add(t); // update
                } else {
                    resultDelete.add(myOld);
                }
            }
            for (int i = 0; i < newList.size(); i++) {
                PackagingDetail myNew = newList.get(i);
                PackagingDetail t = oldList.stream().filter(e -> myNew.equals(e)).findFirst().orElse(null);
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
    private PackagingDetailGroupAdminService packagingDetailGroupService ;
    @Autowired
    private PackagingAdminService packagingService ;

    public PackagingDetailAdminServiceImpl(PackagingDetailDao dao) {
        this.dao = dao;
    }

    private PackagingDetailDao dao;
}
