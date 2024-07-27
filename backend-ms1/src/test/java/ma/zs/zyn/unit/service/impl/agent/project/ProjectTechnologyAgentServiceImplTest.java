package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.ProjectTechnology;
import ma.zs.zyn.dao.facade.core.project.ProjectTechnologyDao;
import ma.zs.zyn.service.impl.admin.project.ProjectTechnologyAdminServiceImpl;

import ma.zs.zyn.bean.core.project.ProjectTechnologyType ;
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
class ProjectTechnologyAgentServiceImplTest {

    @Mock
    private ProjectTechnologyDao repository;
    private AutoCloseable autoCloseable;
    private ProjectTechnologyAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ProjectTechnologyAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllProjectTechnology() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveProjectTechnology() {
        // Given
        ProjectTechnology toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteProjectTechnology() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetProjectTechnologyById() {
        // Given
        Long idToRetrieve = 1L; // Example ProjectTechnology ID to retrieve
        ProjectTechnology expected = new ProjectTechnology(); // You need to replace ProjectTechnology with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ProjectTechnology result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
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
