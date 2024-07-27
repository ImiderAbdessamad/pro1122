package ma.zs.zyn.service.facade.agent.packaging;

import java.util.List;
import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailCriteria;
import ma.zs.zyn.zynerator.service.IService;



public interface PackagingDetailAgentService {



    List<PackagingDetail> findByPackagingId(Long id);
    int deleteByPackagingId(Long id);
    long countByPackagingCode(String code);
    List<PackagingDetail> findByPackagingDetailGroupId(Long id);
    int deleteByPackagingDetailGroupId(Long id);
    long countByPackagingDetailGroupCode(String code);




	PackagingDetail create(PackagingDetail t);

    PackagingDetail update(PackagingDetail t);

    List<PackagingDetail> update(List<PackagingDetail> ts,boolean createIfNotExist);

    PackagingDetail findById(Long id);

    PackagingDetail findOrSave(PackagingDetail t);

    PackagingDetail findByReferenceEntity(PackagingDetail t);

    PackagingDetail findWithAssociatedLists(Long id);

    List<PackagingDetail> findAllOptimized();

    List<PackagingDetail> findAll();

    List<PackagingDetail> findByCriteria(PackagingDetailCriteria criteria);

    List<PackagingDetail> findPaginatedByCriteria(PackagingDetailCriteria criteria, int page, int pageSize, String order, String sortField);

    int getDataSize(PackagingDetailCriteria criteria);

    List<PackagingDetail> delete(List<PackagingDetail> ts);

    boolean deleteById(Long id);

    List<List<PackagingDetail>> getToBeSavedAndToBeDeleted(List<PackagingDetail> oldList, List<PackagingDetail> newList);

    public String uploadFile(String checksumOld, String tempUpladedFile,String destinationFilePath) throws Exception ;

}
