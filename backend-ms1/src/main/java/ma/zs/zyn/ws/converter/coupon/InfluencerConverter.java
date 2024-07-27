package  ma.zs.zyn.ws.converter.coupon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;




import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.coupon.Influencer;
import ma.zs.zyn.ws.dto.coupon.InfluencerDto;

@Component
public class InfluencerConverter {



    public Influencer toItem(InfluencerDto dto) {
        if (dto == null) {
            return null;
        } else {
        Influencer item = new Influencer();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            item.setEnabled(dto.getEnabled());
            item.setAccountNonExpired(dto.getAccountNonExpired());
            item.setAccountNonLocked(dto.getAccountNonLocked());
            item.setPasswordChanged(dto.getPasswordChanged());
            if(StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if(StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());
            if(StringUtil.isNotEmpty(dto.getAvatar()))
                item.setAvatar(dto.getAvatar());
            if(StringUtil.isNotEmpty(dto.getFullName()))
                item.setFullName(dto.getFullName());
            if(StringUtil.isNotEmpty(dto.getAbout()))
                item.setAbout(dto.getAbout());


            //item.setRoles(dto.getRoles());

        return item;
        }
    }


    public InfluencerDto toDto(Influencer item) {
        if (item == null) {
            return null;
        } else {
            InfluencerDto dto = new InfluencerDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
            if(StringUtil.isNotEmpty(item.getCredentialsNonExpired()))
                dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
            if(StringUtil.isNotEmpty(item.getEnabled()))
                dto.setEnabled(item.getEnabled());
            if(StringUtil.isNotEmpty(item.getAccountNonExpired()))
                dto.setAccountNonExpired(item.getAccountNonExpired());
            if(StringUtil.isNotEmpty(item.getAccountNonLocked()))
                dto.setAccountNonLocked(item.getAccountNonLocked());
            if(StringUtil.isNotEmpty(item.getPasswordChanged()))
                dto.setPasswordChanged(item.getPasswordChanged());
            if(StringUtil.isNotEmpty(item.getUsername()))
                dto.setUsername(item.getUsername());
            if(StringUtil.isNotEmpty(item.getAvatar()))
                dto.setAvatar(item.getAvatar());
            if(StringUtil.isNotEmpty(item.getFullName()))
                dto.setFullName(item.getFullName());
            if(StringUtil.isNotEmpty(item.getAbout()))
                dto.setAbout(item.getAbout());


        return dto;
        }
    }


	
    public List<Influencer> toItem(List<InfluencerDto> dtos) {
        List<Influencer> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (InfluencerDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<InfluencerDto> toDto(List<Influencer> items) {
        List<InfluencerDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (Influencer item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(InfluencerDto dto, Influencer t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
    }

    public List<Influencer> copy(List<InfluencerDto> dtos) {
        List<Influencer> result = new ArrayList<>();
        if (dtos != null) {
            for (InfluencerDto dto : dtos) {
                Influencer instance = new Influencer();
                copy(dto, instance);
                result.add(instance);
            }
        }
        return result.isEmpty() ? null : result;
    }


}
