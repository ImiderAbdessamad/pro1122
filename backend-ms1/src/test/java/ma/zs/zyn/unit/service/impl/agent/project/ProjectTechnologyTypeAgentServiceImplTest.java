package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.ProjectTechnologyType;
import ma.zs.zyn.dao.facade.core.project.ProjectTechnologyTypeDao;
import ma.zs.zyn.service.impl.admin.project.ProjectTechnologyTypeAdminServiceImpl;

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
class ProjectTechnologyTypeAgentServiceImplTest {

    @Mock
    private ProjectTechnologyTypeDao repository;
    private AutoCloseable autoCloseable;
    private ProjectTechnologyTypeAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ProjectTechnologyTypeAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllProjectTechnologyType() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveProjectTechnologyType() {
        // Given
        ProjectTechnologyType toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteProjectTechnologyType() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetProjectTechnologyTypeById() {
        // Given
        Long idToRetrieve = 1L; // Example ProjectTechnologyType ID to retrieve
        ProjectTechnologyType expected = new ProjectTechnologyType(); // You need to replace ProjectTechnologyType with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ProjectTechnologyType result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ProjectTechnologyType constructSample(int i) {
		ProjectTechnologyType given = new ProjectTechnologyType();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
