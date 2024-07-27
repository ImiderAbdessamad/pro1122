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


import {BlogOpenService} from 'src/app/shared/service/open/blog/BlogOpen.service';
import {BlogDto} from 'src/app/shared/model/blog/Blog.model';
import {BlogCriteria} from 'src/app/shared/criteria/blog/BlogCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorOpenService} from 'src/app/shared/service/open/collaborator/CollaboratorOpen.service';
import {BlogSubjectDto} from 'src/app/shared/model/blog/BlogSubject.model';
import {BlogSubjectOpenService} from 'src/app/shared/service/open/blog/BlogSubjectOpen.service';
import {BlogCommentDto} from 'src/app/shared/model/blog/BlogComment.model';
import {BlogCommentOpenService} from 'src/app/shared/service/open/blog/BlogCommentOpen.service';
import {BlogStateDto} from 'src/app/shared/model/blog/BlogState.model';
import {BlogStateOpenService} from 'src/app/shared/service/open/blog/BlogStateOpen.service';
@Component({
  selector: 'app-blog-view-open',
  templateUrl: './blog-view-open.component.html'
})
export class BlogViewOpenComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    blogComments = new BlogCommentDto();
    blogCommentss: Array<BlogCommentDto> = [];

    constructor(private service: BlogOpenService, private collaboratorService: CollaboratorOpenService, private blogSubjectService: BlogSubjectOpenService, private blogCommentService: BlogCommentOpenService, private blogStateService: BlogStateOpenService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get blogSubject(): BlogSubjectDto {
        return this.blogSubjectService.item;
    }
    set blogSubject(value: BlogSubjectDto) {
        this.blogSubjectService.item = value;
    }
    get blogSubjects(): Array<BlogSubjectDto> {
        return this.blogSubjectService.items;
    }
    set blogSubjects(value: Array<BlogSubjectDto>) {
        this.blogSubjectService.items = value;
    }
    get blogState(): BlogStateDto {
        return this.blogStateService.item;
    }
    set blogState(value: BlogStateDto) {
        this.blogStateService.item = value;
    }
    get blogStates(): Array<BlogStateDto> {
        return this.blogStateService.items;
    }
    set blogStates(value: Array<BlogStateDto>) {
        this.blogStateService.items = value;
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

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<BlogDto> {
        return this.service.items;
    }

    set items(value: Array<BlogDto>) {
        this.service.items = value;
    }

    get item(): BlogDto {
        return this.service.item;
    }

    set item(value: BlogDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): BlogCriteria {
        return this.service.criteria;
    }

    set criteria(value: BlogCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
