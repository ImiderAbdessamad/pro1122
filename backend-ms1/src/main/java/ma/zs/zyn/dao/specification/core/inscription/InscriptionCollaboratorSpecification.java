package  ma.zs.zyn.dao.specification.core.inscription;

import ma.zs.zyn.dao.criteria.core.inscription.InscriptionCollaboratorCriteria;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;
import ma.zs.zyn.zynerator.specification.AbstractSpecification;


public class InscriptionCollaboratorSpecification extends  AbstractSpecification<InscriptionCollaboratorCriteria, InscriptionCollaborator>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("startDate", criteria.getStartDate(), criteria.getStartDateFrom(), criteria.getStartDateTo());
        addPredicate("endDate", criteria.getEndDate(), criteria.getEndDateFrom(), criteria.getEndDateTo());
        addPredicateBigDecimal("consumedEntity", criteria.getConsumedEntity(), criteria.getConsumedEntityMin(), criteria.getConsumedEntityMax());
        addPredicateBigDecimal("consumedProjet", criteria.getConsumedProjet(), criteria.getConsumedProjetMin(), criteria.getConsumedProjetMax());
        addPredicateBigDecimal("consumedAttribut", criteria.getConsumedAttribut(), criteria.getConsumedAttributMin(), criteria.getConsumedAttributMax());
        addPredicateBigDecimal("consumedTokenInput", criteria.getConsumedTokenInput(), criteria.getConsumedTokenInputMin(), criteria.getConsumedTokenInputMax());
        addPredicateBigDecimal("consumedTokenOutput", criteria.getConsumedTokenOutput(), criteria.getConsumedTokenOutputMin(), criteria.getConsumedTokenOutputMax());
        addPredicateFk("collaborator","id", criteria.getCollaborator()==null?null:criteria.getCollaborator().getId());
        addPredicateFk("collaborator","id", criteria.getCollaborators());
        addPredicateFk("packagingPlan","id", criteria.getPackagingPlan()==null?null:criteria.getPackagingPlan().getId());
        addPredicateFk("packagingPlan","id", criteria.getPackagingPlans());
        addPredicateFk("packagingPlan","code", criteria.getPackagingPlan()==null?null:criteria.getPackagingPlan().getCode());
        addPredicateFk("inscriptionCollaboratorState","id", criteria.getInscriptionCollaboratorState()==null?null:criteria.getInscriptionCollaboratorState().getId());
        addPredicateFk("inscriptionCollaboratorState","id", criteria.getInscriptionCollaboratorStates());
        addPredicateFk("inscriptionCollaboratorState","code", criteria.getInscriptionCollaboratorState()==null?null:criteria.getInscriptionCollaboratorState().getCode());
    }

    public InscriptionCollaboratorSpecification(InscriptionCollaboratorCriteria criteria) {
        super(criteria);
    }

    public InscriptionCollaboratorSpecification(InscriptionCollaboratorCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
