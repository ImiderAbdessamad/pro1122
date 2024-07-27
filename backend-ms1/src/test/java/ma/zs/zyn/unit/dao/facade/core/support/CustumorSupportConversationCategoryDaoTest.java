package ma.zs.zyn.unit.dao.facade.core.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversationCategory;
import ma.zs.zyn.dao.facade.core.support.CustumorSupportConversationCategoryDao;

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
public class CustumorSupportConversationCategoryDaoTest {

@Autowired
    private CustumorSupportConversationCategoryDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        CustumorSupportConversationCategory entity = new CustumorSupportConversationCategory();
        entity.setCode(code);
        underTest.save(entity);
        CustumorSupportConversationCategory loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        CustumorSupportConversationCategory loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        CustumorSupportConversationCategory entity = new CustumorSupportConversationCategory();
        entity.setId(id);
        underTest.save(entity);
        CustumorSupportConversationCategory loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        CustumorSupportConversationCategory entity = new CustumorSupportConversationCategory();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        CustumorSupportConversationCategory loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<CustumorSupportConversationCategory> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<CustumorSupportConversationCategory> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        CustumorSupportConversationCategory given = constructSample(1);
        CustumorSupportConversationCategory saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private CustumorSupportConversationCategory constructSample(int i) {
		CustumorSupportConversationCategory given = new CustumorSupportConversationCategory();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
