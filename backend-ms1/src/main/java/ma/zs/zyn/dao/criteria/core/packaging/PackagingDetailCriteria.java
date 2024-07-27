package  ma.zs.zyn.dao.criteria.core.packaging;



import ma.zs.zyn.zynerator.criteria.BaseCriteria;

import java.util.List;

public class PackagingDetailCriteria extends  BaseCriteria  {

    private String name;
    private String nameLike;
    private Boolean exist;
    private String description;
    private String descriptionLike;

    private PackagingCriteria packaging ;
    private List<PackagingCriteria> packagings ;
    private PackagingDetailGroupCriteria packagingDetailGroup ;
    private List<PackagingDetailGroupCriteria> packagingDetailGroups ;


    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getNameLike(){
        return this.nameLike;
    }
    public void setNameLike(String nameLike){
        this.nameLike = nameLike;
    }

    public Boolean getExist(){
        return this.exist;
    }
    public void setExist(Boolean exist){
        this.exist = exist;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescriptionLike(){
        return this.descriptionLike;
    }
    public void setDescriptionLike(String descriptionLike){
        this.descriptionLike = descriptionLike;
    }


    public PackagingCriteria getPackaging(){
        return this.packaging;
    }

    public void setPackaging(PackagingCriteria packaging){
        this.packaging = packaging;
    }
    public List<PackagingCriteria> getPackagings(){
        return this.packagings;
    }

    public void setPackagings(List<PackagingCriteria> packagings){
        this.packagings = packagings;
    }
    public PackagingDetailGroupCriteria getPackagingDetailGroup(){
        return this.packagingDetailGroup;
    }

    public void setPackagingDetailGroup(PackagingDetailGroupCriteria packagingDetailGroup){
        this.packagingDetailGroup = packagingDetailGroup;
    }
    public List<PackagingDetailGroupCriteria> getPackagingDetailGroups(){
        return this.packagingDetailGroups;
    }

    public void setPackagingDetailGroups(List<PackagingDetailGroupCriteria> packagingDetailGroups){
        this.packagingDetailGroups = packagingDetailGroups;
    }
}
