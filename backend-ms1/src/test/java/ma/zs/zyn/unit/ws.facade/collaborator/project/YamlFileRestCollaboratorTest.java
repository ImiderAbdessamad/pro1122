package ma.zs.zyn.unit.ws.facade.collaborator.project;

import ma.zs.zyn.bean.core.project.YamlFile;
import ma.zs.zyn.service.impl.collaborator.project.YamlFileCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.project.YamlFileRestCollaborator;
import ma.zs.zyn.ws.converter.project.YamlFileConverter;
import ma.zs.zyn.ws.dto.project.YamlFileDto;
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
public class YamlFileRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private YamlFileCollaboratorServiceImpl service;
    @Mock
    private YamlFileConverter converter;

    @InjectMocks
    private YamlFileRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllYamlFileTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<YamlFileDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<YamlFileDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveYamlFileTest() throws Exception {
        // Mock data
        YamlFileDto requestDto = new YamlFileDto();
        YamlFile entity = new YamlFile();
        YamlFile saved = new YamlFile();
        YamlFileDto savedDto = new YamlFileDto();

        // Mock the converter to return the yamlFile object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved yamlFile DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<YamlFileDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        YamlFileDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved yamlFile DTO
        assertEquals(savedDto.getTitle(), responseBody.getTitle());
        assertEquals(savedDto.getContent(), responseBody.getContent());
    }

}
