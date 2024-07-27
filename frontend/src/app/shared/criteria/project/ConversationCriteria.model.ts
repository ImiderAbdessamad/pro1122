import {ProjectCriteria} from './ProjectCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ConversationCriteria extends BaseCriteria {

    public id: number;
    public prompt: string;
    public promptLike: string;
    public response: string;
    public responseLike: string;
  public project: ProjectCriteria ;
  public projects: Array<ProjectCriteria> ;

}
