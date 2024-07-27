package ma.zs.zyn.unit.ws.facade.collaborator.project;

import ma.zs.zyn.bean.core.project.ProjectTechnology;
import ma.zs.zyn.service.impl.collaborator.project.ProjectTechnologyCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.project.ProjectTechnologyRestCollaborator;
import ma.zs.zyn.ws.converter.project.ProjectTechnologyConverter;
import ma.zs.zyn.ws.dto.project.ProjectTechnologyDto;
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
public class ProjectTechnologyRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private ProjectTechnologyCollaboratorServiceImpl service;
    @Mock
    private ProjectTechnologyConverter converter;

    @InjectMocks
    private ProjectTechnologyRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllProjectTechnologyTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ProjectTechnologyDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ProjectTechnologyDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveProjectTechnologyTest() throws Exception {
        // Mock data
        ProjectTechnologyDto requestDto = new ProjectTechnologyDto();
        ProjectTechnology entity = new ProjectTechnology();
        ProjectTechnology saved = new ProjectTechnology();
        ProjectTechnologyDto savedDto = new ProjectTechnologyDto();

        // Mock the converter to return the projectTechnology object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved projectTechnology DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ProjectTechnologyDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ProjectTechnologyDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved projectTechnology DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
        assertEquals(savedDto.getDefaultDbName(), responseBody.getDefaultDbName());
        assertEquals(savedDto.getDefaultUserName(), responseBody.getDefaultUserName());
        assertEquals(savedDto.getDefaultUserPassword(), responseBody.getDefaultUserPassword());
        assertEquals(savedDto.getDefaultPort(), responseBody.getDefaultPort());
        assertEquals(savedDto.getDefaultBasePackage(), responseBody.getDefaultBasePackage());
    }

}
