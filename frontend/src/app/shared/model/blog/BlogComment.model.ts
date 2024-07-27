import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {BlogDto} from './Blog.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class BlogCommentDto extends BaseDto{

   public creationDate: Date;

    public content: string;

    public collaborator: CollaboratorDto ;
    public blog: BlogDto ;


    constructor() {
        super();

        this.creationDate = null;
        this.content = '';
        this.blog = new BlogDto() ;

        }

}
