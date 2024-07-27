import {ProjectCriteria} from './ProjectCriteria.model';
import {ProjectTechnologyCriteria} from './ProjectTechnologyCriteria.model';
import {ProjectTechnologyProfileCriteria} from './ProjectTechnologyProfileCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ProjectDetailCriteria extends BaseCriteria {

    public id: number;
    public title: string;
    public titleLike: string;
    public dbName: string;
    public dbNameLike: string;
    public dbPassword: string;
    public dbPasswordLike: string;
    public dbUserName: string;
    public dbUserNameLike: string;
    public basePackage: string;
    public basePackageLike: string;
    public msName: string;
    public msNameLike: string;
    public port: string;
    public portLike: string;
    public portDev: string;
    public portDevLike: string;
    public portTest: string;
    public portTestLike: string;
    public portProd: string;
    public portProdLike: string;
    public enabled: null | boolean;
  public projectTechnology: ProjectTechnologyCriteria ;
  public projectTechnologys: Array<ProjectTechnologyCriteria> ;
  public project: ProjectCriteria ;
  public projects: Array<ProjectCriteria> ;
  public projectTechnologyProfile: ProjectTechnologyProfileCriteria ;
  public projectTechnologyProfiles: Array<ProjectTechnologyProfileCriteria> ;

}
