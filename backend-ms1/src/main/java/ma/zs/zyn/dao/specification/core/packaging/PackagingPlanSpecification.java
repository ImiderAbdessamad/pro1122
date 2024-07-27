package  ma.zs.zyn.dao.specification.core.packaging;

import ma.zs.zyn.dao.criteria.core.packaging.PackagingPlanCriteria;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.zynerator.specification.AbstractSpecification;


public class PackagingPlanSpecification extends  AbstractSpecification<PackagingPlanCriteria, PackagingPlan>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("name", criteria.getName(),criteria.getNameLike());
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
        addPredicateInt("numberOfMonth", criteria.getNumberOfMonth(), criteria.getNumberOfMonthMin(), criteria.getNumberOfMonthMax());
        addPredicateBigDecimal("price", criteria.getPrice(), criteria.getPriceMin(), criteria.getPriceMax());
        addPredicateBigDecimal("maxEntity", criteria.getMaxEntity(), criteria.getMaxEntityMin(), criteria.getMaxEntityMax());
        addPredicateBigDecimal("maxProjet", criteria.getMaxProjet(), criteria.getMaxProjetMin(), criteria.getMaxProjetMax());
        addPredicateBigDecimal("maxAttribut", criteria.getMaxAttribut(), criteria.getMaxAttributMin(), criteria.getMaxAttributMax());
        addPredicateBigDecimal("maxTokenInput", criteria.getMaxTokenInput(), criteria.getMaxTokenInputMin(), criteria.getMaxTokenInputMax());
        addPredicateBigDecimal("maxTokenOutput", criteria.getMaxTokenOutput(), criteria.getMaxTokenOutputMin(), criteria.getMaxTokenOutputMax());
        addPredicateFk("packaging","id", criteria.getPackaging()==null?null:criteria.getPackaging().getId());
        addPredicateFk("packaging","id", criteria.getPackagings());
        addPredicateFk("packaging","code", criteria.getPackaging()==null?null:criteria.getPackaging().getCode());
    }

    public PackagingPlanSpecification(PackagingPlanCriteria criteria) {
        super(criteria);
    }

    public PackagingPlanSpecification(PackagingPlanCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
