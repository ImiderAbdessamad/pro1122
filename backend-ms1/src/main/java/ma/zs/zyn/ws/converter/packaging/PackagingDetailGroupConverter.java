package  ma.zs.zyn.ws.converter.packaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;




import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.ws.dto.packaging.PackagingDetailGroupDto;

@Component
public class PackagingDetailGroupConverter {



    public PackagingDetailGroup toItem(PackagingDetailGroupDto dto) {
        if (dto == null) {
            return null;
        } else {
        PackagingDetailGroup item = new PackagingDetailGroup();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(dto.getSeeMore() != null)
                item.setSeeMore(dto.getSeeMore());



        return item;
        }
    }


    public PackagingDetailGroupDto toDto(PackagingDetailGroup item) {
        if (item == null) {
            return null;
        } else {
            PackagingDetailGroupDto dto = new PackagingDetailGroupDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());
                dto.setSeeMore(item.getSeeMore());


        return dto;
        }
    }


	
    public List<PackagingDetailGroup> toItem(List<PackagingDetailGroupDto> dtos) {
        List<PackagingDetailGroup> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (PackagingDetailGroupDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<PackagingDetailGroupDto> toDto(List<PackagingDetailGroup> items) {
        List<PackagingDetailGroupDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (PackagingDetailGroup item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(PackagingDetailGroupDto dto, PackagingDetailGroup t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
    }

    public List<PackagingDetailGroup> copy(List<PackagingDetailGroupDto> dtos) {
        List<PackagingDetailGroup> result = new ArrayList<>();
        if (dtos != null) {
            for (PackagingDetailGroupDto dto : dtos) {
                PackagingDetailGroup instance = new PackagingDetailGroup();
                copy(dto, instance);
                result.add(instance);
            }
        }
        return result.isEmpty() ? null : result;
    }


}
