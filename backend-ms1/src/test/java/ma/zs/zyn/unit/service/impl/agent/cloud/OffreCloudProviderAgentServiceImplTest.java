package ma.zs.zyn.unit.service.impl.admin.cloud;

import ma.zs.zyn.bean.core.cloud.OffreCloudProvider;
import ma.zs.zyn.dao.facade.core.cloud.OffreCloudProviderDao;
import ma.zs.zyn.service.impl.admin.cloud.OffreCloudProviderAdminServiceImpl;

import ma.zs.zyn.bean.core.cloud.CloudProvider ;
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
class OffreCloudProviderAgentServiceImplTest {

    @Mock
    private OffreCloudProviderDao repository;
    private AutoCloseable autoCloseable;
    private OffreCloudProviderAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new OffreCloudProviderAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllOffreCloudProvider() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveOffreCloudProvider() {
        // Given
        OffreCloudProvider toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteOffreCloudProvider() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetOffreCloudProviderById() {
        // Given
        Long idToRetrieve = 1L; // Example OffreCloudProvider ID to retrieve
        OffreCloudProvider expected = new OffreCloudProvider(); // You need to replace OffreCloudProvider with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        OffreCloudProvider result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private OffreCloudProvider constructSample(int i) {
		OffreCloudProvider given = new OffreCloudProvider();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        given.setDescription("description-"+i);
        given.setCloudProvider(new CloudProvider(1L));
        given.setPrice(BigDecimal.TEN);
        return given;
    }

}
