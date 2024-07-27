package ma.zs.zyn.unit.service.impl.admin.forum;

import ma.zs.zyn.bean.core.forum.ForumComment;
import ma.zs.zyn.dao.facade.core.forum.ForumCommentDao;
import ma.zs.zyn.service.impl.admin.forum.ForumCommentAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.forum.Forum ;
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
class ForumCommentCollaboratorServiceImplTest {

    @Mock
    private ForumCommentDao repository;
    private AutoCloseable autoCloseable;
    private ForumCommentCollaboratorServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ForumCommentAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllForumComment() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveForumComment() {
        // Given
        ForumComment toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteForumComment() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetForumCommentById() {
        // Given
        Long idToRetrieve = 1L; // Example ForumComment ID to retrieve
        ForumComment expected = new ForumComment(); // You need to replace ForumComment with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        ForumComment result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private ForumComment constructSample(int i) {
		ForumComment given = new ForumComment();
        given.setCollaborator(new Collaborator(1L));
        given.setCreationDate(LocalDateTime.now());
        given.setContent("content-"+i);
        given.setForum(new Forum(1L));
        return given;
    }

}
