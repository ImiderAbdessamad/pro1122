package ma.zs.zyn.unit.ws.facade.admin.coupon;

import ma.zs.zyn.bean.core.coupon.PaimentCouponState;
import ma.zs.zyn.service.impl.admin.coupon.PaimentCouponStateAdminServiceImpl;
import ma.zs.zyn.ws.facade.admin.coupon.PaimentCouponStateRestAdmin;
import ma.zs.zyn.ws.converter.coupon.PaimentCouponStateConverter;
import ma.zs.zyn.ws.dto.coupon.PaimentCouponStateDto;
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
public class PaimentCouponStateRestAdminTest {

    private MockMvc mockMvc;

    @Mock
    private PaimentCouponStateAdminServiceImpl service;
    @Mock
    private PaimentCouponStateConverter converter;

    @InjectMocks
    private PaimentCouponStateRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPaimentCouponStateTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PaimentCouponStateDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PaimentCouponStateDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePaimentCouponStateTest() throws Exception {
        // Mock data
        PaimentCouponStateDto requestDto = new PaimentCouponStateDto();
        PaimentCouponState entity = new PaimentCouponState();
        PaimentCouponState saved = new PaimentCouponState();
        PaimentCouponStateDto savedDto = new PaimentCouponStateDto();

        // Mock the converter to return the paimentCouponState object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved paimentCouponState DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PaimentCouponStateDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PaimentCouponStateDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved paimentCouponState DTO
        assertEquals(savedDto.getCode(), responseBody.getCode());
        assertEquals(savedDto.getLibelle(), responseBody.getLibelle());
    }

}
