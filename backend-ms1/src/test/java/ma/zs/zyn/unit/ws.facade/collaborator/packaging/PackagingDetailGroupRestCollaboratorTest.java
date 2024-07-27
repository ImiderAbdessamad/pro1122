package ma.zs.zyn.unit.ws.facade.collaborator.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.service.impl.collaborator.packaging.PackagingDetailGroupCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.packaging.PackagingDetailGroupRestCollaborator;
import ma.zs.zyn.ws.converter.packaging.PackagingDetailGroupConverter;
import ma.zs.zyn.ws.dto.packaging.PackagingDetailGroupDto;
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
public class PackagingDetailGroupRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private PackagingDetailGroupCollaboratorServiceImpl service;
    @Mock
    private PackagingDetailGroupConverter converter;

    @InjectMocks
    private PackagingDetailGroupRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPackagingDetailGroupTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PackagingDetailGroupDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PackagingDetailGroupDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePackagingDetailGroupTest() throws Exception {
        // Mock data
        PackagingDetailGroupDto requestDto = new PackagingDetailGroupDto();
        PackagingDetailGroup entity = new PackagingDetailGroup();
        PackagingDetailGroup saved = new PackagingDetailGroup();
        PackagingDetailGroupDto savedDto = new PackagingDetailGroupDto();

        // Mock the converter to return the packagingDetailGroup object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved packagingDetailGroup DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PackagingDetailGroupDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PackagingDetailGroupDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved packagingDetailGroup DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
        assertEquals(savedDto.getSeeMore(), responseBody.getSeeMore());
    }

}
