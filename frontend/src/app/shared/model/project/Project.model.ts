import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {RemoteRepoInfoDto} from './RemoteRepoInfo.model';
import {ConversationDto} from './Conversation.model';
import {ProjectDetailDto} from './ProjectDetail.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProjectDto extends BaseDto{

    public title: string;

    public titleChat: string;

   public generatedDate: Date;

   public chatDateStart: Date;

   public microService: null | boolean;

   public microFront: null | boolean;

    public collaborator: CollaboratorDto ;
    public remoteRepoInfo: RemoteRepoInfoDto ;
     public conversations: Array<ConversationDto>;
     public projectDetails: Array<ProjectDetailDto>;


    constructor() {
        super();

        this.title = '';
        this.titleChat = '';
        this.generatedDate = null;
        this.chatDateStart = null;
        this.microService = null;
        this.microFront = null;
        this.conversations = new Array<ConversationDto>();
        this.projectDetails = new Array<ProjectDetailDto>();

        }

}
