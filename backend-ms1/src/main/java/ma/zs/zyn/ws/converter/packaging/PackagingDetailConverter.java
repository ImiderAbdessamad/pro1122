package  ma.zs.zyn.ws.converter.packaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;

import ma.zs.zyn.ws.converter.packaging.PackagingDetailGroupConverter;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.ws.converter.packaging.PackagingConverter;
import ma.zs.zyn.bean.core.packaging.Packaging;

import ma.zs.zyn.bean.core.packaging.Packaging;


import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.ws.dto.packaging.PackagingDetailDto;

@Component
public class PackagingDetailConverter {

    @Autowired
    private PackagingDetailGroupConverter packagingDetailGroupConverter ;
    @Autowired
    private PackagingConverter packagingConverter ;
    private boolean packaging;
    private boolean packagingDetailGroup;

    public  PackagingDetailConverter() {
        initObject(true);
    }

    public PackagingDetail toItem(PackagingDetailDto dto) {
        if (dto == null) {
            return null;
        } else {
        PackagingDetail item = new PackagingDetail();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getName()))
                item.setName(dto.getName());
            if(dto.getExist() != null)
                item.setExist(dto.getExist());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(dto.getPackaging() != null && dto.getPackaging().getId() != null){
                item.setPackaging(new Packaging());
                item.getPackaging().setId(dto.getPackaging().getId());
                item.getPackaging().setCode(dto.getPackaging().getCode());
            }

            if(this.packagingDetailGroup && dto.getPackagingDetailGroup()!=null)
                item.setPackagingDetailGroup(packagingDetailGroupConverter.toItem(dto.getPackagingDetailGroup())) ;




        return item;
        }
    }


    public PackagingDetailDto toDto(PackagingDetail item) {
        if (item == null) {
            return null;
        } else {
            PackagingDetailDto dto = new PackagingDetailDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getName()))
                dto.setName(item.getName());
                dto.setExist(item.getExist());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
            if(this.packaging && item.getPackaging()!=null) {
                dto.setPackaging(packagingConverter.toDto(item.getPackaging())) ;

            }
            if(this.packagingDetailGroup && item.getPackagingDetailGroup()!=null) {
                dto.setPackagingDetailGroup(packagingDetailGroupConverter.toDto(item.getPackagingDetailGroup())) ;

            }


        return dto;
        }
    }

    public void init(boolean value) {
        initObject(value);
    }

    public void initObject(boolean value) {
        this.packaging = value;
        this.packagingDetailGroup = value;
    }
	
    public List<PackagingDetail> toItem(List<PackagingDetailDto> dtos) {
        List<PackagingDetail> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (PackagingDetailDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<PackagingDetailDto> toDto(List<PackagingDetail> items) {
        List<PackagingDetailDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (PackagingDetail item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(PackagingDetailDto dto, PackagingDetail t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
        if(t.getPackaging() == null  && dto.getPackaging() != null){
            t.setPackaging(new Packaging());
        }else if (t.getPackaging() != null  && dto.getPackaging() != null){
            t.setPackaging(null);
            t.setPackaging(new Packaging());
        }
        if(t.getPackagingDetailGroup() == null  && dto.getPackagingDetailGroup() != null){
            t.setPackagingDetailGroup(new PackagingDetailGroup());
        }else if (t.getPackagingDetailGroup() != null  && dto.getPackagingDetailGroup() != null){
            t.setPackagingDetailGroup(null);
            t.setPackagingDetailGroup(new PackagingDetailGroup());
        }
        if (dto.getPackaging() != null)
        packagingConverter.copy(dto.getPackaging(), t.getPackaging());
        if (dto.getPackagingDetailGroup() != null)
        packagingDetailGroupConverter.copy(dto.getPackagingDetailGroup(), t.getPackagingDetailGroup());
    }

    public List<PackagingDetail> copy(List<PackagingDetailDto> dtos) {
        List<PackagingDetail> result = new ArrayList<>();
        if (dtos != null) {
            for (PackagingDetailDto dto : dtos) {
                PackagingDetail instance = new PackagingDetail();
                copy(dto, instance);
                result.add(instance);
            }
        }
        return result.isEmpty() ? null : result;
    }


    public PackagingDetailGroupConverter getPackagingDetailGroupConverter(){
        return this.packagingDetailGroupConverter;
    }
    public void setPackagingDetailGroupConverter(PackagingDetailGroupConverter packagingDetailGroupConverter ){
        this.packagingDetailGroupConverter = packagingDetailGroupConverter;
    }
    public PackagingConverter getPackagingConverter(){
        return this.packagingConverter;
    }
    public void setPackagingConverter(PackagingConverter packagingConverter ){
        this.packagingConverter = packagingConverter;
    }
    public boolean  isPackaging(){
        return this.packaging;
    }
    public void  setPackaging(boolean packaging){
        this.packaging = packaging;
    }
    public boolean  isPackagingDetailGroup(){
        return this.packagingDetailGroup;
    }
    public void  setPackagingDetailGroup(boolean packagingDetailGroup){
        this.packagingDetailGroup = packagingDetailGroup;
    }
}
