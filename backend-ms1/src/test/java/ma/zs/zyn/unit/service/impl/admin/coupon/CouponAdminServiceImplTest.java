package ma.zs.zyn.unit.service.impl.admin.coupon;

import ma.zs.zyn.bean.core.coupon.Coupon;
import ma.zs.zyn.dao.facade.core.coupon.CouponDao;
import ma.zs.zyn.service.impl.admin.coupon.CouponAdminServiceImpl;

import ma.zs.zyn.bean.core.coupon.Influencer ;
import ma.zs.zyn.bean.core.coupon.CouponState ;
import java.util.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.time.LocalDateTime;



import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@SpringBootTest
class CouponAdminServiceImplTest {

    @Mock
    private CouponDao repository;
    private AutoCloseable autoCloseable;
    private CouponAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new CouponAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllCoupon() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveCoupon() {
        // Given
        Coupon toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteCoupon() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetCouponById() {
        // Given
        Long idToRetrieve = 1L; // Example Coupon ID to retrieve
        Coupon expected = new Coupon(); // You need to replace Coupon with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        Coupon result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
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
