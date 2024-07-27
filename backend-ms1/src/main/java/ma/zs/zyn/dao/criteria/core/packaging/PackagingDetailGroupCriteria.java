package  ma.zs.zyn.dao.criteria.core.packaging;



import ma.zs.zyn.zynerator.criteria.BaseCriteria;

import java.util.List;

public class PackagingDetailGroupCriteria extends  BaseCriteria  {

    private String code;
    private String codeLike;
    private String libelle;
    private String libelleLike;
    private Boolean seeMore;



    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getCodeLike(){
        return this.codeLike;
    }
    public void setCodeLike(String codeLike){
        this.codeLike = codeLike;
    }

    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getLibelleLike(){
        return this.libelleLike;
    }
    public void setLibelleLike(String libelleLike){
        this.libelleLike = libelleLike;
    }

    public Boolean getSeeMore(){
        return this.seeMore;
    }
    public void setSeeMore(Boolean seeMore){
        this.seeMore = seeMore;
    }

}
