package ma.zs.zyn.dao.facade.core.contactus;

import org.springframework.data.jpa.repository.Query;
import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.contactus.ContactUsCategory;
import org.springframework.stereotype.Repository;
import ma.zs.zyn.bean.core.contactus.ContactUsCategory;
import java.util.List;


@Repository
public interface ContactUsCategoryDao extends AbstractRepository<ContactUsCategory,Long>  {
    ContactUsCategory findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW ContactUsCategory(item.id,item.libelle) FROM ContactUsCategory item")
    List<ContactUsCategory> findAllOptimized();

}
