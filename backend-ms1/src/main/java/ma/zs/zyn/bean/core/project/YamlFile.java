package ma.zs.zyn.bean.core.project;








import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.zyn.zynerator.bean.BaseEntity;
import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "yaml_file")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="yaml_file_seq",sequenceName="yaml_file_seq",allocationSize=1, initialValue = 1)
public class YamlFile  extends BaseEntity     {




    @Column(length = 500)
    private String title;

    @Column(length = 500)
    private String content;

    private Project project ;


    public YamlFile(){
        super();
    }

    public YamlFile(Long id){
        this.id = id;
    }

    public YamlFile(Long id,String title){
        this.id = id;
        this.title = title ;
    }
    public YamlFile(String title){
        this.title = title ;
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="yaml_file_seq")
      @Override
    public Long getId(){
        return this.id;
    }
        @Override
    public void setId(Long id){
        this.id = id;
    }
    public String getTitle(){
        return this.title;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public String getContent(){
        return this.content;
    }
    public void setContent(String content){
        this.content = content;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project")
    public Project getProject(){
        return this.project;
    }
    public void setProject(Project project){
        this.project = project;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        YamlFile yamlFile = (YamlFile) o;
        return id != null && id.equals(yamlFile.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

