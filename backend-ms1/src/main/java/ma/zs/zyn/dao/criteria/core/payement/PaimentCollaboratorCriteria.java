package  ma.zs.zyn.dao.criteria.core.payement;


import ma.zs.zyn.dao.criteria.core.collaborator.CollaboratorCriteria;
import ma.zs.zyn.dao.criteria.core.coupon.CouponCriteria;
import ma.zs.zyn.dao.criteria.core.cloud.OffreCloudProviderCriteria;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingCriteria;
import ma.zs.zyn.dao.criteria.core.collaborator.CountryCriteria;
import ma.zs.zyn.dao.criteria.core.collaborator.CityCriteria;
import ma.zs.zyn.dao.criteria.core.inscription.InscriptionCollaboratorCriteria;

import ma.zs.zyn.zynerator.criteria.BaseCriteria;

import java.util.List;
import java.time.LocalDateTime;
import java.time.LocalDate;

public class PaimentCollaboratorCriteria extends  BaseCriteria  {

    private String cardHolder;
    private String cardHolderLike;
    private String cardNumber;
    private String cardNumberLike;
    private String expirationDate;
    private String expirationDateLike;
    private String cvc;
    private String cvcLike;
    private String postal;
    private String postalLike;
    private String description;
    private String descriptionLike;
    private String amountToPaid;
    private String amountToPaidMin;
    private String amountToPaidMax;
    private LocalDateTime startDate;
    private LocalDateTime startDateFrom;
    private LocalDateTime startDateTo;
    private LocalDateTime endDate;
    private LocalDateTime endDateFrom;
    private LocalDateTime endDateTo;
    private String consumedEntity;
    private String consumedEntityMin;
    private String consumedEntityMax;
    private String consumedProjet;
    private String consumedProjetMin;
    private String consumedProjetMax;
    private String consumedAttribut;
    private String consumedAttributMin;
    private String consumedAttributMax;
    private String consumedTokenInput;
    private String consumedTokenInputMin;
    private String consumedTokenInputMax;
    private String consumedTokenOutput;
    private String consumedTokenOutputMin;
    private String consumedTokenOutputMax;
    private String total;
    private String totalMin;
    private String totalMax;
    private String basic;
    private String basicMin;
    private String basicMax;
    private String discount;
    private String discountMin;
    private String discountMax;
    private String remaining;
    private String remainingMin;
    private String remainingMax;
    private String priceCloud;
    private String priceCloudMin;
    private String priceCloudMax;
    private LocalDateTime paiementDate;
    private LocalDateTime paiementDateFrom;
    private LocalDateTime paiementDateTo;
    private Boolean deployAndTestOnLine;

    private CountryCriteria country ;
    private List<CountryCriteria> countrys ;
    private CityCriteria city ;
    private List<CityCriteria> citys ;
    private CollaboratorCriteria collaborator ;
    private List<CollaboratorCriteria> collaborators ;
    private PackagingCriteria packaging ;
    private List<PackagingCriteria> packagings ;
    private PaimentCollaboratorStateCriteria paimentCollaboratorState ;
    private List<PaimentCollaboratorStateCriteria> paimentCollaboratorStates ;
    private PaimentCollaboratorTypeCriteria paimentCollaboratorType ;
    private List<PaimentCollaboratorTypeCriteria> paimentCollaboratorTypes ;
    private InscriptionCollaboratorCriteria inscriptionCollaborator ;
    private List<InscriptionCollaboratorCriteria> inscriptionCollaborators ;
    private CouponCriteria coupon ;
    private List<CouponCriteria> coupons ;
    private OffreCloudProviderCriteria offreCloudProvider ;
    private List<OffreCloudProviderCriteria> offreCloudProviders ;


    public String getCardHolder(){
        return this.cardHolder;
    }
    public void setCardHolder(String cardHolder){
        this.cardHolder = cardHolder;
    }
    public String getCardHolderLike(){
        return this.cardHolderLike;
    }
    public void setCardHolderLike(String cardHolderLike){
        this.cardHolderLike = cardHolderLike;
    }

    public String getCardNumber(){
        return this.cardNumber;
    }
    public void setCardNumber(String cardNumber){
        this.cardNumber = cardNumber;
    }
    public String getCardNumberLike(){
        return this.cardNumberLike;
    }
    public void setCardNumberLike(String cardNumberLike){
        this.cardNumberLike = cardNumberLike;
    }

    public String getExpirationDate(){
        return this.expirationDate;
    }
    public void setExpirationDate(String expirationDate){
        this.expirationDate = expirationDate;
    }
    public String getExpirationDateLike(){
        return this.expirationDateLike;
    }
    public void setExpirationDateLike(String expirationDateLike){
        this.expirationDateLike = expirationDateLike;
    }

    public String getCvc(){
        return this.cvc;
    }
    public void setCvc(String cvc){
        this.cvc = cvc;
    }
    public String getCvcLike(){
        return this.cvcLike;
    }
    public void setCvcLike(String cvcLike){
        this.cvcLike = cvcLike;
    }

    public String getPostal(){
        return this.postal;
    }
    public void setPostal(String postal){
        this.postal = postal;
    }
    public String getPostalLike(){
        return this.postalLike;
    }
    public void setPostalLike(String postalLike){
        this.postalLike = postalLike;
    }

    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescriptionLike(){
        return this.descriptionLike;
    }
    public void setDescriptionLike(String descriptionLike){
        this.descriptionLike = descriptionLike;
    }

    public String getAmountToPaid(){
        return this.amountToPaid;
    }
    public void setAmountToPaid(String amountToPaid){
        this.amountToPaid = amountToPaid;
    }   
    public String getAmountToPaidMin(){
        return this.amountToPaidMin;
    }
    public void setAmountToPaidMin(String amountToPaidMin){
        this.amountToPaidMin = amountToPaidMin;
    }
    public String getAmountToPaidMax(){
        return this.amountToPaidMax;
    }
    public void setAmountToPaidMax(String amountToPaidMax){
        this.amountToPaidMax = amountToPaidMax;
    }
      
    public LocalDateTime getStartDate(){
        return this.startDate;
    }
    public void setStartDate(LocalDateTime startDate){
        this.startDate = startDate;
    }
    public LocalDateTime getStartDateFrom(){
        return this.startDateFrom;
    }
    public void setStartDateFrom(LocalDateTime startDateFrom){
        this.startDateFrom = startDateFrom;
    }
    public LocalDateTime getStartDateTo(){
        return this.startDateTo;
    }
    public void setStartDateTo(LocalDateTime startDateTo){
        this.startDateTo = startDateTo;
    }
    public LocalDateTime getEndDate(){
        return this.endDate;
    }
    public void setEndDate(LocalDateTime endDate){
        this.endDate = endDate;
    }
    public LocalDateTime getEndDateFrom(){
        return this.endDateFrom;
    }
    public void setEndDateFrom(LocalDateTime endDateFrom){
        this.endDateFrom = endDateFrom;
    }
    public LocalDateTime getEndDateTo(){
        return this.endDateTo;
    }
    public void setEndDateTo(LocalDateTime endDateTo){
        this.endDateTo = endDateTo;
    }
    public String getConsumedEntity(){
        return this.consumedEntity;
    }
    public void setConsumedEntity(String consumedEntity){
        this.consumedEntity = consumedEntity;
    }   
    public String getConsumedEntityMin(){
        return this.consumedEntityMin;
    }
    public void setConsumedEntityMin(String consumedEntityMin){
        this.consumedEntityMin = consumedEntityMin;
    }
    public String getConsumedEntityMax(){
        return this.consumedEntityMax;
    }
    public void setConsumedEntityMax(String consumedEntityMax){
        this.consumedEntityMax = consumedEntityMax;
    }
      
    public String getConsumedProjet(){
        return this.consumedProjet;
    }
    public void setConsumedProjet(String consumedProjet){
        this.consumedProjet = consumedProjet;
    }   
    public String getConsumedProjetMin(){
        return this.consumedProjetMin;
    }
    public void setConsumedProjetMin(String consumedProjetMin){
        this.consumedProjetMin = consumedProjetMin;
    }
    public String getConsumedProjetMax(){
        return this.consumedProjetMax;
    }
    public void setConsumedProjetMax(String consumedProjetMax){
        this.consumedProjetMax = consumedProjetMax;
    }
      
    public String getConsumedAttribut(){
        return this.consumedAttribut;
    }
    public void setConsumedAttribut(String consumedAttribut){
        this.consumedAttribut = consumedAttribut;
    }   
    public String getConsumedAttributMin(){
        return this.consumedAttributMin;
    }
    public void setConsumedAttributMin(String consumedAttributMin){
        this.consumedAttributMin = consumedAttributMin;
    }
    public String getConsumedAttributMax(){
        return this.consumedAttributMax;
    }
    public void setConsumedAttributMax(String consumedAttributMax){
        this.consumedAttributMax = consumedAttributMax;
    }
      
    public String getConsumedTokenInput(){
        return this.consumedTokenInput;
    }
    public void setConsumedTokenInput(String consumedTokenInput){
        this.consumedTokenInput = consumedTokenInput;
    }   
    public String getConsumedTokenInputMin(){
        return this.consumedTokenInputMin;
    }
    public void setConsumedTokenInputMin(String consumedTokenInputMin){
        this.consumedTokenInputMin = consumedTokenInputMin;
    }
    public String getConsumedTokenInputMax(){
        return this.consumedTokenInputMax;
    }
    public void setConsumedTokenInputMax(String consumedTokenInputMax){
        this.consumedTokenInputMax = consumedTokenInputMax;
    }
      
    public String getConsumedTokenOutput(){
        return this.consumedTokenOutput;
    }
    public void setConsumedTokenOutput(String consumedTokenOutput){
        this.consumedTokenOutput = consumedTokenOutput;
    }   
    public String getConsumedTokenOutputMin(){
        return this.consumedTokenOutputMin;
    }
    public void setConsumedTokenOutputMin(String consumedTokenOutputMin){
        this.consumedTokenOutputMin = consumedTokenOutputMin;
    }
    public String getConsumedTokenOutputMax(){
        return this.consumedTokenOutputMax;
    }
    public void setConsumedTokenOutputMax(String consumedTokenOutputMax){
        this.consumedTokenOutputMax = consumedTokenOutputMax;
    }
      
    public String getTotal(){
        return this.total;
    }
    public void setTotal(String total){
        this.total = total;
    }   
    public String getTotalMin(){
        return this.totalMin;
    }
    public void setTotalMin(String totalMin){
        this.totalMin = totalMin;
    }
    public String getTotalMax(){
        return this.totalMax;
    }
    public void setTotalMax(String totalMax){
        this.totalMax = totalMax;
    }
      
    public String getBasic(){
        return this.basic;
    }
    public void setBasic(String basic){
        this.basic = basic;
    }   
    public String getBasicMin(){
        return this.basicMin;
    }
    public void setBasicMin(String basicMin){
        this.basicMin = basicMin;
    }
    public String getBasicMax(){
        return this.basicMax;
    }
    public void setBasicMax(String basicMax){
        this.basicMax = basicMax;
    }
      
    public String getDiscount(){
        return this.discount;
    }
    public void setDiscount(String discount){
        this.discount = discount;
    }   
    public String getDiscountMin(){
        return this.discountMin;
    }
    public void setDiscountMin(String discountMin){
        this.discountMin = discountMin;
    }
    public String getDiscountMax(){
        return this.discountMax;
    }
    public void setDiscountMax(String discountMax){
        this.discountMax = discountMax;
    }
      
    public String getRemaining(){
        return this.remaining;
    }
    public void setRemaining(String remaining){
        this.remaining = remaining;
    }   
    public String getRemainingMin(){
        return this.remainingMin;
    }
    public void setRemainingMin(String remainingMin){
        this.remainingMin = remainingMin;
    }
    public String getRemainingMax(){
        return this.remainingMax;
    }
    public void setRemainingMax(String remainingMax){
        this.remainingMax = remainingMax;
    }
      
    public String getPriceCloud(){
        return this.priceCloud;
    }
    public void setPriceCloud(String priceCloud){
        this.priceCloud = priceCloud;
    }   
    public String getPriceCloudMin(){
        return this.priceCloudMin;
    }
    public void setPriceCloudMin(String priceCloudMin){
        this.priceCloudMin = priceCloudMin;
    }
    public String getPriceCloudMax(){
        return this.priceCloudMax;
    }
    public void setPriceCloudMax(String priceCloudMax){
        this.priceCloudMax = priceCloudMax;
    }
      
    public LocalDateTime getPaiementDate(){
        return this.paiementDate;
    }
    public void setPaiementDate(LocalDateTime paiementDate){
        this.paiementDate = paiementDate;
    }
    public LocalDateTime getPaiementDateFrom(){
        return this.paiementDateFrom;
    }
    public void setPaiementDateFrom(LocalDateTime paiementDateFrom){
        this.paiementDateFrom = paiementDateFrom;
    }
    public LocalDateTime getPaiementDateTo(){
        return this.paiementDateTo;
    }
    public void setPaiementDateTo(LocalDateTime paiementDateTo){
        this.paiementDateTo = paiementDateTo;
    }
    public Boolean getDeployAndTestOnLine(){
        return this.deployAndTestOnLine;
    }
    public void setDeployAndTestOnLine(Boolean deployAndTestOnLine){
        this.deployAndTestOnLine = deployAndTestOnLine;
    }

    public CountryCriteria getCountry(){
        return this.country;
    }

    public void setCountry(CountryCriteria country){
        this.country = country;
    }
    public List<CountryCriteria> getCountrys(){
        return this.countrys;
    }

    public void setCountrys(List<CountryCriteria> countrys){
        this.countrys = countrys;
    }
    public CityCriteria getCity(){
        return this.city;
    }

    public void setCity(CityCriteria city){
        this.city = city;
    }
    public List<CityCriteria> getCitys(){
        return this.citys;
    }

    public void setCitys(List<CityCriteria> citys){
        this.citys = citys;
    }
    public CollaboratorCriteria getCollaborator(){
        return this.collaborator;
    }

    public void setCollaborator(CollaboratorCriteria collaborator){
        this.collaborator = collaborator;
    }
    public List<CollaboratorCriteria> getCollaborators(){
        return this.collaborators;
    }

    public void setCollaborators(List<CollaboratorCriteria> collaborators){
        this.collaborators = collaborators;
    }
    public PackagingCriteria getPackaging(){
        return this.packaging;
    }

    public void setPackaging(PackagingCriteria packaging){
        this.packaging = packaging;
    }
    public List<PackagingCriteria> getPackagings(){
        return this.packagings;
    }

    public void setPackagings(List<PackagingCriteria> packagings){
        this.packagings = packagings;
    }
    public PaimentCollaboratorStateCriteria getPaimentCollaboratorState(){
        return this.paimentCollaboratorState;
    }

    public void setPaimentCollaboratorState(PaimentCollaboratorStateCriteria paimentCollaboratorState){
        this.paimentCollaboratorState = paimentCollaboratorState;
    }
    public List<PaimentCollaboratorStateCriteria> getPaimentCollaboratorStates(){
        return this.paimentCollaboratorStates;
    }

    public void setPaimentCollaboratorStates(List<PaimentCollaboratorStateCriteria> paimentCollaboratorStates){
        this.paimentCollaboratorStates = paimentCollaboratorStates;
    }
    public PaimentCollaboratorTypeCriteria getPaimentCollaboratorType(){
        return this.paimentCollaboratorType;
    }

    public void setPaimentCollaboratorType(PaimentCollaboratorTypeCriteria paimentCollaboratorType){
        this.paimentCollaboratorType = paimentCollaboratorType;
    }
    public List<PaimentCollaboratorTypeCriteria> getPaimentCollaboratorTypes(){
        return this.paimentCollaboratorTypes;
    }

    public void setPaimentCollaboratorTypes(List<PaimentCollaboratorTypeCriteria> paimentCollaboratorTypes){
        this.paimentCollaboratorTypes = paimentCollaboratorTypes;
    }
    public InscriptionCollaboratorCriteria getInscriptionCollaborator(){
        return this.inscriptionCollaborator;
    }

    public void setInscriptionCollaborator(InscriptionCollaboratorCriteria inscriptionCollaborator){
        this.inscriptionCollaborator = inscriptionCollaborator;
    }
    public List<InscriptionCollaboratorCriteria> getInscriptionCollaborators(){
        return this.inscriptionCollaborators;
    }

    public void setInscriptionCollaborators(List<InscriptionCollaboratorCriteria> inscriptionCollaborators){
        this.inscriptionCollaborators = inscriptionCollaborators;
    }
    public CouponCriteria getCoupon(){
        return this.coupon;
    }

    public void setCoupon(CouponCriteria coupon){
        this.coupon = coupon;
    }
    public List<CouponCriteria> getCoupons(){
        return this.coupons;
    }

    public void setCoupons(List<CouponCriteria> coupons){
        this.coupons = coupons;
    }
    public OffreCloudProviderCriteria getOffreCloudProvider(){
        return this.offreCloudProvider;
    }

    public void setOffreCloudProvider(OffreCloudProviderCriteria offreCloudProvider){
        this.offreCloudProvider = offreCloudProvider;
    }
    public List<OffreCloudProviderCriteria> getOffreCloudProviders(){
        return this.offreCloudProviders;
    }

    public void setOffreCloudProviders(List<OffreCloudProviderCriteria> offreCloudProviders){
        this.offreCloudProviders = offreCloudProviders;
    }
}
