package ma.zs.zyn.service.facade.influencer.packaging;

import java.util.List;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingPlanCriteria;
import ma.zs.zyn.zynerator.service.IService;



public interface PackagingPlanInfluencerService {



    List<PackagingPlan> findByPackagingId(Long id);
    int deleteByPackagingId(Long id);
    long countByPackagingCode(String code);




	PackagingPlan create(PackagingPlan t);

    PackagingPlan update(PackagingPlan t);

    List<PackagingPlan> update(List<PackagingPlan> ts,boolean createIfNotExist);

    PackagingPlan findById(Long id);

    PackagingPlan findOrSave(PackagingPlan t);

    PackagingPlan findByReferenceEntity(PackagingPlan t);

    PackagingPlan findWithAssociatedLists(Long id);

    List<PackagingPlan> findAllOptimized();

    List<PackagingPlan> findAll();

    List<PackagingPlan> findByCriteria(PackagingPlanCriteria criteria);

    List<PackagingPlan> findPaginatedByCriteria(PackagingPlanCriteria criteria, int page, int pageSize, String order, String sortField);

    int getDataSize(PackagingPlanCriteria criteria);

    List<PackagingPlan> delete(List<PackagingPlan> ts);

    boolean deleteById(Long id);

    List<List<PackagingPlan>> getToBeSavedAndToBeDeleted(List<PackagingPlan> oldList, List<PackagingPlan> newList);

    public String uploadFile(String checksumOld, String tempUpladedFile,String destinationFilePath) throws Exception ;

}
