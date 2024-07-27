package ma.zs.zyn.unit.service.impl.admin.blog;

import ma.zs.zyn.bean.core.blog.Blog;
import ma.zs.zyn.dao.facade.core.blog.BlogDao;
import ma.zs.zyn.service.impl.admin.blog.BlogAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.blog.BlogSubject ;
import ma.zs.zyn.bean.core.blog.BlogComment ;
import ma.zs.zyn.bean.core.blog.BlogState ;
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
class BlogOpenServiceImplTest {

    @Mock
    private BlogDao repository;
    private AutoCloseable autoCloseable;
    private BlogOpenServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new BlogAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllBlog() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveBlog() {
        // Given
        Blog toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteBlog() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetBlogById() {
        // Given
        Long idToRetrieve = 1L; // Example Blog ID to retrieve
        Blog expected = new Blog(); // You need to replace Blog with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        Blog result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private Blog constructSample(int i) {
		Blog given = new Blog();
        given.setContent("content-"+i);
        given.setCollaborator(new Collaborator(1L));
        given.setCreationDate(LocalDateTime.now());
        given.setPublicationDate(LocalDateTime.now());
        given.setTitle("title-"+i);
        given.setLikes(BigDecimal.TEN);
        given.setComments(BigDecimal.TEN);
        given.setDescription("description-"+i);
        given.setBlogSubject(new BlogSubject(1L));
        given.setBlogState(new BlogState(1L));
        List<BlogComment> blogComments = IntStream.rangeClosed(1, 3)
                                             .mapToObj(id -> {
                                                BlogComment element = new BlogComment();
                                                element.setId((long)id);
                                                element.setCollaborator(new Collaborator(Long.valueOf(1)));
                                                element.setCreationDate(LocalDateTime.now());
                                                element.setContent("content"+id);
                                                element.setBlog(new Blog(Long.valueOf(4)));
                                                return element;
                                             })
                                             .collect(Collectors.toList());
        given.setBlogComments(blogComments);
        return given;
    }

}
