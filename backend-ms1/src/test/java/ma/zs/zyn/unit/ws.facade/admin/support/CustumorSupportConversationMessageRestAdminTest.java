package ma.zs.zyn.unit.ws.facade.admin.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversationMessage;
import ma.zs.zyn.service.impl.admin.support.CustumorSupportConversationMessageAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.support.CustumorSupportConversationMessageRestAdmin;
import ma.zs.zyn.ws.converter.support.CustumorSupportConversationMessageConverter;
import ma.zs.zyn.ws.dto.support.CustumorSupportConversationMessageDto;
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
public class CustumorSupportConversationMessageRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private CustumorSupportConversationMessageAdminServiceImpl service;
    @Mock
    private CustumorSupportConversationMessageConverter converter;

    @InjectMocks
    private CustumorSupportConversationMessageRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllCustumorSupportConversationMessageTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<CustumorSupportConversationMessageDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<CustumorSupportConversationMessageDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveCustumorSupportConversationMessageTest() throws Exception {
        // Mock data
        CustumorSupportConversationMessageDto requestDto = new CustumorSupportConversationMessageDto();
        CustumorSupportConversationMessage entity = new CustumorSupportConversationMessage();
        CustumorSupportConversationMessage saved = new CustumorSupportConversationMessage();
        CustumorSupportConversationMessageDto savedDto = new CustumorSupportConversationMessageDto();

        // Mock the converter to return the custumorSupportConversationMessage object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved custumorSupportConversationMessage DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<CustumorSupportConversationMessageDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        CustumorSupportConversationMessageDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved custumorSupportConversationMessage DTO
        assertEquals(savedDto.getContent(), responseBody.getContent());
        assertEquals(savedDto.getCollaborator(), responseBody.getCollaborator());
        assertEquals(savedDto.getCreationDate(), responseBody.getCreationDate());
    }

}
