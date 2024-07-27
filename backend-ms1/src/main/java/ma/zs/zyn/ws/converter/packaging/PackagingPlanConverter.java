package  ma.zs.zyn.ws.converter.packaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;

import ma.zs.zyn.ws.converter.packaging.PackagingConverter;
import ma.zs.zyn.bean.core.packaging.Packaging;

import ma.zs.zyn.bean.core.packaging.Packaging;


import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.ws.dto.packaging.PackagingPlanDto;

@Component
public class PackagingPlanConverter {

    @Autowired
    private PackagingConverter packagingConverter ;
    private boolean packaging;

    public  PackagingPlanConverter() {
        initObject(true);
    }

    public PackagingPlan toItem(PackagingPlanDto dto) {
        if (dto == null) {
            return null;
        } else {
        PackagingPlan item = new PackagingPlan();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getName()))
                item.setName(dto.getName());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getNumberOfMonth()))
                item.setNumberOfMonth(dto.getNumberOfMonth());
            if(StringUtil.isNotEmpty(dto.getPrice()))
                item.setPrice(dto.getPrice());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(StringUtil.isNotEmpty(dto.getMaxEntity()))
                item.setMaxEntity(dto.getMaxEntity());
            if(StringUtil.isNotEmpty(dto.getMaxProjet()))
                item.setMaxProjet(dto.getMaxProjet());
            if(StringUtil.isNotEmpty(dto.getMaxAttribut()))
                item.setMaxAttribut(dto.getMaxAttribut());
            if(StringUtil.isNotEmpty(dto.getMaxTokenInput()))
                item.setMaxTokenInput(dto.getMaxTokenInput());
            if(StringUtil.isNotEmpty(dto.getMaxTokenOutput()))
                item.setMaxTokenOutput(dto.getMaxTokenOutput());
            if(dto.getPackaging() != null && dto.getPackaging().getId() != null){
                item.setPackaging(new Packaging());
                item.getPackaging().setId(dto.getPackaging().getId());
                item.getPackaging().setCode(dto.getPackaging().getCode());
            }




        return item;
        }
    }


    public PackagingPlanDto toDto(PackagingPlan item) {
        if (item == null) {
            return null;
        } else {
            PackagingPlanDto dto = new PackagingPlanDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getName()))
                dto.setName(item.getName());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getNumberOfMonth()))
                dto.setNumberOfMonth(item.getNumberOfMonth());
            if(StringUtil.isNotEmpty(item.getPrice()))
                dto.setPrice(item.getPrice());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
            if(StringUtil.isNotEmpty(item.getMaxEntity()))
                dto.setMaxEntity(item.getMaxEntity());
            if(StringUtil.isNotEmpty(item.getMaxProjet()))
                dto.setMaxProjet(item.getMaxProjet());
            if(StringUtil.isNotEmpty(item.getMaxAttribut()))
                dto.setMaxAttribut(item.getMaxAttribut());
            if(StringUtil.isNotEmpty(item.getMaxTokenInput()))
                dto.setMaxTokenInput(item.getMaxTokenInput());
            if(StringUtil.isNotEmpty(item.getMaxTokenOutput()))
                dto.setMaxTokenOutput(item.getMaxTokenOutput());
            if(this.packaging && item.getPackaging()!=null) {
                dto.setPackaging(packagingConverter.toDto(item.getPackaging())) ;

            }


        return dto;
        }
    }

    public void init(boolean value) {
        initObject(value);
    }

    public void initObject(boolean value) {
        this.packaging = value;
    }
	
    public List<PackagingPlan> toItem(List<PackagingPlanDto> dtos) {
        List<PackagingPlan> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (PackagingPlanDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<PackagingPlanDto> toDto(List<PackagingPlan> items) {
        List<PackagingPlanDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (PackagingPlan item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(PackagingPlanDto dto, PackagingPlan t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
        if(t.getPackaging() == null  && dto.getPackaging() != null){
            t.setPackaging(new Packaging());
        }else if (t.getPackaging() != null  && dto.getPackaging() != null){
            t.setPackaging(null);
            t.setPackaging(new Packaging());
        }
        if (dto.getPackaging() != null)
        packagingConverter.copy(dto.getPackaging(), t.getPackaging());
    }

    public List<PackagingPlan> copy(List<PackagingPlanDto> dtos) {
        List<PackagingPlan> result = new ArrayList<>();
        if (dtos != null) {
            for (PackagingPlanDto dto : dtos) {
                PackagingPlan instance = new PackagingPlan();
                copy(dto, instance);
                result.add(instance);
            }
        }
        return result.isEmpty() ? null : result;
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
}
