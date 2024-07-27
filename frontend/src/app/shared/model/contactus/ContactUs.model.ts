import {ContactUsCategoryDto} from './ContactUsCategory.model';
import {ContactUsStateDto} from './ContactUsState.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ContactUsDto extends BaseDto{

    public phone: string;

    public email: string;

    public object: string;

    public message: string;

    public description: string;

    public contactUsCategory: ContactUsCategoryDto ;
    public contactUsState: ContactUsStateDto ;


    constructor() {
        super();

        this.phone = '';
        this.email = '';
        this.object = '';
        this.message = '';
        this.description = '';
        this.contactUsCategory = new ContactUsCategoryDto() ;
        this.contactUsState = new ContactUsStateDto() ;

        }

}
