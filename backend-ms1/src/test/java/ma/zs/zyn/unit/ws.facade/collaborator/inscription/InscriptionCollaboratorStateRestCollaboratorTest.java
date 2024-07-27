package ma.zs.zyn.unit.ws.facade.collaborator.inscription;

import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState;
import ma.zs.zyn.service.impl.collaborator.inscription.InscriptionCollaboratorStateCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.inscription.InscriptionCollaboratorStateRestCollaborator;
import ma.zs.zyn.ws.converter.inscription.InscriptionCollaboratorStateConverter;
import ma.zs.zyn.ws.dto.inscription.InscriptionCollaboratorStateDto;
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
public class InscriptionCollaboratorStateRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private InscriptionCollaboratorStateCollaboratorServiceImpl service;
    @Mock
    private InscriptionCollaboratorStateConverter converter;

    @InjectMocks
    private InscriptionCollaboratorStateRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllInscriptionCollaboratorStateTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<InscriptionCollaboratorStateDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<InscriptionCollaboratorStateDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveInscriptionCollaboratorStateTest() throws Exception {
        // Mock data
        InscriptionCollaboratorStateDto requestDto = new InscriptionCollaboratorStateDto();
        InscriptionCollaboratorState entity = new InscriptionCollaboratorState();
        InscriptionCollaboratorState saved = new InscriptionCollaboratorState();
        InscriptionCollaboratorStateDto savedDto = new InscriptionCollaboratorStateDto();

        // Mock the converter to return the inscriptionCollaboratorState object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved inscriptionCollaboratorState DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<InscriptionCollaboratorStateDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        InscriptionCollaboratorStateDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved inscriptionCollaboratorState DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
    }

}
