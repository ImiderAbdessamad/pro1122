import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {BlogCriteria} from './BlogCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class BlogCommentCriteria extends BaseCriteria {

    public id: number;
    public creationDate: Date;
    public creationDateFrom: Date;
    public creationDateTo: Date;
    public content: string;
    public contentLike: string;
  public blog: BlogCriteria ;
  public blogs: Array<BlogCriteria> ;

}
