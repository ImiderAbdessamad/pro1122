import {ProjectTechnologyTypeCriteria} from './ProjectTechnologyTypeCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ProjectTechnologyCriteria extends BaseCriteria {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public defaultDbName: string;
    public defaultDbNameLike: string;
    public defaultUserName: string;
    public defaultUserNameLike: string;
    public defaultUserPassword: string;
    public defaultUserPasswordLike: string;
    public defaultPort: string;
    public defaultPortLike: string;
    public defaultBasePackage: string;
    public defaultBasePackageLike: string;

}
