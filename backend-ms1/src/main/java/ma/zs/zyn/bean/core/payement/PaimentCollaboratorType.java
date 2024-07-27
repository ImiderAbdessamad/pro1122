package ma.zs.zyn.bean.core.payement;








import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.zyn.zynerator.bean.BaseEntity;
import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "paiment_collaborator_type")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="paiment_collaborator_type_seq",sequenceName="paiment_collaborator_type_seq",allocationSize=1, initialValue = 1)
public class PaimentCollaboratorType  extends BaseEntity     {




    @Column(length = 500)
    private String code;

    @Column(length = 500)
    private String libelle;



    public PaimentCollaboratorType(){
        super();
    }

    public PaimentCollaboratorType(Long id){
        this.id = id;
    }

    public PaimentCollaboratorType(Long id,String libelle){
        this.id = id;
        this.libelle = libelle ;
    }
    public PaimentCollaboratorType(String libelle){
        this.libelle = libelle ;
    }
    public PaimentCollaboratorType(String libelle,String code){
        this.libelle=libelle;
        this.code=code;
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="paiment_collaborator_type_seq")
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PaimentCollaboratorType paimentCollaboratorType = (PaimentCollaboratorType) o;
        return id != null && id.equals(paimentCollaboratorType.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

