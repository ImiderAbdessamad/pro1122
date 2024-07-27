package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.RemoteRepoInfo;
import ma.zs.zyn.dao.facade.core.project.RemoteRepoInfoDao;
import ma.zs.zyn.service.impl.admin.project.RemoteRepoInfoAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.project.RemoteRepoType ;
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
class RemoteRepoInfoInfluencerServiceImplTest {

    @Mock
    private RemoteRepoInfoDao repository;
    private AutoCloseable autoCloseable;
    private RemoteRepoInfoInfluencerServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new RemoteRepoInfoAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllRemoteRepoInfo() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveRemoteRepoInfo() {
        // Given
        RemoteRepoInfo toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteRemoteRepoInfo() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetRemoteRepoInfoById() {
        // Given
        Long idToRetrieve = 1L; // Example RemoteRepoInfo ID to retrieve
        RemoteRepoInfo expected = new RemoteRepoInfo(); // You need to replace RemoteRepoInfo with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        RemoteRepoInfo result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private RemoteRepoInfo constructSample(int i) {
		RemoteRepoInfo given = new RemoteRepoInfo();
        given.setTitle("title-"+i);
        given.setUsername("username-"+i);
        given.setToken("token-"+i);
        given.setName("name-"+i);
        given.setRemoteRepoType(new RemoteRepoType(1L));
        given.setCollaborator(new Collaborator(1L));
        return given;
    }

}
