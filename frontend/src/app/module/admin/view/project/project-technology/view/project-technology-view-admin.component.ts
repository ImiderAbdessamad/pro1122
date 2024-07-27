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


import {ProjectTechnologyAdminService} from 'src/app/shared/service/admin/project/ProjectTechnologyAdmin.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyCriteria} from 'src/app/shared/criteria/project/ProjectTechnologyCriteria.model';

import {ProjectTechnologyTypeDto} from 'src/app/shared/model/project/ProjectTechnologyType.model';
import {ProjectTechnologyTypeAdminService} from 'src/app/shared/service/admin/project/ProjectTechnologyTypeAdmin.service';
@Component({
  selector: 'app-project-technology-view-admin',
  templateUrl: './project-technology-view-admin.component.html'
})
export class ProjectTechnologyViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: ProjectTechnologyAdminService, private projectTechnologyTypeService: ProjectTechnologyTypeAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ProjectTechnologyCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectTechnologyCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
