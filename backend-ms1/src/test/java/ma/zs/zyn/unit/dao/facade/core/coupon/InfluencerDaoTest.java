package ma.zs.zyn.unit.dao.facade.core.coupon;

import ma.zs.zyn.bean.core.coupon.Influencer;
import ma.zs.zyn.dao.facade.core.coupon.InfluencerDao;

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
public class InfluencerDaoTest {

@Autowired
    private InfluencerDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        Influencer entity = new Influencer();
        entity.setId(id);
        underTest.save(entity);
        Influencer loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        Influencer entity = new Influencer();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        Influencer loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<Influencer> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<Influencer> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        Influencer given = constructSample(1);
        Influencer saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private Influencer constructSample(int i) {
		Influencer given = new Influencer();
        given.setDescription("description-"+i);
        given.setCredentialsNonExpired(false);
        given.setEnabled(false);
        given.setAccountNonExpired(false);
        given.setAccountNonLocked(false);
        given.setPasswordChanged(false);
        given.setUsername("username-"+i);
        given.setPassword("password-"+i);
        given.setAvatar("avatar-"+i);
        given.setFullName("fullName-"+i);
        given.setAbout("about-"+i);
        return given;
    }

}
