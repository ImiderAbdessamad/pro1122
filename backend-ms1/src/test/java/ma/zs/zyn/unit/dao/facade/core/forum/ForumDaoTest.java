package ma.zs.zyn.unit.dao.facade.core.forum;

import ma.zs.zyn.bean.core.forum.Forum;
import ma.zs.zyn.dao.facade.core.forum.ForumDao;

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
import ma.zs.zyn.bean.core.forum.ForumSubject ;
import ma.zs.zyn.bean.core.forum.ForumState ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ForumDaoTest {

@Autowired
    private ForumDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        Forum entity = new Forum();
        entity.setId(id);
        underTest.save(entity);
        Forum loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        Forum entity = new Forum();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        Forum loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<Forum> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<Forum> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        Forum given = constructSample(1);
        Forum saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
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
        return given;
    }

}
