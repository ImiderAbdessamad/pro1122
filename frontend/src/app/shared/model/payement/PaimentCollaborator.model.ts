import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {CouponDto} from '../coupon/Coupon.model';
import {OffreCloudProviderDto} from '../cloud/OffreCloudProvider.model';
import {PaimentCollaboratorStateDto} from './PaimentCollaboratorState.model';
import {PaimentCollaboratorTypeDto} from './PaimentCollaboratorType.model';
import {PackagingDto} from '../packaging/Packaging.model';
import {CountryDto} from '../collaborator/Country.model';
import {CityDto} from '../collaborator/City.model';
import {InscriptionCollaboratorDto} from '../inscription/InscriptionCollaborator.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaimentCollaboratorDto extends BaseDto{

    public cardHolder: string;

    public cardNumber: string;

    public expirationDate: string;

    public cvc: string;

    public postal: string;

    public description: string;

    public amountToPaid: null | number;

   public startDate: Date;

   public endDate: Date;

    public consumedEntity: null | number;

    public consumedProjet: null | number;

    public consumedAttribut: null | number;

    public consumedTokenInput: null | number;

    public consumedTokenOutput: null | number;

    public total: null | number;

    public basic: null | number;

    public discount: null | number;

    public remaining: null | number;

    public priceCloud: null | number;

   public paiementDate: Date;

   public deployAndTestOnLine: null | boolean;

    public country: CountryDto ;
    public city: CityDto ;
    public collaborator: CollaboratorDto ;
    public packaging: PackagingDto ;
    public paimentCollaboratorState: PaimentCollaboratorStateDto ;
    public paimentCollaboratorType: PaimentCollaboratorTypeDto ;
    public inscriptionCollaborator: InscriptionCollaboratorDto ;
    public coupon: CouponDto ;
    public offreCloudProvider: OffreCloudProviderDto ;


    constructor() {
        super();

        this.cardHolder = '';
        this.cardNumber = '';
        this.expirationDate = '';
        this.cvc = '';
        this.postal = '';
        this.description = '';
        this.amountToPaid = null;
        this.startDate = null;
        this.endDate = null;
        this.consumedEntity = null;
        this.consumedProjet = null;
        this.consumedAttribut = null;
        this.consumedTokenInput = null;
        this.consumedTokenOutput = null;
        this.total = null;
        this.basic = null;
        this.discount = null;
        this.remaining = null;
        this.priceCloud = null;
        this.paiementDate = null;
        this.deployAndTestOnLine = null;
        this.city = new CityDto() ;
        this.paimentCollaboratorState = new PaimentCollaboratorStateDto() ;
        this.offreCloudProvider = new OffreCloudProviderDto() ;

        }

}
