import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {ContactUsAdminService} from 'src/app/shared/service/admin/contactus/ContactUsAdmin.service';
import {ContactUsDto} from 'src/app/shared/model/contactus/ContactUs.model';
import {ContactUsCriteria} from 'src/app/shared/criteria/contactus/ContactUsCriteria.model';
import {ContactUsCategoryDto} from 'src/app/shared/model/contactus/ContactUsCategory.model';
import {ContactUsCategoryAdminService} from 'src/app/shared/service/admin/contactus/ContactUsCategoryAdmin.service';
import {ContactUsStateDto} from 'src/app/shared/model/contactus/ContactUsState.model';
import {ContactUsStateAdminService} from 'src/app/shared/service/admin/contactus/ContactUsStateAdmin.service';
@Component({
  selector: 'app-contact-us-create-admin',
  templateUrl: './contact-us-create-admin.component.html'
})
export class ContactUsCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



    private _validContactUsCategoryCode = true;
    private _validContactUsCategoryLibelle = true;
    private _validContactUsStateCode = true;
    private _validContactUsStateLibelle = true;

	constructor(private service: ContactUsAdminService , private contactUsCategoryService: ContactUsCategoryAdminService, private contactUsStateService: ContactUsStateAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.contactUsCategoryService.findAll().subscribe((data) => this.contactUsCategorys = data);
        this.contactUsStateService.findAll().subscribe((data) => this.contactUsStates = data);
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
                this.item = new ContactUsDto();
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
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateContactUsCategory(contactUsCategory: string) {
    const isPermistted = await this.roleService.isPermitted('ContactUsCategory', 'add');
    if(isPermistted) {
         this.contactUsCategory = new ContactUsCategoryDto();
         this.createContactUsCategoryDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateContactUsState(contactUsState: string) {
    const isPermistted = await this.roleService.isPermitted('ContactUsState', 'add');
    if(isPermistted) {
         this.contactUsState = new ContactUsStateDto();
         this.createContactUsStateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get contactUsCategory(): ContactUsCategoryDto {
        return this.contactUsCategoryService.item;
    }
    set contactUsCategory(value: ContactUsCategoryDto) {
        this.contactUsCategoryService.item = value;
    }
    get contactUsCategorys(): Array<ContactUsCategoryDto> {
        return this.contactUsCategoryService.items;
    }
    set contactUsCategorys(value: Array<ContactUsCategoryDto>) {
        this.contactUsCategoryService.items = value;
    }
    get createContactUsCategoryDialog(): boolean {
        return this.contactUsCategoryService.createDialog;
    }
    set createContactUsCategoryDialog(value: boolean) {
        this.contactUsCategoryService.createDialog= value;
    }
    get contactUsState(): ContactUsStateDto {
        return this.contactUsStateService.item;
    }
    set contactUsState(value: ContactUsStateDto) {
        this.contactUsStateService.item = value;
    }
    get contactUsStates(): Array<ContactUsStateDto> {
        return this.contactUsStateService.items;
    }
    set contactUsStates(value: Array<ContactUsStateDto>) {
        this.contactUsStateService.items = value;
    }
    get createContactUsStateDialog(): boolean {
        return this.contactUsStateService.createDialog;
    }
    set createContactUsStateDialog(value: boolean) {
        this.contactUsStateService.createDialog= value;
    }




    get validContactUsCategoryCode(): boolean {
        return this._validContactUsCategoryCode;
    }
    set validContactUsCategoryCode(value: boolean) {
        this._validContactUsCategoryCode = value;
    }
    get validContactUsCategoryLibelle(): boolean {
        return this._validContactUsCategoryLibelle;
    }
    set validContactUsCategoryLibelle(value: boolean) {
        this._validContactUsCategoryLibelle = value;
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


    get items(): Array<ContactUsDto> {
        return this.service.items;
    }

    set items(value: Array<ContactUsDto>) {
        this.service.items = value;
    }

    get item(): ContactUsDto {
        return this.service.item;
    }

    set item(value: ContactUsDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): ContactUsCriteria {
        return this.service.criteria;
    }

    set criteria(value: ContactUsCriteria) {
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
