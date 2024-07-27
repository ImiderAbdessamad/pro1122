import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {CustumorSupportConversationStateAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationStateAdmin.service';
import {CustumorSupportConversationStateDto} from 'src/app/shared/model/support/CustumorSupportConversationState.model';
import {CustumorSupportConversationStateCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationStateCriteria.model';



@Component({
  selector: 'app-custumor-support-conversation-state-edit-admin',
  templateUrl: './custumor-support-conversation-state-edit-admin.component.html'
})
export class CustumorSupportConversationStateEditAdminComponent implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;



    private _validCustumorSupportConversationStateCode = true;
    private _validCustumorSupportConversationStateLibelle = true;




    constructor(private service: CustumorSupportConversationStateAdminService , @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
    }

    public prepareEdit() {
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new CustumorSupportConversationStateDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validCustumorSupportConversationStateCode = value;
        this.validCustumorSupportConversationStateLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCustumorSupportConversationStateCode();
        this.validateCustumorSupportConversationStateLibelle();
    }

    public validateCustumorSupportConversationStateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCustumorSupportConversationStateCode = false;
        } else {
            this.validCustumorSupportConversationStateCode = true;
        }
    }

    public validateCustumorSupportConversationStateLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCustumorSupportConversationStateLibelle = false;
        } else {
            this.validCustumorSupportConversationStateLibelle = true;
        }
    }







    get validCustumorSupportConversationStateCode(): boolean {
        return this._validCustumorSupportConversationStateCode;
    }
    set validCustumorSupportConversationStateCode(value: boolean) {
        this._validCustumorSupportConversationStateCode = value;
    }
    get validCustumorSupportConversationStateLibelle(): boolean {
        return this._validCustumorSupportConversationStateLibelle;
    }
    set validCustumorSupportConversationStateLibelle(value: boolean) {
        this._validCustumorSupportConversationStateLibelle = value;
    }


	get items(): Array<CustumorSupportConversationStateDto> {
        return this.service.items;
    }

    set items(value: Array<CustumorSupportConversationStateDto>) {
        this.service.items = value;
    }

    get item(): CustumorSupportConversationStateDto {
        return this.service.item;
    }

    set item(value: CustumorSupportConversationStateDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CustumorSupportConversationStateCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationStateCriteria) {
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
