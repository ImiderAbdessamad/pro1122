import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {RemoteRepoTypeDto} from './RemoteRepoType.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class RemoteRepoInfoDto extends BaseDto{

    public title: string;

    public username: string;

    public token: string;

    public name: string;

    public remoteRepoType: RemoteRepoTypeDto ;
    public collaborator: CollaboratorDto ;


    constructor() {
        super();

        this.title = '';
        this.username = '';
        this.token = '';
        this.name = '';
        this.remoteRepoType = new RemoteRepoTypeDto() ;
        this.collaborator = new CollaboratorDto() ;

        }

}
