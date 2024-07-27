import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {AgentCriteria} from './AgentCriteria.model';
import {CustumorSupportConversationCategoryCriteria} from './CustumorSupportConversationCategoryCriteria.model';
import {CustumorSupportConversationStateCriteria} from './CustumorSupportConversationStateCriteria.model';
import {CustumorSupportConversationMessageCriteria} from './CustumorSupportConversationMessageCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class CustumorSupportConversationCriteria extends BaseCriteria {

    public id: number;
    public object: string;
    public objectLike: string;
     public ratting: number;
     public rattingMin: number;
     public rattingMax: number;
    public creationDate: Date;
    public creationDateFrom: Date;
    public creationDateTo: Date;
    public closingDate: Date;
    public closingDateFrom: Date;
    public closingDateTo: Date;
    public description: string;
    public descriptionLike: string;
  public agent: AgentCriteria ;
  public agents: Array<AgentCriteria> ;
      public custumorSupportConversationMessages: Array<CustumorSupportConversationMessageCriteria>;

}
