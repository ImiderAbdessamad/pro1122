package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.YamlFile;
import ma.zs.zyn.dao.facade.core.project.YamlFileDao;
import ma.zs.zyn.service.impl.admin.project.YamlFileAdminServiceImpl;

import ma.zs.zyn.bean.core.project.Project ;
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
class YamlFileCollaboratorServiceImplTest {

    @Mock
    private YamlFileDao repository;
    private AutoCloseable autoCloseable;
    private YamlFileCollaboratorServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new YamlFileAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllYamlFile() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveYamlFile() {
        // Given
        YamlFile toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteYamlFile() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetYamlFileById() {
        // Given
        Long idToRetrieve = 1L; // Example YamlFile ID to retrieve
        YamlFile expected = new YamlFile(); // You need to replace YamlFile with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        YamlFile result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private YamlFile constructSample(int i) {
		YamlFile given = new YamlFile();
        given.setTitle("title-"+i);
        given.setContent("content-"+i);
        given.setProject(new Project(1L));
        return given;
    }

}
