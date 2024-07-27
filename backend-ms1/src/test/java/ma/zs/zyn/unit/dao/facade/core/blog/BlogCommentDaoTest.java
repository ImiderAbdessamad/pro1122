package ma.zs.zyn.unit.dao.facade.core.blog;

import ma.zs.zyn.bean.core.blog.BlogComment;
import ma.zs.zyn.dao.facade.core.blog.BlogCommentDao;

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
import ma.zs.zyn.bean.core.blog.Blog ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class BlogCommentDaoTest {

@Autowired
    private BlogCommentDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        BlogComment entity = new BlogComment();
        entity.setId(id);
        underTest.save(entity);
        BlogComment loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        BlogComment entity = new BlogComment();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        BlogComment loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<BlogComment> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<BlogComment> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        BlogComment given = constructSample(1);
        BlogComment saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
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