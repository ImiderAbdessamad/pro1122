package ma.zs.zyn.unit.service.impl.admin.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversation;
import ma.zs.zyn.dao.facade.core.support.CustumorSupportConversationDao;
import ma.zs.zyn.service.impl.admin.support.CustumorSupportConversationAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.support.Agent ;
import ma.zs.zyn.bean.core.support.CustumorSupportConversationCategory ;
import ma.zs.zyn.bean.core.support.CustumorSupportConversationState ;
import ma.zs.zyn.bean.core.support.CustumorSupportConversationMessage ;
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
class CustumorSupportConversationAgentServiceImplTest {

    @Mock
    private CustumorSupportConversationDao repository;
    private AutoCloseable autoCloseable;
    private CustumorSupportConversationAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new CustumorSupportConversationAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllCustumorSupportConversation() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveCustumorSupportConversation() {
        // Given
        CustumorSupportConversation toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteCustumorSupportConversation() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetCustumorSupportConversationById() {
        // Given
        Long idToRetrieve = 1L; // Example CustumorSupportConversation ID to retrieve
        CustumorSupportConversation expected = new CustumorSupportConversation(); // You need to replace CustumorSupportConversation with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        CustumorSupportConversation result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private CustumorSupportConversation constructSample(int i) {
		CustumorSupportConversation given = new CustumorSupportConversation();
        given.setCollaborator(new Collaborator(1L));
        given.setAgent(new Agent(1L));
        given.setObject("object-"+i);
        given.setRatting(BigDecimal.TEN);
        given.setCreationDate(LocalDateTime.now());
        given.setClosingDate(LocalDateTime.now());
        given.setDescription("description-"+i);
        given.setCustumorSupportConversationCategory(new CustumorSupportConversationCategory(1L));
        given.setCustumorSupportConversationState(new CustumorSupportConversationState(1L));
        List<CustumorSupportConversationMessage> custumorSupportConversationMessages = IntStream.rangeClosed(1, 3)
                                             .mapToObj(id -> {
                                                CustumorSupportConversationMessage element = new CustumorSupportConversationMessage();
                                                element.setId((long)id);
                                                element.setContent("content"+id);
                                                element.setCollaborator(true);
                                                element.setCreationDate(LocalDateTime.now());
                                                element.setCustumorSupportConversation(new CustumorSupportConversation(Long.valueOf(4)));
                                                return element;
                                             })
                                             .collect(Collectors.toList());
        given.setCustumorSupportConversationMessages(custumorSupportConversationMessages);
        return given;
    }

}
