import {PackagingDetailGroupCriteria} from './PackagingDetailGroupCriteria.model';
import {PackagingCriteria} from './PackagingCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PackagingDetailCriteria extends BaseCriteria {

    public id: number;
    public name: string;
    public nameLike: string;
    public exist: null | boolean;
    public description: string;
    public descriptionLike: string;
  public packaging: PackagingCriteria ;
  public packagings: Array<PackagingCriteria> ;
  public packagingDetailGroup: PackagingDetailGroupCriteria ;
  public packagingDetailGroups: Array<PackagingDetailGroupCriteria> ;

}
