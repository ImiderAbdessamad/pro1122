package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.ProjectTechnology;
import ma.zs.zyn.dao.facade.core.project.ProjectTechnologyDao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;

import java.math.BigDecimal;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.IntStream;
import java.time.LocalDateTime;

import ma.zs.zyn.bean.core.project.ProjectTechnologyType ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ProjectTechnologyDaoTest {

@Autowired
    private ProjectTechnologyDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        ProjectTechnology entity = new ProjectTechnology();
        entity.setCode(code);
        underTest.save(entity);
        ProjectTechnology loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        ProjectTechnology loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        ProjectTechnology entity = new ProjectTechnology();
        entity.setId(id);
        underTest.save(entity);
        ProjectTechnology loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ProjectTechnology entity = new ProjectTechnology();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ProjectTechnology loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ProjectTechnology> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ProjectTechnology> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ProjectTechnology given = constructSample(1);
        ProjectTechnology saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ProjectTechnology constructSample(int i) {
		ProjectTechnology given = new ProjectTechnology();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        given.setDefaultDbName("defaultDbName-"+i);
        given.setDefaultUserName("defaultUserName-"+i);
        given.setDefaultUserPassword("defaultUserPassword-"+i);
        given.setDefaultPort("defaultPort-"+i);
        given.setDefaultBasePackage("defaultBasePackage-"+i);
        given.setProjectTechnologyType(new ProjectTechnologyType(1L));
        return given;
    }

}
