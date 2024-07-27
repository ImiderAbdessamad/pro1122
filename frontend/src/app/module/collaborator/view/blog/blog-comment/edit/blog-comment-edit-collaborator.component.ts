import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {BlogCommentCollaboratorService} from 'src/app/shared/service/collaborator/blog/BlogCommentCollaborator.service';
import {BlogCommentDto} from 'src/app/shared/model/blog/BlogComment.model';
import {BlogCommentCriteria} from 'src/app/shared/criteria/blog/BlogCommentCriteria.model';


import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {BlogDto} from 'src/app/shared/model/blog/Blog.model';
import {BlogCollaboratorService} from 'src/app/shared/service/collaborator/blog/BlogCollaborator.service';

@Component({
  selector: 'app-blog-comment-edit-collaborator',
  templateUrl: './blog-comment-edit-collaborator.component.html'
})
export class BlogCommentEditCollaboratorComponent implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;







    constructor(private service: BlogCommentCollaboratorService , private collaboratorService: CollaboratorCollaboratorService, private blogService: BlogCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.blogService.findAll().subscribe((data) => this.blogs = data);
    }

    public prepareEdit() {
        this.item.creationDate = this.service.format(this.item.creationDate);
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new BlogCommentDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   public async openCreateBlog(blog: string) {
        const isPermistted = await this.roleService.isPermitted('Blog', 'edit');
        if (isPermistted) {
             this.blog = new BlogDto();
             this.createBlogDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
    get createBlogDialog(): boolean {
        return this.blogService.createDialog;
    }
    set createBlogDialog(value: boolean) {
        this.blogService.createDialog= value;
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
    get createCollaboratorDialog(): boolean {
        return this.collaboratorService.createDialog;
    }
    set createCollaboratorDialog(value: boolean) {
        this.collaboratorService.createDialog= value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): BlogCommentCriteria {
        return this.service.criteria;
    }

    set criteria(value: BlogCommentCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }


}
