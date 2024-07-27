package ma.zs.zyn.unit.ws.facade.admin.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUsState;
import ma.zs.zyn.service.impl.admin.contactus.ContactUsStateAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.contactus.ContactUsStateRestAdmin;
import ma.zs.zyn.ws.converter.contactus.ContactUsStateConverter;
import ma.zs.zyn.ws.dto.contactus.ContactUsStateDto;
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
public class ContactUsStateRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private ContactUsStateAdminServiceImpl service;
    @Mock
    private ContactUsStateConverter converter;

    @InjectMocks
    private ContactUsStateRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllContactUsStateTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ContactUsStateDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ContactUsStateDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveContactUsStateTest() throws Exception {
        // Mock data
        ContactUsStateDto requestDto = new ContactUsStateDto();
        ContactUsState entity = new ContactUsState();
        ContactUsState saved = new ContactUsState();
        ContactUsStateDto savedDto = new ContactUsStateDto();

        // Mock the converter to return the contactUsState object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved contactUsState DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ContactUsStateDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ContactUsStateDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved contactUsState DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
    }

}
