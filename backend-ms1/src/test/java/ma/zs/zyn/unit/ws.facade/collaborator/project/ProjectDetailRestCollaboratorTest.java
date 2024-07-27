package ma.zs.zyn.unit.ws.facade.collaborator.project;

import ma.zs.zyn.bean.core.project.ProjectDetail;
import ma.zs.zyn.service.impl.collaborator.project.ProjectDetailCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.project.ProjectDetailRestCollaborator;
import ma.zs.zyn.ws.converter.project.ProjectDetailConverter;
import ma.zs.zyn.ws.dto.project.ProjectDetailDto;
import org.aspectj.lang.annotation.Before;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ProjectDetailRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private ProjectDetailCollaboratorServiceImpl service;
    @Mock
    private ProjectDetailConverter converter;

    @InjectMocks
    private ProjectDetailRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllProjectDetailTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ProjectDetailDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ProjectDetailDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveProjectDetailTest() throws Exception {
        // Mock data
        ProjectDetailDto requestDto = new ProjectDetailDto();
        ProjectDetail entity = new ProjectDetail();
        ProjectDetail saved = new ProjectDetail();
        ProjectDetailDto savedDto = new ProjectDetailDto();

        // Mock the converter to return the projectDetail object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved projectDetail DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ProjectDetailDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ProjectDetailDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved projectDetail DTO
        assertEquals(savedDto.getTitle(), responseBody.getTitle());
        assertEquals(savedDto.getDbName(), responseBody.getDbName());
        assertEquals(savedDto.getDbPassword(), responseBody.getDbPassword());
        assertEquals(savedDto.getDbUserName(), responseBody.getDbUserName());
        assertEquals(savedDto.getBasePackage(), responseBody.getBasePackage());
        assertEquals(savedDto.getMsName(), responseBody.getMsName());
        assertEquals(savedDto.getPort(), responseBody.getPort());
        assertEquals(savedDto.getPortDev(), responseBody.getPortDev());
        assertEquals(savedDto.getPortTest(), responseBody.getPortTest());
        assertEquals(savedDto.getPortProd(), responseBody.getPortProd());
        assertEquals(savedDto.getEnabled(), responseBody.getEnabled());
    }

}
