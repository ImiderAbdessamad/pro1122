package ma.zs.zyn.service.impl.open.payement;


import ma.zs.zyn.zynerator.exception.EntityNotFoundException;
import ma.zs.zyn.bean.core.payement.PaimentCollaborator;
import ma.zs.zyn.dao.criteria.core.payement.PaimentCollaboratorCriteria;
import ma.zs.zyn.dao.facade.core.payement.PaimentCollaboratorDao;
import ma.zs.zyn.dao.specification.core.payement.PaimentCollaboratorSpecification;
import ma.zs.zyn.service.facade.open.payement.PaimentCollaboratorOpenService;
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

import ma.zs.zyn.service.facade.open.collaborator.CollaboratorOpenService ;
import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.service.facade.open.coupon.CouponOpenService ;
import ma.zs.zyn.bean.core.coupon.Coupon ;
import ma.zs.zyn.service.facade.open.cloud.OffreCloudProviderOpenService ;
import ma.zs.zyn.bean.core.cloud.OffreCloudProvider ;
import ma.zs.zyn.service.facade.open.payement.PaimentCollaboratorStateOpenService ;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorState ;
import ma.zs.zyn.service.facade.open.payement.PaimentCollaboratorTypeOpenService ;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType ;
import ma.zs.zyn.service.facade.open.packaging.PackagingOpenService ;
import ma.zs.zyn.bean.core.packaging.Packaging ;
import ma.zs.zyn.service.facade.open.collaborator.CountryOpenService ;
import ma.zs.zyn.bean.core.collaborator.Country ;
import ma.zs.zyn.service.facade.open.collaborator.CityOpenService ;
import ma.zs.zyn.bean.core.collaborator.City ;
import ma.zs.zyn.service.facade.open.inscription.InscriptionCollaboratorOpenService ;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator ;

import java.util.List;
@Service
public class PaimentCollaboratorOpenServiceImpl implements PaimentCollaboratorOpenService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PaimentCollaborator update(PaimentCollaborator t) {
        PaimentCollaborator loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{PaimentCollaborator.class.getSimpleName(), t.getId().toString()});
        } else {
            dao.save(t);
            return loadedItem;
        }
    }

    public PaimentCollaborator findById(Long id) {
        return dao.findById(id).orElse(null);
    }


    public PaimentCollaborator findOrSave(PaimentCollaborator t) {
        if (t != null) {
            findOrSaveAssociatedObject(t);
            PaimentCollaborator result = findByReferenceEntity(t);
            if (result == null) {
                return dao.save(t);
            } else {
                return result;
            }
        }
        return null;
    }

    public List<PaimentCollaborator> findAll() {
        return dao.findAll();
    }

    public List<PaimentCollaborator> findByCriteria(PaimentCollaboratorCriteria criteria) {
        List<PaimentCollaborator> content = null;
        if (criteria != null) {
            PaimentCollaboratorSpecification mySpecification = constructSpecification(criteria);
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


    private PaimentCollaboratorSpecification constructSpecification(PaimentCollaboratorCriteria criteria) {
        PaimentCollaboratorSpecification mySpecification =  (PaimentCollaboratorSpecification) RefelexivityUtil.constructObjectUsingOneParam(PaimentCollaboratorSpecification.class, criteria);
        return mySpecification;
    }

    public List<PaimentCollaborator> findPaginatedByCriteria(PaimentCollaboratorCriteria criteria, int page, int pageSize, String order, String sortField) {
        PaimentCollaboratorSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(PaimentCollaboratorCriteria criteria) {
        PaimentCollaboratorSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    public List<PaimentCollaborator> findByCountryId(Long id){
        return dao.findByCountryId(id);
    }
    public int deleteByCountryId(Long id){
        return dao.deleteByCountryId(id);
    }
    public long countByCountryCode(String code){
        return dao.countByCountryCode(code);
    }
    public List<PaimentCollaborator> findByCityId(Long id){
        return dao.findByCityId(id);
    }
    public int deleteByCityId(Long id){
        return dao.deleteByCityId(id);
    }
    public long countByCityCode(String code){
        return dao.countByCityCode(code);
    }
    public List<PaimentCollaborator> findByCollaboratorId(Long id){
        return dao.findByCollaboratorId(id);
    }
    public int deleteByCollaboratorId(Long id){
        return dao.deleteByCollaboratorId(id);
    }
    public long countByCollaboratorId(Long id){
        return dao.countByCollaboratorId(id);
    }
    public List<PaimentCollaborator> findByPackagingId(Long id){
        return dao.findByPackagingId(id);
    }
    public int deleteByPackagingId(Long id){
        return dao.deleteByPackagingId(id);
    }
    public long countByPackagingCode(String code){
        return dao.countByPackagingCode(code);
    }
    public List<PaimentCollaborator> findByPaimentCollaboratorStateCode(String code){
        return dao.findByPaimentCollaboratorStateCode(code);
    }
    public int deleteByPaimentCollaboratorStateCode(String code){
        return dao.deleteByPaimentCollaboratorStateCode(code);
    }
    public long countByPaimentCollaboratorStateCode(String code){
        return dao.countByPaimentCollaboratorStateCode(code);
    }
    public List<PaimentCollaborator> findByPaimentCollaboratorTypeCode(String code){
        return dao.findByPaimentCollaboratorTypeCode(code);
    }
    public int deleteByPaimentCollaboratorTypeCode(String code){
        return dao.deleteByPaimentCollaboratorTypeCode(code);
    }
    public long countByPaimentCollaboratorTypeCode(String code){
        return dao.countByPaimentCollaboratorTypeCode(code);
    }
    public List<PaimentCollaborator> findByInscriptionCollaboratorId(Long id){
        return dao.findByInscriptionCollaboratorId(id);
    }
    public int deleteByInscriptionCollaboratorId(Long id){
        return dao.deleteByInscriptionCollaboratorId(id);
    }
    public long countByInscriptionCollaboratorId(Long id){
        return dao.countByInscriptionCollaboratorId(id);
    }
    public List<PaimentCollaborator> findByCouponId(Long id){
        return dao.findByCouponId(id);
    }
    public int deleteByCouponId(Long id){
        return dao.deleteByCouponId(id);
    }
    public long countByCouponCode(String code){
        return dao.countByCouponCode(code);
    }
    public List<PaimentCollaborator> findByOffreCloudProviderId(Long id){
        return dao.findByOffreCloudProviderId(id);
    }
    public int deleteByOffreCloudProviderId(Long id){
        return dao.deleteByOffreCloudProviderId(id);
    }
    public long countByOffreCloudProviderCode(String code){
        return dao.countByOffreCloudProviderCode(code);
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
    public List<PaimentCollaborator> delete(List<PaimentCollaborator> list) {
		List<PaimentCollaborator> result = new ArrayList();
        if (list != null) {
            for (PaimentCollaborator t : list) {
                if(dao.findById(t.getId()).isEmpty()){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public PaimentCollaborator create(PaimentCollaborator t) {
        PaimentCollaborator loaded = findByReferenceEntity(t);
        PaimentCollaborator saved;
        if (loaded == null) {
            saved = dao.save(t);
        }else {
            saved = null;
        }
        return saved;
    }

    public PaimentCollaborator findWithAssociatedLists(Long id){
        PaimentCollaborator result = dao.findById(id).orElse(null);
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<PaimentCollaborator> update(List<PaimentCollaborator> ts, boolean createIfNotExist) {
        List<PaimentCollaborator> result = new ArrayList<>();
        if (ts != null) {
            for (PaimentCollaborator t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    PaimentCollaborator loadedItem = dao.findById(t.getId()).orElse(null);
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


    private boolean isEligibleForCreateOrUpdate(boolean createIfNotExist, PaimentCollaborator t, PaimentCollaborator loadedItem) {
        boolean eligibleForCreateCrud = t.getId() == null;
        boolean eligibleForCreate = (createIfNotExist && (t.getId() == null || loadedItem == null));
        boolean eligibleForUpdate = (t.getId() != null && loadedItem != null);
        return (eligibleForCreateCrud || eligibleForCreate || eligibleForUpdate);
    }









    public PaimentCollaborator findByReferenceEntity(PaimentCollaborator t) {
        return t == null || t.getId() == null ? null : findById(t.getId());
    }
    public void findOrSaveAssociatedObject(PaimentCollaborator t){
        if( t != null) {
            t.setPackaging(packagingService.findOrSave(t.getPackaging()));
        }
    }



    public List<PaimentCollaborator> findAllOptimized() {
        return dao.findAllOptimized();
    }

    @Override
    public List<List<PaimentCollaborator>> getToBeSavedAndToBeDeleted(List<PaimentCollaborator> oldList, List<PaimentCollaborator> newList) {
        List<List<PaimentCollaborator>> result = new ArrayList<>();
        List<PaimentCollaborator> resultDelete = new ArrayList<>();
        List<PaimentCollaborator> resultUpdateOrSave = new ArrayList<>();
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

    private void extractToBeSaveOrDelete(List<PaimentCollaborator> oldList, List<PaimentCollaborator> newList, List<PaimentCollaborator> resultUpdateOrSave, List<PaimentCollaborator> resultDelete) {
		for (int i = 0; i < oldList.size(); i++) {
                PaimentCollaborator myOld = oldList.get(i);
                PaimentCollaborator t = newList.stream().filter(e -> myOld.equals(e)).findFirst().orElse(null);
                if (t != null) {
                    resultUpdateOrSave.add(t); // update
                } else {
                    resultDelete.add(myOld);
                }
            }
            for (int i = 0; i < newList.size(); i++) {
                PaimentCollaborator myNew = newList.get(i);
                PaimentCollaborator t = oldList.stream().filter(e -> myNew.equals(e)).findFirst().orElse(null);
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
    private CollaboratorOpenService collaboratorService ;
    @Autowired
    private CouponOpenService couponService ;
    @Autowired
    private OffreCloudProviderOpenService offreCloudProviderService ;
    @Autowired
    private PaimentCollaboratorStateOpenService paimentCollaboratorStateService ;
    @Autowired
    private PaimentCollaboratorTypeOpenService paimentCollaboratorTypeService ;
    @Autowired
    private PackagingOpenService packagingService ;
    @Autowired
    private CountryOpenService countryService ;
    @Autowired
    private CityOpenService cityService ;
    @Autowired
    private InscriptionCollaboratorOpenService inscriptionCollaboratorService ;

    public PaimentCollaboratorOpenServiceImpl(PaimentCollaboratorDao dao) {
        this.dao = dao;
    }

    private PaimentCollaboratorDao dao;
}
