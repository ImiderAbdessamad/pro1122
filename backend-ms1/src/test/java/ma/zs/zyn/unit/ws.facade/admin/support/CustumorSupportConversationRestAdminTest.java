package ma.zs.zyn.unit.ws.facade.admin.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversation;
import ma.zs.zyn.service.impl.admin.support.CustumorSupportConversationAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.support.CustumorSupportConversationRestAdmin;
import ma.zs.zyn.ws.converter.support.CustumorSupportConversationConverter;
import ma.zs.zyn.ws.dto.support.CustumorSupportConversationDto;
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
public class CustumorSupportConversationRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private CustumorSupportConversationAdminServiceImpl service;
    @Mock
    private CustumorSupportConversationConverter converter;

    @InjectMocks
    private CustumorSupportConversationRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllCustumorSupportConversationTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<CustumorSupportConversationDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<CustumorSupportConversationDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveCustumorSupportConversationTest() throws Exception {
        // Mock data
        CustumorSupportConversationDto requestDto = new CustumorSupportConversationDto();
        CustumorSupportConversation entity = new CustumorSupportConversation();
        CustumorSupportConversation saved = new CustumorSupportConversation();
        CustumorSupportConversationDto savedDto = new CustumorSupportConversationDto();

        // Mock the converter to return the custumorSupportConversation object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved custumorSupportConversation DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<CustumorSupportConversationDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        CustumorSupportConversationDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved custumorSupportConversation DTO
        assertEquals(savedDto.getObject(), responseBody.getObject());
        assertEquals(savedDto.getRatting(), responseBody.getRatting());
        assertEquals(savedDto.getCreationDate(), responseBody.getCreationDate());
        assertEquals(savedDto.getClosingDate(), responseBody.getClosingDate());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
    }

}
