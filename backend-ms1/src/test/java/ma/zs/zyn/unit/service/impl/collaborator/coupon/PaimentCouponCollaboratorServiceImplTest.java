package ma.zs.zyn.unit.service.impl.admin.coupon;

import ma.zs.zyn.bean.core.coupon.PaimentCoupon;
import ma.zs.zyn.dao.facade.core.coupon.PaimentCouponDao;
import ma.zs.zyn.service.impl.admin.coupon.PaimentCouponAdminServiceImpl;

import ma.zs.zyn.bean.core.coupon.Coupon ;
import ma.zs.zyn.bean.core.coupon.PaimentCouponState ;
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
class PaimentCouponCollaboratorServiceImplTest {

    @Mock
    private PaimentCouponDao repository;
    private AutoCloseable autoCloseable;
    private PaimentCouponCollaboratorServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new PaimentCouponAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllPaimentCoupon() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSavePaimentCoupon() {
        // Given
        PaimentCoupon toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeletePaimentCoupon() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetPaimentCouponById() {
        // Given
        Long idToRetrieve = 1L; // Example PaimentCoupon ID to retrieve
        PaimentCoupon expected = new PaimentCoupon(); // You need to replace PaimentCoupon with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        PaimentCoupon result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
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
