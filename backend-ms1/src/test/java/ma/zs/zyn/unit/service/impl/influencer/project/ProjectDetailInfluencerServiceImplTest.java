package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.ProjectDetail;
import ma.zs.zyn.dao.facade.core.project.ProjectDetailDao;
import ma.zs.zyn.service.impl.admin.project.ProjectDetailAdminServiceImpl;

import ma.zs.zyn.bean.core.project.Project ;
import ma.zs.zyn.bean.core.project.ProjectTechnology ;
import ma.zs.zyn.bean.core.project.ProjectTechnologyProfile ;
import java.util.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.time.LocalDateTime;



import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@SpringBootTest
class ProjectDetailInfluencerServiceImplTest {

    @Mock
    private ProjectDetailDao repository;
    private AutoCloseable autoCloseable;
    private ProjectDetailInfluencerServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ProjectDetailAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllProjectDetail() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveProjectDetail() {
        // Given
        ProjectDetail toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteProjectDetail() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetProjectDetailById() {
        // Given
        Long idToRetrieve = 1L; // Example ProjectDetail ID to retrieve
        ProjectDetail expected = new ProjectDetail(); // You need to replace ProjectDetail with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ProjectDetail result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
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
