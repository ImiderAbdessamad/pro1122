package ma.zs.zyn.unit.ws.facade.admin.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.service.impl.admin.packaging.PackagingDetailAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.packaging.PackagingDetailRestAdmin;
import ma.zs.zyn.ws.converter.packaging.PackagingDetailConverter;
import ma.zs.zyn.ws.dto.packaging.PackagingDetailDto;
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
public class PackagingDetailRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private PackagingDetailAdminServiceImpl service;
    @Mock
    private PackagingDetailConverter converter;

    @InjectMocks
    private PackagingDetailRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPackagingDetailTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PackagingDetailDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PackagingDetailDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePackagingDetailTest() throws Exception {
        // Mock data
        PackagingDetailDto requestDto = new PackagingDetailDto();
        PackagingDetail entity = new PackagingDetail();
        PackagingDetail saved = new PackagingDetail();
        PackagingDetailDto savedDto = new PackagingDetailDto();

        // Mock the converter to return the packagingDetail object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved packagingDetail DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PackagingDetailDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PackagingDetailDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved packagingDetail DTO
        assertEquals(savedDto.getName(), responseBody.getName());
        assertEquals(savedDto.getExist(), responseBody.getExist());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
    }

}