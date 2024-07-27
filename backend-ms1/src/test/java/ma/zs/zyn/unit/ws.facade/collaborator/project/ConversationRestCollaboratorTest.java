package ma.zs.zyn.unit.ws.facade.collaborator.project;

import ma.zs.zyn.bean.core.project.Conversation;
import ma.zs.zyn.service.impl.collaborator.project.ConversationCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.project.ConversationRestCollaborator;
import ma.zs.zyn.ws.converter.project.ConversationConverter;
import ma.zs.zyn.ws.dto.project.ConversationDto;
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
public class ConversationRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private ConversationCollaboratorServiceImpl service;
    @Mock
    private ConversationConverter converter;

    @InjectMocks
    private ConversationRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllConversationTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ConversationDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ConversationDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveConversationTest() throws Exception {
        // Mock data
        ConversationDto requestDto = new ConversationDto();
        Conversation entity = new Conversation();
        Conversation saved = new Conversation();
        ConversationDto savedDto = new ConversationDto();

        // Mock the converter to return the conversation object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved conversation DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ConversationDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ConversationDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved conversation DTO
        assertEquals(savedDto.getPrompt(), responseBody.getPrompt());
        assertEquals(savedDto.getResponse(), responseBody.getResponse());
    }

}
