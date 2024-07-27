import {InfluencerCriteria} from './InfluencerCriteria.model';
import {CouponStateCriteria} from './CouponStateCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class CouponCriteria extends BaseCriteria {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public discountCollaborator: number;
     public discountCollaboratorMin: number;
     public discountCollaboratorMax: number;
     public percentInflucencer: number;
     public percentInflucencerMin: number;
     public percentInflucencerMax: number;
     public nombreInscriptionMax: number;
     public nombreInscriptionMaxMin: number;
     public nombreInscriptionMaxMax: number;
     public nombreCollaboratorInscrit: number;
     public nombreCollaboratorInscritMin: number;
     public nombreCollaboratorInscritMax: number;
  public influencer: InfluencerCriteria ;
  public influencers: Array<InfluencerCriteria> ;
  public couponState: CouponStateCriteria ;
  public couponStates: Array<CouponStateCriteria> ;

}
