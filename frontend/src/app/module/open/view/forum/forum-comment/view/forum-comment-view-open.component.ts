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


import {ForumCommentOpenService} from 'src/app/shared/service/open/forum/ForumCommentOpen.service';
import {ForumCommentDto} from 'src/app/shared/model/forum/ForumComment.model';
import {ForumCommentCriteria} from 'src/app/shared/criteria/forum/ForumCommentCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorOpenService} from 'src/app/shared/service/open/collaborator/CollaboratorOpen.service';
import {ForumDto} from 'src/app/shared/model/forum/Forum.model';
import {ForumOpenService} from 'src/app/shared/service/open/forum/ForumOpen.service';
@Component({
  selector: 'app-forum-comment-view-open',
  templateUrl: './forum-comment-view-open.component.html'
})
export class ForumCommentViewOpenComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: ForumCommentOpenService, private collaboratorService: CollaboratorOpenService, private forumService: ForumOpenService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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
    get forum(): ForumDto {
        return this.forumService.item;
    }
    set forum(value: ForumDto) {
        this.forumService.item = value;
    }
    get forums(): Array<ForumDto> {
        return this.forumService.items;
    }
    set forums(value: Array<ForumDto>) {
        this.forumService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<ForumCommentDto> {
        return this.service.items;
    }

    set items(value: Array<ForumCommentDto>) {
        this.service.items = value;
    }

    get item(): ForumCommentDto {
        return this.service.item;
    }

    set item(value: ForumCommentDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ForumCommentCriteria {
        return this.service.criteria;
    }

    set criteria(value: ForumCommentCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
