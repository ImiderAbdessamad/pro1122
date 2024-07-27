package ma.zs.zyn.dao.facade.core.packaging;

import org.springframework.data.jpa.repository.Query;
import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import org.springframework.stereotype.Repository;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import java.util.List;


@Repository
public interface PackagingPlanDao extends AbstractRepository<PackagingPlan,Long>  {
    PackagingPlan findByCode(String code);
    int deleteByCode(String code);

    List<PackagingPlan> findByPackagingId(Long id);
    int deleteByPackagingId(Long id);
    long countByPackagingCode(String code);

    @Query("SELECT NEW PackagingPlan(item.id,item.code) FROM PackagingPlan item")
    List<PackagingPlan> findAllOptimized();

}
