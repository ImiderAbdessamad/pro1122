import {ProjectDto} from './Project.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ConversationDto extends BaseDto{

    public prompt: string;

    public response: string;

    public project: ProjectDto ;


    constructor() {
        super();

        this.prompt = '';
        this.response = '';
        this.project = new ProjectDto() ;

        }

}
