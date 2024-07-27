package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.ProjectTechnologyProfile;
import ma.zs.zyn.dao.facade.core.project.ProjectTechnologyProfileDao;
import ma.zs.zyn.service.impl.admin.project.ProjectTechnologyProfileAdminServiceImpl;

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
class ProjectTechnologyProfileAdminServiceImplTest {

    @Mock
    private ProjectTechnologyProfileDao repository;
    private AutoCloseable autoCloseable;
    private ProjectTechnologyProfileAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ProjectTechnologyProfileAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllProjectTechnologyProfile() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveProjectTechnologyProfile() {
        // Given
        ProjectTechnologyProfile toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteProjectTechnologyProfile() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetProjectTechnologyProfileById() {
        // Given
        Long idToRetrieve = 1L; // Example ProjectTechnologyProfile ID to retrieve
        ProjectTechnologyProfile expected = new ProjectTechnologyProfile(); // You need to replace ProjectTechnologyProfile with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ProjectTechnologyProfile result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ProjectTechnologyProfile constructSample(int i) {
		ProjectTechnologyProfile given = new ProjectTechnologyProfile();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
