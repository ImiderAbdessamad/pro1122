import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {RemoteRepoInfoCriteria} from './RemoteRepoInfoCriteria.model';
import {ConversationCriteria} from './ConversationCriteria.model';
import {ProjectDetailCriteria} from './ProjectDetailCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ProjectCriteria extends BaseCriteria {

    public id: number;
    public title: string;
    public titleLike: string;
    public titleChat: string;
    public titleChatLike: string;
    public generatedDate: Date;
    public generatedDateFrom: Date;
    public generatedDateTo: Date;
    public chatDateStart: Date;
    public chatDateStartFrom: Date;
    public chatDateStartTo: Date;
    public microService: null | boolean;
    public microFront: null | boolean;
      public conversations: Array<ConversationCriteria>;
      public projectDetails: Array<ProjectDetailCriteria>;

}
