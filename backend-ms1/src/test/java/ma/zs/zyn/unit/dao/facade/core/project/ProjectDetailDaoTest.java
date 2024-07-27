package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.ProjectDetail;
import ma.zs.zyn.dao.facade.core.project.ProjectDetailDao;

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

import ma.zs.zyn.bean.core.project.Project ;
import ma.zs.zyn.bean.core.project.ProjectTechnology ;
import ma.zs.zyn.bean.core.project.ProjectTechnologyProfile ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ProjectDetailDaoTest {

@Autowired
    private ProjectDetailDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        ProjectDetail entity = new ProjectDetail();
        entity.setId(id);
        underTest.save(entity);
        ProjectDetail loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ProjectDetail entity = new ProjectDetail();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ProjectDetail loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ProjectDetail> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ProjectDetail> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ProjectDetail given = constructSample(1);
        ProjectDetail saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ProjectDetail constructSample(int i) {
		ProjectDetail given = new ProjectDetail();
        given.setTitle("title-"+i);
        given.setProjectTechnology(new ProjectTechnology(1L));
        given.setProject(new Project(1L));
        given.setProjectTechnologyProfile(new ProjectTechnologyProfile(1L));
        given.setDbName("dbName-"+i);
        given.setDbPassword("dbPassword-"+i);
        given.setDbUserName("dbUserName-"+i);
        given.setBasePackage("basePackage-"+i);
        given.setMsName("msName-"+i);
        given.setPort("port-"+i);
        given.setPortDev("portDev-"+i);
        given.setPortTest("portTest-"+i);
        given.setPortProd("portProd-"+i);
        given.setEnabled(false);
        return given;
    }

}
