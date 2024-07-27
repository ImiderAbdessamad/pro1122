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


import {CustumorSupportConversationMessageCollaboratorService} from 'src/app/shared/service/collaborator/support/CustumorSupportConversationMessageCollaborator.service';
import {CustumorSupportConversationMessageDto} from 'src/app/shared/model/support/CustumorSupportConversationMessage.model';
import {CustumorSupportConversationMessageCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationMessageCriteria.model';

import {CustumorSupportConversationDto} from 'src/app/shared/model/support/CustumorSupportConversation.model';
import {CustumorSupportConversationCollaboratorService} from 'src/app/shared/service/collaborator/support/CustumorSupportConversationCollaborator.service';
@Component({
  selector: 'app-custumor-support-conversation-message-view-collaborator',
  templateUrl: './custumor-support-conversation-message-view-collaborator.component.html'
})
export class CustumorSupportConversationMessageViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: CustumorSupportConversationMessageCollaboratorService, private custumorSupportConversationService: CustumorSupportConversationCollaboratorService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get custumorSupportConversation(): CustumorSupportConversationDto {
        return this.custumorSupportConversationService.item;
    }
    set custumorSupportConversation(value: CustumorSupportConversationDto) {
        this.custumorSupportConversationService.item = value;
    }
    get custumorSupportConversations(): Array<CustumorSupportConversationDto> {
        return this.custumorSupportConversationService.items;
    }
    set custumorSupportConversations(value: Array<CustumorSupportConversationDto>) {
        this.custumorSupportConversationService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<CustumorSupportConversationMessageDto> {
        return this.service.items;
    }

    set items(value: Array<CustumorSupportConversationMessageDto>) {
        this.service.items = value;
    }

    get item(): CustumorSupportConversationMessageDto {
        return this.service.item;
    }

    set item(value: CustumorSupportConversationMessageDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): CustumorSupportConversationMessageCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationMessageCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
