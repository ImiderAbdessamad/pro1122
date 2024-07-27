package ma.zs.zyn.unit.ws.facade.collaborator.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUs;
import ma.zs.zyn.service.impl.collaborator.contactus.ContactUsCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.contactus.ContactUsRestCollaborator;
import ma.zs.zyn.ws.converter.contactus.ContactUsConverter;
import ma.zs.zyn.ws.dto.contactus.ContactUsDto;
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
public class ContactUsRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private ContactUsCollaboratorServiceImpl service;
    @Mock
    private ContactUsConverter converter;

    @InjectMocks
    private ContactUsRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllContactUsTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ContactUsDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ContactUsDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveContactUsTest() throws Exception {
        // Mock data
        ContactUsDto requestDto = new ContactUsDto();
        ContactUs entity = new ContactUs();
        ContactUs saved = new ContactUs();
        ContactUsDto savedDto = new ContactUsDto();

        // Mock the converter to return the contactUs object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved contactUs DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ContactUsDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ContactUsDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved contactUs DTO
        assertEquals(savedDto.getPhone(), responseBody.getPhone());
        assertEquals(savedDto.getEmail(), responseBody.getEmail());
        assertEquals(savedDto.getObject(), responseBody.getObject());
        assertEquals(savedDto.getMessage(), responseBody.getMessage());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
    }

}
