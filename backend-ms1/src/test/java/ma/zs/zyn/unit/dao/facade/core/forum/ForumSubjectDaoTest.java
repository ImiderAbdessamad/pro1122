package ma.zs.zyn.unit.dao.facade.core.forum;

import ma.zs.zyn.bean.core.forum.ForumSubject;
import ma.zs.zyn.dao.facade.core.forum.ForumSubjectDao;

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


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ForumSubjectDaoTest {

@Autowired
    private ForumSubjectDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        ForumSubject entity = new ForumSubject();
        entity.setCode(code);
        underTest.save(entity);
        ForumSubject loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        ForumSubject loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        ForumSubject entity = new ForumSubject();
        entity.setId(id);
        underTest.save(entity);
        ForumSubject loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ForumSubject entity = new ForumSubject();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ForumSubject loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ForumSubject> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ForumSubject> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ForumSubject given = constructSample(1);
        ForumSubject saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ForumSubject constructSample(int i) {
		ForumSubject given = new ForumSubject();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
