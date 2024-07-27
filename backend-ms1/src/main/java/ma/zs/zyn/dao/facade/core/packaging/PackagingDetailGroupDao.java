package ma.zs.zyn.dao.facade.core.packaging;

import org.springframework.data.jpa.repository.Query;
import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import org.springframework.stereotype.Repository;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import java.util.List;


@Repository
public interface PackagingDetailGroupDao extends AbstractRepository<PackagingDetailGroup,Long>  {
    PackagingDetailGroup findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW PackagingDetailGroup(item.id,item.libelle) FROM PackagingDetailGroup item")
    List<PackagingDetailGroup> findAllOptimized();

}
