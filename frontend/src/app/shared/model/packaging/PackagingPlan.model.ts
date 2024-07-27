import {PackagingDto} from './Packaging.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PackagingPlanDto extends BaseDto{

    public name: string;

    public code: string;

    public numberOfMonth: null | number;

    public price: null | number;

    public description: string;

    public maxEntity: null | number;

    public maxProjet: null | number;

    public maxAttribut: null | number;

    public maxTokenInput: null | number;

    public maxTokenOutput: null | number;

    public packaging: PackagingDto ;


    constructor() {
        super();

        this.name = '';
        this.code = '';
        this.numberOfMonth = null;
        this.price = null;
        this.description = '';
        this.maxEntity = null;
        this.maxProjet = null;
        this.maxAttribut = null;
        this.maxTokenInput = null;
        this.maxTokenOutput = null;

        }

}
