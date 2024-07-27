import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {PackagingDetailAdminService} from 'src/app/shared/service/admin/packaging/PackagingDetailAdmin.service';
import {PackagingDetailDto} from 'src/app/shared/model/packaging/PackagingDetail.model';
import {PackagingDetailCriteria} from 'src/app/shared/criteria/packaging/PackagingDetailCriteria.model';
import {PackagingDetailGroupDto} from 'src/app/shared/model/packaging/PackagingDetailGroup.model';
import {PackagingDetailGroupAdminService} from 'src/app/shared/service/admin/packaging/PackagingDetailGroupAdmin.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingAdminService} from 'src/app/shared/service/admin/packaging/PackagingAdmin.service';
@Component({
  selector: 'app-packaging-detail-create-admin',
  templateUrl: './packaging-detail-create-admin.component.html'
})
export class PackagingDetailCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



    private _validPackagingCode = true;
    private _validPackagingDetailGroupCode = true;
    private _validPackagingDetailGroupLibelle = true;

	constructor(private service: PackagingDetailAdminService , private packagingDetailGroupService: PackagingDetailGroupAdminService, private packagingService: PackagingAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.packagingService.findAll().subscribe((data) => this.packagings = data);
        this.packagingDetailGroupService.findAll().subscribe((data) => this.packagingDetailGroups = data);
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
                this.item = new PackagingDetailDto();
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



    public async openCreatePackagingDetailGroup(packagingDetailGroup: string) {
    const isPermistted = await this.roleService.isPermitted('PackagingDetailGroup', 'add');
    if(isPermistted) {
         this.packagingDetailGroup = new PackagingDetailGroupDto();
         this.createPackagingDetailGroupDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreatePackaging(packaging: string) {
    const isPermistted = await this.roleService.isPermitted('Packaging', 'add');
    if(isPermistted) {
         this.packaging = new PackagingDto();
         this.createPackagingDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get packagingDetailGroup(): PackagingDetailGroupDto {
        return this.packagingDetailGroupService.item;
    }
    set packagingDetailGroup(value: PackagingDetailGroupDto) {
        this.packagingDetailGroupService.item = value;
    }
    get packagingDetailGroups(): Array<PackagingDetailGroupDto> {
        return this.packagingDetailGroupService.items;
    }
    set packagingDetailGroups(value: Array<PackagingDetailGroupDto>) {
        this.packagingDetailGroupService.items = value;
    }
    get createPackagingDetailGroupDialog(): boolean {
        return this.packagingDetailGroupService.createDialog;
    }
    set createPackagingDetailGroupDialog(value: boolean) {
        this.packagingDetailGroupService.createDialog= value;
    }
    get packaging(): PackagingDto {
        return this.packagingService.item;
    }
    set packaging(value: PackagingDto) {
        this.packagingService.item = value;
    }
    get packagings(): Array<PackagingDto> {
        return this.packagingService.items;
    }
    set packagings(value: Array<PackagingDto>) {
        this.packagingService.items = value;
    }
    get createPackagingDialog(): boolean {
        return this.packagingService.createDialog;
    }
    set createPackagingDialog(value: boolean) {
        this.packagingService.createDialog= value;
    }




    get validPackagingCode(): boolean {
        return this._validPackagingCode;
    }
    set validPackagingCode(value: boolean) {
        this._validPackagingCode = value;
    }
    get validPackagingDetailGroupCode(): boolean {
        return this._validPackagingDetailGroupCode;
    }
    set validPackagingDetailGroupCode(value: boolean) {
        this._validPackagingDetailGroupCode = value;
    }
    get validPackagingDetailGroupLibelle(): boolean {
        return this._validPackagingDetailGroupLibelle;
    }
    set validPackagingDetailGroupLibelle(value: boolean) {
        this._validPackagingDetailGroupLibelle = value;
    }


    get items(): Array<PackagingDetailDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingDetailDto>) {
        this.service.items = value;
    }

    get item(): PackagingDetailDto {
        return this.service.item;
    }

    set item(value: PackagingDetailDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PackagingDetailCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingDetailCriteria) {
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
