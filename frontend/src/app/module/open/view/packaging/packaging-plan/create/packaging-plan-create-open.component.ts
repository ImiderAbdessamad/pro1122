import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {PackagingPlanOpenService} from 'src/app/shared/service/open/packaging/PackagingPlanOpen.service';
import {PackagingPlanDto} from 'src/app/shared/model/packaging/PackagingPlan.model';
import {PackagingPlanCriteria} from 'src/app/shared/criteria/packaging/PackagingPlanCriteria.model';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingOpenService} from 'src/app/shared/service/open/packaging/PackagingOpen.service';
@Component({
  selector: 'app-packaging-plan-create-open',
  templateUrl: './packaging-plan-create-open.component.html'
})
export class PackagingPlanCreateOpenComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



   private _validPackagingPlanCode = true;
    private _validPackagingCode = true;

	constructor(private service: PackagingPlanOpenService , private packagingService: PackagingOpenService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.packagingService.findAll().subscribe((data) => this.packagings = data);
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
                this.item = new PackagingPlanDto();
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
        this.validPackagingPlanCode = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePackagingPlanCode();
    }

    public validatePackagingPlanCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPackagingPlanCode = false;
        } else {
            this.validPackagingPlanCode = true;
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



    get validPackagingPlanCode(): boolean {
        return this._validPackagingPlanCode;
    }

    set validPackagingPlanCode(value: boolean) {
         this._validPackagingPlanCode = value;
    }

    get validPackagingCode(): boolean {
        return this._validPackagingCode;
    }
    set validPackagingCode(value: boolean) {
        this._validPackagingCode = value;
    }


    get items(): Array<PackagingPlanDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingPlanDto>) {
        this.service.items = value;
    }

    get item(): PackagingPlanDto {
        return this.service.item;
    }

    set item(value: PackagingPlanDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PackagingPlanCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingPlanCriteria) {
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
