import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {RemoteRepoTypeCriteria} from './RemoteRepoTypeCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class RemoteRepoInfoCriteria extends BaseCriteria {

    public id: number;
    public title: string;
    public titleLike: string;
    public username: string;
    public usernameLike: string;
    public token: string;
    public tokenLike: string;
    public name: string;
    public nameLike: string;
  public remoteRepoType: RemoteRepoTypeCriteria ;
  public remoteRepoTypes: Array<RemoteRepoTypeCriteria> ;
  public collaborator: CollaboratorCriteria ;
  public collaborators: Array<CollaboratorCriteria> ;

}
