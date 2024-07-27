import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {ForumSubjectCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumSubjectCollaborator.service';
import {ForumSubjectDto} from 'src/app/shared/model/forum/ForumSubject.model';
import {ForumSubjectCriteria} from 'src/app/shared/criteria/forum/ForumSubjectCriteria.model';
@Component({
  selector: 'app-forum-subject-create-collaborator',
  templateUrl: './forum-subject-create-collaborator.component.html'
})
export class ForumSubjectCreateCollaboratorComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



   private _validForumSubjectCode = true;
   private _validForumSubjectLibelle = true;

	constructor(private service: ForumSubjectCollaboratorService , @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
    }



    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new ForumSubjectDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
        this.validForumSubjectCode = value;
        this.validForumSubjectLibelle = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateForumSubjectCode();
        this.validateForumSubjectLibelle();
    }

    public validateForumSubjectCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validForumSubjectCode = false;
        } else {
            this.validForumSubjectCode = true;
        }
    }
    public validateForumSubjectLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validForumSubjectLibelle = false;
        } else {
            this.validForumSubjectLibelle = true;
        }
    }






    get validForumSubjectCode(): boolean {
        return this._validForumSubjectCode;
    }

    set validForumSubjectCode(value: boolean) {
         this._validForumSubjectCode = value;
    }
    get validForumSubjectLibelle(): boolean {
        return this._validForumSubjectLibelle;
    }

    set validForumSubjectLibelle(value: boolean) {
         this._validForumSubjectLibelle = value;
    }



    get items(): Array<ForumSubjectDto> {
        return this.service.items;
    }

    set items(value: Array<ForumSubjectDto>) {
        this.service.items = value;
    }

    get item(): ForumSubjectDto {
        return this.service.item;
    }

    set item(value: ForumSubjectDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): ForumSubjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ForumSubjectCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }

}
