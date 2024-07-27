import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {ForumSubjectDto} from './ForumSubject.model';
import {ForumStateDto} from './ForumState.model';
import {ForumCommentDto} from './ForumComment.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ForumDto extends BaseDto{

    public content: string;

   public creationDate: Date;

   public publicationDate: Date;

    public title: string;

    public likes: null | number;

    public comments: null | number;

    public description: string;

    public collaborator: CollaboratorDto ;
    public forumSubject: ForumSubjectDto ;
    public forumState: ForumStateDto ;
     public forumComments: Array<ForumCommentDto>;


    constructor() {
        super();

        this.content = '';
        this.creationDate = null;
        this.publicationDate = null;
        this.title = '';
        this.likes = null;
        this.comments = null;
        this.description = '';
        this.forumState = new ForumStateDto() ;
        this.forumComments = new Array<ForumCommentDto>();

        }

}
