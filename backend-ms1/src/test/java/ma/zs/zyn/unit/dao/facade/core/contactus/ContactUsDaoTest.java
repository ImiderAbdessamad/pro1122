package ma.zs.zyn.unit.dao.facade.core.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUs;
import ma.zs.zyn.dao.facade.core.contactus.ContactUsDao;

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

import ma.zs.zyn.bean.core.contactus.ContactUsCategory ;
import ma.zs.zyn.bean.core.contactus.ContactUsState ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ContactUsDaoTest {

@Autowired
    private ContactUsDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        ContactUs entity = new ContactUs();
        entity.setId(id);
        underTest.save(entity);
        ContactUs loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        ContactUs entity = new ContactUs();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        ContactUs loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<ContactUs> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<ContactUs> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        ContactUs given = constructSample(1);
        ContactUs saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private ContactUs constructSample(int i) {
		ContactUs given = new ContactUs();
        given.setPhone("phone-"+i);
        given.setEmail("email-"+i);
        given.setObject("object-"+i);
        given.setMessage("message-"+i);
        given.setDescription("description-"+i);
        given.setContactUsCategory(new ContactUsCategory(1L));
        given.setContactUsState(new ContactUsState(1L));
        return given;
    }

}
