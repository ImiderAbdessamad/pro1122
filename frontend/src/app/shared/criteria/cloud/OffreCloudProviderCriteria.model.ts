import {CloudProviderCriteria} from './CloudProviderCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class OffreCloudProviderCriteria extends BaseCriteria {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public description: string;
    public descriptionLike: string;
     public price: number;
     public priceMin: number;
     public priceMax: number;

}
