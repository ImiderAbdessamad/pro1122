import {CustumorSupportConversationCriteria} from './CustumorSupportConversationCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class CustumorSupportConversationMessageCriteria extends BaseCriteria {

    public id: number;
    public content: string;
    public contentLike: string;
    public collaborator: null | boolean;
    public creationDate: Date;
    public creationDateFrom: Date;
    public creationDateTo: Date;
  public custumorSupportConversation: CustumorSupportConversationCriteria ;
  public custumorSupportConversations: Array<CustumorSupportConversationCriteria> ;

}
