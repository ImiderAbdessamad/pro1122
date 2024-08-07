package ma.zs.zyn.unit.ws.facade.collaborator.payement;

import ma.zs.zyn.bean.core.payement.PaimentCollaborator;
import ma.zs.zyn.service.impl.collaborator.payement.PaimentCollaboratorCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.payement.PaimentCollaboratorRestCollaborator;
import ma.zs.zyn.ws.converter.payement.PaimentCollaboratorConverter;
import ma.zs.zyn.ws.dto.payement.PaimentCollaboratorDto;
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
public class PaimentCollaboratorRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private PaimentCollaboratorCollaboratorServiceImpl service;
    @Mock
    private PaimentCollaboratorConverter converter;

    @InjectMocks
    private PaimentCollaboratorRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPaimentCollaboratorTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PaimentCollaboratorDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PaimentCollaboratorDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePaimentCollaboratorTest() throws Exception {
        // Mock data
        PaimentCollaboratorDto requestDto = new PaimentCollaboratorDto();
        PaimentCollaborator entity = new PaimentCollaborator();
        PaimentCollaborator saved = new PaimentCollaborator();
        PaimentCollaboratorDto savedDto = new PaimentCollaboratorDto();

        // Mock the converter to return the paimentCollaborator object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved paimentCollaborator DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PaimentCollaboratorDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PaimentCollaboratorDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved paimentCollaborator DTO
        assertEquals(savedDto.getCardHolder(), responseBody.getCardHolder());
        assertEquals(savedDto.getCardNumber(), responseBody.getCardNumber());
        assertEquals(savedDto.getExpirationDate(), responseBody.getExpirationDate());
        assertEquals(savedDto.getCvc(), responseBody.getCvc());
        assertEquals(savedDto.getPostal(), responseBody.getPostal());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
        assertEquals(savedDto.getAmountToPaid(), responseBody.getAmountToPaid());
        assertEquals(savedDto.getStartDate(), responseBody.getStartDate());
        assertEquals(savedDto.getEndDate(), responseBody.getEndDate());
        assertEquals(savedDto.getConsumedEntity(), responseBody.getConsumedEntity());
        assertEquals(savedDto.getConsumedProjet(), responseBody.getConsumedProjet());
        assertEquals(savedDto.getConsumedAttribut(), responseBody.getConsumedAttribut());
        assertEquals(savedDto.getConsumedTokenInput(), responseBody.getConsumedTokenInput());
        assertEquals(savedDto.getConsumedTokenOutput(), responseBody.getConsumedTokenOutput());
        assertEquals(savedDto.getTotal(), responseBody.getTotal());
        assertEquals(savedDto.getBasic(), responseBody.getBasic());
        assertEquals(savedDto.getDiscount(), responseBody.getDiscount());
        assertEquals(savedDto.getRemaining(), responseBody.getRemaining());
        assertEquals(savedDto.getPriceCloud(), responseBody.getPriceCloud());
        assertEquals(savedDto.getPaiementDate(), responseBody.getPaiementDate());
        assertEquals(savedDto.getDeployAndTestOnLine(), responseBody.getDeployAndTestOnLine());
    }

}
