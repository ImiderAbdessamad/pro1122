package ma.zs.zyn.bean.core.packaging;








import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.zyn.zynerator.bean.BaseEntity;
import jakarta.persistence.*;
import java.util.Objects;
import java.math.BigDecimal;

@Entity
@Table(name = "packaging_plan")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="packaging_plan_seq",sequenceName="packaging_plan_seq",allocationSize=1, initialValue = 1)
public class PackagingPlan  extends BaseEntity     {




    @Column(length = 500)
    private String name;

    @Column(length = 500)
    private String code;

    private Integer numberOfMonth = 0;

    private BigDecimal price = BigDecimal.ZERO;

    @Column(length = 500)
    private String description;

    private BigDecimal maxEntity = BigDecimal.ZERO;

    private BigDecimal maxProjet = BigDecimal.ZERO;

    private BigDecimal maxAttribut = BigDecimal.ZERO;

    private BigDecimal maxTokenInput = BigDecimal.ZERO;

    private BigDecimal maxTokenOutput = BigDecimal.ZERO;

    private Packaging packaging ;


    public PackagingPlan(){
        super();
    }

    public PackagingPlan(Long id){
        this.id = id;
    }

    public PackagingPlan(Long id,String code){
        this.id = id;
        this.code = code ;
    }
    public PackagingPlan(String code){
        this.code = code ;
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="packaging_plan_seq")
      @Override
    public Long getId(){
        return this.id;
    }
        @Override
    public void setId(Long id){
        this.id = id;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "packaging")
    public Packaging getPackaging(){
        return this.packaging;
    }
    public void setPackaging(Packaging packaging){
        this.packaging = packaging;
    }
    public Integer getNumberOfMonth(){
        return this.numberOfMonth;
    }
    public void setNumberOfMonth(Integer numberOfMonth){
        this.numberOfMonth = numberOfMonth;
    }
    public BigDecimal getPrice(){
        return this.price;
    }
    public void setPrice(BigDecimal price){
        this.price = price;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public BigDecimal getMaxEntity(){
        return this.maxEntity;
    }
    public void setMaxEntity(BigDecimal maxEntity){
        this.maxEntity = maxEntity;
    }
    public BigDecimal getMaxProjet(){
        return this.maxProjet;
    }
    public void setMaxProjet(BigDecimal maxProjet){
        this.maxProjet = maxProjet;
    }
    public BigDecimal getMaxAttribut(){
        return this.maxAttribut;
    }
    public void setMaxAttribut(BigDecimal maxAttribut){
        this.maxAttribut = maxAttribut;
    }
    public BigDecimal getMaxTokenInput(){
        return this.maxTokenInput;
    }
    public void setMaxTokenInput(BigDecimal maxTokenInput){
        this.maxTokenInput = maxTokenInput;
    }
    public BigDecimal getMaxTokenOutput(){
        return this.maxTokenOutput;
    }
    public void setMaxTokenOutput(BigDecimal maxTokenOutput){
        this.maxTokenOutput = maxTokenOutput;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PackagingPlan packagingPlan = (PackagingPlan) o;
        return id != null && id.equals(packagingPlan.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

