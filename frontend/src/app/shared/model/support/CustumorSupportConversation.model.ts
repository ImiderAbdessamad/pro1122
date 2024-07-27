import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {AgentDto} from './Agent.model';
import {CustumorSupportConversationCategoryDto} from './CustumorSupportConversationCategory.model';
import {CustumorSupportConversationStateDto} from './CustumorSupportConversationState.model';
import {CustumorSupportConversationMessageDto} from './CustumorSupportConversationMessage.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CustumorSupportConversationDto extends BaseDto{

    public object: string;

    public ratting: null | number;

   public creationDate: Date;

   public closingDate: Date;

    public description: string;

    public collaborator: CollaboratorDto ;
    public agent: AgentDto ;
    public custumorSupportConversationCategory: CustumorSupportConversationCategoryDto ;
    public custumorSupportConversationState: CustumorSupportConversationStateDto ;
     public custumorSupportConversationMessages: Array<CustumorSupportConversationMessageDto>;


    constructor() {
        super();

        this.object = '';
        this.ratting = null;
        this.creationDate = null;
        this.closingDate = null;
        this.description = '';
        this.agent = new AgentDto() ;
        this.custumorSupportConversationMessages = new Array<CustumorSupportConversationMessageDto>();

        }

}
