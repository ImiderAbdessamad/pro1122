package ma.zs.zyn.dao.facade.core.inscription;

import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface InscriptionCollaboratorDao extends AbstractRepository<InscriptionCollaborator,Long>  {

    List<InscriptionCollaborator> findByCollaboratorId(Long id);
    int deleteByCollaboratorId(Long id);
    long countByCollaboratorId(Long id);
    List<InscriptionCollaborator> findByPackagingPlanId(Long id);
    int deleteByPackagingPlanId(Long id);
    long countByPackagingPlanCode(String code);
    List<InscriptionCollaborator> findByInscriptionCollaboratorStateCode(String code);
            public int deleteByInscriptionCollaboratorStateCode(String code);
    long countByInscriptionCollaboratorStateCode(String code);


}
