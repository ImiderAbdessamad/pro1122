package  ma.zs.zyn.ws.dto.packaging;

import ma.zs.zyn.zynerator.audit.Log;
import ma.zs.zyn.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;




@JsonInclude(JsonInclude.Include.NON_NULL)
public class PackagingPlanDto  extends AuditBaseDto {

    private String name  ;
    private String code  ;
    private Integer numberOfMonth  = 0 ;
    private BigDecimal price  ;
    private String description  ;
    private BigDecimal maxEntity  ;
    private BigDecimal maxProjet  ;
    private BigDecimal maxAttribut  ;
    private BigDecimal maxTokenInput  ;
    private BigDecimal maxTokenOutput  ;

    private PackagingDto packaging ;



    public PackagingPlanDto(){
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
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }

    @Log
    public Integer getNumberOfMonth(){
        return this.numberOfMonth;
    }
    public void setNumberOfMonth(Integer numberOfMonth){
        this.numberOfMonth = numberOfMonth;
    }

    @Log
    public BigDecimal getPrice(){
        return this.price;
    }
    public void setPrice(BigDecimal price){
        this.price = price;
    }

    @Log
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }

    @Log
    public BigDecimal getMaxEntity(){
        return this.maxEntity;
    }
    public void setMaxEntity(BigDecimal maxEntity){
        this.maxEntity = maxEntity;
    }

    @Log
    public BigDecimal getMaxProjet(){
        return this.maxProjet;
    }
    public void setMaxProjet(BigDecimal maxProjet){
        this.maxProjet = maxProjet;
    }

    @Log
    public BigDecimal getMaxAttribut(){
        return this.maxAttribut;
    }
    public void setMaxAttribut(BigDecimal maxAttribut){
        this.maxAttribut = maxAttribut;
    }

    @Log
    public BigDecimal getMaxTokenInput(){
        return this.maxTokenInput;
    }
    public void setMaxTokenInput(BigDecimal maxTokenInput){
        this.maxTokenInput = maxTokenInput;
    }

    @Log
    public BigDecimal getMaxTokenOutput(){
        return this.maxTokenOutput;
    }
    public void setMaxTokenOutput(BigDecimal maxTokenOutput){
        this.maxTokenOutput = maxTokenOutput;
    }


    public PackagingDto getPackaging(){
        return this.packaging;
    }

    public void setPackaging(PackagingDto packaging){
        this.packaging = packaging;
    }






}
