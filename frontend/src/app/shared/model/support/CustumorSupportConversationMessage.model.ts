import {CustumorSupportConversationDto} from './CustumorSupportConversation.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CustumorSupportConversationMessageDto extends BaseDto{

    public content: string;

   public collaborator: null | boolean;

   public creationDate: Date;

    public custumorSupportConversation: CustumorSupportConversationDto ;


    constructor() {
        super();

        this.content = '';
        this.collaborator = null;
        this.creationDate = null;
        this.custumorSupportConversation = new CustumorSupportConversationDto() ;

        }

}
