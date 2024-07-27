package ma.zs.zyn.unit.ws.facade.collaborator.blog;

import ma.zs.zyn.bean.core.blog.BlogSubject;
import ma.zs.zyn.service.impl.collaborator.blog.BlogSubjectCollaboratorServiceImpl;
import ma.zs.zyn.ws.facade.collaborator.blog.BlogSubjectRestCollaborator;
import ma.zs.zyn.ws.converter.blog.BlogSubjectConverter;
import ma.zs.zyn.ws.dto.blog.BlogSubjectDto;
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
public class BlogSubjectRestCollaboratorTest {

    private MockMvc mockMvc;

    @Mock
    private BlogSubjectCollaboratorServiceImpl service;
    @Mock
    private BlogSubjectConverter converter;

    @InjectMocks
    private BlogSubjectRestCollaborator controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllBlogSubjectTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<BlogSubjectDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<BlogSubjectDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveBlogSubjectTest() throws Exception {
        // Mock data
        BlogSubjectDto requestDto = new BlogSubjectDto();
        BlogSubject entity = new BlogSubject();
        BlogSubject saved = new BlogSubject();
        BlogSubjectDto savedDto = new BlogSubjectDto();

        // Mock the converter to return the blogSubject object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved blogSubject DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<BlogSubjectDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        BlogSubjectDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved blogSubject DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
    }

}
