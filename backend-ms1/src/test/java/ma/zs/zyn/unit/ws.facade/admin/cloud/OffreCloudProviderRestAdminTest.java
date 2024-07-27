package ma.zs.zyn.unit.ws.facade.admin.cloud;

import ma.zs.zyn.bean.core.cloud.OffreCloudProvider;
import ma.zs.zyn.service.impl.admin.cloud.OffreCloudProviderAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.cloud.OffreCloudProviderRestAdmin;
import ma.zs.zyn.ws.converter.cloud.OffreCloudProviderConverter;
import ma.zs.zyn.ws.dto.cloud.OffreCloudProviderDto;
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
public class OffreCloudProviderRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private OffreCloudProviderAdminServiceImpl service;
    @Mock
    private OffreCloudProviderConverter converter;

    @InjectMocks
    private OffreCloudProviderRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllOffreCloudProviderTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<OffreCloudProviderDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<OffreCloudProviderDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveOffreCloudProviderTest() throws Exception {
        // Mock data
        OffreCloudProviderDto requestDto = new OffreCloudProviderDto();
        OffreCloudProvider entity = new OffreCloudProvider();
        OffreCloudProvider saved = new OffreCloudProvider();
        OffreCloudProviderDto savedDto = new OffreCloudProviderDto();

        // Mock the converter to return the offreCloudProvider object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved offreCloudProvider DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<OffreCloudProviderDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        OffreCloudProviderDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved offreCloudProvider DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
        assertEquals(savedDto.getPrice(), responseBody.getPrice());
    }

}
