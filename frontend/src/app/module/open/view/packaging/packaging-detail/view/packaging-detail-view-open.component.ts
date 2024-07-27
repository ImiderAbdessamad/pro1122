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


import {PackagingDetailOpenService} from 'src/app/shared/service/open/packaging/PackagingDetailOpen.service';
import {PackagingDetailDto} from 'src/app/shared/model/packaging/PackagingDetail.model';
import {PackagingDetailCriteria} from 'src/app/shared/criteria/packaging/PackagingDetailCriteria.model';

import {PackagingDetailGroupDto} from 'src/app/shared/model/packaging/PackagingDetailGroup.model';
import {PackagingDetailGroupOpenService} from 'src/app/shared/service/open/packaging/PackagingDetailGroupOpen.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingOpenService} from 'src/app/shared/service/open/packaging/PackagingOpen.service';
@Component({
  selector: 'app-packaging-detail-view-open',
  templateUrl: './packaging-detail-view-open.component.html'
})
export class PackagingDetailViewOpenComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PackagingDetailOpenService, private packagingDetailGroupService: PackagingDetailGroupOpenService, private packagingService: PackagingOpenService){
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
    get packaging(): PackagingDto {
        return this.packagingService.item;
    }
    set packaging(value: PackagingDto) {
        this.packagingService.item = value;
    }
    get packagings(): Array<PackagingDto> {
        return this.packagingService.items;
    }
    set packagings(value: Array<PackagingDto>) {
        this.packagingService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<PackagingDetailDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingDetailDto>) {
        this.service.items = value;
    }

    get item(): PackagingDetailDto {
        return this.service.item;
    }

    set item(value: PackagingDetailDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PackagingDetailCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingDetailCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
