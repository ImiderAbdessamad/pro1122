package ma.zs.zyn.unit.service.impl.admin.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversationState;
import ma.zs.zyn.dao.facade.core.support.CustumorSupportConversationStateDao;
import ma.zs.zyn.service.impl.admin.support.CustumorSupportConversationStateAdminServiceImpl;

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
class CustumorSupportConversationStateAgentServiceImplTest {

    @Mock
    private CustumorSupportConversationStateDao repository;
    private AutoCloseable autoCloseable;
    private CustumorSupportConversationStateAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new CustumorSupportConversationStateAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllCustumorSupportConversationState() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveCustumorSupportConversationState() {
        // Given
        CustumorSupportConversationState toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteCustumorSupportConversationState() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetCustumorSupportConversationStateById() {
        // Given
        Long idToRetrieve = 1L; // Example CustumorSupportConversationState ID to retrieve
        CustumorSupportConversationState expected = new CustumorSupportConversationState(); // You need to replace CustumorSupportConversationState with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        CustumorSupportConversationState result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private CustumorSupportConversationState constructSample(int i) {
		CustumorSupportConversationState given = new CustumorSupportConversationState();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
