import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {ForumDto} from './Forum.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ForumCommentDto extends BaseDto{

   public creationDate: Date;

    public content: string;

    public collaborator: CollaboratorDto ;
    public forum: ForumDto ;


    constructor() {
        super();

        this.creationDate = null;
        this.content = '';
        this.collaborator = new CollaboratorDto() ;
        this.forum = new ForumDto() ;

        }

}
