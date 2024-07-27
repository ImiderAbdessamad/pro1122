package ma.zs.zyn.unit.ws.facade.collaborator.forum;

import ma.zs.zyn.bean.core.forum.Forum;
import ma.zs.zyn.service.impl.collaborator.forum.ForumCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.forum.ForumRestCollaborator;
import ma.zs.zyn.ws.converter.forum.ForumConverter;
import ma.zs.zyn.ws.dto.forum.ForumDto;
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
public class ForumRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private ForumCollaboratorServiceImpl service;
    @Mock
    private ForumConverter converter;

    @InjectMocks
    private ForumRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllForumTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ForumDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ForumDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveForumTest() throws Exception {
        // Mock data
        ForumDto requestDto = new ForumDto();
        Forum entity = new Forum();
        Forum saved = new Forum();
        ForumDto savedDto = new ForumDto();

        // Mock the converter to return the forum object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved forum DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ForumDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ForumDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved forum DTO
        assertEquals(savedDto.getContent(), responseBody.getContent());
        assertEquals(savedDto.getCreationDate(), responseBody.getCreationDate());
        assertEquals(savedDto.getPublicationDate(), responseBody.getPublicationDate());
        assertEquals(savedDto.getTitle(), responseBody.getTitle());
        assertEquals(savedDto.getLikes(), responseBody.getLikes());
        assertEquals(savedDto.getComments(), responseBody.getComments());
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
    }

}
