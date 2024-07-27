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




import {CustumorSupportConversationCategoryAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationCategoryAdmin.service';
import {CustumorSupportConversationCategoryDto} from 'src/app/shared/model/support/CustumorSupportConversationCategory.model';
import {CustumorSupportConversationCategoryCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationCategoryCriteria.model';



@Component({
  selector: 'app-custumor-support-conversation-category-edit-admin',
  templateUrl: './custumor-support-conversation-category-edit-admin.component.html'
})
export class CustumorSupportConversationCategoryEditAdminComponent implements OnInit {

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



    private _validCustumorSupportConversationCategoryCode = true;
    private _validCustumorSupportConversationCategoryLibelle = true;




    constructor(private service: CustumorSupportConversationCategoryAdminService , @Inject(PLATFORM_ID) private platformId?) {
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
            this.item = new CustumorSupportConversationCategoryDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validCustumorSupportConversationCategoryCode = value;
        this.validCustumorSupportConversationCategoryLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCustumorSupportConversationCategoryCode();
        this.validateCustumorSupportConversationCategoryLibelle();
    }

    public validateCustumorSupportConversationCategoryCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCustumorSupportConversationCategoryCode = false;
        } else {
            this.validCustumorSupportConversationCategoryCode = true;
        }
    }

    public validateCustumorSupportConversationCategoryLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCustumorSupportConversationCategoryLibelle = false;
        } else {
            this.validCustumorSupportConversationCategoryLibelle = true;
        }
    }







    get validCustumorSupportConversationCategoryCode(): boolean {
        return this._validCustumorSupportConversationCategoryCode;
    }
    set validCustumorSupportConversationCategoryCode(value: boolean) {
        this._validCustumorSupportConversationCategoryCode = value;
    }
    get validCustumorSupportConversationCategoryLibelle(): boolean {
        return this._validCustumorSupportConversationCategoryLibelle;
    }
    set validCustumorSupportConversationCategoryLibelle(value: boolean) {
        this._validCustumorSupportConversationCategoryLibelle = value;
    }


	get items(): Array<CustumorSupportConversationCategoryDto> {
        return this.service.items;
    }

    set items(value: Array<CustumorSupportConversationCategoryDto>) {
        this.service.items = value;
    }

    get item(): CustumorSupportConversationCategoryDto {
        return this.service.item;
    }

    set item(value: CustumorSupportConversationCategoryDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CustumorSupportConversationCategoryCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationCategoryCriteria) {
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
