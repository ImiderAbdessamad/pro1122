package ma.zs.zyn.unit.service.impl.admin.blog;

import ma.zs.zyn.bean.core.blog.BlogComment;
import ma.zs.zyn.dao.facade.core.blog.BlogCommentDao;
import ma.zs.zyn.service.impl.admin.blog.BlogCommentAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.blog.Blog ;
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
class BlogCommentOpenServiceImplTest {

    @Mock
    private BlogCommentDao repository;
    private AutoCloseable autoCloseable;
    private BlogCommentOpenServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new BlogCommentAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllBlogComment() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveBlogComment() {
        // Given
        BlogComment toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteBlogComment() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetBlogCommentById() {
        // Given
        Long idToRetrieve = 1L; // Example BlogComment ID to retrieve
        BlogComment expected = new BlogComment(); // You need to replace BlogComment with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        BlogComment result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private BlogComment constructSample(int i) {
		BlogComment given = new BlogComment();
        given.setCollaborator(new Collaborator(1L));
        given.setCreationDate(LocalDateTime.now());
        given.setContent("content-"+i);
        given.setBlog(new Blog(1L));
        return given;
    }

}
