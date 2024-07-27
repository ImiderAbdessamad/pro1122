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




import {ProjectTechnologyCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyCollaborator.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyCriteria} from 'src/app/shared/criteria/project/ProjectTechnologyCriteria.model';


import {ProjectTechnologyTypeDto} from 'src/app/shared/model/project/ProjectTechnologyType.model';
import {ProjectTechnologyTypeCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyTypeCollaborator.service';

@Component({
  selector: 'app-project-technology-edit-collaborator',
  templateUrl: './project-technology-edit-collaborator.component.html'
})
export class ProjectTechnologyEditCollaboratorComponent implements OnInit {

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



    private _validProjectTechnologyCode = true;
    private _validProjectTechnologyLibelle = true;

    private _validProjectTechnologyTypeCode = true;
    private _validProjectTechnologyTypeLibelle = true;



    constructor(private service: ProjectTechnologyCollaboratorService , private projectTechnologyTypeService: ProjectTechnologyTypeCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.projectTechnologyTypeService.findAll().subscribe((data) => this.projectTechnologyTypes = data);
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
            this.item = new ProjectTechnologyDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validProjectTechnologyCode = value;
        this.validProjectTechnologyLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProjectTechnologyCode();
        this.validateProjectTechnologyLibelle();
    }

    public validateProjectTechnologyCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validProjectTechnologyCode = false;
        } else {
            this.validProjectTechnologyCode = true;
        }
    }

    public validateProjectTechnologyLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validProjectTechnologyLibelle = false;
        } else {
            this.validProjectTechnologyLibelle = true;
        }
    }




   public async openCreateProjectTechnologyType(projectTechnologyType: string) {
        const isPermistted = await this.roleService.isPermitted('ProjectTechnologyType', 'edit');
        if (isPermistted) {
             this.projectTechnologyType = new ProjectTechnologyTypeDto();
             this.createProjectTechnologyTypeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get projectTechnologyType(): ProjectTechnologyTypeDto {
        return this.projectTechnologyTypeService.item;
    }
    set projectTechnologyType(value: ProjectTechnologyTypeDto) {
        this.projectTechnologyTypeService.item = value;
    }
    get projectTechnologyTypes(): Array<ProjectTechnologyTypeDto> {
        return this.projectTechnologyTypeService.items;
    }
    set projectTechnologyTypes(value: Array<ProjectTechnologyTypeDto>) {
        this.projectTechnologyTypeService.items = value;
    }
    get createProjectTechnologyTypeDialog(): boolean {
        return this.projectTechnologyTypeService.createDialog;
    }
    set createProjectTechnologyTypeDialog(value: boolean) {
        this.projectTechnologyTypeService.createDialog= value;
    }


    get validProjectTechnologyCode(): boolean {
        return this._validProjectTechnologyCode;
    }
    set validProjectTechnologyCode(value: boolean) {
        this._validProjectTechnologyCode = value;
    }
    get validProjectTechnologyLibelle(): boolean {
        return this._validProjectTechnologyLibelle;
    }
    set validProjectTechnologyLibelle(value: boolean) {
        this._validProjectTechnologyLibelle = value;
    }

    get validProjectTechnologyTypeCode(): boolean {
        return this._validProjectTechnologyTypeCode;
    }
    set validProjectTechnologyTypeCode(value: boolean) {
        this._validProjectTechnologyTypeCode = value;
    }
    get validProjectTechnologyTypeLibelle(): boolean {
        return this._validProjectTechnologyTypeLibelle;
    }
    set validProjectTechnologyTypeLibelle(value: boolean) {
        this._validProjectTechnologyTypeLibelle = value;
    }

	get items(): Array<ProjectTechnologyDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectTechnologyDto>) {
        this.service.items = value;
    }

    get item(): ProjectTechnologyDto {
        return this.service.item;
    }

    set item(value: ProjectTechnologyDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): ProjectTechnologyCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectTechnologyCriteria) {
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
