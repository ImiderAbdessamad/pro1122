package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.Conversation;
import ma.zs.zyn.dao.facade.core.project.ConversationDao;

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

import ma.zs.zyn.bean.core.project.Project ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ConversationDaoTest {

@Autowired
    private ConversationDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        Conversation entity = new Conversation();
        entity.setId(id);
        underTest.save(entity);
        Conversation loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        Conversation entity = new Conversation();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        Conversation loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<Conversation> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<Conversation> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        Conversation given = constructSample(1);
        Conversation saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private Conversation constructSample(int i) {
		Conversation given = new Conversation();
        given.setPrompt("prompt-"+i);
        given.setResponse("response-"+i);
        given.setProject(new Project(1L));
        return given;
    }

}
