package ma.zs.zyn.unit.dao.facade.core.coupon;

import ma.zs.zyn.bean.core.coupon.Coupon;
import ma.zs.zyn.dao.facade.core.coupon.CouponDao;

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

import ma.zs.zyn.bean.core.coupon.Influencer ;
import ma.zs.zyn.bean.core.coupon.CouponState ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class CouponDaoTest {

@Autowired
    private CouponDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        Coupon entity = new Coupon();
        entity.setCode(code);
        underTest.save(entity);
        Coupon loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        Coupon loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        Coupon entity = new Coupon();
        entity.setId(id);
        underTest.save(entity);
        Coupon loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        Coupon entity = new Coupon();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        Coupon loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<Coupon> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<Coupon> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        Coupon given = constructSample(1);
        Coupon saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private Coupon constructSample(int i) {
		Coupon given = new Coupon();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        given.setInfluencer(new Influencer(1L));
        given.setDiscountCollaborator(BigDecimal.TEN);
        given.setPercentInflucencer(BigDecimal.TEN);
        given.setNombreInscriptionMax(i);
        given.setNombreCollaboratorInscrit(i);
        given.setCouponState(new CouponState(1L));
        return given;
    }

}
