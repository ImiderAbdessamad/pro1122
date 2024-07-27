package ma.zs.zyn.service.facade.admin.packaging;

import java.util.List;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailGroupCriteria;
import ma.zs.zyn.zynerator.service.IService;



public interface PackagingDetailGroupAdminService {







	PackagingDetailGroup create(PackagingDetailGroup t);

    PackagingDetailGroup update(PackagingDetailGroup t);

    List<PackagingDetailGroup> update(List<PackagingDetailGroup> ts,boolean createIfNotExist);

    PackagingDetailGroup findById(Long id);

    PackagingDetailGroup findOrSave(PackagingDetailGroup t);

    PackagingDetailGroup findByReferenceEntity(PackagingDetailGroup t);

    PackagingDetailGroup findWithAssociatedLists(Long id);

    List<PackagingDetailGroup> findAllOptimized();

    List<PackagingDetailGroup> findAll();

    List<PackagingDetailGroup> findByCriteria(PackagingDetailGroupCriteria criteria);

    List<PackagingDetailGroup> findPaginatedByCriteria(PackagingDetailGroupCriteria criteria, int page, int pageSize, String order, String sortField);

    int getDataSize(PackagingDetailGroupCriteria criteria);

    List<PackagingDetailGroup> delete(List<PackagingDetailGroup> ts);

    boolean deleteById(Long id);

    List<List<PackagingDetailGroup>> getToBeSavedAndToBeDeleted(List<PackagingDetailGroup> oldList, List<PackagingDetailGroup> newList);

    public String uploadFile(String checksumOld, String tempUpladedFile,String destinationFilePath) throws Exception ;

}
