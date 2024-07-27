import {ProjectTechnologyTypeDto} from './ProjectTechnologyType.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProjectTechnologyDto extends BaseDto{

    public code: string;

    public libelle: string;

    public defaultDbName: string;

    public defaultUserName: string;

    public defaultUserPassword: string;

    public defaultPort: string;

    public defaultBasePackage: string;

    public projectTechnologyType: ProjectTechnologyTypeDto ;


    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.defaultDbName = '';
        this.defaultUserName = '';
        this.defaultUserPassword = '';
        this.defaultPort = '';
        this.defaultBasePackage = '';

        }

}
