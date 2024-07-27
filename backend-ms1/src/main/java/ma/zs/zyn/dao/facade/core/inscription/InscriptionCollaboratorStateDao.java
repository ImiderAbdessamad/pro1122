package ma.zs.zyn.dao.facade.core.inscription;

import org.springframework.data.jpa.repository.Query;
import ma.zs.zyn.zynerator.repository.AbstractRepository;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState;
import org.springframework.stereotype.Repository;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState;
import java.util.List;


@Repository
public interface InscriptionCollaboratorStateDao extends AbstractRepository<InscriptionCollaboratorState,Long>  {
    InscriptionCollaboratorState findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW InscriptionCollaboratorState(item.id,item.libelle) FROM InscriptionCollaboratorState item")
    List<InscriptionCollaboratorState> findAllOptimized();

}
