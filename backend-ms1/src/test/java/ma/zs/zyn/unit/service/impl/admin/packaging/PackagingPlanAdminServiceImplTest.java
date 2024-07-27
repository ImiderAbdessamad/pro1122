package ma.zs.zyn.unit.service.impl.admin.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.dao.facade.core.packaging.PackagingPlanDao;
import ma.zs.zyn.service.impl.admin.packaging.PackagingPlanAdminServiceImpl;

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
class PackagingPlanAdminServiceImplTest {

    @Mock
    private PackagingPlanDao repository;
    private AutoCloseable autoCloseable;
    private PackagingPlanAdminServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new PackagingPlanAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllPackagingPlan() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSavePackagingPlan() {
        // Given
        PackagingPlan toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeletePackagingPlan() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetPackagingPlanById() {
        // Given
        Long idToRetrieve = 1L; // Example PackagingPlan ID to retrieve
        PackagingPlan expected = new PackagingPlan(); // You need to replace PackagingPlan with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        PackagingPlan result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private PackagingPlan constructSample(int i) {
		PackagingPlan given = new PackagingPlan();
        given.setName("name-"+i);
        given.setCode("code-"+i);
        given.setPackaging(new Packaging(1L));
        given.setNumberOfMonth(i);
        given.setPrice(BigDecimal.TEN);
        given.setDescription("description-"+i);
        given.setMaxEntity(BigDecimal.TEN);
        given.setMaxProjet(BigDecimal.TEN);
        given.setMaxAttribut(BigDecimal.TEN);
        given.setMaxTokenInput(BigDecimal.TEN);
        given.setMaxTokenOutput(BigDecimal.TEN);
        return given;
    }

}
