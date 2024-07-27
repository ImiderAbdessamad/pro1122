import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {PackagingPlanCriteria} from '../packaging/PackagingPlanCriteria.model';
import {InscriptionCollaboratorStateCriteria} from './InscriptionCollaboratorStateCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class InscriptionCollaboratorCriteria extends BaseCriteria {

    public id: number;
    public description: string;
    public descriptionLike: string;
    public startDate: Date;
    public startDateFrom: Date;
    public startDateTo: Date;
    public endDate: Date;
    public endDateFrom: Date;
    public endDateTo: Date;
     public consumedEntity: number;
     public consumedEntityMin: number;
     public consumedEntityMax: number;
     public consumedProjet: number;
     public consumedProjetMin: number;
     public consumedProjetMax: number;
     public consumedAttribut: number;
     public consumedAttributMin: number;
     public consumedAttributMax: number;
     public consumedTokenInput: number;
     public consumedTokenInputMin: number;
     public consumedTokenInputMax: number;
     public consumedTokenOutput: number;
     public consumedTokenOutputMin: number;
     public consumedTokenOutputMax: number;
  public packagingPlan: PackagingPlanCriteria ;
  public packagingPlans: Array<PackagingPlanCriteria> ;
  public inscriptionCollaboratorState: InscriptionCollaboratorStateCriteria ;
  public inscriptionCollaboratorStates: Array<InscriptionCollaboratorStateCriteria> ;

}
