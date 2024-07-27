import {CouponCriteria} from './CouponCriteria.model';
import {PaimentCouponStateCriteria} from './PaimentCouponStateCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PaimentCouponCriteria extends BaseCriteria {

    public id: number;
    public description: string;
    public descriptionLike: string;
     public total: number;
     public totalMin: number;
     public totalMax: number;
    public paiementDate: Date;
    public paiementDateFrom: Date;
    public paiementDateTo: Date;
    public paiementDateConfirmation: Date;
    public paiementDateConfirmationFrom: Date;
    public paiementDateConfirmationTo: Date;

}
