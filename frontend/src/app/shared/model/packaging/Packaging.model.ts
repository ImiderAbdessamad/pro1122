import {PackagingPlanDto} from './PackagingPlan.model';
import {PackagingDetailDto} from './PackagingDetail.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PackagingDto extends BaseDto{

    public name: string;

    public code: string;

    public description: string;

    public price: null | number;

    public maxEntity: null | number;

    public maxProjet: null | number;

    public maxAttribut: null | number;

    public maxTokenInput: null | number;

    public maxTokenOutput: null | number;

     public packagingPlans: Array<PackagingPlanDto>;
     public packagingDetails: Array<PackagingDetailDto>;


    constructor() {
        super();

        this.name = '';
        this.code = '';
        this.description = '';
        this.price = null;
        this.maxEntity = null;
        this.maxProjet = null;
        this.maxAttribut = null;
        this.maxTokenInput = null;
        this.maxTokenOutput = null;
        this.packagingPlans = new Array<PackagingPlanDto>();
        this.packagingDetails = new Array<PackagingDetailDto>();

        }

}
