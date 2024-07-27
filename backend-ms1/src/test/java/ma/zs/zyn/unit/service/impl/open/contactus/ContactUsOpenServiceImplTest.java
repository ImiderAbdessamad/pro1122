package ma.zs.zyn.unit.service.impl.admin.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUs;
import ma.zs.zyn.dao.facade.core.contactus.ContactUsDao;
import ma.zs.zyn.service.impl.admin.contactus.ContactUsAdminServiceImpl;

import ma.zs.zyn.bean.core.contactus.ContactUsCategory ;
import ma.zs.zyn.bean.core.contactus.ContactUsState ;
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
class ContactUsOpenServiceImplTest {

    @Mock
    private ContactUsDao repository;
    private AutoCloseable autoCloseable;
    private ContactUsOpenServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ContactUsAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllContactUs() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveContactUs() {
        // Given
        ContactUs toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteContactUs() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetContactUsById() {
        // Given
        Long idToRetrieve = 1L; // Example ContactUs ID to retrieve
        ContactUs expected = new ContactUs(); // You need to replace ContactUs with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ContactUs result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ContactUs constructSample(int i) {
		ContactUs given = new ContactUs();
        given.setPhone("phone-"+i);
        given.setEmail("email-"+i);
        given.setObject("object-"+i);
        given.setMessage("message-"+i);
        given.setDescription("description-"+i);
        given.setContactUsCategory(new ContactUsCategory(1L));
        given.setContactUsState(new ContactUsState(1L));
        return given;
    }

}
