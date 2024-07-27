package  ma.zs.zyn.ws.converter.coupon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;

import ma.zs.zyn.ws.converter.coupon.InfluencerConverter;
import ma.zs.zyn.bean.core.coupon.Influencer;
import ma.zs.zyn.ws.converter.coupon.CouponStateConverter;
import ma.zs.zyn.bean.core.coupon.CouponState;



import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.coupon.Coupon;
import ma.zs.zyn.ws.dto.coupon.CouponDto;

@Component
public class CouponConverter {

    @Autowired
    private InfluencerConverter influencerConverter ;
    @Autowired
    private CouponStateConverter couponStateConverter ;
    private boolean influencer;
    private boolean couponState;

    public  CouponConverter() {
        initObject(true);
    }

    public Coupon toItem(CouponDto dto) {
        if (dto == null) {
            return null;
        } else {
        Coupon item = new Coupon();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getDiscountCollaborator()))
                item.setDiscountCollaborator(dto.getDiscountCollaborator());
            if(StringUtil.isNotEmpty(dto.getPercentInflucencer()))
                item.setPercentInflucencer(dto.getPercentInflucencer());
            if(StringUtil.isNotEmpty(dto.getNombreInscriptionMax()))
                item.setNombreInscriptionMax(dto.getNombreInscriptionMax());
            if(StringUtil.isNotEmpty(dto.getNombreCollaboratorInscrit()))
                item.setNombreCollaboratorInscrit(dto.getNombreCollaboratorInscrit());
            if(this.influencer && dto.getInfluencer()!=null)
                item.setInfluencer(influencerConverter.toItem(dto.getInfluencer())) ;

            if(this.couponState && dto.getCouponState()!=null)
                item.setCouponState(couponStateConverter.toItem(dto.getCouponState())) ;




        return item;
        }
    }


    public CouponDto toDto(Coupon item) {
        if (item == null) {
            return null;
        } else {
            CouponDto dto = new CouponDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());
            if(StringUtil.isNotEmpty(item.getDiscountCollaborator()))
                dto.setDiscountCollaborator(item.getDiscountCollaborator());
            if(StringUtil.isNotEmpty(item.getPercentInflucencer()))
                dto.setPercentInflucencer(item.getPercentInflucencer());
            if(StringUtil.isNotEmpty(item.getNombreInscriptionMax()))
                dto.setNombreInscriptionMax(item.getNombreInscriptionMax());
            if(StringUtil.isNotEmpty(item.getNombreCollaboratorInscrit()))
                dto.setNombreCollaboratorInscrit(item.getNombreCollaboratorInscrit());
            if(this.influencer && item.getInfluencer()!=null) {
                dto.setInfluencer(influencerConverter.toDto(item.getInfluencer())) ;

            }
            if(this.couponState && item.getCouponState()!=null) {
                dto.setCouponState(couponStateConverter.toDto(item.getCouponState())) ;

            }


        return dto;
        }
    }

    public void init(boolean value) {
        initObject(value);
    }

    public void initObject(boolean value) {
        this.influencer = value;
        this.couponState = value;
    }
	
    public List<Coupon> toItem(List<CouponDto> dtos) {
        List<Coupon> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (CouponDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<CouponDto> toDto(List<Coupon> items) {
        List<CouponDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (Coupon item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(CouponDto dto, Coupon t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
        if(t.getInfluencer() == null  && dto.getInfluencer() != null){
            t.setInfluencer(new Influencer());
        }else if (t.getInfluencer() != null  && dto.getInfluencer() != null){
            t.setInfluencer(null);
            t.setInfluencer(new Influencer());
        }
        if(t.getCouponState() == null  && dto.getCouponState() != null){
            t.setCouponState(new CouponState());
        }else if (t.getCouponState() != null  && dto.getCouponState() != null){
            t.setCouponState(null);
            t.setCouponState(new CouponState());
        }
        if (dto.getInfluencer() != null)
        influencerConverter.copy(dto.getInfluencer(), t.getInfluencer());
        if (dto.getCouponState() != null)
        couponStateConverter.copy(dto.getCouponState(), t.getCouponState());
    }

    public List<Coupon> copy(List<CouponDto> dtos) {
        List<Coupon> result = new ArrayList<>();
        if (dtos != null) {
            for (CouponDto dto : dtos) {
                Coupon instance = new Coupon();
                copy(dto, instance);
                result.add(instance);
            }
        }
        return result.isEmpty() ? null : result;
    }


    public InfluencerConverter getInfluencerConverter(){
        return this.influencerConverter;
    }
    public void setInfluencerConverter(InfluencerConverter influencerConverter ){
        this.influencerConverter = influencerConverter;
    }
    public CouponStateConverter getCouponStateConverter(){
        return this.couponStateConverter;
    }
    public void setCouponStateConverter(CouponStateConverter couponStateConverter ){
        this.couponStateConverter = couponStateConverter;
    }
    public boolean  isInfluencer(){
        return this.influencer;
    }
    public void  setInfluencer(boolean influencer){
        this.influencer = influencer;
    }
    public boolean  isCouponState(){
        return this.couponState;
    }
    public void  setCouponState(boolean couponState){
        this.couponState = couponState;
    }
}
