package ma.zs.zyn.unit.dao.facade.core.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUsCategory;
import ma.zs.zyn.dao.facade.core.contactus.ContactUsCategoryDao;

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
public class ContactUsCategoryDaoTest {

@Autowired
    private ContactUsCategoryDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        ContactUsCategory entity = new ContactUsCategory();
        entity.setCode(code);
        underTest.save(entity);
        ContactUsCategory loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        ContactUsCategory loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        ContactUsCategory entity = new ContactUsCategory();
        entity.setId(id);
        underTest.save(entity);
        ContactUsCategory loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ContactUsCategory entity = new ContactUsCategory();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ContactUsCategory loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ContactUsCategory> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ContactUsCategory> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ContactUsCategory given = constructSample(1);
        ContactUsCategory saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ContactUsCategory constructSample(int i) {
		ContactUsCategory given = new ContactUsCategory();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
