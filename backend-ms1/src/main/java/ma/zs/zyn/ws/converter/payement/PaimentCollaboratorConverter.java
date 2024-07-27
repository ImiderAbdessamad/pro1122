package  ma.zs.zyn.ws.converter.payement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;
import ma.zs.zyn.zynerator.converter.AbstractConverterHelper;

import java.util.ArrayList;
import java.util.List;

import ma.zs.zyn.ws.converter.collaborator.CollaboratorConverter;
import ma.zs.zyn.bean.core.collaborator.Collaborator;
import ma.zs.zyn.ws.converter.coupon.CouponConverter;
import ma.zs.zyn.bean.core.coupon.Coupon;
import ma.zs.zyn.ws.converter.cloud.OffreCloudProviderConverter;
import ma.zs.zyn.bean.core.cloud.OffreCloudProvider;
import ma.zs.zyn.ws.converter.payement.PaimentCollaboratorStateConverter;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorState;
import ma.zs.zyn.ws.converter.payement.PaimentCollaboratorTypeConverter;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType;
import ma.zs.zyn.ws.converter.packaging.PackagingConverter;
import ma.zs.zyn.bean.core.packaging.Packaging;
import ma.zs.zyn.ws.converter.collaborator.CountryConverter;
import ma.zs.zyn.bean.core.collaborator.Country;
import ma.zs.zyn.ws.converter.collaborator.CityConverter;
import ma.zs.zyn.bean.core.collaborator.City;
import ma.zs.zyn.ws.converter.inscription.InscriptionCollaboratorConverter;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;

import ma.zs.zyn.bean.core.packaging.Packaging;


import ma.zs.zyn.zynerator.util.StringUtil;
import ma.zs.zyn.zynerator.converter.AbstractConverter;
import ma.zs.zyn.zynerator.util.DateUtil;
import ma.zs.zyn.bean.core.payement.PaimentCollaborator;
import ma.zs.zyn.ws.dto.payement.PaimentCollaboratorDto;

@Component
public class PaimentCollaboratorConverter {

    @Autowired
    private CollaboratorConverter collaboratorConverter ;
    @Autowired
    private CouponConverter couponConverter ;
    @Autowired
    private OffreCloudProviderConverter offreCloudProviderConverter ;
    @Autowired
    private PaimentCollaboratorStateConverter paimentCollaboratorStateConverter ;
    @Autowired
    private PaimentCollaboratorTypeConverter paimentCollaboratorTypeConverter ;
    @Autowired
    private PackagingConverter packagingConverter ;
    @Autowired
    private CountryConverter countryConverter ;
    @Autowired
    private CityConverter cityConverter ;
    @Autowired
    private InscriptionCollaboratorConverter inscriptionCollaboratorConverter ;
    private boolean country;
    private boolean city;
    private boolean collaborator;
    private boolean packaging;
    private boolean paimentCollaboratorState;
    private boolean paimentCollaboratorType;
    private boolean inscriptionCollaborator;
    private boolean coupon;
    private boolean offreCloudProvider;

    public  PaimentCollaboratorConverter() {
        initObject(true);
    }

    public PaimentCollaborator toItem(PaimentCollaboratorDto dto) {
        if (dto == null) {
            return null;
        } else {
        PaimentCollaborator item = new PaimentCollaborator();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCardHolder()))
                item.setCardHolder(dto.getCardHolder());
            if(StringUtil.isNotEmpty(dto.getCardNumber()))
                item.setCardNumber(dto.getCardNumber());
            if(StringUtil.isNotEmpty(dto.getExpirationDate()))
                item.setExpirationDate(dto.getExpirationDate());
            if(StringUtil.isNotEmpty(dto.getCvc()))
                item.setCvc(dto.getCvc());
            if(StringUtil.isNotEmpty(dto.getPostal()))
                item.setPostal(dto.getPostal());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(StringUtil.isNotEmpty(dto.getAmountToPaid()))
                item.setAmountToPaid(dto.getAmountToPaid());
            if(StringUtil.isNotEmpty(dto.getStartDate()))
                item.setStartDate(DateUtil.stringEnToDate(dto.getStartDate()));
            if(StringUtil.isNotEmpty(dto.getEndDate()))
                item.setEndDate(DateUtil.stringEnToDate(dto.getEndDate()));
            if(StringUtil.isNotEmpty(dto.getConsumedEntity()))
                item.setConsumedEntity(dto.getConsumedEntity());
            if(StringUtil.isNotEmpty(dto.getConsumedProjet()))
                item.setConsumedProjet(dto.getConsumedProjet());
            if(StringUtil.isNotEmpty(dto.getConsumedAttribut()))
                item.setConsumedAttribut(dto.getConsumedAttribut());
            if(StringUtil.isNotEmpty(dto.getConsumedTokenInput()))
                item.setConsumedTokenInput(dto.getConsumedTokenInput());
            if(StringUtil.isNotEmpty(dto.getConsumedTokenOutput()))
                item.setConsumedTokenOutput(dto.getConsumedTokenOutput());
            if(StringUtil.isNotEmpty(dto.getTotal()))
                item.setTotal(dto.getTotal());
            if(StringUtil.isNotEmpty(dto.getBasic()))
                item.setBasic(dto.getBasic());
            if(StringUtil.isNotEmpty(dto.getDiscount()))
                item.setDiscount(dto.getDiscount());
            if(StringUtil.isNotEmpty(dto.getRemaining()))
                item.setRemaining(dto.getRemaining());
            if(StringUtil.isNotEmpty(dto.getPriceCloud()))
                item.setPriceCloud(dto.getPriceCloud());
            if(StringUtil.isNotEmpty(dto.getPaiementDate()))
                item.setPaiementDate(DateUtil.stringEnToDate(dto.getPaiementDate()));
            if(dto.getDeployAndTestOnLine() != null)
                item.setDeployAndTestOnLine(dto.getDeployAndTestOnLine());
            if(this.country && dto.getCountry()!=null)
                item.setCountry(countryConverter.toItem(dto.getCountry())) ;

            if(this.city && dto.getCity()!=null)
                item.setCity(cityConverter.toItem(dto.getCity())) ;

            if(this.collaborator && dto.getCollaborator()!=null)
                item.setCollaborator(collaboratorConverter.toItem(dto.getCollaborator())) ;

            if(dto.getPackaging() != null && dto.getPackaging().getId() != null){
                item.setPackaging(new Packaging());
                item.getPackaging().setId(dto.getPackaging().getId());
                item.getPackaging().setCode(dto.getPackaging().getCode());
            }

            if(this.paimentCollaboratorState && dto.getPaimentCollaboratorState()!=null)
                item.setPaimentCollaboratorState(paimentCollaboratorStateConverter.toItem(dto.getPaimentCollaboratorState())) ;

            if(this.paimentCollaboratorType && dto.getPaimentCollaboratorType()!=null)
                item.setPaimentCollaboratorType(paimentCollaboratorTypeConverter.toItem(dto.getPaimentCollaboratorType())) ;

            if(this.inscriptionCollaborator && dto.getInscriptionCollaborator()!=null)
                item.setInscriptionCollaborator(inscriptionCollaboratorConverter.toItem(dto.getInscriptionCollaborator())) ;

            if(this.coupon && dto.getCoupon()!=null)
                item.setCoupon(couponConverter.toItem(dto.getCoupon())) ;

            if(this.offreCloudProvider && dto.getOffreCloudProvider()!=null)
                item.setOffreCloudProvider(offreCloudProviderConverter.toItem(dto.getOffreCloudProvider())) ;




        return item;
        }
    }


    public PaimentCollaboratorDto toDto(PaimentCollaborator item) {
        if (item == null) {
            return null;
        } else {
            PaimentCollaboratorDto dto = new PaimentCollaboratorDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCardHolder()))
                dto.setCardHolder(item.getCardHolder());
            if(StringUtil.isNotEmpty(item.getCardNumber()))
                dto.setCardNumber(item.getCardNumber());
            if(StringUtil.isNotEmpty(item.getExpirationDate()))
                dto.setExpirationDate(item.getExpirationDate());
            if(StringUtil.isNotEmpty(item.getCvc()))
                dto.setCvc(item.getCvc());
            if(StringUtil.isNotEmpty(item.getPostal()))
                dto.setPostal(item.getPostal());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
            if(StringUtil.isNotEmpty(item.getAmountToPaid()))
                dto.setAmountToPaid(item.getAmountToPaid());
            if(item.getStartDate()!=null)
                dto.setStartDate(DateUtil.dateTimeToString(item.getStartDate()));
            if(item.getEndDate()!=null)
                dto.setEndDate(DateUtil.dateTimeToString(item.getEndDate()));
            if(StringUtil.isNotEmpty(item.getConsumedEntity()))
                dto.setConsumedEntity(item.getConsumedEntity());
            if(StringUtil.isNotEmpty(item.getConsumedProjet()))
                dto.setConsumedProjet(item.getConsumedProjet());
            if(StringUtil.isNotEmpty(item.getConsumedAttribut()))
                dto.setConsumedAttribut(item.getConsumedAttribut());
            if(StringUtil.isNotEmpty(item.getConsumedTokenInput()))
                dto.setConsumedTokenInput(item.getConsumedTokenInput());
            if(StringUtil.isNotEmpty(item.getConsumedTokenOutput()))
                dto.setConsumedTokenOutput(item.getConsumedTokenOutput());
            if(StringUtil.isNotEmpty(item.getTotal()))
                dto.setTotal(item.getTotal());
            if(StringUtil.isNotEmpty(item.getBasic()))
                dto.setBasic(item.getBasic());
            if(StringUtil.isNotEmpty(item.getDiscount()))
                dto.setDiscount(item.getDiscount());
            if(StringUtil.isNotEmpty(item.getRemaining()))
                dto.setRemaining(item.getRemaining());
            if(StringUtil.isNotEmpty(item.getPriceCloud()))
                dto.setPriceCloud(item.getPriceCloud());
            if(item.getPaiementDate()!=null)
                dto.setPaiementDate(DateUtil.dateTimeToString(item.getPaiementDate()));
                dto.setDeployAndTestOnLine(item.getDeployAndTestOnLine());
            if(this.country && item.getCountry()!=null) {
                dto.setCountry(countryConverter.toDto(item.getCountry())) ;

            }
            if(this.city && item.getCity()!=null) {
                dto.setCity(cityConverter.toDto(item.getCity())) ;

            }
            if(this.collaborator && item.getCollaborator()!=null) {
                dto.setCollaborator(collaboratorConverter.toDto(item.getCollaborator())) ;

            }
            if(this.packaging && item.getPackaging()!=null) {
                dto.setPackaging(packagingConverter.toDto(item.getPackaging())) ;

            }
            if(this.paimentCollaboratorState && item.getPaimentCollaboratorState()!=null) {
                dto.setPaimentCollaboratorState(paimentCollaboratorStateConverter.toDto(item.getPaimentCollaboratorState())) ;

            }
            if(this.paimentCollaboratorType && item.getPaimentCollaboratorType()!=null) {
                dto.setPaimentCollaboratorType(paimentCollaboratorTypeConverter.toDto(item.getPaimentCollaboratorType())) ;

            }
            if(this.inscriptionCollaborator && item.getInscriptionCollaborator()!=null) {
                dto.setInscriptionCollaborator(inscriptionCollaboratorConverter.toDto(item.getInscriptionCollaborator())) ;

            }
            if(this.coupon && item.getCoupon()!=null) {
                dto.setCoupon(couponConverter.toDto(item.getCoupon())) ;

            }
            if(this.offreCloudProvider && item.getOffreCloudProvider()!=null) {
                dto.setOffreCloudProvider(offreCloudProviderConverter.toDto(item.getOffreCloudProvider())) ;

            }


        return dto;
        }
    }

    public void init(boolean value) {
        initObject(value);
    }

    public void initObject(boolean value) {
        this.country = value;
        this.city = value;
        this.collaborator = value;
        this.packaging = value;
        this.paimentCollaboratorState = value;
        this.paimentCollaboratorType = value;
        this.inscriptionCollaborator = value;
        this.coupon = value;
        this.offreCloudProvider = value;
    }
	
    public List<PaimentCollaborator> toItem(List<PaimentCollaboratorDto> dtos) {
        List<PaimentCollaborator> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (PaimentCollaboratorDto dto : dtos) {
                items.add(toItem(dto));
            }
        }
        return items;
    }


    public List<PaimentCollaboratorDto> toDto(List<PaimentCollaborator> items) {
        List<PaimentCollaboratorDto> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (PaimentCollaborator item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }


    public void copy(PaimentCollaboratorDto dto, PaimentCollaborator t) {
		BeanUtils.copyProperties(dto, t, AbstractConverterHelper.getNullPropertyNames(dto));
        if(t.getCountry() == null  && dto.getCountry() != null){
            t.setCountry(new Country());
        }else if (t.getCountry() != null  && dto.getCountry() != null){
            t.setCountry(null);
            t.setCountry(new Country());
        }
        if(t.getCity() == null  && dto.getCity() != null){
            t.setCity(new City());
        }else if (t.getCity() != null  && dto.getCity() != null){
            t.setCity(null);
            t.setCity(new City());
        }
        if(t.getCollaborator() == null  && dto.getCollaborator() != null){
            t.setCollaborator(new Collaborator());
        }else if (t.getCollaborator() != null  && dto.getCollaborator() != null){
            t.setCollaborator(null);
            t.setCollaborator(new Collaborator());
        }
        if(t.getPackaging() == null  && dto.getPackaging() != null){
            t.setPackaging(new Packaging());
        }else if (t.getPackaging() != null  && dto.getPackaging() != null){
            t.setPackaging(null);
            t.setPackaging(new Packaging());
        }
        if(t.getPaimentCollaboratorState() == null  && dto.getPaimentCollaboratorState() != null){
            t.setPaimentCollaboratorState(new PaimentCollaboratorState());
        }else if (t.getPaimentCollaboratorState() != null  && dto.getPaimentCollaboratorState() != null){
            t.setPaimentCollaboratorState(null);
            t.setPaimentCollaboratorState(new PaimentCollaboratorState());
        }
        if(t.getPaimentCollaboratorType() == null  && dto.getPaimentCollaboratorType() != null){
            t.setPaimentCollaboratorType(new PaimentCollaboratorType());
        }else if (t.getPaimentCollaboratorType() != null  && dto.getPaimentCollaboratorType() != null){
            t.setPaimentCollaboratorType(null);
            t.setPaimentCollaboratorType(new PaimentCollaboratorType());
        }
        if(t.getInscriptionCollaborator() == null  && dto.getInscriptionCollaborator() != null){
            t.setInscriptionCollaborator(new InscriptionCollaborator());
        }else if (t.getInscriptionCollaborator() != null  && dto.getInscriptionCollaborator() != null){
            t.setInscriptionCollaborator(null);
            t.setInscriptionCollaborator(new InscriptionCollaborator());
        }
        if(t.getCoupon() == null  && dto.getCoupon() != null){
            t.setCoupon(new Coupon());
        }else if (t.getCoupon() != null  && dto.getCoupon() != null){
            t.setCoupon(null);
            t.setCoupon(new Coupon());
        }
        if(t.getOffreCloudProvider() == null  && dto.getOffreCloudProvider() != null){
            t.setOffreCloudProvider(new OffreCloudProvider());
        }else if (t.getOffreCloudProvider() != null  && dto.getOffreCloudProvider() != null){
            t.setOffreCloudProvider(null);
            t.setOffreCloudProvider(new OffreCloudProvider());
        }
        if (dto.getCountry() != null)
        countryConverter.copy(dto.getCountry(), t.getCountry());
        if (dto.getCity() != null)
        cityConverter.copy(dto.getCity(), t.getCity());
        if (dto.getCollaborator() != null)
        collaboratorConverter.copy(dto.getCollaborator(), t.getCollaborator());
        if (dto.getPackaging() != null)
        packagingConverter.copy(dto.getPackaging(), t.getPackaging());
        if (dto.getPaimentCollaboratorState() != null)
        paimentCollaboratorStateConverter.copy(dto.getPaimentCollaboratorState(), t.getPaimentCollaboratorState());
        if (dto.getPaimentCollaboratorType() != null)
        paimentCollaboratorTypeConverter.copy(dto.getPaimentCollaboratorType(), t.getPaimentCollaboratorType());
        if (dto.getInscriptionCollaborator() != null)
        inscriptionCollaboratorConverter.copy(dto.getInscriptionCollaborator(), t.getInscriptionCollaborator());
        if (dto.getCoupon() != null)
        couponConverter.copy(dto.getCoupon(), t.getCoupon());
        if (dto.getOffreCloudProvider() != null)
        offreCloudProviderConverter.copy(dto.getOffreCloudProvider(), t.getOffreCloudProvider());
    }

    public List<PaimentCollaborator> copy(List<PaimentCollaboratorDto> dtos) {
        List<PaimentCollaborator> result = new ArrayList<>();
        if (dtos != null) {
            for (PaimentCollaboratorDto dto : dtos) {
                PaimentCollaborator instance = new PaimentCollaborator();
                copy(dto, instance);
                result.add(instance);
            }
        }
        return result.isEmpty() ? null : result;
    }


    public CollaboratorConverter getCollaboratorConverter(){
        return this.collaboratorConverter;
    }
    public void setCollaboratorConverter(CollaboratorConverter collaboratorConverter ){
        this.collaboratorConverter = collaboratorConverter;
    }
    public CouponConverter getCouponConverter(){
        return this.couponConverter;
    }
    public void setCouponConverter(CouponConverter couponConverter ){
        this.couponConverter = couponConverter;
    }
    public OffreCloudProviderConverter getOffreCloudProviderConverter(){
        return this.offreCloudProviderConverter;
    }
    public void setOffreCloudProviderConverter(OffreCloudProviderConverter offreCloudProviderConverter ){
        this.offreCloudProviderConverter = offreCloudProviderConverter;
    }
    public PaimentCollaboratorStateConverter getPaimentCollaboratorStateConverter(){
        return this.paimentCollaboratorStateConverter;
    }
    public void setPaimentCollaboratorStateConverter(PaimentCollaboratorStateConverter paimentCollaboratorStateConverter ){
        this.paimentCollaboratorStateConverter = paimentCollaboratorStateConverter;
    }
    public PaimentCollaboratorTypeConverter getPaimentCollaboratorTypeConverter(){
        return this.paimentCollaboratorTypeConverter;
    }
    public void setPaimentCollaboratorTypeConverter(PaimentCollaboratorTypeConverter paimentCollaboratorTypeConverter ){
        this.paimentCollaboratorTypeConverter = paimentCollaboratorTypeConverter;
    }
    public PackagingConverter getPackagingConverter(){
        return this.packagingConverter;
    }
    public void setPackagingConverter(PackagingConverter packagingConverter ){
        this.packagingConverter = packagingConverter;
    }
    public CountryConverter getCountryConverter(){
        return this.countryConverter;
    }
    public void setCountryConverter(CountryConverter countryConverter ){
        this.countryConverter = countryConverter;
    }
    public CityConverter getCityConverter(){
        return this.cityConverter;
    }
    public void setCityConverter(CityConverter cityConverter ){
        this.cityConverter = cityConverter;
    }
    public InscriptionCollaboratorConverter getInscriptionCollaboratorConverter(){
        return this.inscriptionCollaboratorConverter;
    }
    public void setInscriptionCollaboratorConverter(InscriptionCollaboratorConverter inscriptionCollaboratorConverter ){
        this.inscriptionCollaboratorConverter = inscriptionCollaboratorConverter;
    }
    public boolean  isCountry(){
        return this.country;
    }
    public void  setCountry(boolean country){
        this.country = country;
    }
    public boolean  isCity(){
        return this.city;
    }
    public void  setCity(boolean city){
        this.city = city;
    }
    public boolean  isCollaborator(){
        return this.collaborator;
    }
    public void  setCollaborator(boolean collaborator){
        this.collaborator = collaborator;
    }
    public boolean  isPackaging(){
        return this.packaging;
    }
    public void  setPackaging(boolean packaging){
        this.packaging = packaging;
    }
    public boolean  isPaimentCollaboratorState(){
        return this.paimentCollaboratorState;
    }
    public void  setPaimentCollaboratorState(boolean paimentCollaboratorState){
        this.paimentCollaboratorState = paimentCollaboratorState;
    }
    public boolean  isPaimentCollaboratorType(){
        return this.paimentCollaboratorType;
    }
    public void  setPaimentCollaboratorType(boolean paimentCollaboratorType){
        this.paimentCollaboratorType = paimentCollaboratorType;
    }
    public boolean  isInscriptionCollaborator(){
        return this.inscriptionCollaborator;
    }
    public void  setInscriptionCollaborator(boolean inscriptionCollaborator){
        this.inscriptionCollaborator = inscriptionCollaborator;
    }
    public boolean  isCoupon(){
        return this.coupon;
    }
    public void  setCoupon(boolean coupon){
        this.coupon = coupon;
    }
    public boolean  isOffreCloudProvider(){
        return this.offreCloudProvider;
    }
    public void  setOffreCloudProvider(boolean offreCloudProvider){
        this.offreCloudProvider = offreCloudProvider;
    }
}
