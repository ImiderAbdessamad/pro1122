package ma.zs.zyn.unit.ws.facade.admin.payement;

import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType;
import ma.zs.zyn.service.impl.admin.payement.PaimentCollaboratorTypeAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.payement.PaimentCollaboratorTypeRestAdmin;
import ma.zs.zyn.ws.converter.payement.PaimentCollaboratorTypeConverter;
import ma.zs.zyn.ws.dto.payement.PaimentCollaboratorTypeDto;
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
public class PaimentCollaboratorTypeRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private PaimentCollaboratorTypeAdminServiceImpl service;
    @Mock
    private PaimentCollaboratorTypeConverter converter;

    @InjectMocks
    private PaimentCollaboratorTypeRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPaimentCollaboratorTypeTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PaimentCollaboratorTypeDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PaimentCollaboratorTypeDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePaimentCollaboratorTypeTest() throws Exception {
        // Mock data
        PaimentCollaboratorTypeDto requestDto = new PaimentCollaboratorTypeDto();
        PaimentCollaboratorType entity = new PaimentCollaboratorType();
        PaimentCollaboratorType saved = new PaimentCollaboratorType();
        PaimentCollaboratorTypeDto savedDto = new PaimentCollaboratorTypeDto();

        // Mock the converter to return the paimentCollaboratorType object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved paimentCollaboratorType DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PaimentCollaboratorTypeDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PaimentCollaboratorTypeDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved paimentCollaboratorType DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
    }

}
