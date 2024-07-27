package ma.zs.zyn.unit.dao.facade.core.blog;

import ma.zs.zyn.bean.core.blog.Blog;
import ma.zs.zyn.dao.facade.core.blog.BlogDao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;

import java.math.BigDecimal;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.IntStream;
import java.time.LocalDateTime;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.blog.BlogSubject ;
import ma.zs.zyn.bean.core.blog.BlogState ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class BlogDaoTest {

@Autowired
    private BlogDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        Blog entity = new Blog();
        entity.setId(id);
        underTest.save(entity);
        Blog loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        Blog entity = new Blog();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        Blog loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<Blog> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<Blog> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        Blog given = constructSample(1);
        Blog saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
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
        return given;
    }

}
