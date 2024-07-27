package ma.zs.zyn.unit.ws.facade.admin.forum;

import ma.zs.zyn.bean.core.forum.ForumComment;
import ma.zs.zyn.service.impl.admin.forum.ForumCommentAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.forum.ForumCommentRestAdmin;
import ma.zs.zyn.ws.converter.forum.ForumCommentConverter;
import ma.zs.zyn.ws.dto.forum.ForumCommentDto;
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
public class ForumCommentRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private ForumCommentAdminServiceImpl service;
    @Mock
    private ForumCommentConverter converter;

    @InjectMocks
    private ForumCommentRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllForumCommentTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ForumCommentDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ForumCommentDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveForumCommentTest() throws Exception {
        // Mock data
        ForumCommentDto requestDto = new ForumCommentDto();
        ForumComment entity = new ForumComment();
        ForumComment saved = new ForumComment();
        ForumCommentDto savedDto = new ForumCommentDto();

        // Mock the converter to return the forumComment object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved forumComment DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ForumCommentDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ForumCommentDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved forumComment DTO
        assertEquals(savedDto.getCreationDate(), responseBody.getCreationDate());
        assertEquals(savedDto.getContent(), responseBody.getContent());
    }

}
