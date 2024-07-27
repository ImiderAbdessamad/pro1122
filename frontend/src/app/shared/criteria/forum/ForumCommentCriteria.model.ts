import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {ForumCriteria} from './ForumCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ForumCommentCriteria extends BaseCriteria {

    public id: number;
    public creationDate: Date;
    public creationDateFrom: Date;
    public creationDateTo: Date;
    public content: string;
    public contentLike: string;
  public collaborator: CollaboratorCriteria ;
  public collaborators: Array<CollaboratorCriteria> ;
  public forum: ForumCriteria ;
  public forums: Array<ForumCriteria> ;

}
