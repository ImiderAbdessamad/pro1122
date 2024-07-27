package ma.zs.zyn.bean.core.payement;


import java.time.LocalDateTime;


import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import ma.zs.zyn.bean.core.collaborator.Collaborator;
import ma.zs.zyn.bean.core.coupon.Coupon;
import ma.zs.zyn.bean.core.cloud.OffreCloudProvider;
import ma.zs.zyn.bean.core.packaging.Packaging;
import ma.zs.zyn.bean.core.collaborator.Country;
import ma.zs.zyn.bean.core.collaborator.City;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;


import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.zyn.zynerator.bean.BaseEntity;
import jakarta.persistence.*;
import java.util.Objects;
import java.math.BigDecimal;

@Entity
@Table(name = "paiment_collaborator")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="paiment_collaborator_seq",sequenceName="paiment_collaborator_seq",allocationSize=1, initialValue = 1)
public class PaimentCollaborator  extends BaseEntity     {




    @Column(length = 500)
    private String cardHolder;

    @Column(length = 500)
    private String cardNumber;

    @Column(length = 500)
    private String expirationDate;

    @Column(length = 500)
    private String cvc;

    @Column(length = 500)
    private String postal;

    @Column(length = 500)
    private String description;

    private BigDecimal amountToPaid = BigDecimal.ZERO;

    private LocalDateTime startDate ;

    private LocalDateTime endDate ;

    private BigDecimal consumedEntity = BigDecimal.ZERO;

    private BigDecimal consumedProjet = BigDecimal.ZERO;

    private BigDecimal consumedAttribut = BigDecimal.ZERO;

    private BigDecimal consumedTokenInput = BigDecimal.ZERO;

    private BigDecimal consumedTokenOutput = BigDecimal.ZERO;

    private BigDecimal total = BigDecimal.ZERO;

    private BigDecimal basic = BigDecimal.ZERO;

    private BigDecimal discount = BigDecimal.ZERO;

    private BigDecimal remaining = BigDecimal.ZERO;

    private BigDecimal priceCloud = BigDecimal.ZERO;

    private LocalDateTime paiementDate ;

    @Column(columnDefinition = "boolean default false")
    private Boolean deployAndTestOnLine = false;

    private Country country ;
    private City city ;
    private Collaborator collaborator ;
    private Packaging packaging ;
    private PaimentCollaboratorState paimentCollaboratorState ;
    private PaimentCollaboratorType paimentCollaboratorType ;
    private InscriptionCollaborator inscriptionCollaborator ;
    private Coupon coupon ;
    private OffreCloudProvider offreCloudProvider ;


    public PaimentCollaborator(){
        super();
    }

    public PaimentCollaborator(Long id){
        this.id = id;
    }

    public PaimentCollaborator(Long id,String cardNumber){
        this.id = id;
        this.cardNumber = cardNumber ;
    }
    public PaimentCollaborator(String cardNumber){
        this.cardNumber = cardNumber ;
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="paiment_collaborator_seq")
      @Override
    public Long getId(){
        return this.id;
    }
        @Override
    public void setId(Long id){
        this.id = id;
    }
    public String getCardHolder(){
        return this.cardHolder;
    }
    public void setCardHolder(String cardHolder){
        this.cardHolder = cardHolder;
    }
    public String getCardNumber(){
        return this.cardNumber;
    }
    public void setCardNumber(String cardNumber){
        this.cardNumber = cardNumber;
    }
    public String getExpirationDate(){
        return this.expirationDate;
    }
    public void setExpirationDate(String expirationDate){
        this.expirationDate = expirationDate;
    }
    public String getCvc(){
        return this.cvc;
    }
    public void setCvc(String cvc){
        this.cvc = cvc;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country")
    public Country getCountry(){
        return this.country;
    }
    public void setCountry(Country country){
        this.country = country;
    }
    public String getPostal(){
        return this.postal;
    }
    public void setPostal(String postal){
        this.postal = postal;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city")
    public City getCity(){
        return this.city;
    }
    public void setCity(City city){
        this.city = city;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public BigDecimal getAmountToPaid(){
        return this.amountToPaid;
    }
    public void setAmountToPaid(BigDecimal amountToPaid){
        this.amountToPaid = amountToPaid;
    }
    public LocalDateTime getStartDate(){
        return this.startDate;
    }
    public void setStartDate(LocalDateTime startDate){
        this.startDate = startDate;
    }
    public LocalDateTime getEndDate(){
        return this.endDate;
    }
    public void setEndDate(LocalDateTime endDate){
        this.endDate = endDate;
    }
    public BigDecimal getConsumedEntity(){
        return this.consumedEntity;
    }
    public void setConsumedEntity(BigDecimal consumedEntity){
        this.consumedEntity = consumedEntity;
    }
    public BigDecimal getConsumedProjet(){
        return this.consumedProjet;
    }
    public void setConsumedProjet(BigDecimal consumedProjet){
        this.consumedProjet = consumedProjet;
    }
    public BigDecimal getConsumedAttribut(){
        return this.consumedAttribut;
    }
    public void setConsumedAttribut(BigDecimal consumedAttribut){
        this.consumedAttribut = consumedAttribut;
    }
    public BigDecimal getConsumedTokenInput(){
        return this.consumedTokenInput;
    }
    public void setConsumedTokenInput(BigDecimal consumedTokenInput){
        this.consumedTokenInput = consumedTokenInput;
    }
    public BigDecimal getConsumedTokenOutput(){
        return this.consumedTokenOutput;
    }
    public void setConsumedTokenOutput(BigDecimal consumedTokenOutput){
        this.consumedTokenOutput = consumedTokenOutput;
    }
    public BigDecimal getTotal(){
        return this.total;
    }
    public void setTotal(BigDecimal total){
        this.total = total;
    }
    public BigDecimal getBasic(){
        return this.basic;
    }
    public void setBasic(BigDecimal basic){
        this.basic = basic;
    }
    public BigDecimal getDiscount(){
        return this.discount;
    }
    public void setDiscount(BigDecimal discount){
        this.discount = discount;
    }
    public BigDecimal getRemaining(){
        return this.remaining;
    }
    public void setRemaining(BigDecimal remaining){
        this.remaining = remaining;
    }
    public BigDecimal getPriceCloud(){
        return this.priceCloud;
    }
    public void setPriceCloud(BigDecimal priceCloud){
        this.priceCloud = priceCloud;
    }
    public LocalDateTime getPaiementDate(){
        return this.paiementDate;
    }
    public void setPaiementDate(LocalDateTime paiementDate){
        this.paiementDate = paiementDate;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "collaborator")
    public Collaborator getCollaborator(){
        return this.collaborator;
    }
    public void setCollaborator(Collaborator collaborator){
        this.collaborator = collaborator;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "packaging")
    public Packaging getPackaging(){
        return this.packaging;
    }
    public void setPackaging(Packaging packaging){
        this.packaging = packaging;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paiment_collaborator_state")
    public PaimentCollaboratorState getPaimentCollaboratorState(){
        return this.paimentCollaboratorState;
    }
    public void setPaimentCollaboratorState(PaimentCollaboratorState paimentCollaboratorState){
        this.paimentCollaboratorState = paimentCollaboratorState;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paiment_collaborator_type")
    public PaimentCollaboratorType getPaimentCollaboratorType(){
        return this.paimentCollaboratorType;
    }
    public void setPaimentCollaboratorType(PaimentCollaboratorType paimentCollaboratorType){
        this.paimentCollaboratorType = paimentCollaboratorType;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inscription_collaborator")
    public InscriptionCollaborator getInscriptionCollaborator(){
        return this.inscriptionCollaborator;
    }
    public void setInscriptionCollaborator(InscriptionCollaborator inscriptionCollaborator){
        this.inscriptionCollaborator = inscriptionCollaborator;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coupon")
    public Coupon getCoupon(){
        return this.coupon;
    }
    public void setCoupon(Coupon coupon){
        this.coupon = coupon;
    }
    public Boolean  getDeployAndTestOnLine(){
        return this.deployAndTestOnLine;
    }
    public void setDeployAndTestOnLine(Boolean deployAndTestOnLine){
        this.deployAndTestOnLine = deployAndTestOnLine;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "offre_cloud_provider")
    public OffreCloudProvider getOffreCloudProvider(){
        return this.offreCloudProvider;
    }
    public void setOffreCloudProvider(OffreCloudProvider offreCloudProvider){
        this.offreCloudProvider = offreCloudProvider;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PaimentCollaborator paimentCollaborator = (PaimentCollaborator) o;
        return id != null && id.equals(paimentCollaborator.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

