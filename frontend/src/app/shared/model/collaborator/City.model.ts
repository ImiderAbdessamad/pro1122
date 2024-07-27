import {CountryDto} from './Country.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CityDto extends BaseDto{

    public code: string;

    public libelle: string;

    public country: CountryDto ;


    constructor() {
        super();

        this.code = '';
        this.libelle = '';

        }

}
