package ma.zs.zyn.unit.dao.facade.core.coupon;

import ma.zs.zyn.bean.core.coupon.PaimentCouponState;
import ma.zs.zyn.dao.facade.core.coupon.PaimentCouponStateDao;

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
public class PaimentCouponStateDaoTest {

@Autowired
    private PaimentCouponStateDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByLibelle(){
        String libelle = "libelle-1";
        PaimentCouponState entity = new PaimentCouponState();
        entity.setLibelle(libelle);
        underTest.save(entity);
        PaimentCouponState loaded = underTest.findByLibelle(libelle);
        assertThat(loaded.getLibelle()).isEqualTo(libelle);
    }

    @Test
    void shouldDeleteByLibelle() {
        String libelle = "libelle-12345678";
        int result = underTest.deleteByLibelle(libelle);

        PaimentCouponState loaded = underTest.findByLibelle(libelle);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        PaimentCouponState entity = new PaimentCouponState();
        entity.setId(id);
        underTest.save(entity);
        PaimentCouponState loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PaimentCouponState entity = new PaimentCouponState();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PaimentCouponState loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PaimentCouponState> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PaimentCouponState> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PaimentCouponState given = constructSample(1);
        PaimentCouponState saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PaimentCouponState constructSample(int i) {
		PaimentCouponState given = new PaimentCouponState();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
