import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {CouponCriteria} from '../coupon/CouponCriteria.model';
import {OffreCloudProviderCriteria} from '../cloud/OffreCloudProviderCriteria.model';
import {PaimentCollaboratorStateCriteria} from './PaimentCollaboratorStateCriteria.model';
import {PaimentCollaboratorTypeCriteria} from './PaimentCollaboratorTypeCriteria.model';
import {PackagingCriteria} from '../packaging/PackagingCriteria.model';
import {CountryCriteria} from '../collaborator/CountryCriteria.model';
import {CityCriteria} from '../collaborator/CityCriteria.model';
import {InscriptionCollaboratorCriteria} from '../inscription/InscriptionCollaboratorCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PaimentCollaboratorCriteria extends BaseCriteria {

    public id: number;
    public cardHolder: string;
    public cardHolderLike: string;
    public cardNumber: string;
    public cardNumberLike: string;
    public expirationDate: string;
    public expirationDateLike: string;
    public cvc: string;
    public cvcLike: string;
    public postal: string;
    public postalLike: string;
    public description: string;
    public descriptionLike: string;
     public amountToPaid: number;
     public amountToPaidMin: number;
     public amountToPaidMax: number;
    public startDate: Date;
    public startDateFrom: Date;
    public startDateTo: Date;
    public endDate: Date;
    public endDateFrom: Date;
    public endDateTo: Date;
     public consumedEntity: number;
     public consumedEntityMin: number;
     public consumedEntityMax: number;
     public consumedProjet: number;
     public consumedProjetMin: number;
     public consumedProjetMax: number;
     public consumedAttribut: number;
     public consumedAttributMin: number;
     public consumedAttributMax: number;
     public consumedTokenInput: number;
     public consumedTokenInputMin: number;
     public consumedTokenInputMax: number;
     public consumedTokenOutput: number;
     public consumedTokenOutputMin: number;
     public consumedTokenOutputMax: number;
     public total: number;
     public totalMin: number;
     public totalMax: number;
     public basic: number;
     public basicMin: number;
     public basicMax: number;
     public discount: number;
     public discountMin: number;
     public discountMax: number;
     public remaining: number;
     public remainingMin: number;
     public remainingMax: number;
     public priceCloud: number;
     public priceCloudMin: number;
     public priceCloudMax: number;
    public paiementDate: Date;
    public paiementDateFrom: Date;
    public paiementDateTo: Date;
    public deployAndTestOnLine: null | boolean;
  public city: CityCriteria ;
  public citys: Array<CityCriteria> ;
  public paimentCollaboratorState: PaimentCollaboratorStateCriteria ;
  public paimentCollaboratorStates: Array<PaimentCollaboratorStateCriteria> ;
  public offreCloudProvider: OffreCloudProviderCriteria ;
  public offreCloudProviders: Array<OffreCloudProviderCriteria> ;

}