package ma.zs.zyn.unit.service.impl.admin.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.dao.facade.core.packaging.PackagingDetailGroupDao;
import ma.zs.zyn.service.impl.admin.packaging.PackagingDetailGroupAdminServiceImpl;

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
class PackagingDetailGroupAgentServiceImplTest {

    @Mock
    private PackagingDetailGroupDao repository;
    private AutoCloseable autoCloseable;
    private PackagingDetailGroupAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new PackagingDetailGroupAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllPackagingDetailGroup() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSavePackagingDetailGroup() {
        // Given
        PackagingDetailGroup toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeletePackagingDetailGroup() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetPackagingDetailGroupById() {
        // Given
        Long idToRetrieve = 1L; // Example PackagingDetailGroup ID to retrieve
        PackagingDetailGroup expected = new PackagingDetailGroup(); // You need to replace PackagingDetailGroup with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        PackagingDetailGroup result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private PackagingDetailGroup constructSample(int i) {
		PackagingDetailGroup given = new PackagingDetailGroup();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        given.setSeeMore(false);
        return given;
    }

}
