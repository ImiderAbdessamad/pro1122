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


import {BlogCommentCollaboratorService} from 'src/app/shared/service/collaborator/blog/BlogCommentCollaborator.service';
import {BlogCommentDto} from 'src/app/shared/model/blog/BlogComment.model';
import {BlogCommentCriteria} from 'src/app/shared/criteria/blog/BlogCommentCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {BlogDto} from 'src/app/shared/model/blog/Blog.model';
import {BlogCollaboratorService} from 'src/app/shared/service/collaborator/blog/BlogCollaborator.service';
@Component({
  selector: 'app-blog-comment-view-collaborator',
  templateUrl: './blog-comment-view-collaborator.component.html'
})
export class BlogCommentViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: BlogCommentCollaboratorService, private collaboratorService: CollaboratorCollaboratorService, private blogService: BlogCollaboratorService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get blog(): BlogDto {
        return this.blogService.item;
    }
    set blog(value: BlogDto) {
        this.blogService.item = value;
    }
    get blogs(): Array<BlogDto> {
        return this.blogService.items;
    }
    set blogs(value: Array<BlogDto>) {
        this.blogService.items = value;
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

    get items(): Array<BlogCommentDto> {
        return this.service.items;
    }

    set items(value: Array<BlogCommentDto>) {
        this.service.items = value;
    }

    get item(): BlogCommentDto {
        return this.service.item;
    }

    set item(value: BlogCommentDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): BlogCommentCriteria {
        return this.service.criteria;
    }

    set criteria(value: BlogCommentCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
