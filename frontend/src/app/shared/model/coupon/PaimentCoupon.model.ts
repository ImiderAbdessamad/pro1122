import {CouponDto} from './Coupon.model';
import {PaimentCouponStateDto} from './PaimentCouponState.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaimentCouponDto extends BaseDto{

    public description: string;

    public total: null | number;

   public paiementDate: Date;

   public paiementDateConfirmation: Date;

    public coupon: CouponDto ;
    public paimentCouponState: PaimentCouponStateDto ;


    constructor() {
        super();

        this.description = '';
        this.total = null;
        this.paiementDate = null;
        this.paiementDateConfirmation = null;

        }

}
