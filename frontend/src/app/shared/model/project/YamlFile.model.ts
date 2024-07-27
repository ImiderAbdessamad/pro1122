import {ProjectDto} from './Project.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class YamlFileDto extends BaseDto{

    public title: string;

    public content: string;

    public project: ProjectDto ;


    constructor() {
        super();

        this.title = '';
        this.content = '';
        this.project = new ProjectDto() ;

        }

}
