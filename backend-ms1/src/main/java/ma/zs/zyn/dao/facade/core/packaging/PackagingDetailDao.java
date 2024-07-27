package ma.zs.zyn.dao.facade.core.packaging;

import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface PackagingDetailDao extends AbstractRepository<PackagingDetail,Long>  {

    List<PackagingDetail> findByPackagingId(Long id);
    int deleteByPackagingId(Long id);
    long countByPackagingCode(String code);
    List<PackagingDetail> findByPackagingDetailGroupId(Long id);
    int deleteByPackagingDetailGroupId(Long id);
    long countByPackagingDetailGroupCode(String code);


}
