package ma.zs.zyn.unit.ws.facade.admin.project;

import ma.zs.zyn.bean.core.project.RemoteRepoInfo;
import ma.zs.zyn.service.impl.admin.project.RemoteRepoInfoAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.project.RemoteRepoInfoRestAdmin;
import ma.zs.zyn.ws.converter.project.RemoteRepoInfoConverter;
import ma.zs.zyn.ws.dto.project.RemoteRepoInfoDto;
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
public class RemoteRepoInfoRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private RemoteRepoInfoAdminServiceImpl service;
    @Mock
    private RemoteRepoInfoConverter converter;

    @InjectMocks
    private RemoteRepoInfoRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllRemoteRepoInfoTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<RemoteRepoInfoDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<RemoteRepoInfoDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveRemoteRepoInfoTest() throws Exception {
        // Mock data
        RemoteRepoInfoDto requestDto = new RemoteRepoInfoDto();
        RemoteRepoInfo entity = new RemoteRepoInfo();
        RemoteRepoInfo saved = new RemoteRepoInfo();
        RemoteRepoInfoDto savedDto = new RemoteRepoInfoDto();

        // Mock the converter to return the remoteRepoInfo object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved remoteRepoInfo DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<RemoteRepoInfoDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        RemoteRepoInfoDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved remoteRepoInfo DTO
        assertEquals(savedDto.getTitle(), responseBody.getTitle());
        assertEquals(savedDto.getUsername(), responseBody.getUsername());
        assertEquals(savedDto.getToken(), responseBody.getToken());
        assertEquals(savedDto.getName(), responseBody.getName());
    }

}
