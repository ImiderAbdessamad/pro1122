import {PackagingCriteria} from './PackagingCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PackagingPlanCriteria extends BaseCriteria {

    public id: number;
    public name: string;
    public nameLike: string;
    public code: string;
    public codeLike: string;
     public numberOfMonth: number;
     public numberOfMonthMin: number;
     public numberOfMonthMax: number;
     public price: number;
     public priceMin: number;
     public priceMax: number;
    public description: string;
    public descriptionLike: string;
     public maxEntity: number;
     public maxEntityMin: number;
     public maxEntityMax: number;
     public maxProjet: number;
     public maxProjetMin: number;
     public maxProjetMax: number;
     public maxAttribut: number;
     public maxAttributMin: number;
     public maxAttributMax: number;
     public maxTokenInput: number;
     public maxTokenInputMin: number;
     public maxTokenInputMax: number;
     public maxTokenOutput: number;
     public maxTokenOutputMin: number;
     public maxTokenOutputMax: number;

}
