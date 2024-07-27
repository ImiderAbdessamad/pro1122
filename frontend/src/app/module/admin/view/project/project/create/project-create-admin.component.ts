import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {ProjectAdminService} from 'src/app/shared/service/admin/project/ProjectAdmin.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';
import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyAdminService} from 'src/app/shared/service/admin/project/ProjectTechnologyAdmin.service';
import {RemoteRepoInfoDto} from 'src/app/shared/model/project/RemoteRepoInfo.model';
import {RemoteRepoInfoAdminService} from 'src/app/shared/service/admin/project/RemoteRepoInfoAdmin.service';
import {ConversationDto} from 'src/app/shared/model/project/Conversation.model';
import {ConversationAdminService} from 'src/app/shared/service/admin/project/ConversationAdmin.service';
import {ProjectTechnologyProfileDto} from 'src/app/shared/model/project/ProjectTechnologyProfile.model';
import {ProjectTechnologyProfileAdminService} from 'src/app/shared/service/admin/project/ProjectTechnologyProfileAdmin.service';
import {ProjectDetailDto} from 'src/app/shared/model/project/ProjectDetail.model';
import {ProjectDetailAdminService} from 'src/app/shared/service/admin/project/ProjectDetailAdmin.service';
@Component({
  selector: 'app-project-create-admin',
  templateUrl: './project-create-admin.component.html'
})
export class ProjectCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;

    private _conversationsElement = new ConversationDto();
    private _projectDetailsElement = new ProjectDetailDto();


   private _validProjectTitle = true;
   private _validProjectTitleChat = true;
   private _validProjectProjectDetails = true;
    private _validRemoteRepoInfoTitle = true;
    private _validProjectDetailsTitle = true;
    private _validProjectDetailsProjectTechnology = true;
    private _validProjectDetailsProjectTechnologyProfile = true;
    private _validProjectDetailsDbName = true;
    private _validProjectDetailsDbPassword = true;
    private _validProjectDetailsDbUserName = true;
    private _validProjectDetailsBasePackage = true;
    private _validProjectDetailsMsName = true;
    private _validProjectDetailsPort = true;

	constructor(private service: ProjectAdminService , private collaboratorService: CollaboratorAdminService, private projectTechnologyService: ProjectTechnologyAdminService, private remoteRepoInfoService: RemoteRepoInfoAdminService, private conversationService: ConversationAdminService, private projectTechnologyProfileService: ProjectTechnologyProfileAdminService, private projectDetailService: ProjectDetailAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.projectDetailsElement.projectTechnology = new ProjectTechnologyDto();
        this.projectTechnologyService.findAll().subscribe((data) => this.projectTechnologys = data);
        this.projectDetailsElement.projectTechnologyProfile = new ProjectTechnologyProfileDto();
        this.projectTechnologyProfileService.findAll().subscribe((data) => this.projectTechnologyProfiles = data);
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.remoteRepoInfoService.findAll().subscribe((data) => this.remoteRepoInfos = data);
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
                this.item = new ProjectDto();
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



    validateConversations(){
        this.errorMessages = new Array();
    }
    validateProjectDetails(){
        this.errorMessages = new Array();
        this.validateProjectDetailsTitle();
        this.validateProjectDetailsProjectTechnology();
        this.validateProjectDetailsProjectTechnologyProfile();
        this.validateProjectDetailsDbName();
        this.validateProjectDetailsDbPassword();
        this.validateProjectDetailsDbUserName();
        this.validateProjectDetailsBasePackage();
        this.validateProjectDetailsMsName();
        this.validateProjectDetailsPort();
    }


    public  setValidation(value: boolean){
        this.validProjectTitle = value;
        this.validProjectTitleChat = value;
        this.validProjectProjectDetails = value;
        this.validProjectDetailsTitle = value;
        this.validProjectDetailsProjectTechnology = value;
        this.validProjectDetailsProjectTechnologyProfile = value;
        this.validProjectDetailsDbName = value;
        this.validProjectDetailsDbPassword = value;
        this.validProjectDetailsDbUserName = value;
        this.validProjectDetailsBasePackage = value;
        this.validProjectDetailsMsName = value;
        this.validProjectDetailsPort = value;
    }

    public addConversations() {
        if( this.item.conversations == null )
            this.item.conversations = new Array<ConversationDto>();
       this.validateConversations();
       if (this.errorMessages.length === 0) {
              this.item.conversations.push({... this.conversationsElement});
              this.conversationsElement = new ConversationDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteconversations(p: ConversationDto) {
        this.item.conversations.forEach((element, index) => {
            if (element === p) { this.item.conversations.splice(index, 1); }
        });
    }

    public editconversations(p: ConversationDto) {
        this.conversationsElement = {... p};
        this.activeTab = 0;
    }
    public addProjectDetails() {
        if( this.item.projectDetails == null )
            this.item.projectDetails = new Array<ProjectDetailDto>();
       this.validateProjectDetails();
       if (this.errorMessages.length === 0) {
              this.item.projectDetails.push({... this.projectDetailsElement});
              this.projectDetailsElement = new ProjectDetailDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteprojectDetails(p: ProjectDetailDto) {
        this.item.projectDetails.forEach((element, index) => {
            if (element === p) { this.item.projectDetails.splice(index, 1); }
        });
    }

    public editprojectDetails(p: ProjectDetailDto) {
        this.projectDetailsElement = {... p};
        this.activeTab = 0;
    }


    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProjectTitle();
        this.validateProjectTitleChat();
        this.validateProjectProjectDetails();
    }

    public validateProjectTitle(){
        if (this.stringUtilService.isEmpty(this.item.title)) {
        this.errorMessages.push('Title non valide');
        this.validProjectTitle = false;
        } else {
            this.validProjectTitle = true;
        }
    }
    public validateProjectTitleChat(){
        if (this.stringUtilService.isEmpty(this.item.titleChat)) {
        this.errorMessages.push('Title chat non valide');
        this.validProjectTitleChat = false;
        } else {
            this.validProjectTitleChat = true;
        }
    }
    public validateProjectProjectDetails(){
        if (this.stringUtilService.isEmpty(this.item.projectDetails)) {
        this.errorMessages.push('Project details non valide');
        this.validProjectProjectDetails = false;
        } else {
            this.validProjectProjectDetails = true;
        }
    }

    public validateProjectDetailsTitle(){
        if (this.projectDetailsElement.title == null) {
            this.errorMessages.push('Title de la projectDetail est  invalide');
            this.validProjectDetailsTitle = false;
        } else {
            this.validProjectDetailsTitle = true;
        }
    }
    public validateProjectDetailsProjectTechnology(){
        if (this.projectDetailsElement.projectTechnology == null) {
            this.errorMessages.push('ProjectTechnology de la projectDetail est  invalide');
            this.validProjectDetailsProjectTechnology = false;
        } else {
            this.validProjectDetailsProjectTechnology = true;
        }
    }
    public validateProjectDetailsProjectTechnologyProfile(){
        if (this.projectDetailsElement.projectTechnologyProfile == null) {
            this.errorMessages.push('ProjectTechnologyProfile de la projectDetail est  invalide');
            this.validProjectDetailsProjectTechnologyProfile = false;
        } else {
            this.validProjectDetailsProjectTechnologyProfile = true;
        }
    }
    public validateProjectDetailsDbName(){
        if (this.projectDetailsElement.dbName == null) {
            this.errorMessages.push('DbName de la projectDetail est  invalide');
            this.validProjectDetailsDbName = false;
        } else {
            this.validProjectDetailsDbName = true;
        }
    }
    public validateProjectDetailsDbPassword(){
        if (this.projectDetailsElement.dbPassword == null) {
            this.errorMessages.push('DbPassword de la projectDetail est  invalide');
            this.validProjectDetailsDbPassword = false;
        } else {
            this.validProjectDetailsDbPassword = true;
        }
    }
    public validateProjectDetailsDbUserName(){
        if (this.projectDetailsElement.dbUserName == null) {
            this.errorMessages.push('DbUserName de la projectDetail est  invalide');
            this.validProjectDetailsDbUserName = false;
        } else {
            this.validProjectDetailsDbUserName = true;
        }
    }
    public validateProjectDetailsBasePackage(){
        if (this.projectDetailsElement.basePackage == null) {
            this.errorMessages.push('BasePackage de la projectDetail est  invalide');
            this.validProjectDetailsBasePackage = false;
        } else {
            this.validProjectDetailsBasePackage = true;
        }
    }
    public validateProjectDetailsMsName(){
        if (this.projectDetailsElement.msName == null) {
            this.errorMessages.push('MsName de la projectDetail est  invalide');
            this.validProjectDetailsMsName = false;
        } else {
            this.validProjectDetailsMsName = true;
        }
    }
    public validateProjectDetailsPort(){
        if (this.projectDetailsElement.port == null) {
            this.errorMessages.push('Port de la projectDetail est  invalide');
            this.validProjectDetailsPort = false;
        } else {
            this.validProjectDetailsPort = true;
        }
    }

    public async openCreateProjectTechnology(projectTechnology: string) {
    const isPermistted = await this.roleService.isPermitted('ProjectTechnology', 'add');
    if(isPermistted) {
         this.projectTechnology = new ProjectTechnologyDto();
         this.createProjectTechnologyDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateRemoteRepoInfo(remoteRepoInfo: string) {
    const isPermistted = await this.roleService.isPermitted('RemoteRepoInfo', 'add');
    if(isPermistted) {
         this.remoteRepoInfo = new RemoteRepoInfoDto();
         this.createRemoteRepoInfoDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateProjectTechnologyProfile(projectTechnologyProfile: string) {
    const isPermistted = await this.roleService.isPermitted('ProjectTechnologyProfile', 'add');
    if(isPermistted) {
         this.projectTechnologyProfile = new ProjectTechnologyProfileDto();
         this.createProjectTechnologyProfileDialog = true;
    }else{
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
    get remoteRepoInfo(): RemoteRepoInfoDto {
        return this.remoteRepoInfoService.item;
    }
    set remoteRepoInfo(value: RemoteRepoInfoDto) {
        this.remoteRepoInfoService.item = value;
    }
    get remoteRepoInfos(): Array<RemoteRepoInfoDto> {
        return this.remoteRepoInfoService.items;
    }
    set remoteRepoInfos(value: Array<RemoteRepoInfoDto>) {
        this.remoteRepoInfoService.items = value;
    }
    get createRemoteRepoInfoDialog(): boolean {
        return this.remoteRepoInfoService.createDialog;
    }
    set createRemoteRepoInfoDialog(value: boolean) {
        this.remoteRepoInfoService.createDialog= value;
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

    get validRemoteRepoInfoTitle(): boolean {
        return this._validRemoteRepoInfoTitle;
    }
    set validRemoteRepoInfoTitle(value: boolean) {
        this._validRemoteRepoInfoTitle = value;
    }
    get validProjectDetailsTitle(): boolean {
        return this._validProjectDetailsTitle;
    }
    set validProjectDetailsTitle(value: boolean) {
        this._validProjectDetailsTitle = value;
    }
    get validProjectDetailsProjectTechnology(): boolean {
        return this._validProjectDetailsProjectTechnology;
    }
    set validProjectDetailsProjectTechnology(value: boolean) {
        this._validProjectDetailsProjectTechnology = value;
    }
    get validProjectDetailsProjectTechnologyProfile(): boolean {
        return this._validProjectDetailsProjectTechnologyProfile;
    }
    set validProjectDetailsProjectTechnologyProfile(value: boolean) {
        this._validProjectDetailsProjectTechnologyProfile = value;
    }
    get validProjectDetailsDbName(): boolean {
        return this._validProjectDetailsDbName;
    }
    set validProjectDetailsDbName(value: boolean) {
        this._validProjectDetailsDbName = value;
    }
    get validProjectDetailsDbPassword(): boolean {
        return this._validProjectDetailsDbPassword;
    }
    set validProjectDetailsDbPassword(value: boolean) {
        this._validProjectDetailsDbPassword = value;
    }
    get validProjectDetailsDbUserName(): boolean {
        return this._validProjectDetailsDbUserName;
    }
    set validProjectDetailsDbUserName(value: boolean) {
        this._validProjectDetailsDbUserName = value;
    }
    get validProjectDetailsBasePackage(): boolean {
        return this._validProjectDetailsBasePackage;
    }
    set validProjectDetailsBasePackage(value: boolean) {
        this._validProjectDetailsBasePackage = value;
    }
    get validProjectDetailsMsName(): boolean {
        return this._validProjectDetailsMsName;
    }
    set validProjectDetailsMsName(value: boolean) {
        this._validProjectDetailsMsName = value;
    }
    get validProjectDetailsPort(): boolean {
        return this._validProjectDetailsPort;
    }
    set validProjectDetailsPort(value: boolean) {
        this._validProjectDetailsPort = value;
    }

    get conversationsElement(): ConversationDto {
        if( this._conversationsElement == null )
            this._conversationsElement = new ConversationDto();
        return this._conversationsElement;
    }

    set conversationsElement(value: ConversationDto) {
        this._conversationsElement = value;
    }
    get projectDetailsElement(): ProjectDetailDto {
        if( this._projectDetailsElement == null )
            this._projectDetailsElement = new ProjectDetailDto();
        return this._projectDetailsElement;
    }

    set projectDetailsElement(value: ProjectDetailDto) {
        this._projectDetailsElement = value;
    }

    get items(): Array<ProjectDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDto>) {
        this.service.items = value;
    }

    get item(): ProjectDto {
        return this.service.item;
    }

    set item(value: ProjectDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): ProjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectCriteria) {
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
