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


import {CustumorSupportConversationAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationAdmin.service';
import {CustumorSupportConversationDto} from 'src/app/shared/model/support/CustumorSupportConversation.model';
import {CustumorSupportConversationCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {AgentDto} from 'src/app/shared/model/support/Agent.model';
import {AgentAdminService} from 'src/app/shared/service/admin/support/AgentAdmin.service';
import {CustumorSupportConversationCategoryDto} from 'src/app/shared/model/support/CustumorSupportConversationCategory.model';
import {CustumorSupportConversationCategoryAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationCategoryAdmin.service';
import {CustumorSupportConversationStateDto} from 'src/app/shared/model/support/CustumorSupportConversationState.model';
import {CustumorSupportConversationStateAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationStateAdmin.service';
import {CustumorSupportConversationMessageDto} from 'src/app/shared/model/support/CustumorSupportConversationMessage.model';
import {CustumorSupportConversationMessageAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationMessageAdmin.service';
@Component({
  selector: 'app-custumor-support-conversation-view-admin',
  templateUrl: './custumor-support-conversation-view-admin.component.html'
})
export class CustumorSupportConversationViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    custumorSupportConversationMessages = new CustumorSupportConversationMessageDto();
    custumorSupportConversationMessagess: Array<CustumorSupportConversationMessageDto> = [];

    constructor(private service: CustumorSupportConversationAdminService, private collaboratorService: CollaboratorAdminService, private agentService: AgentAdminService, private custumorSupportConversationCategoryService: CustumorSupportConversationCategoryAdminService, private custumorSupportConversationStateService: CustumorSupportConversationStateAdminService, private custumorSupportConversationMessageService: CustumorSupportConversationMessageAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get agent(): AgentDto {
        return this.agentService.item;
    }
    set agent(value: AgentDto) {
        this.agentService.item = value;
    }
    get agents(): Array<AgentDto> {
        return this.agentService.items;
    }
    set agents(value: Array<AgentDto>) {
        this.agentService.items = value;
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
    get custumorSupportConversationCategory(): CustumorSupportConversationCategoryDto {
        return this.custumorSupportConversationCategoryService.item;
    }
    set custumorSupportConversationCategory(value: CustumorSupportConversationCategoryDto) {
        this.custumorSupportConversationCategoryService.item = value;
    }
    get custumorSupportConversationCategorys(): Array<CustumorSupportConversationCategoryDto> {
        return this.custumorSupportConversationCategoryService.items;
    }
    set custumorSupportConversationCategorys(value: Array<CustumorSupportConversationCategoryDto>) {
        this.custumorSupportConversationCategoryService.items = value;
    }
    get custumorSupportConversationState(): CustumorSupportConversationStateDto {
        return this.custumorSupportConversationStateService.item;
    }
    set custumorSupportConversationState(value: CustumorSupportConversationStateDto) {
        this.custumorSupportConversationStateService.item = value;
    }
    get custumorSupportConversationStates(): Array<CustumorSupportConversationStateDto> {
        return this.custumorSupportConversationStateService.items;
    }
    set custumorSupportConversationStates(value: Array<CustumorSupportConversationStateDto>) {
        this.custumorSupportConversationStateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<CustumorSupportConversationDto> {
        return this.service.items;
    }

    set items(value: Array<CustumorSupportConversationDto>) {
        this.service.items = value;
    }

    get item(): CustumorSupportConversationDto {
        return this.service.item;
    }

    set item(value: CustumorSupportConversationDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): CustumorSupportConversationCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
