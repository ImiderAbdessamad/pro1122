package ma.zs.zyn.unit.ws.facade.collaborator.blog;

import ma.zs.zyn.bean.core.blog.BlogComment;
import ma.zs.zyn.service.impl.collaborator.blog.BlogCommentCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.blog.BlogCommentRestCollaborator;
import ma.zs.zyn.ws.converter.blog.BlogCommentConverter;
import ma.zs.zyn.ws.dto.blog.BlogCommentDto;
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
public class BlogCommentRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private BlogCommentCollaboratorServiceImpl service;
    @Mock
    private BlogCommentConverter converter;

    @InjectMocks
    private BlogCommentRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllBlogCommentTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<BlogCommentDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<BlogCommentDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveBlogCommentTest() throws Exception {
        // Mock data
        BlogCommentDto requestDto = new BlogCommentDto();
        BlogComment entity = new BlogComment();
        BlogComment saved = new BlogComment();
        BlogCommentDto savedDto = new BlogCommentDto();

        // Mock the converter to return the blogComment object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved blogComment DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<BlogCommentDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        BlogCommentDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved blogComment DTO
        assertEquals(savedDto.getCreationDate(), responseBody.getCreationDate());
        assertEquals(savedDto.getContent(), responseBody.getContent());
    }

}
