package ma.zs.zyn.unit.service.impl.admin.forum;

import ma.zs.zyn.bean.core.forum.ForumSubject;
import ma.zs.zyn.dao.facade.core.forum.ForumSubjectDao;
import ma.zs.zyn.service.impl.admin.forum.ForumSubjectAdminServiceImpl;

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
class ForumSubjectAdminServiceImplTest {

    @Mock
    private ForumSubjectDao repository;
    private AutoCloseable autoCloseable;
    private ForumSubjectAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ForumSubjectAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllForumSubject() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveForumSubject() {
        // Given
        ForumSubject toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteForumSubject() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetForumSubjectById() {
        // Given
        Long idToRetrieve = 1L; // Example ForumSubject ID to retrieve
        ForumSubject expected = new ForumSubject(); // You need to replace ForumSubject with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ForumSubject result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ForumSubject constructSample(int i) {
		ForumSubject given = new ForumSubject();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
