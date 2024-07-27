package ma.zs.zyn.unit.service.impl.admin.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUsCategory;
import ma.zs.zyn.dao.facade.core.contactus.ContactUsCategoryDao;
import ma.zs.zyn.service.impl.admin.contactus.ContactUsCategoryAdminServiceImpl;

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
class ContactUsCategoryOpenServiceImplTest {

    @Mock
    private ContactUsCategoryDao repository;
    private AutoCloseable autoCloseable;
    private ContactUsCategoryOpenServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ContactUsCategoryAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllContactUsCategory() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveContactUsCategory() {
        // Given
        ContactUsCategory toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteContactUsCategory() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetContactUsCategoryById() {
        // Given
        Long idToRetrieve = 1L; // Example ContactUsCategory ID to retrieve
        ContactUsCategory expected = new ContactUsCategory(); // You need to replace ContactUsCategory with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ContactUsCategory result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ContactUsCategory constructSample(int i) {
		ContactUsCategory given = new ContactUsCategory();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
