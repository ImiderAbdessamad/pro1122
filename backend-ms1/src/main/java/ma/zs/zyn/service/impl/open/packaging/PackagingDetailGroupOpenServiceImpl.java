package ma.zs.zyn.service.impl.open.packaging;


import ma.zs.zyn.zynerator.exception.EntityNotFoundException;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailGroupCriteria;
import ma.zs.zyn.dao.facade.core.packaging.PackagingDetailGroupDao;
import ma.zs.zyn.dao.specification.core.packaging.PackagingDetailGroupSpecification;
import ma.zs.zyn.service.facade.open.packaging.PackagingDetailGroupOpenService;
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


import java.util.List;
@Service
public class PackagingDetailGroupOpenServiceImpl implements PackagingDetailGroupOpenService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PackagingDetailGroup update(PackagingDetailGroup t) {
        PackagingDetailGroup loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{PackagingDetailGroup.class.getSimpleName(), t.getId().toString()});
        } else {
            dao.save(t);
            return loadedItem;
        }
    }

    public PackagingDetailGroup findById(Long id) {
        return dao.findById(id).orElse(null);
    }


    public PackagingDetailGroup findOrSave(PackagingDetailGroup t) {
        if (t != null) {
            PackagingDetailGroup result = findByReferenceEntity(t);
            if (result == null) {
                return dao.save(t);
            } else {
                return result;
            }
        }
        return null;
    }

    public List<PackagingDetailGroup> findAll() {
        return dao.findAll();
    }

    public List<PackagingDetailGroup> findByCriteria(PackagingDetailGroupCriteria criteria) {
        List<PackagingDetailGroup> content = null;
        if (criteria != null) {
            PackagingDetailGroupSpecification mySpecification = constructSpecification(criteria);
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


    private PackagingDetailGroupSpecification constructSpecification(PackagingDetailGroupCriteria criteria) {
        PackagingDetailGroupSpecification mySpecification =  (PackagingDetailGroupSpecification) RefelexivityUtil.constructObjectUsingOneParam(PackagingDetailGroupSpecification.class, criteria);
        return mySpecification;
    }

    public List<PackagingDetailGroup> findPaginatedByCriteria(PackagingDetailGroupCriteria criteria, int page, int pageSize, String order, String sortField) {
        PackagingDetailGroupSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(PackagingDetailGroupCriteria criteria) {
        PackagingDetailGroupSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
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
    public List<PackagingDetailGroup> delete(List<PackagingDetailGroup> list) {
		List<PackagingDetailGroup> result = new ArrayList();
        if (list != null) {
            for (PackagingDetailGroup t : list) {
                if(dao.findById(t.getId()).isEmpty()){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PackagingDetailGroup create(PackagingDetailGroup t) {
        PackagingDetailGroup loaded = findByReferenceEntity(t);
        PackagingDetailGroup saved;
        if (loaded == null) {
            saved = dao.save(t);
        }else {
            saved = null;
        }
        return saved;
    }

    public PackagingDetailGroup findWithAssociatedLists(Long id){
        PackagingDetailGroup result = dao.findById(id).orElse(null);
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<PackagingDetailGroup> update(List<PackagingDetailGroup> ts, boolean createIfNotExist) {
        List<PackagingDetailGroup> result = new ArrayList<>();
        if (ts != null) {
            for (PackagingDetailGroup t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    PackagingDetailGroup loadedItem = dao.findById(t.getId()).orElse(null);
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


    private boolean isEligibleForCreateOrUpdate(boolean createIfNotExist, PackagingDetailGroup t, PackagingDetailGroup loadedItem) {
        boolean eligibleForCreateCrud = t.getId() == null;
        boolean eligibleForCreate = (createIfNotExist && (t.getId() == null || loadedItem == null));
        boolean eligibleForUpdate = (t.getId() != null && loadedItem != null);
        return (eligibleForCreateCrud || eligibleForCreate || eligibleForUpdate);
    }









    public PackagingDetailGroup findByReferenceEntity(PackagingDetailGroup t){
        return t==null? null : dao.findByCode(t.getCode());
    }



    public List<PackagingDetailGroup> findAllOptimized() {
        return dao.findAllOptimized();
    }

    @Override
    public List<List<PackagingDetailGroup>> getToBeSavedAndToBeDeleted(List<PackagingDetailGroup> oldList, List<PackagingDetailGroup> newList) {
        List<List<PackagingDetailGroup>> result = new ArrayList<>();
        List<PackagingDetailGroup> resultDelete = new ArrayList<>();
        List<PackagingDetailGroup> resultUpdateOrSave = new ArrayList<>();
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

    private void extractToBeSaveOrDelete(List<PackagingDetailGroup> oldList, List<PackagingDetailGroup> newList, List<PackagingDetailGroup> resultUpdateOrSave, List<PackagingDetailGroup> resultDelete) {
		for (int i = 0; i < oldList.size(); i++) {
                PackagingDetailGroup myOld = oldList.get(i);
                PackagingDetailGroup t = newList.stream().filter(e -> myOld.equals(e)).findFirst().orElse(null);
                if (t != null) {
                    resultUpdateOrSave.add(t); // update
                } else {
                    resultDelete.add(myOld);
                }
            }
            for (int i = 0; i < newList.size(); i++) {
                PackagingDetailGroup myNew = newList.get(i);
                PackagingDetailGroup t = oldList.stream().filter(e -> myNew.equals(e)).findFirst().orElse(null);
                if (t == null) {
                    resultUpdateOrSave.add(myNew); // create
                }
            }
	}

    @Override
    public String uploadFile(String checksumOld, String tempUpladedFile, String destinationFilePath) throws Exception {
        return null;
    }








    public PackagingDetailGroupOpenServiceImpl(PackagingDetailGroupDao dao) {
        this.dao = dao;
    }

    private PackagingDetailGroupDao dao;
}
