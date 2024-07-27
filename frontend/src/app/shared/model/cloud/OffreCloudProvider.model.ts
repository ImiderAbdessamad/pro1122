import {CloudProviderDto} from './CloudProvider.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class OffreCloudProviderDto extends BaseDto{

    public code: string;

    public libelle: string;

    public description: string;

    public price: null | number;

    public cloudProvider: CloudProviderDto ;


    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.description = '';
        this.price = null;

        }

}
