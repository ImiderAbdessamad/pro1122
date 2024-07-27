package ma.zs.zyn.unit.ws.facade.influencer.coupon;

import ma.zs.zyn.bean.core.coupon.PaimentCoupon;
import ma.zs.zyn.service.impl.influencer.coupon.PaimentCouponInfluencerServiceImpl;
import ma.zs.zyn.ws.facade.influencer.coupon.PaimentCouponRestInfluencer;
import ma.zs.zyn.ws.converter.coupon.PaimentCouponConverter;
import ma.zs.zyn.ws.dto.coupon.PaimentCouponDto;
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
public class PaimentCouponRestInfluencerTest {

    private MockMvc mockMvc;

    @Mock
    private PaimentCouponInfluencerServiceImpl service;
    @Mock
    private PaimentCouponConverter converter;

    @InjectMocks
    private PaimentCouponRestInfluencer controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPaimentCouponTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PaimentCouponDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PaimentCouponDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePaimentCouponTest() throws Exception {
        // Mock data
        PaimentCouponDto requestDto = new PaimentCouponDto();
        PaimentCoupon entity = new PaimentCoupon();
        PaimentCoupon saved = new PaimentCoupon();
        PaimentCouponDto savedDto = new PaimentCouponDto();

        // Mock the converter to return the paimentCoupon object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved paimentCoupon DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PaimentCouponDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PaimentCouponDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved paimentCoupon DTO
        assertEquals(savedDto.getDescription(), responseBody.getDescription());
        assertEquals(savedDto.getTotal(), responseBody.getTotal());
        assertEquals(savedDto.getPaiementDate(), responseBody.getPaiementDate());
        assertEquals(savedDto.getPaiementDateConfirmation(), responseBody.getPaiementDateConfirmation());
    }

}
