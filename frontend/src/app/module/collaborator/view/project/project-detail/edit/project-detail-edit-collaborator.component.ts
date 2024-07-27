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




import {ProjectDetailCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectDetailCollaborator.service';
import {ProjectDetailDto} from 'src/app/shared/model/project/ProjectDetail.model';
import {ProjectDetailCriteria} from 'src/app/shared/criteria/project/ProjectDetailCriteria.model';


import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectCollaborator.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyCollaborator.service';
import {ProjectTechnologyProfileDto} from 'src/app/shared/model/project/ProjectTechnologyProfile.model';
import {ProjectTechnologyProfileCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyProfileCollaborator.service';

@Component({
  selector: 'app-project-detail-edit-collaborator',
  templateUrl: './project-detail-edit-collaborator.component.html'
})
export class ProjectDetailEditCollaboratorComponent implements OnInit {

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



    private _validProjectDetailTitle = true;
    private _validProjectDetailProjectTechnology = true;
    private _validProjectDetailProjectTechnologyProfile = true;
    private _validProjectDetailDbName = true;
    private _validProjectDetailDbPassword = true;
    private _validProjectDetailDbUserName = true;
    private _validProjectDetailBasePackage = true;
    private _validProjectDetailMsName = true;
    private _validProjectDetailPort = true;

    private _validProjectTechnologyCode = true;
    private _validProjectTechnologyLibelle = true;
    private _validProjectTitle = true;
    private _validProjectTitleChat = true;
    private _validProjectProjectDetails = true;
    private _validProjectTechnologyProfileCode = true;
    private _validProjectTechnologyProfileLibelle = true;



    constructor(private service: ProjectDetailCollaboratorService , private projectService: ProjectCollaboratorService, private projectTechnologyService: ProjectTechnologyCollaboratorService, private projectTechnologyProfileService: ProjectTechnologyProfileCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.projectTechnologyService.findAll().subscribe((data) => this.projectTechnologys = data);
        this.projectService.findAll().subscribe((data) => this.projects = data);
        this.projectTechnologyProfileService.findAll().subscribe((data) => this.projectTechnologyProfiles = data);
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
            this.item = new ProjectDetailDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validProjectDetailTitle = value;
        this.validProjectDetailProjectTechnology = value;
        this.validProjectDetailProjectTechnologyProfile = value;
        this.validProjectDetailDbName = value;
        this.validProjectDetailDbPassword = value;
        this.validProjectDetailDbUserName = value;
        this.validProjectDetailBasePackage = value;
        this.validProjectDetailMsName = value;
        this.validProjectDetailPort = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProjectDetailTitle();
        this.validateProjectDetailProjectTechnology();
        this.validateProjectDetailProjectTechnologyProfile();
        this.validateProjectDetailDbName();
        this.validateProjectDetailDbPassword();
        this.validateProjectDetailDbUserName();
        this.validateProjectDetailBasePackage();
        this.validateProjectDetailMsName();
        this.validateProjectDetailPort();
    }

    public validateProjectDetailTitle(){
        if (this.stringUtilService.isEmpty(this.item.title)) {
            this.errorMessages.push('Title non valide');
            this.validProjectDetailTitle = false;
        } else {
            this.validProjectDetailTitle = true;
        }
    }

    public validateProjectDetailProjectTechnology(){
        if (this.stringUtilService.isEmpty(this.item.projectTechnology)) {
            this.errorMessages.push('Project technology non valide');
            this.validProjectDetailProjectTechnology = false;
        } else {
            this.validProjectDetailProjectTechnology = true;
        }
    }

    public validateProjectDetailProjectTechnologyProfile(){
        if (this.stringUtilService.isEmpty(this.item.projectTechnologyProfile)) {
            this.errorMessages.push('Project technology profile non valide');
            this.validProjectDetailProjectTechnologyProfile = false;
        } else {
            this.validProjectDetailProjectTechnologyProfile = true;
        }
    }

    public validateProjectDetailDbName(){
        if (this.stringUtilService.isEmpty(this.item.dbName)) {
            this.errorMessages.push('Db name non valide');
            this.validProjectDetailDbName = false;
        } else {
            this.validProjectDetailDbName = true;
        }
    }

    public validateProjectDetailDbPassword(){
        if (this.stringUtilService.isEmpty(this.item.dbPassword)) {
            this.errorMessages.push('Db password non valide');
            this.validProjectDetailDbPassword = false;
        } else {
            this.validProjectDetailDbPassword = true;
        }
    }

    public validateProjectDetailDbUserName(){
        if (this.stringUtilService.isEmpty(this.item.dbUserName)) {
            this.errorMessages.push('Db user name non valide');
            this.validProjectDetailDbUserName = false;
        } else {
            this.validProjectDetailDbUserName = true;
        }
    }

    public validateProjectDetailBasePackage(){
        if (this.stringUtilService.isEmpty(this.item.basePackage)) {
            this.errorMessages.push('Base package non valide');
            this.validProjectDetailBasePackage = false;
        } else {
            this.validProjectDetailBasePackage = true;
        }
    }

    public validateProjectDetailMsName(){
        if (this.stringUtilService.isEmpty(this.item.msName)) {
            this.errorMessages.push('Ms name non valide');
            this.validProjectDetailMsName = false;
        } else {
            this.validProjectDetailMsName = true;
        }
    }

    public validateProjectDetailPort(){
        if (this.stringUtilService.isEmpty(this.item.port)) {
            this.errorMessages.push('Port non valide');
            this.validProjectDetailPort = false;
        } else {
            this.validProjectDetailPort = true;
        }
    }




   public async openCreateProjectTechnology(projectTechnology: string) {
        const isPermistted = await this.roleService.isPermitted('ProjectTechnology', 'edit');
        if (isPermistted) {
             this.projectTechnology = new ProjectTechnologyDto();
             this.createProjectTechnologyDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
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
   public async openCreateProjectTechnologyProfile(projectTechnologyProfile: string) {
        const isPermistted = await this.roleService.isPermitted('ProjectTechnologyProfile', 'edit');
        if (isPermistted) {
             this.projectTechnologyProfile = new ProjectTechnologyProfileDto();
             this.createProjectTechnologyProfileDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get projectTechnology(): ProjectTechnologyDto {
        return this.projectTechnologyService.item;
    }
    set projectTechnology(value: ProjectTechnologyDto) {
        this.projectTechnologyService.item = value;
    }
    get projectTechnologys(): Array<ProjectTechnologyDto> {
        return this.projectTechnologyService.items;
    }
    set projectTechnologys(value: Array<ProjectTechnologyDto>) {
        this.projectTechnologyService.items = value;
    }
    get createProjectTechnologyDialog(): boolean {
        return this.projectTechnologyService.createDialog;
    }
    set createProjectTechnologyDialog(value: boolean) {
        this.projectTechnologyService.createDialog= value;
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
    get projectTechnologyProfile(): ProjectTechnologyProfileDto {
        return this.projectTechnologyProfileService.item;
    }
    set projectTechnologyProfile(value: ProjectTechnologyProfileDto) {
        this.projectTechnologyProfileService.item = value;
    }
    get projectTechnologyProfiles(): Array<ProjectTechnologyProfileDto> {
        return this.projectTechnologyProfileService.items;
    }
    set projectTechnologyProfiles(value: Array<ProjectTechnologyProfileDto>) {
        this.projectTechnologyProfileService.items = value;
    }
    get createProjectTechnologyProfileDialog(): boolean {
        return this.projectTechnologyProfileService.createDialog;
    }
    set createProjectTechnologyProfileDialog(value: boolean) {
        this.projectTechnologyProfileService.createDialog= value;
    }


    get validProjectDetailTitle(): boolean {
        return this._validProjectDetailTitle;
    }
    set validProjectDetailTitle(value: boolean) {
        this._validProjectDetailTitle = value;
    }
    get validProjectDetailProjectTechnology(): boolean {
        return this._validProjectDetailProjectTechnology;
    }
    set validProjectDetailProjectTechnology(value: boolean) {
        this._validProjectDetailProjectTechnology = value;
    }
    get validProjectDetailProjectTechnologyProfile(): boolean {
        return this._validProjectDetailProjectTechnologyProfile;
    }
    set validProjectDetailProjectTechnologyProfile(value: boolean) {
        this._validProjectDetailProjectTechnologyProfile = value;
    }
    get validProjectDetailDbName(): boolean {
        return this._validProjectDetailDbName;
    }
    set validProjectDetailDbName(value: boolean) {
        this._validProjectDetailDbName = value;
    }
    get validProjectDetailDbPassword(): boolean {
        return this._validProjectDetailDbPassword;
    }
    set validProjectDetailDbPassword(value: boolean) {
        this._validProjectDetailDbPassword = value;
    }
    get validProjectDetailDbUserName(): boolean {
        return this._validProjectDetailDbUserName;
    }
    set validProjectDetailDbUserName(value: boolean) {
        this._validProjectDetailDbUserName = value;
    }
    get validProjectDetailBasePackage(): boolean {
        return this._validProjectDetailBasePackage;
    }
    set validProjectDetailBasePackage(value: boolean) {
        this._validProjectDetailBasePackage = value;
    }
    get validProjectDetailMsName(): boolean {
        return this._validProjectDetailMsName;
    }
    set validProjectDetailMsName(value: boolean) {
        this._validProjectDetailMsName = value;
    }
    get validProjectDetailPort(): boolean {
        return this._validProjectDetailPort;
    }
    set validProjectDetailPort(value: boolean) {
        this._validProjectDetailPort = value;
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
    get validProjectTechnologyProfileCode(): boolean {
        return this._validProjectTechnologyProfileCode;
    }
    set validProjectTechnologyProfileCode(value: boolean) {
        this._validProjectTechnologyProfileCode = value;
    }
    get validProjectTechnologyProfileLibelle(): boolean {
        return this._validProjectTechnologyProfileLibelle;
    }
    set validProjectTechnologyProfileLibelle(value: boolean) {
        this._validProjectTechnologyProfileLibelle = value;
    }

	get items(): Array<ProjectDetailDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDetailDto>) {
        this.service.items = value;
    }

    get item(): ProjectDetailDto {
        return this.service.item;
    }

    set item(value: ProjectDetailDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): ProjectDetailCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectDetailCriteria) {
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
