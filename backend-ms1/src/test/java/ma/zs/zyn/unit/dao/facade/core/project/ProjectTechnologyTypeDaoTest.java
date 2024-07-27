package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.ProjectTechnologyType;
import ma.zs.zyn.dao.facade.core.project.ProjectTechnologyTypeDao;

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


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ProjectTechnologyTypeDaoTest {

@Autowired
    private ProjectTechnologyTypeDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        ProjectTechnologyType entity = new ProjectTechnologyType();
        entity.setCode(code);
        underTest.save(entity);
        ProjectTechnologyType loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        ProjectTechnologyType loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        ProjectTechnologyType entity = new ProjectTechnologyType();
        entity.setId(id);
        underTest.save(entity);
        ProjectTechnologyType loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ProjectTechnologyType entity = new ProjectTechnologyType();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ProjectTechnologyType loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ProjectTechnologyType> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ProjectTechnologyType> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ProjectTechnologyType given = constructSample(1);
        ProjectTechnologyType saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ProjectTechnologyType constructSample(int i) {
		ProjectTechnologyType given = new ProjectTechnologyType();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
