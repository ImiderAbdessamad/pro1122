package ma.zs.zyn.unit.ws.facade.admin.contactus;

import ma.zs.zyn.bean.core.contactus.ContactUsCategory;
import ma.zs.zyn.service.impl.admin.contactus.ContactUsCategoryAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.contactus.ContactUsCategoryRestAdmin;
import ma.zs.zyn.ws.converter.contactus.ContactUsCategoryConverter;
import ma.zs.zyn.ws.dto.contactus.ContactUsCategoryDto;
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
public class ContactUsCategoryRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private ContactUsCategoryAdminServiceImpl service;
    @Mock
    private ContactUsCategoryConverter converter;

    @InjectMocks
    private ContactUsCategoryRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllContactUsCategoryTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ContactUsCategoryDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ContactUsCategoryDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveContactUsCategoryTest() throws Exception {
        // Mock data
        ContactUsCategoryDto requestDto = new ContactUsCategoryDto();
        ContactUsCategory entity = new ContactUsCategory();
        ContactUsCategory saved = new ContactUsCategory();
        ContactUsCategoryDto savedDto = new ContactUsCategoryDto();

        // Mock the converter to return the contactUsCategory object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved contactUsCategory DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ContactUsCategoryDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ContactUsCategoryDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved contactUsCategory DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
    }

}
