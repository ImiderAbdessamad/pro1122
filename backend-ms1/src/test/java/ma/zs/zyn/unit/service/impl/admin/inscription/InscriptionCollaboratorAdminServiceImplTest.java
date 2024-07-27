package ma.zs.zyn.unit.service.impl.admin.inscription;

import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;
import ma.zs.zyn.dao.facade.core.inscription.InscriptionCollaboratorDao;
import ma.zs.zyn.service.impl.admin.inscription.InscriptionCollaboratorAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.packaging.PackagingPlan ;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState ;
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
class InscriptionCollaboratorAdminServiceImplTest {

    @Mock
    private InscriptionCollaboratorDao repository;
    private AutoCloseable autoCloseable;
    private InscriptionCollaboratorAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new InscriptionCollaboratorAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllInscriptionCollaborator() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveInscriptionCollaborator() {
        // Given
        InscriptionCollaborator toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteInscriptionCollaborator() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetInscriptionCollaboratorById() {
        // Given
        Long idToRetrieve = 1L; // Example InscriptionCollaborator ID to retrieve
        InscriptionCollaborator expected = new InscriptionCollaborator(); // You need to replace InscriptionCollaborator with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        InscriptionCollaborator result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private InscriptionCollaborator constructSample(int i) {
		InscriptionCollaborator given = new InscriptionCollaborator();
        given.setDescription("description-"+i);
        given.setStartDate(LocalDateTime.now());
        given.setEndDate(LocalDateTime.now());
        given.setConsumedEntity(BigDecimal.TEN);
        given.setConsumedProjet(BigDecimal.TEN);
        given.setConsumedAttribut(BigDecimal.TEN);
        given.setConsumedTokenInput(BigDecimal.TEN);
        given.setConsumedTokenOutput(BigDecimal.TEN);
        given.setCollaborator(new Collaborator(1L));
        given.setPackagingPlan(new PackagingPlan(1L));
        given.setInscriptionCollaboratorState(new InscriptionCollaboratorState(1L));
        return given;
    }

}
