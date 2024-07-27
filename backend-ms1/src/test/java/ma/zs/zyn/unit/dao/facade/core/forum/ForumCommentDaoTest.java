package ma.zs.zyn.unit.dao.facade.core.forum;

import ma.zs.zyn.bean.core.forum.ForumComment;
import ma.zs.zyn.dao.facade.core.forum.ForumCommentDao;

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
import ma.zs.zyn.bean.core.forum.Forum ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ForumCommentDaoTest {

@Autowired
    private ForumCommentDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        ForumComment entity = new ForumComment();
        entity.setId(id);
        underTest.save(entity);
        ForumComment loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ForumComment entity = new ForumComment();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ForumComment loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ForumComment> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ForumComment> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ForumComment given = constructSample(1);
        ForumComment saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
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
