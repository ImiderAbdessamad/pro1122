package  ma.zs.zyn.dao.specification.core.packaging;

import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailGroupCriteria;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.zynerator.specification.AbstractSpecification;


public class PackagingDetailGroupSpecification extends  AbstractSpecification<PackagingDetailGroupCriteria, PackagingDetailGroup>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
        addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
        addPredicateBool("seeMore", criteria.getSeeMore());
    }

    public PackagingDetailGroupSpecification(PackagingDetailGroupCriteria criteria) {
        super(criteria);
    }

    public PackagingDetailGroupSpecification(PackagingDetailGroupCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
