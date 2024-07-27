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
  selector: 'app-project-detail-view-collaborator',
  templateUrl: './project-detail-view-collaborator.component.html'
})
export class ProjectDetailViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: ProjectDetailCollaboratorService, private projectService: ProjectCollaboratorService, private projectTechnologyService: ProjectTechnologyCollaboratorService, private projectTechnologyProfileService: ProjectTechnologyProfileCollaboratorService){
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ProjectDetailCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectDetailCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
