import {PackagingDetailGroupDto} from './PackagingDetailGroup.model';
import {PackagingDto} from './Packaging.model';

import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PackagingDetailDto extends BaseDto{

    public name: string;

   public exist: null | boolean;

    public description: string;

    public packaging: PackagingDto ;
    public packagingDetailGroup: PackagingDetailGroupDto ;


    constructor() {
        super();

        this.name = '';
        this.exist = null;
        this.description = '';
        this.packaging = new PackagingDto() ;
        this.packagingDetailGroup = new PackagingDetailGroupDto() ;

        }

}
