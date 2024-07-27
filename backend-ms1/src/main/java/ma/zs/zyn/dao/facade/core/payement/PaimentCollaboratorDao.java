package ma.zs.zyn.dao.facade.core.payement;

import org.springframework.data.jpa.repository.Query;
import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.payement.PaimentCollaborator;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface PaimentCollaboratorDao extends AbstractRepository<PaimentCollaborator,Long>  {

    List<PaimentCollaborator> findByCountryId(Long id);
    int deleteByCountryId(Long id);
    long countByCountryCode(String code);
    List<PaimentCollaborator> findByCityId(Long id);
    int deleteByCityId(Long id);
    long countByCityCode(String code);
    List<PaimentCollaborator> findByCollaboratorId(Long id);
    int deleteByCollaboratorId(Long id);
    long countByCollaboratorId(Long id);
    List<PaimentCollaborator> findByPackagingId(Long id);
    int deleteByPackagingId(Long id);
    long countByPackagingCode(String code);
    List<PaimentCollaborator> findByPaimentCollaboratorStateCode(String code);
            public int deleteByPaimentCollaboratorStateCode(String code);
    long countByPaimentCollaboratorStateCode(String code);
    List<PaimentCollaborator> findByPaimentCollaboratorTypeCode(String code);
            public int deleteByPaimentCollaboratorTypeCode(String code);
    long countByPaimentCollaboratorTypeCode(String code);
    List<PaimentCollaborator> findByInscriptionCollaboratorId(Long id);
    int deleteByInscriptionCollaboratorId(Long id);
    long countByInscriptionCollaboratorId(Long id);
    List<PaimentCollaborator> findByCouponId(Long id);
    int deleteByCouponId(Long id);
    long countByCouponCode(String code);
    List<PaimentCollaborator> findByOffreCloudProviderId(Long id);
    int deleteByOffreCloudProviderId(Long id);
    long countByOffreCloudProviderCode(String code);

    @Query("SELECT NEW PaimentCollaborator(item.id,item.cardNumber) FROM PaimentCollaborator item")
    List<PaimentCollaborator> findAllOptimized();

}
