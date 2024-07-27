package ma.zs.zyn.bean.core.packaging;








import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.zyn.zynerator.bean.BaseEntity;
import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "packaging_detail")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="packaging_detail_seq",sequenceName="packaging_detail_seq",allocationSize=1, initialValue = 1)
public class PackagingDetail  extends BaseEntity     {




    @Column(length = 500)
    private String name;

    @Column(columnDefinition = "boolean default false")
    private Boolean exist = false;

    @Column(length = 500)
    private String description;

    private Packaging packaging ;
    private PackagingDetailGroup packagingDetailGroup ;


    public PackagingDetail(){
        super();
    }

    public PackagingDetail(Long id){
        this.id = id;
    }





    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="packaging_detail_seq")
      @Override
    public Long getId(){
        return this.id;
    }
        @Override
    public void setId(Long id){
        this.id = id;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "packaging")
    public Packaging getPackaging(){
        return this.packaging;
    }
    public void setPackaging(Packaging packaging){
        this.packaging = packaging;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    public Boolean  getExist(){
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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "packaging_detail_group")
    public PackagingDetailGroup getPackagingDetailGroup(){
        return this.packagingDetailGroup;
    }
    public void setPackagingDetailGroup(PackagingDetailGroup packagingDetailGroup){
        this.packagingDetailGroup = packagingDetailGroup;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PackagingDetail packagingDetail = (PackagingDetail) o;
        return id != null && id.equals(packagingDetail.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

