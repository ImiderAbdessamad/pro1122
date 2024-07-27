import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {ForumSubjectCriteria} from './ForumSubjectCriteria.model';
import {ForumStateCriteria} from './ForumStateCriteria.model';
import {ForumCommentCriteria} from './ForumCommentCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ForumCriteria extends BaseCriteria {

    public id: number;
    public content: string;
    public contentLike: string;
    public creationDate: Date;
    public creationDateFrom: Date;
    public creationDateTo: Date;
    public publicationDate: Date;
    public publicationDateFrom: Date;
    public publicationDateTo: Date;
    public title: string;
    public titleLike: string;
     public likes: number;
     public likesMin: number;
     public likesMax: number;
     public comments: number;
     public commentsMin: number;
     public commentsMax: number;
    public description: string;
    public descriptionLike: string;
  public forumState: ForumStateCriteria ;
  public forumStates: Array<ForumStateCriteria> ;
      public forumComments: Array<ForumCommentCriteria>;

}
