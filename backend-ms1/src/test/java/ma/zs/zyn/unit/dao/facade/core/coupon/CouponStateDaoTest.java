package ma.zs.zyn.unit.dao.facade.core.coupon;

import ma.zs.zyn.bean.core.coupon.CouponState;
import ma.zs.zyn.dao.facade.core.coupon.CouponStateDao;

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
public class CouponStateDaoTest {

@Autowired
    private CouponStateDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByLibelle(){
        String libelle = "libelle-1";
        CouponState entity = new CouponState();
        entity.setLibelle(libelle);
        underTest.save(entity);
        CouponState loaded = underTest.findByLibelle(libelle);
        assertThat(loaded.getLibelle()).isEqualTo(libelle);
    }

    @Test
    void shouldDeleteByLibelle() {
        String libelle = "libelle-12345678";
        int result = underTest.deleteByLibelle(libelle);

        CouponState loaded = underTest.findByLibelle(libelle);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        CouponState entity = new CouponState();
        entity.setId(id);
        underTest.save(entity);
        CouponState loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        CouponState entity = new CouponState();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        CouponState loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<CouponState> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<CouponState> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        CouponState given = constructSample(1);
        CouponState saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private CouponState constructSample(int i) {
		CouponState given = new CouponState();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
