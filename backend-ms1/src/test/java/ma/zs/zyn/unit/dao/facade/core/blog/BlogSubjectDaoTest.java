package ma.zs.zyn.unit.dao.facade.core.blog;

import ma.zs.zyn.bean.core.blog.BlogSubject;
import ma.zs.zyn.dao.facade.core.blog.BlogSubjectDao;

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
public class BlogSubjectDaoTest {

@Autowired
    private BlogSubjectDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        BlogSubject entity = new BlogSubject();
        entity.setCode(code);
        underTest.save(entity);
        BlogSubject loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        BlogSubject loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        BlogSubject entity = new BlogSubject();
        entity.setId(id);
        underTest.save(entity);
        BlogSubject loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        BlogSubject entity = new BlogSubject();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        BlogSubject loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<BlogSubject> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<BlogSubject> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        BlogSubject given = constructSample(1);
        BlogSubject saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private BlogSubject constructSample(int i) {
		BlogSubject given = new BlogSubject();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
