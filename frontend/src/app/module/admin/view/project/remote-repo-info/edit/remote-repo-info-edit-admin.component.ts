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




import {RemoteRepoInfoAdminService} from 'src/app/shared/service/admin/project/RemoteRepoInfoAdmin.service';
import {RemoteRepoInfoDto} from 'src/app/shared/model/project/RemoteRepoInfo.model';
import {RemoteRepoInfoCriteria} from 'src/app/shared/criteria/project/RemoteRepoInfoCriteria.model';


import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {RemoteRepoTypeDto} from 'src/app/shared/model/project/RemoteRepoType.model';
import {RemoteRepoTypeAdminService} from 'src/app/shared/service/admin/project/RemoteRepoTypeAdmin.service';

@Component({
  selector: 'app-remote-repo-info-edit-admin',
  templateUrl: './remote-repo-info-edit-admin.component.html'
})
export class RemoteRepoInfoEditAdminComponent implements OnInit {

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



    private _validRemoteRepoInfoTitle = true;

    private _validRemoteRepoTypeCode = true;
    private _validRemoteRepoTypeLibelle = true;



    constructor(private service: RemoteRepoInfoAdminService , private collaboratorService: CollaboratorAdminService, private remoteRepoTypeService: RemoteRepoTypeAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.remoteRepoTypeService.findAll().subscribe((data) => this.remoteRepoTypes = data);
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
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
            this.item = new RemoteRepoInfoDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validRemoteRepoInfoTitle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRemoteRepoInfoTitle();
    }

    public validateRemoteRepoInfoTitle(){
        if (this.stringUtilService.isEmpty(this.item.title)) {
            this.errorMessages.push('Title non valide');
            this.validRemoteRepoInfoTitle = false;
        } else {
            this.validRemoteRepoInfoTitle = true;
        }
    }




   public async openCreateRemoteRepoType(remoteRepoType: string) {
        const isPermistted = await this.roleService.isPermitted('RemoteRepoType', 'edit');
        if (isPermistted) {
             this.remoteRepoType = new RemoteRepoTypeDto();
             this.createRemoteRepoTypeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get remoteRepoType(): RemoteRepoTypeDto {
        return this.remoteRepoTypeService.item;
    }
    set remoteRepoType(value: RemoteRepoTypeDto) {
        this.remoteRepoTypeService.item = value;
    }
    get remoteRepoTypes(): Array<RemoteRepoTypeDto> {
        return this.remoteRepoTypeService.items;
    }
    set remoteRepoTypes(value: Array<RemoteRepoTypeDto>) {
        this.remoteRepoTypeService.items = value;
    }
    get createRemoteRepoTypeDialog(): boolean {
        return this.remoteRepoTypeService.createDialog;
    }
    set createRemoteRepoTypeDialog(value: boolean) {
        this.remoteRepoTypeService.createDialog= value;
    }
    get collaborator(): CollaboratorDto {
        return this.collaboratorService.item;
    }
    set collaborator(value: CollaboratorDto) {
        this.collaboratorService.item = value;
    }
    get collaborators(): Array<CollaboratorDto> {
        return this.collaboratorService.items;
    }
    set collaborators(value: Array<CollaboratorDto>) {
        this.collaboratorService.items = value;
    }
    get createCollaboratorDialog(): boolean {
        return this.collaboratorService.createDialog;
    }
    set createCollaboratorDialog(value: boolean) {
        this.collaboratorService.createDialog= value;
    }


    get validRemoteRepoInfoTitle(): boolean {
        return this._validRemoteRepoInfoTitle;
    }
    set validRemoteRepoInfoTitle(value: boolean) {
        this._validRemoteRepoInfoTitle = value;
    }

    get validRemoteRepoTypeCode(): boolean {
        return this._validRemoteRepoTypeCode;
    }
    set validRemoteRepoTypeCode(value: boolean) {
        this._validRemoteRepoTypeCode = value;
    }
    get validRemoteRepoTypeLibelle(): boolean {
        return this._validRemoteRepoTypeLibelle;
    }
    set validRemoteRepoTypeLibelle(value: boolean) {
        this._validRemoteRepoTypeLibelle = value;
    }

	get items(): Array<RemoteRepoInfoDto> {
        return this.service.items;
    }

    set items(value: Array<RemoteRepoInfoDto>) {
        this.service.items = value;
    }

    get item(): RemoteRepoInfoDto {
        return this.service.item;
    }

    set item(value: RemoteRepoInfoDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): RemoteRepoInfoCriteria {
        return this.service.criteria;
    }

    set criteria(value: RemoteRepoInfoCriteria) {
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
