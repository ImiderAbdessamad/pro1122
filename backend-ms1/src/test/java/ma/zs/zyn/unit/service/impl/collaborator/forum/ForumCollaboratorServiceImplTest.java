package ma.zs.zyn.unit.service.impl.admin.forum;

import ma.zs.zyn.bean.core.forum.Forum;
import ma.zs.zyn.dao.facade.core.forum.ForumDao;
import ma.zs.zyn.service.impl.admin.forum.ForumAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.forum.ForumSubject ;
import ma.zs.zyn.bean.core.forum.ForumState ;
import ma.zs.zyn.bean.core.forum.ForumComment ;
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
class ForumCollaboratorServiceImplTest {

    @Mock
    private ForumDao repository;
    private AutoCloseable autoCloseable;
    private ForumCollaboratorServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ForumAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllForum() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveForum() {
        // Given
        Forum toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteForum() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetForumById() {
        // Given
        Long idToRetrieve = 1L; // Example Forum ID to retrieve
        Forum expected = new Forum(); // You need to replace Forum with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        Forum result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private Forum constructSample(int i) {
		Forum given = new Forum();
        given.setContent("content-"+i);
        given.setCollaborator(new Collaborator(1L));
        given.setCreationDate(LocalDateTime.now());
        given.setPublicationDate(LocalDateTime.now());
        given.setTitle("title-"+i);
        given.setLikes(BigDecimal.TEN);
        given.setComments(BigDecimal.TEN);
        given.setDescription("description-"+i);
        given.setForumSubject(new ForumSubject(1L));
        given.setForumState(new ForumState(1L));
        List<ForumComment> forumComments = IntStream.rangeClosed(1, 3)
                                             .mapToObj(id -> {
                                                ForumComment element = new ForumComment();
                                                element.setId((long)id);
                                                element.setCollaborator(new Collaborator(Long.valueOf(1)));
                                                element.setCreationDate(LocalDateTime.now());
                                                element.setContent("content"+id);
                                                element.setForum(new Forum(Long.valueOf(4)));
                                                return element;
                                             })
                                             .collect(Collectors.toList());
        given.setForumComments(forumComments);
        return given;
    }

}
