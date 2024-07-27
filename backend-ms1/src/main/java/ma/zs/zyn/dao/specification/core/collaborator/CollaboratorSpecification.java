package  ma.zs.zyn.dao.specification.core.collaborator;

import ma.zs.zyn.dao.criteria.core.collaborator.CollaboratorCriteria;
import ma.zs.zyn.bean.core.collaborator.Collaborator;
import ma.zs.zyn.zynerator.specification.AbstractSpecification;


public class CollaboratorSpecification extends UserSpecification  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("description", criteria.getDescription(),criteria.getDescriptionLike());
        addPredicate("postal", criteria.getPostal(),criteria.getPostalLike());
        addPredicateBool("credentialsNonExpired", criteria.getCredentialsNonExpired());
        addPredicateBool("enabled", criteria.getEnabled());
        addPredicateBool("accountNonExpired", criteria.getAccountNonExpired());
        addPredicateBool("accountNonLocked", criteria.getAccountNonLocked());
        addPredicateBool("passwordChanged", criteria.getPasswordChanged());
        addPredicate("username", criteria.getUsername(),criteria.getUsernameLike());
        addPredicate("password", criteria.getPassword(),criteria.getPasswordLike());
        addPredicate("avatar", criteria.getAvatar(),criteria.getAvatarLike());
        addPredicate("fullName", criteria.getFullName(),criteria.getFullNameLike());
        addPredicate("about", criteria.getAbout(),criteria.getAboutLike());
        addPredicateFk("country","id", criteria.getCountry()==null?null:criteria.getCountry().getId());
        addPredicateFk("country","id", criteria.getCountrys());
        addPredicateFk("country","code", criteria.getCountry()==null?null:criteria.getCountry().getCode());
        addPredicateFk("city","id", criteria.getCity()==null?null:criteria.getCity().getId());
        addPredicateFk("city","id", criteria.getCitys());
        addPredicateFk("city","code", criteria.getCity()==null?null:criteria.getCity().getCode());
    }

    public CollaboratorSpecification(CollaboratorCriteria criteria) {
        super(criteria);
    }

    public CollaboratorSpecification(CollaboratorCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
