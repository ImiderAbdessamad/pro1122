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


import {ForumCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumCollaborator.service';
import {ForumDto} from 'src/app/shared/model/forum/Forum.model';
import {ForumCriteria} from 'src/app/shared/criteria/forum/ForumCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {ForumSubjectDto} from 'src/app/shared/model/forum/ForumSubject.model';
import {ForumSubjectCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumSubjectCollaborator.service';
import {ForumStateDto} from 'src/app/shared/model/forum/ForumState.model';
import {ForumStateCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumStateCollaborator.service';
import {ForumCommentDto} from 'src/app/shared/model/forum/ForumComment.model';
import {ForumCommentCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumCommentCollaborator.service';
@Component({
  selector: 'app-forum-view-collaborator',
  templateUrl: './forum-view-collaborator.component.html'
})
export class ForumViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    forumComments = new ForumCommentDto();
    forumCommentss: Array<ForumCommentDto> = [];

    constructor(private service: ForumCollaboratorService, private collaboratorService: CollaboratorCollaboratorService, private forumSubjectService: ForumSubjectCollaboratorService, private forumStateService: ForumStateCollaboratorService, private forumCommentService: ForumCommentCollaboratorService){
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
    get forumSubject(): ForumSubjectDto {
        return this.forumSubjectService.item;
    }
    set forumSubject(value: ForumSubjectDto) {
        this.forumSubjectService.item = value;
    }
    get forumSubjects(): Array<ForumSubjectDto> {
        return this.forumSubjectService.items;
    }
    set forumSubjects(value: Array<ForumSubjectDto>) {
        this.forumSubjectService.items = value;
    }
    get forumState(): ForumStateDto {
        return this.forumStateService.item;
    }
    set forumState(value: ForumStateDto) {
        this.forumStateService.item = value;
    }
    get forumStates(): Array<ForumStateDto> {
        return this.forumStateService.items;
    }
    set forumStates(value: Array<ForumStateDto>) {
        this.forumStateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<ForumDto> {
        return this.service.items;
    }

    set items(value: Array<ForumDto>) {
        this.service.items = value;
    }

    get item(): ForumDto {
        return this.service.item;
    }

    set item(value: ForumDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ForumCriteria {
        return this.service.criteria;
    }

    set criteria(value: ForumCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
