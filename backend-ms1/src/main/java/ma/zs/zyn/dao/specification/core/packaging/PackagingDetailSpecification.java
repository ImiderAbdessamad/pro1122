package  ma.zs.zyn.dao.specification.core.packaging;

import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailCriteria;
import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.zynerator.specification.AbstractSpecification;


public class PackagingDetailSpecification extends  AbstractSpecification<PackagingDetailCriteria, PackagingDetail>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("name", criteria.getName(),criteria.getNameLike());
        addPredicateBool("exist", criteria.getExist());
        addPredicateFk("packaging","id", criteria.getPackaging()==null?null:criteria.getPackaging().getId());
        addPredicateFk("packaging","id", criteria.getPackagings());
        addPredicateFk("packaging","code", criteria.getPackaging()==null?null:criteria.getPackaging().getCode());
        addPredicateFk("packagingDetailGroup","id", criteria.getPackagingDetailGroup()==null?null:criteria.getPackagingDetailGroup().getId());
        addPredicateFk("packagingDetailGroup","id", criteria.getPackagingDetailGroups());
        addPredicateFk("packagingDetailGroup","code", criteria.getPackagingDetailGroup()==null?null:criteria.getPackagingDetailGroup().getCode());
    }

    public PackagingDetailSpecification(PackagingDetailCriteria criteria) {
        super(criteria);
    }

    public PackagingDetailSpecification(PackagingDetailCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
