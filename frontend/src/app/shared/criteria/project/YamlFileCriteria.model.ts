import {ProjectCriteria} from './ProjectCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class YamlFileCriteria extends BaseCriteria {

    public id: number;
    public title: string;
    public titleLike: string;
    public content: string;
    public contentLike: string;
  public project: ProjectCriteria ;
  public projects: Array<ProjectCriteria> ;

}
