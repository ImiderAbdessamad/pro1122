import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {ContactUsStateAdminService} from 'src/app/shared/service/admin/contactus/ContactUsStateAdmin.service';
import {ContactUsStateDto} from 'src/app/shared/model/contactus/ContactUsState.model';
import {ContactUsStateCriteria} from 'src/app/shared/criteria/contactus/ContactUsStateCriteria.model';
@Component({
  selector: 'app-contact-us-state-create-admin',
  templateUrl: './contact-us-state-create-admin.component.html'
})
export class ContactUsStateCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



   private _validContactUsStateCode = true;
   private _validContactUsStateLibelle = true;

	constructor(private service: ContactUsStateAdminService , @Inject(PLATFORM_ID) private platformId? ) {
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
                this.item = new ContactUsStateDto();
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
        this.validContactUsStateCode = value;
        this.validContactUsStateLibelle = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateContactUsStateCode();
        this.validateContactUsStateLibelle();
    }

    public validateContactUsStateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validContactUsStateCode = false;
        } else {
            this.validContactUsStateCode = true;
        }
    }
    public validateContactUsStateLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validContactUsStateLibelle = false;
        } else {
            this.validContactUsStateLibelle = true;
        }
    }






    get validContactUsStateCode(): boolean {
        return this._validContactUsStateCode;
    }

    set validContactUsStateCode(value: boolean) {
         this._validContactUsStateCode = value;
    }
    get validContactUsStateLibelle(): boolean {
        return this._validContactUsStateLibelle;
    }

    set validContactUsStateLibelle(value: boolean) {
         this._validContactUsStateLibelle = value;
    }



    get items(): Array<ContactUsStateDto> {
        return this.service.items;
    }

    set items(value: Array<ContactUsStateDto>) {
        this.service.items = value;
    }

    get item(): ContactUsStateDto {
        return this.service.item;
    }

    set item(value: ContactUsStateDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): ContactUsStateCriteria {
        return this.service.criteria;
    }

    set criteria(value: ContactUsStateCriteria) {
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
