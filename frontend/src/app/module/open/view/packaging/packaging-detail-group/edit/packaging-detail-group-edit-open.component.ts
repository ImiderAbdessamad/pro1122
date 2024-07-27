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




import {PackagingDetailGroupOpenService} from 'src/app/shared/service/open/packaging/PackagingDetailGroupOpen.service';
import {PackagingDetailGroupDto} from 'src/app/shared/model/packaging/PackagingDetailGroup.model';
import {PackagingDetailGroupCriteria} from 'src/app/shared/criteria/packaging/PackagingDetailGroupCriteria.model';



@Component({
  selector: 'app-packaging-detail-group-edit-open',
  templateUrl: './packaging-detail-group-edit-open.component.html'
})
export class PackagingDetailGroupEditOpenComponent implements OnInit {

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



    private _validPackagingDetailGroupCode = true;
    private _validPackagingDetailGroupLibelle = true;




    constructor(private service: PackagingDetailGroupOpenService , @Inject(PLATFORM_ID) private platformId?) {
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
            this.item = new PackagingDetailGroupDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validPackagingDetailGroupCode = value;
        this.validPackagingDetailGroupLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePackagingDetailGroupCode();
        this.validatePackagingDetailGroupLibelle();
    }

    public validatePackagingDetailGroupCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPackagingDetailGroupCode = false;
        } else {
            this.validPackagingDetailGroupCode = true;
        }
    }

    public validatePackagingDetailGroupLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validPackagingDetailGroupLibelle = false;
        } else {
            this.validPackagingDetailGroupLibelle = true;
        }
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


	get items(): Array<PackagingDetailGroupDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingDetailGroupDto>) {
        this.service.items = value;
    }

    get item(): PackagingDetailGroupDto {
        return this.service.item;
    }

    set item(value: PackagingDetailGroupDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): PackagingDetailGroupCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingDetailGroupCriteria) {
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
