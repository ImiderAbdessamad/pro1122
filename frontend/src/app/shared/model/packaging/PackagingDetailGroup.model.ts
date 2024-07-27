
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PackagingDetailGroupDto extends BaseDto{

    public code: string;

    public libelle: string;

   public seeMore: null | boolean;



    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.seeMore = null;

        }

}
