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




import {PackagingCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingCollaborator.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingCriteria} from 'src/app/shared/criteria/packaging/PackagingCriteria.model';


import {PackagingDetailGroupDto} from 'src/app/shared/model/packaging/PackagingDetailGroup.model';
import {PackagingDetailGroupCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingDetailGroupCollaborator.service';
import {PackagingPlanDto} from 'src/app/shared/model/packaging/PackagingPlan.model';
import {PackagingPlanCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingPlanCollaborator.service';
import {PackagingDetailDto} from 'src/app/shared/model/packaging/PackagingDetail.model';
import {PackagingDetailCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingDetailCollaborator.service';

@Component({
  selector: 'app-packaging-edit-collaborator',
  templateUrl: './packaging-edit-collaborator.component.html'
})
export class PackagingEditCollaboratorComponent implements OnInit {

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


    private _packagingPlansElement = new PackagingPlanDto();
    private _packagingDetailsElement = new PackagingDetailDto();

    private _validPackagingCode = true;

    private _validPackagingPlansCode = true;



    constructor(private service: PackagingCollaboratorService , private packagingDetailGroupService: PackagingDetailGroupCollaboratorService, private packagingPlanService: PackagingPlanCollaboratorService, private packagingDetailService: PackagingDetailCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {

        this.packagingDetailsElement.packagingDetailGroup = new PackagingDetailGroupDto();
        this.packagingDetailGroupService.findAll().subscribe((data) => this.packagingDetailGroups = data);

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
            this.item = new PackagingDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public validatePackagingPlans(){
        this.errorMessages = new Array();
        this.validatePackagingPlansCode();
    }

    public validatePackagingDetails(){
        this.errorMessages = new Array();
    }

    public setValidation(value: boolean){
        this.validPackagingCode = value;
        this.validPackagingPlansCode = value;
    }

   public addPackagingPlans() {
        if( this.item.packagingPlans == null )
            this.item.packagingPlans = new Array<PackagingPlanDto>();
       this.validatePackagingPlans();
       if (this.errorMessages.length === 0) {
            if(this.packagingPlansElement.id == null){
                this.item.packagingPlans.push(this.packagingPlansElement);
            }else{
                const index = this.item.packagingPlans.findIndex(e => e.id == this.packagingPlansElement.id);
                this.item.packagingPlans[index] = this.packagingPlansElement;
            }
          this.packagingPlansElement = new PackagingPlanDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deletePackagingPlans(p: PackagingPlanDto) {
        this.item.packagingPlans.forEach((element, index) => {
            if (element === p) { this.item.packagingPlans.splice(index, 1); }
        });
    }

    public editPackagingPlans(p: PackagingPlanDto) {
        this.packagingPlansElement = {... p};
        this.activeTab = 0;
    }


   public addPackagingDetails() {
        if( this.item.packagingDetails == null )
            this.item.packagingDetails = new Array<PackagingDetailDto>();
       this.validatePackagingDetails();
       if (this.errorMessages.length === 0) {
            if(this.packagingDetailsElement.id == null){
                this.item.packagingDetails.push(this.packagingDetailsElement);
            }else{
                const index = this.item.packagingDetails.findIndex(e => e.id == this.packagingDetailsElement.id);
                this.item.packagingDetails[index] = this.packagingDetailsElement;
            }
          this.packagingDetailsElement = new PackagingDetailDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deletePackagingDetails(p: PackagingDetailDto) {
        this.item.packagingDetails.forEach((element, index) => {
            if (element === p) { this.item.packagingDetails.splice(index, 1); }
        });
    }

    public editPackagingDetails(p: PackagingDetailDto) {
        this.packagingDetailsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePackagingCode();
    }

    public validatePackagingCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPackagingCode = false;
        } else {
            this.validPackagingCode = true;
        }
    }



    private validatePackagingPlansCode(){
        if (this.packagingPlansElement.code == null) {
        this.errorMessages.push('Code de la packagingPlan est  invalide');
            this.validPackagingPlansCode = false;
        } else {
            this.validPackagingPlansCode = true;
        }
    }

   public async openCreatePackagingDetailGroup(packagingDetailGroup: string) {
        const isPermistted = await this.roleService.isPermitted('PackagingDetailGroup', 'edit');
        if (isPermistted) {
             this.packagingDetailGroup = new PackagingDetailGroupDto();
             this.createPackagingDetailGroupDialog = true;
        }else {
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

    get packagingPlansElement(): PackagingPlanDto {
        if( this._packagingPlansElement == null )
            this._packagingPlansElement = new PackagingPlanDto();
         return this._packagingPlansElement;
    }

    set packagingPlansElement(value: PackagingPlanDto) {
        this._packagingPlansElement = value;
    }
    get packagingDetailsElement(): PackagingDetailDto {
        if( this._packagingDetailsElement == null )
            this._packagingDetailsElement = new PackagingDetailDto();
         return this._packagingDetailsElement;
    }

    set packagingDetailsElement(value: PackagingDetailDto) {
        this._packagingDetailsElement = value;
    }

    get validPackagingCode(): boolean {
        return this._validPackagingCode;
    }
    set validPackagingCode(value: boolean) {
        this._validPackagingCode = value;
    }

    get validPackagingPlansCode(): boolean {
        return this._validPackagingPlansCode;
    }
    set validPackagingPlansCode(value: boolean) {
        this._validPackagingPlansCode = value;
    }

	get items(): Array<PackagingDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingDto>) {
        this.service.items = value;
    }

    get item(): PackagingDto {
        return this.service.item;
    }

    set item(value: PackagingDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): PackagingCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingCriteria) {
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
