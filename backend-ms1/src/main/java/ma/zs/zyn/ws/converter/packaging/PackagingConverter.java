package  ma.zs.zyn.ws.converter.packaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;
import ma.zs.zyn.zynerator.util.ListUtil;

import ma.zs.zyn.ws.converter.packaging.PackagingDetailGroupConverter;
import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.ws.converter.packaging.PackagingPlanConverter;
import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.ws.converter.packaging.PackagingDetailConverter;
import ma.zs.zyn.bean.core.packaging.PackagingDetail;



import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.packaging.Packaging;
import ma.zs.zyn.ws.dto.packaging.PackagingDto;

@Component
public class PackagingConverter {

    @Autowired
    private PackagingDetailGroupConverter packagingDetailGroupConverter ;
    @Autowired
    private PackagingPlanConverter packagingPlanConverter ;
    @Autowired
    private PackagingDetailConverter packagingDetailConverter ;
    private boolean packagingPlans;
    private boolean packagingDetails;

    public  PackagingConverter() {
        initList(true);
    }

    public Packaging toItem(PackagingDto dto) {
        if (dto == null) {
            return null;
        } else {
        Packaging item = new Packaging();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getName()))
                item.setName(dto.getName());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(StringUtil.isNotEmpty(dto.getPrice()))
                item.setPrice(dto.getPrice());
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

            if(this.packagingPlans && ListUtil.isNotEmpty(dto.getPackagingPlans()))
                item.setPackagingPlans(packagingPlanConverter.toItem(dto.getPackagingPlans()));
            if(this.packagingDetails && ListUtil.isNotEmpty(dto.getPackagingDetails()))
                item.setPackagingDetails(packagingDetailConverter.toItem(dto.getPackagingDetails()));


        return item;
        }
    }


    public PackagingDto toDto(Packaging item) {
        if (item == null) {
            return null;
        } else {
            PackagingDto dto = new PackagingDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getName()))
                dto.setName(item.getName());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
            if(StringUtil.isNotEmpty(item.getPrice()))
                dto.setPrice(item.getPrice());
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
        if(this.packagingPlans && ListUtil.isNotEmpty(item.getPackagingPlans())){
            packagingPlanConverter.init(true);
            packagingPlanConverter.setPackaging(false);
            dto.setPackagingPlans(packagingPlanConverter.toDto(item.getPackagingPlans()));
            packagingPlanConverter.setPackaging(true);

        }
        if(this.packagingDetails && ListUtil.isNotEmpty(item.getPackagingDetails())){
            packagingDetailConverter.init(true);
            packagingDetailConverter.setPackaging(false);
            dto.setPackagingDetails(packagingDetailConverter.toDto(item.getPackagingDetails()));
            packagingDetailConverter.setPackaging(true);

        }


        return dto;
        }
    }

    public void init(boolean value) {
        initList(value);
    }

    public void initList(boolean value) {
        this.packagingPlans = value;
        this.packagingDetails = value;
    }
	
    public List<Packaging> toItem(List<PackagingDto> dtos) {
        List<Packaging> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (PackagingDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<PackagingDto> toDto(List<Packaging> items) {
        List<PackagingDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (Packaging item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(PackagingDto dto, Packaging t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
        if (dto.getPackagingPlans() != null)
            t.setPackagingPlans(packagingPlanConverter.copy(dto.getPackagingPlans()));
        if (dto.getPackagingDetails() != null)
            t.setPackagingDetails(packagingDetailConverter.copy(dto.getPackagingDetails()));
    }

    public List<Packaging> copy(List<PackagingDto> dtos) {
        List<Packaging> result = new ArrayList<>();
        if (dtos != null) {
            for (PackagingDto dto : dtos) {
                Packaging instance = new Packaging();
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
    public PackagingPlanConverter getPackagingPlanConverter(){
        return this.packagingPlanConverter;
    }
    public void setPackagingPlanConverter(PackagingPlanConverter packagingPlanConverter ){
        this.packagingPlanConverter = packagingPlanConverter;
    }
    public PackagingDetailConverter getPackagingDetailConverter(){
        return this.packagingDetailConverter;
    }
    public void setPackagingDetailConverter(PackagingDetailConverter packagingDetailConverter ){
        this.packagingDetailConverter = packagingDetailConverter;
    }
    public boolean  isPackagingPlans(){
        return this.packagingPlans ;
    }
    public void  setPackagingPlans(boolean packagingPlans ){
        this.packagingPlans  = packagingPlans ;
    }
    public boolean  isPackagingDetails(){
        return this.packagingDetails ;
    }
    public void  setPackagingDetails(boolean packagingDetails ){
        this.packagingDetails  = packagingDetails ;
    }
}
