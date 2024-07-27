import {Component, OnInit} from '@angular/core';


import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';
import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';


import {ProjectCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectCollaborator.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyCollaborator.service';
import {RemoteRepoInfoDto} from 'src/app/shared/model/project/RemoteRepoInfo.model';
import {RemoteRepoInfoCollaboratorService} from 'src/app/shared/service/collaborator/project/RemoteRepoInfoCollaborator.service';
import {ConversationDto} from 'src/app/shared/model/project/Conversation.model';
import {ConversationCollaboratorService} from 'src/app/shared/service/collaborator/project/ConversationCollaborator.service';
import {ProjectTechnologyProfileDto} from 'src/app/shared/model/project/ProjectTechnologyProfile.model';
import {ProjectTechnologyProfileCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyProfileCollaborator.service';
import {ProjectDetailDto} from 'src/app/shared/model/project/ProjectDetail.model';
import {ProjectDetailCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectDetailCollaborator.service';
@Component({
  selector: 'app-project-view-collaborator',
  templateUrl: './project-view-collaborator.component.html'
})
export class ProjectViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    conversations = new ConversationDto();
    conversationss: Array<ConversationDto> = [];
    projectDetails = new ProjectDetailDto();
    projectDetailss: Array<ProjectDetailDto> = [];

    constructor(private service: ProjectCollaboratorService, private collaboratorService: CollaboratorCollaboratorService, private projectTechnologyService: ProjectTechnologyCollaboratorService, private remoteRepoInfoService: RemoteRepoInfoCollaboratorService, private conversationService: ConversationCollaboratorService, private projectTechnologyProfileService: ProjectTechnologyProfileCollaboratorService, private projectDetailService: ProjectDetailCollaboratorService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ProjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
