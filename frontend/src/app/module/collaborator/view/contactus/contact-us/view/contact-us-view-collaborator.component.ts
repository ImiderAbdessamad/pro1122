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


import {ContactUsCollaboratorService} from 'src/app/shared/service/collaborator/contactus/ContactUsCollaborator.service';
import {ContactUsDto} from 'src/app/shared/model/contactus/ContactUs.model';
import {ContactUsCriteria} from 'src/app/shared/criteria/contactus/ContactUsCriteria.model';

import {ContactUsCategoryDto} from 'src/app/shared/model/contactus/ContactUsCategory.model';
import {ContactUsCategoryCollaboratorService} from 'src/app/shared/service/collaborator/contactus/ContactUsCategoryCollaborator.service';
import {ContactUsStateDto} from 'src/app/shared/model/contactus/ContactUsState.model';
import {ContactUsStateCollaboratorService} from 'src/app/shared/service/collaborator/contactus/ContactUsStateCollaborator.service';
@Component({
  selector: 'app-contact-us-view-collaborator',
  templateUrl: './contact-us-view-collaborator.component.html'
})
export class ContactUsViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: ContactUsCollaboratorService, private contactUsCategoryService: ContactUsCategoryCollaboratorService, private contactUsStateService: ContactUsStateCollaboratorService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get contactUsCategory(): ContactUsCategoryDto {
        return this.contactUsCategoryService.item;
    }
    set contactUsCategory(value: ContactUsCategoryDto) {
        this.contactUsCategoryService.item = value;
    }
    get contactUsCategorys(): Array<ContactUsCategoryDto> {
        return this.contactUsCategoryService.items;
    }
    set contactUsCategorys(value: Array<ContactUsCategoryDto>) {
        this.contactUsCategoryService.items = value;
    }
    get contactUsState(): ContactUsStateDto {
        return this.contactUsStateService.item;
    }
    set contactUsState(value: ContactUsStateDto) {
        this.contactUsStateService.item = value;
    }
    get contactUsStates(): Array<ContactUsStateDto> {
        return this.contactUsStateService.items;
    }
    set contactUsStates(value: Array<ContactUsStateDto>) {
        this.contactUsStateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<ContactUsDto> {
        return this.service.items;
    }

    set items(value: Array<ContactUsDto>) {
        this.service.items = value;
    }

    get item(): ContactUsDto {
        return this.service.item;
    }

    set item(value: ContactUsDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ContactUsCriteria {
        return this.service.criteria;
    }

    set criteria(value: ContactUsCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
