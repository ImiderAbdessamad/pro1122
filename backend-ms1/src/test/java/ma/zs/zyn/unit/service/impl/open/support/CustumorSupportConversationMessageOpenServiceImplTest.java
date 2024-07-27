package ma.zs.zyn.unit.service.impl.admin.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversationMessage;
import ma.zs.zyn.dao.facade.core.support.CustumorSupportConversationMessageDao;
import ma.zs.zyn.service.impl.admin.support.CustumorSupportConversationMessageAdminServiceImpl;

import ma.zs.zyn.bean.core.support.CustumorSupportConversation ;
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
class CustumorSupportConversationMessageOpenServiceImplTest {

    @Mock
    private CustumorSupportConversationMessageDao repository;
    private AutoCloseable autoCloseable;
    private CustumorSupportConversationMessageOpenServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new CustumorSupportConversationMessageAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllCustumorSupportConversationMessage() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveCustumorSupportConversationMessage() {
        // Given
        CustumorSupportConversationMessage toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteCustumorSupportConversationMessage() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetCustumorSupportConversationMessageById() {
        // Given
        Long idToRetrieve = 1L; // Example CustumorSupportConversationMessage ID to retrieve
        CustumorSupportConversationMessage expected = new CustumorSupportConversationMessage(); // You need to replace CustumorSupportConversationMessage with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        CustumorSupportConversationMessage result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private CustumorSupportConversationMessage constructSample(int i) {
		CustumorSupportConversationMessage given = new CustumorSupportConversationMessage();
        given.setContent("content-"+i);
        given.setCollaborator(false);
        given.setCreationDate(LocalDateTime.now());
        given.setCustumorSupportConversation(new CustumorSupportConversation(1L));
        return given;
    }

}
