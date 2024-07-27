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


import {PaimentCollaboratorTypeAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorTypeAdmin.service';
import {PaimentCollaboratorTypeDto} from 'src/app/shared/model/payement/PaimentCollaboratorType.model';
import {PaimentCollaboratorTypeCriteria} from 'src/app/shared/criteria/payement/PaimentCollaboratorTypeCriteria.model';

@Component({
  selector: 'app-paiment-collaborator-type-view-admin',
  templateUrl: './paiment-collaborator-type-view-admin.component.html'
})
export class PaimentCollaboratorTypeViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PaimentCollaboratorTypeAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }



    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<PaimentCollaboratorTypeDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentCollaboratorTypeDto>) {
        this.service.items = value;
    }

    get item(): PaimentCollaboratorTypeDto {
        return this.service.item;
    }

    set item(value: PaimentCollaboratorTypeDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PaimentCollaboratorTypeCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorTypeCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
