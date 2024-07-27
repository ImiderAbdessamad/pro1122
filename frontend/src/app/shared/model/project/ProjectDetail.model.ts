import {ProjectDto} from './Project.model';
import {ProjectTechnologyDto} from './ProjectTechnology.model';
import {ProjectTechnologyProfileDto} from './ProjectTechnologyProfile.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProjectDetailDto extends BaseDto{

    public title: string;

    public dbName: string;

    public dbPassword: string;

    public dbUserName: string;

    public basePackage: string;

    public msName: string;

    public port: string;

    public portDev: string;

    public portTest: string;

    public portProd: string;

   public enabled: null | boolean;

    public projectTechnology: ProjectTechnologyDto ;
    public project: ProjectDto ;
    public projectTechnologyProfile: ProjectTechnologyProfileDto ;


    constructor() {
        super();

        this.title = '';
        this.dbName = '';
        this.dbPassword = '';
        this.dbUserName = '';
        this.basePackage = '';
        this.msName = '';
        this.port = '';
        this.portDev = '';
        this.portTest = '';
        this.portProd = '';
        this.enabled = null;
        this.projectTechnology = new ProjectTechnologyDto() ;
        this.project = new ProjectDto() ;
        this.projectTechnologyProfile = new ProjectTechnologyProfileDto() ;

        }

}
