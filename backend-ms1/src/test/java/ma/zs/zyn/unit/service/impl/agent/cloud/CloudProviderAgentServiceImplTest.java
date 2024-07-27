package ma.zs.zyn.unit.service.impl.admin.cloud;

import ma.zs.zyn.bean.core.cloud.CloudProvider;
import ma.zs.zyn.dao.facade.core.cloud.CloudProviderDao;
import ma.zs.zyn.service.impl.admin.cloud.CloudProviderAdminServiceImpl;

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
class CloudProviderAgentServiceImplTest {

    @Mock
    private CloudProviderDao repository;
    private AutoCloseable autoCloseable;
    private CloudProviderAgentServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new CloudProviderAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllCloudProvider() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveCloudProvider() {
        // Given
        CloudProvider toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteCloudProvider() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetCloudProviderById() {
        // Given
        Long idToRetrieve = 1L; // Example CloudProvider ID to retrieve
        CloudProvider expected = new CloudProvider(); // You need to replace CloudProvider with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        CloudProvider result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private CloudProvider constructSample(int i) {
		CloudProvider given = new CloudProvider();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}
