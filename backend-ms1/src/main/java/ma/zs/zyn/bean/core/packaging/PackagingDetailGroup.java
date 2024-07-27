package ma.zs.zyn.bean.core.packaging;








import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.zyn.zynerator.bean.BaseEntity;
import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "packaging_detail_group")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="packaging_detail_group_seq",sequenceName="packaging_detail_group_seq",allocationSize=1, initialValue = 1)
public class PackagingDetailGroup  extends BaseEntity     {




    @Column(length = 500)
    private String code;

    @Column(length = 500)
    private String libelle;

    @Column(columnDefinition = "boolean default false")
    private Boolean seeMore = false;



    public PackagingDetailGroup(){
        super();
    }

    public PackagingDetailGroup(Long id){
        this.id = id;
    }

    public PackagingDetailGroup(Long id,String libelle){
        this.id = id;
        this.libelle = libelle ;
    }
    public PackagingDetailGroup(String libelle){
        this.libelle = libelle ;
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="packaging_detail_group_seq")
      @Override
    public Long getId(){
        return this.id;
    }
        @Override
    public void setId(Long id){
        this.id = id;
    }
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public Boolean  getSeeMore(){
        return this.seeMore;
    }
    public void setSeeMore(Boolean seeMore){
        this.seeMore = seeMore;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PackagingDetailGroup packagingDetailGroup = (PackagingDetailGroup) o;
        return id != null && id.equals(packagingDetailGroup.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

