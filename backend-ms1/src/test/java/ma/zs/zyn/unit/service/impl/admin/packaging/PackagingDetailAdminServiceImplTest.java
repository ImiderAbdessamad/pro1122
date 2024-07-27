package ma.zs.zyn.unit.service.impl.admin.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.dao.facade.core.packaging.PackagingDetailDao;
import ma.zs.zyn.service.impl.admin.packaging.PackagingDetailAdminServiceImpl;

import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup ;
import ma.zs.zyn.bean.core.packaging.Packaging ;
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
class PackagingDetailAdminServiceImplTest {

    @Mock
    private PackagingDetailDao repository;
    private AutoCloseable autoCloseable;
    private PackagingDetailAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new PackagingDetailAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllPackagingDetail() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSavePackagingDetail() {
        // Given
        PackagingDetail toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeletePackagingDetail() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetPackagingDetailById() {
        // Given
        Long idToRetrieve = 1L; // Example PackagingDetail ID to retrieve
        PackagingDetail expected = new PackagingDetail(); // You need to replace PackagingDetail with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        PackagingDetail result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private PackagingDetail constructSample(int i) {
		PackagingDetail given = new PackagingDetail();
        given.setPackaging(new Packaging(1L));
        given.setName("name-"+i);
        given.setExist(false);
        given.setDescription("description-"+i);
        given.setPackagingDetailGroup(new PackagingDetailGroup(1L));
        return given;
    }

}
