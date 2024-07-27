package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.ProjectTechnologyProfile;
import ma.zs.zyn.dao.facade.core.project.ProjectTechnologyProfileDao;

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
public class ProjectTechnologyProfileDaoTest {

@Autowired
    private ProjectTechnologyProfileDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        ProjectTechnologyProfile entity = new ProjectTechnologyProfile();
        entity.setCode(code);
        underTest.save(entity);
        ProjectTechnologyProfile loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        ProjectTechnologyProfile loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        ProjectTechnologyProfile entity = new ProjectTechnologyProfile();
        entity.setId(id);
        underTest.save(entity);
        ProjectTechnologyProfile loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ProjectTechnologyProfile entity = new ProjectTechnologyProfile();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ProjectTechnologyProfile loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ProjectTechnologyProfile> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ProjectTechnologyProfile> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ProjectTechnologyProfile given = constructSample(1);
        ProjectTechnologyProfile saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ProjectTechnologyProfile constructSample(int i) {
		ProjectTechnologyProfile given = new ProjectTechnologyProfile();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
