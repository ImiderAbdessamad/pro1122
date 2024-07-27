
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class BlogSubjectDto extends BaseDto{

    public code: string;

    public libelle: string;



    constructor() {
        super();

        this.code = '';
        this.libelle = '';

        }

}
