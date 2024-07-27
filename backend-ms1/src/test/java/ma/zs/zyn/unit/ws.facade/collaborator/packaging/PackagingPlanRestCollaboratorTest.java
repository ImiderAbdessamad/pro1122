package ma.zs.zyn.unit.ws.facade.collaborator.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.service.impl.collaborator.packaging.PackagingPlanCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.packaging.PackagingPlanRestCollaborator;
import ma.zs.zyn.ws.converter.packaging.PackagingPlanConverter;
import ma.zs.zyn.ws.dto.packaging.PackagingPlanDto;
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
public class PackagingPlanRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private PackagingPlanCollaboratorServiceImpl service;
    @Mock
    private PackagingPlanConverter converter;

    @InjectMocks
    private PackagingPlanRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPackagingPlanTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PackagingPlanDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PackagingPlanDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePackagingPlanTest() throws Exception {
        // Mock data
        PackagingPlanDto requestDto = new PackagingPlanDto();
        PackagingPlan entity = new PackagingPlan();
        PackagingPlan saved = new PackagingPlan();
        PackagingPlanDto savedDto = new PackagingPlanDto();

        // Mock the converter to return the packagingPlan object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved packagingPlan DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PackagingPlanDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PackagingPlanDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved packagingPlan DTO
        assertEquals(savedDto.getName(), responseBody.getName());
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getNumberOfMonth(), responseBody.getNumberOfMonth());
        assertEquals(savedDto.getPrice(), responseBody.getPrice());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
        assertEquals(savedDto.getMaxEntity(), responseBody.getMaxEntity());
        assertEquals(savedDto.getMaxProjet(), responseBody.getMaxProjet());
        assertEquals(savedDto.getMaxAttribut(), responseBody.getMaxAttribut());
        assertEquals(savedDto.getMaxTokenInput(), responseBody.getMaxTokenInput());
        assertEquals(savedDto.getMaxTokenOutput(), responseBody.getMaxTokenOutput());
    }

}
