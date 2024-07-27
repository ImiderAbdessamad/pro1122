import {CollaboratorDto} from '../collaborator/Collaborator.model';
import {PackagingPlanDto} from '../packaging/PackagingPlan.model';
import {InscriptionCollaboratorStateDto} from './InscriptionCollaboratorState.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class InscriptionCollaboratorDto extends BaseDto{

    public description: string;

   public startDate: Date;

   public endDate: Date;

    public consumedEntity: null | number;

    public consumedProjet: null | number;

    public consumedAttribut: null | number;

    public consumedTokenInput: null | number;

    public consumedTokenOutput: null | number;

    public collaborator: CollaboratorDto ;
    public packagingPlan: PackagingPlanDto ;
    public inscriptionCollaboratorState: InscriptionCollaboratorStateDto ;


    constructor() {
        super();

        this.description = '';
        this.startDate = null;
        this.endDate = null;
        this.consumedEntity = null;
        this.consumedProjet = null;
        this.consumedAttribut = null;
        this.consumedTokenInput = null;
        this.consumedTokenOutput = null;
        this.packagingPlan = new PackagingPlanDto() ;
        this.inscriptionCollaboratorState = new InscriptionCollaboratorStateDto() ;

        }

}
