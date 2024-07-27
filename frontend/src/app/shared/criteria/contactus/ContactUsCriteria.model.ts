import {ContactUsCategoryCriteria} from './ContactUsCategoryCriteria.model';
import {ContactUsStateCriteria} from './ContactUsStateCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ContactUsCriteria extends BaseCriteria {

    public id: number;
    public phone: string;
    public phoneLike: string;
    public email: string;
    public emailLike: string;
    public object: string;
    public objectLike: string;
    public message: string;
    public messageLike: string;
    public description: string;
    public descriptionLike: string;
  public contactUsCategory: ContactUsCategoryCriteria ;
  public contactUsCategorys: Array<ContactUsCategoryCriteria> ;
  public contactUsState: ContactUsStateCriteria ;
  public contactUsStates: Array<ContactUsStateCriteria> ;

}
