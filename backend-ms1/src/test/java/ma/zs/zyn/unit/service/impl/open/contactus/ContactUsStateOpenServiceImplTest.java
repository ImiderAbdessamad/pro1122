package ma.zs.zyn.unit.service.impl.admin.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUsState;
import ma.zs.zyn.dao.facade.core.contactus.ContactUsStateDao;
import ma.zs.zyn.service.impl.admin.contactus.ContactUsStateAdminServiceImpl;

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
class ContactUsStateOpenServiceImplTest {

    @Mock
    private ContactUsStateDao repository;
    private AutoCloseable autoCloseable;
    private ContactUsStateOpenServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ContactUsStateAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllContactUsState() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveContactUsState() {
        // Given
        ContactUsState toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteContactUsState() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetContactUsStateById() {
        // Given
        Long idToRetrieve = 1L; // Example ContactUsState ID to retrieve
        ContactUsState expected = new ContactUsState(); // You need to replace ContactUsState with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ContactUsState result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ContactUsState constructSample(int i) {
		ContactUsState given = new ContactUsState();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
