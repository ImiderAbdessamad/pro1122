package ma.zs.zyn.unit.service.impl.admin.project;

import ma.zs.zyn.bean.core.project.Project;
import ma.zs.zyn.dao.facade.core.project.ProjectDao;
import ma.zs.zyn.service.impl.admin.project.ProjectAdminServiceImpl;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.project.Project ;
import ma.zs.zyn.bean.core.project.ProjectTechnology ;
import ma.zs.zyn.bean.core.project.RemoteRepoInfo ;
import ma.zs.zyn.bean.core.project.Conversation ;
import ma.zs.zyn.bean.core.project.ProjectTechnologyProfile ;
import ma.zs.zyn.bean.core.project.ProjectDetail ;
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
class ProjectCollaboratorServiceImplTest {

    @Mock
    private ProjectDao repository;
    private AutoCloseable autoCloseable;
    private ProjectCollaboratorServiceImpl underTest;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new ProjectAdminServiceImpl(repository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void canGetAllProject() {
         //when
        underTest.findAll();
        verify(repository).findAll();
    }

    @Test
    void itShouldSaveProject() {
        // Given
        Project toSave = constructSample(1);
        when(repository.save(toSave)).thenReturn(toSave);

        // When
        underTest.create(toSave);

        // Then
        verify(repository).save(toSave);
    }

    @Test
    void itShouldDeleteProject() {
        // Given
        Long idToDelete = 1L;
        when(repository.existsById(idToDelete)).thenReturn(true);

        // When
        underTest.deleteById(idToDelete);

        // Then
        verify(repository).deleteById(idToDelete);
    }
    @Test
    void itShouldGetProjectById() {
        // Given
        Long idToRetrieve = 1L; // Example Project ID to retrieve
        Project expected = new Project(); // You need to replace Project with your actual class
        expected.setId(idToRetrieve);
        when(repository.findById(idToRetrieve)).thenReturn(java.util.Optional.of(expected));

        // When
        Project result = underTest.findById(idToRetrieve);

        // Then
        assertEquals(expected, result);
    }
	
	private Project constructSample(int i) {
		Project given = new Project();
        given.setTitle("title-"+i);
        given.setTitleChat("titleChat-"+i);
        given.setCollaborator(new Collaborator(1L));
        given.setGeneratedDate(LocalDateTime.now());
        given.setRemoteRepoInfo(new RemoteRepoInfo(1L));
        List<Conversation> conversations = IntStream.rangeClosed(1, 3)
                                             .mapToObj(id -> {
                                                Conversation element = new Conversation();
                                                element.setId((long)id);
                                                element.setPrompt("prompt"+id);
                                                element.setResponse("response"+id);
                                                element.setProject(new Project(Long.valueOf(3)));
                                                return element;
                                             })
                                             .collect(Collectors.toList());
        given.setConversations(conversations);
        given.setChatDateStart(LocalDateTime.now());
        given.setMicroService(false);
        given.setMicroFront(false);
        List<ProjectDetail> projectDetails = IntStream.rangeClosed(1, 3)
                                             .mapToObj(id -> {
                                                ProjectDetail element = new ProjectDetail();
                                                element.setId((long)id);
                                                element.setTitle("title"+id);
                                                element.setProjectTechnology(new ProjectTechnology(Long.valueOf(2)));
                                                element.setProject(new Project(Long.valueOf(3)));
                                                element.setProjectTechnologyProfile(new ProjectTechnologyProfile(Long.valueOf(4)));
                                                element.setDbName("dbName"+id);
                                                element.setDbPassword("dbPassword"+id);
                                                element.setDbUserName("dbUserName"+id);
                                                element.setBasePackage("basePackage"+id);
                                                element.setMsName("msName"+id);
                                                element.setPort("port"+id);
                                                element.setPortDev("portDev"+id);
                                                element.setPortTest("portTest"+id);
                                                element.setPortProd("portProd"+id);
                                                element.setEnabled(true);
                                                return element;
                                             })
                                             .collect(Collectors.toList());
        given.setProjectDetails(projectDetails);
        return given;
    }

}
