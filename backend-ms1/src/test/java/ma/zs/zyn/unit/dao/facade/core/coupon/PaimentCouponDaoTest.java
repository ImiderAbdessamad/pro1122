package ma.zs.zyn.unit.dao.facade.core.coupon;

import ma.zs.zyn.bean.core.coupon.PaimentCoupon;
import ma.zs.zyn.dao.facade.core.coupon.PaimentCouponDao;

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

import ma.zs.zyn.bean.core.coupon.Coupon ;
import ma.zs.zyn.bean.core.coupon.PaimentCouponState ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PaimentCouponDaoTest {

@Autowired
    private PaimentCouponDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        PaimentCoupon entity = new PaimentCoupon();
        entity.setId(id);
        underTest.save(entity);
        PaimentCoupon loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PaimentCoupon entity = new PaimentCoupon();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PaimentCoupon loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PaimentCoupon> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PaimentCoupon> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PaimentCoupon given = constructSample(1);
        PaimentCoupon saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PaimentCoupon constructSample(int i) {
		PaimentCoupon given = new PaimentCoupon();
        given.setDescription("description-"+i);
        given.setCoupon(new Coupon(1L));
        given.setTotal(BigDecimal.TEN);
        given.setPaiementDate(LocalDateTime.now());
        given.setPaiementDateConfirmation(LocalDateTime.now());
        given.setPaimentCouponState(new PaimentCouponState(1L));
        return given;
    }

}
