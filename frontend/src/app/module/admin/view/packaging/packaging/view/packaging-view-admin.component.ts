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


import {PackagingAdminService} from 'src/app/shared/service/admin/packaging/PackagingAdmin.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingCriteria} from 'src/app/shared/criteria/packaging/PackagingCriteria.model';

import {PackagingDetailGroupDto} from 'src/app/shared/model/packaging/PackagingDetailGroup.model';
import {PackagingDetailGroupAdminService} from 'src/app/shared/service/admin/packaging/PackagingDetailGroupAdmin.service';
import {PackagingPlanDto} from 'src/app/shared/model/packaging/PackagingPlan.model';
import {PackagingPlanAdminService} from 'src/app/shared/service/admin/packaging/PackagingPlanAdmin.service';
import {PackagingDetailDto} from 'src/app/shared/model/packaging/PackagingDetail.model';
import {PackagingDetailAdminService} from 'src/app/shared/service/admin/packaging/PackagingDetailAdmin.service';
@Component({
  selector: 'app-packaging-view-admin',
  templateUrl: './packaging-view-admin.component.html'
})
export class PackagingViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    packagingPlans = new PackagingPlanDto();
    packagingPlanss: Array<PackagingPlanDto> = [];
    packagingDetails = new PackagingDetailDto();
    packagingDetailss: Array<PackagingDetailDto> = [];

    constructor(private service: PackagingAdminService, private packagingDetailGroupService: PackagingDetailGroupAdminService, private packagingPlanService: PackagingPlanAdminService, private packagingDetailService: PackagingDetailAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get packagingDetailGroup(): PackagingDetailGroupDto {
        return this.packagingDetailGroupService.item;
    }
    set packagingDetailGroup(value: PackagingDetailGroupDto) {
        this.packagingDetailGroupService.item = value;
    }
    get packagingDetailGroups(): Array<PackagingDetailGroupDto> {
        return this.packagingDetailGroupService.items;
    }
    set packagingDetailGroups(value: Array<PackagingDetailGroupDto>) {
        this.packagingDetailGroupService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<PackagingDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingDto>) {
        this.service.items = value;
    }

    get item(): PackagingDto {
        return this.service.item;
    }

    set item(value: PackagingDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PackagingCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
