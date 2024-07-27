import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {BlogSubjectDto} from './BlogSubject.model';
import {BlogCommentDto} from './BlogComment.model';
import {BlogStateDto} from './BlogState.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class BlogDto extends BaseDto{

    public content: string;

   public creationDate: Date;

   public publicationDate: Date;

    public title: string;

    public likes: null | number;

    public comments: null | number;

    public description: string;

    public collaborator: CollaboratorDto ;
    public blogSubject: BlogSubjectDto ;
    public blogState: BlogStateDto ;
     public blogComments: Array<BlogCommentDto>;


    constructor() {
        super();

        this.content = '';
        this.creationDate = null;
        this.publicationDate = null;
        this.title = '';
        this.likes = null;
        this.comments = null;
        this.description = '';
        this.blogComments = new Array<BlogCommentDto>();

        }

}
