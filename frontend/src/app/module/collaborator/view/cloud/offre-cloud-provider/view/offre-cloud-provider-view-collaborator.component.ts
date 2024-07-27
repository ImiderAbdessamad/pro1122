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


import {OffreCloudProviderCollaboratorService} from 'src/app/shared/service/collaborator/cloud/OffreCloudProviderCollaborator.service';
import {OffreCloudProviderDto} from 'src/app/shared/model/cloud/OffreCloudProvider.model';
import {OffreCloudProviderCriteria} from 'src/app/shared/criteria/cloud/OffreCloudProviderCriteria.model';

import {CloudProviderDto} from 'src/app/shared/model/cloud/CloudProvider.model';
import {CloudProviderCollaboratorService} from 'src/app/shared/service/collaborator/cloud/CloudProviderCollaborator.service';
@Component({
  selector: 'app-offre-cloud-provider-view-collaborator',
  templateUrl: './offre-cloud-provider-view-collaborator.component.html'
})
export class OffreCloudProviderViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: OffreCloudProviderCollaboratorService, private cloudProviderService: CloudProviderCollaboratorService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get cloudProvider(): CloudProviderDto {
        return this.cloudProviderService.item;
    }
    set cloudProvider(value: CloudProviderDto) {
        this.cloudProviderService.item = value;
    }
    get cloudProviders(): Array<CloudProviderDto> {
        return this.cloudProviderService.items;
    }
    set cloudProviders(value: Array<CloudProviderDto>) {
        this.cloudProviderService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<OffreCloudProviderDto> {
        return this.service.items;
    }

    set items(value: Array<OffreCloudProviderDto>) {
        this.service.items = value;
    }

    get item(): OffreCloudProviderDto {
        return this.service.item;
    }

    set item(value: OffreCloudProviderDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): OffreCloudProviderCriteria {
        return this.service.criteria;
    }

    set criteria(value: OffreCloudProviderCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
