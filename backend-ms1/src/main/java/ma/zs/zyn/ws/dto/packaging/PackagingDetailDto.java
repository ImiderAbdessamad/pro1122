package  ma.zs.zyn.ws.dto.packaging;

import ma.zs.zyn.zynerator.audit.Log;
import ma.zs.zyn.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class PackagingDetailDto  extends AuditBaseDto {

    private String name  ;
    private Boolean exist  ;
    private String description  ;

    private PackagingDto packaging ;
    private PackagingDetailGroupDto packagingDetailGroup ;



    public PackagingDetailDto(){
        super();
    }



    @Log
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }

    @Log
    public Boolean getExist(){
        return this.exist;
    }
    public void setExist(Boolean exist){
        this.exist = exist;
    }

    @Log
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }


    public PackagingDto getPackaging(){
        return this.packaging;
    }

    public void setPackaging(PackagingDto packaging){
        this.packaging = packaging;
    }
    public PackagingDetailGroupDto getPackagingDetailGroup(){
        return this.packagingDetailGroup;
    }

    public void setPackagingDetailGroup(PackagingDetailGroupDto packagingDetailGroup){
        this.packagingDetailGroup = packagingDetailGroup;
    }






}
