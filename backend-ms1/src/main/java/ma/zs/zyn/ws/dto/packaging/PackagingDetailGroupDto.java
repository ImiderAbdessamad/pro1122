package  ma.zs.zyn.ws.dto.packaging;

import ma.zs.zyn.zynerator.audit.Log;
import ma.zs.zyn.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class PackagingDetailGroupDto  extends AuditBaseDto {

    private String code  ;
    private String libelle  ;
    private Boolean seeMore  ;




    public PackagingDetailGroupDto(){
        super();
    }



    @Log
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }

    @Log
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }

    @Log
    public Boolean getSeeMore(){
        return this.seeMore;
    }
    public void setSeeMore(Boolean seeMore){
        this.seeMore = seeMore;
    }








}
