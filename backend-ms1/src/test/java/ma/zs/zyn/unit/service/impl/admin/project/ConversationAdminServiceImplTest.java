package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.Conversation;
import ma.zs.zyn.dao.facade.core.project.ConversationDao;
import ma.zs.zyn.service.impl.admin.project.ConversationAdminServiceImpl;

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
class ConversationAdminServiceImplTest {

    @Mock
    private ConversationDao repository;
    private AutoCloseable autoCloseable;
    private ConversationAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ConversationAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllConversation() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveConversation() {
        // Given
        Conversation toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteConversation() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetConversationById() {
        // Given
        Long idToRetrieve = 1L; // Example Conversation ID to retrieve
        Conversation expected = new Conversation(); // You need to replace Conversation with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        Conversation result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private Conversation constructSample(int i) {
		Conversation given = new Conversation();
        given.setPrompt("prompt-"+i);
        given.setResponse("response-"+i);
        given.setProject(new Project(1L));
        return given;
    }

}
