package  ma.zs.zyn.dao.criteria.core.coupon;



import ma.zs.zyn.zynerator.criteria.BaseCriteria;

import java.util.List;

public class CouponCriteria extends  BaseCriteria  {

    private String code;
    private String codeLike;
    private String libelle;
    private String libelleLike;
    private String discountCollaborator;
    private String discountCollaboratorMin;
    private String discountCollaboratorMax;
    private String percentInflucencer;
    private String percentInflucencerMin;
    private String percentInflucencerMax;
    private String nombreInscriptionMax;
    private String nombreInscriptionMaxMin;
    private String nombreInscriptionMaxMax;
    private String nombreCollaboratorInscrit;
    private String nombreCollaboratorInscritMin;
    private String nombreCollaboratorInscritMax;

    private InfluencerCriteria influencer ;
    private List<InfluencerCriteria> influencers ;
    private CouponStateCriteria couponState ;
    private List<CouponStateCriteria> couponStates ;


    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getCodeLike(){
        return this.codeLike;
    }
    public void setCodeLike(String codeLike){
        this.codeLike = codeLike;
    }

    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getLibelleLike(){
        return this.libelleLike;
    }
    public void setLibelleLike(String libelleLike){
        this.libelleLike = libelleLike;
    }

    public String getDiscountCollaborator(){
        return this.discountCollaborator;
    }
    public void setDiscountCollaborator(String discountCollaborator){
        this.discountCollaborator = discountCollaborator;
    }   
    public String getDiscountCollaboratorMin(){
        return this.discountCollaboratorMin;
    }
    public void setDiscountCollaboratorMin(String discountCollaboratorMin){
        this.discountCollaboratorMin = discountCollaboratorMin;
    }
    public String getDiscountCollaboratorMax(){
        return this.discountCollaboratorMax;
    }
    public void setDiscountCollaboratorMax(String discountCollaboratorMax){
        this.discountCollaboratorMax = discountCollaboratorMax;
    }
      
    public String getPercentInflucencer(){
        return this.percentInflucencer;
    }
    public void setPercentInflucencer(String percentInflucencer){
        this.percentInflucencer = percentInflucencer;
    }   
    public String getPercentInflucencerMin(){
        return this.percentInflucencerMin;
    }
    public void setPercentInflucencerMin(String percentInflucencerMin){
        this.percentInflucencerMin = percentInflucencerMin;
    }
    public String getPercentInflucencerMax(){
        return this.percentInflucencerMax;
    }
    public void setPercentInflucencerMax(String percentInflucencerMax){
        this.percentInflucencerMax = percentInflucencerMax;
    }
      
    public String getNombreInscriptionMax(){
        return this.nombreInscriptionMax;
    }
    public void setNombreInscriptionMax(String nombreInscriptionMax){
        this.nombreInscriptionMax = nombreInscriptionMax;
    }   
    public String getNombreInscriptionMaxMin(){
        return this.nombreInscriptionMaxMin;
    }
    public void setNombreInscriptionMaxMin(String nombreInscriptionMaxMin){
        this.nombreInscriptionMaxMin = nombreInscriptionMaxMin;
    }
    public String getNombreInscriptionMaxMax(){
        return this.nombreInscriptionMaxMax;
    }
    public void setNombreInscriptionMaxMax(String nombreInscriptionMaxMax){
        this.nombreInscriptionMaxMax = nombreInscriptionMaxMax;
    }
      
    public String getNombreCollaboratorInscrit(){
        return this.nombreCollaboratorInscrit;
    }
    public void setNombreCollaboratorInscrit(String nombreCollaboratorInscrit){
        this.nombreCollaboratorInscrit = nombreCollaboratorInscrit;
    }   
    public String getNombreCollaboratorInscritMin(){
        return this.nombreCollaboratorInscritMin;
    }
    public void setNombreCollaboratorInscritMin(String nombreCollaboratorInscritMin){
        this.nombreCollaboratorInscritMin = nombreCollaboratorInscritMin;
    }
    public String getNombreCollaboratorInscritMax(){
        return this.nombreCollaboratorInscritMax;
    }
    public void setNombreCollaboratorInscritMax(String nombreCollaboratorInscritMax){
        this.nombreCollaboratorInscritMax = nombreCollaboratorInscritMax;
    }
      

    public InfluencerCriteria getInfluencer(){
        return this.influencer;
    }

    public void setInfluencer(InfluencerCriteria influencer){
        this.influencer = influencer;
    }
    public List<InfluencerCriteria> getInfluencers(){
        return this.influencers;
    }

    public void setInfluencers(List<InfluencerCriteria> influencers){
        this.influencers = influencers;
    }
    public CouponStateCriteria getCouponState(){
        return this.couponState;
    }

    public void setCouponState(CouponStateCriteria couponState){
        this.couponState = couponState;
    }
    public List<CouponStateCriteria> getCouponStates(){
        return this.couponStates;
    }

    public void setCouponStates(List<CouponStateCriteria> couponStates){
        this.couponStates = couponStates;
    }
}
