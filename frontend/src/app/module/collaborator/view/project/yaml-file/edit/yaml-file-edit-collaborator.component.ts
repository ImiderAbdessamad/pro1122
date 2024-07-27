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




import {YamlFileCollaboratorService} from 'src/app/shared/service/collaborator/project/YamlFileCollaborator.service';
import {YamlFileDto} from 'src/app/shared/model/project/YamlFile.model';
import {YamlFileCriteria} from 'src/app/shared/criteria/project/YamlFileCriteria.model';


import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectCollaborator.service';

@Component({
  selector: 'app-yaml-file-edit-collaborator',
  templateUrl: './yaml-file-edit-collaborator.component.html'
})
export class YamlFileEditCollaboratorComponent implements OnInit {

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



    private _validYamlFileTitle = true;

    private _validProjectTitle = true;
    private _validProjectTitleChat = true;
    private _validProjectProjectDetails = true;



    constructor(private service: YamlFileCollaboratorService , private projectService: ProjectCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.projectService.findAll().subscribe((data) => this.projects = data);
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
            this.item = new YamlFileDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validYamlFileTitle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateYamlFileTitle();
    }

    public validateYamlFileTitle(){
        if (this.stringUtilService.isEmpty(this.item.title)) {
            this.errorMessages.push('Title non valide');
            this.validYamlFileTitle = false;
        } else {
            this.validYamlFileTitle = true;
        }
    }




   public async openCreateProject(project: string) {
        const isPermistted = await this.roleService.isPermitted('Project', 'edit');
        if (isPermistted) {
             this.project = new ProjectDto();
             this.createProjectDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get project(): ProjectDto {
        return this.projectService.item;
    }
    set project(value: ProjectDto) {
        this.projectService.item = value;
    }
    get projects(): Array<ProjectDto> {
        return this.projectService.items;
    }
    set projects(value: Array<ProjectDto>) {
        this.projectService.items = value;
    }
    get createProjectDialog(): boolean {
        return this.projectService.createDialog;
    }
    set createProjectDialog(value: boolean) {
        this.projectService.createDialog= value;
    }


    get validYamlFileTitle(): boolean {
        return this._validYamlFileTitle;
    }
    set validYamlFileTitle(value: boolean) {
        this._validYamlFileTitle = value;
    }

    get validProjectTitle(): boolean {
        return this._validProjectTitle;
    }
    set validProjectTitle(value: boolean) {
        this._validProjectTitle = value;
    }
    get validProjectTitleChat(): boolean {
        return this._validProjectTitleChat;
    }
    set validProjectTitleChat(value: boolean) {
        this._validProjectTitleChat = value;
    }
    get validProjectProjectDetails(): boolean {
        return this._validProjectProjectDetails;
    }
    set validProjectProjectDetails(value: boolean) {
        this._validProjectProjectDetails = value;
    }

	get items(): Array<YamlFileDto> {
        return this.service.items;
    }

    set items(value: Array<YamlFileDto>) {
        this.service.items = value;
    }

    get item(): YamlFileDto {
        return this.service.item;
    }

    set item(value: YamlFileDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): YamlFileCriteria {
        return this.service.criteria;
    }

    set criteria(value: YamlFileCriteria) {
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
