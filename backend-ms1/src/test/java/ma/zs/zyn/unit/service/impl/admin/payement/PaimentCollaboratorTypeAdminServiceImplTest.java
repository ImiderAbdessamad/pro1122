package ma.zs.zyn.unit.service.impl.admin.payement;

import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType;
import ma.zs.zyn.dao.facade.core.payement.PaimentCollaboratorTypeDao;
import ma.zs.zyn.service.impl.admin.payement.PaimentCollaboratorTypeAdminServiceImpl;

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
class PaimentCollaboratorTypeAdminServiceImplTest {

    @Mock
    private PaimentCollaboratorTypeDao repository;
    private AutoCloseable autoCloseable;
    private PaimentCollaboratorTypeAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new PaimentCollaboratorTypeAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllPaimentCollaboratorType() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSavePaimentCollaboratorType() {
        // Given
        PaimentCollaboratorType toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeletePaimentCollaboratorType() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetPaimentCollaboratorTypeById() {
        // Given
        Long idToRetrieve = 1L; // Example PaimentCollaboratorType ID to retrieve
        PaimentCollaboratorType expected = new PaimentCollaboratorType(); // You need to replace PaimentCollaboratorType with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        PaimentCollaboratorType result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private PaimentCollaboratorType constructSample(int i) {
		PaimentCollaboratorType given = new PaimentCollaboratorType();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
