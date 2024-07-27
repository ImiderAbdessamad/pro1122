import {InfluencerDto} from './Influencer.model';
import {CouponStateDto} from './CouponState.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CouponDto extends BaseDto{

    public code: string;

    public libelle: string;

    public discountCollaborator: null | number;

    public percentInflucencer: null | number;

    public nombreInscriptionMax: null | number;

    public nombreCollaboratorInscrit: null | number;

    public influencer: InfluencerDto ;
    public couponState: CouponStateDto ;


    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.discountCollaborator = null;
        this.percentInflucencer = null;
        this.nombreInscriptionMax = null;
        this.nombreCollaboratorInscrit = null;
        this.influencer = new InfluencerDto() ;
        this.couponState = new CouponStateDto() ;

        }

}
