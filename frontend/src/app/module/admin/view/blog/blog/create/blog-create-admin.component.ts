import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {BlogAdminService} from 'src/app/shared/service/admin/blog/BlogAdmin.service';
import {BlogDto} from 'src/app/shared/model/blog/Blog.model';
import {BlogCriteria} from 'src/app/shared/criteria/blog/BlogCriteria.model';
import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {BlogSubjectDto} from 'src/app/shared/model/blog/BlogSubject.model';
import {BlogSubjectAdminService} from 'src/app/shared/service/admin/blog/BlogSubjectAdmin.service';
import {BlogCommentDto} from 'src/app/shared/model/blog/BlogComment.model';
import {BlogCommentAdminService} from 'src/app/shared/service/admin/blog/BlogCommentAdmin.service';
import {BlogStateDto} from 'src/app/shared/model/blog/BlogState.model';
import {BlogStateAdminService} from 'src/app/shared/service/admin/blog/BlogStateAdmin.service';
@Component({
  selector: 'app-blog-create-admin',
  templateUrl: './blog-create-admin.component.html'
})
export class BlogCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;

    private _blogCommentsElement = new BlogCommentDto();


    private _validBlogSubjectCode = true;
    private _validBlogSubjectLibelle = true;
    private _validBlogStateCode = true;
    private _validBlogStateLibelle = true;

	constructor(private service: BlogAdminService , private collaboratorService: CollaboratorAdminService, private blogSubjectService: BlogSubjectAdminService, private blogCommentService: BlogCommentAdminService, private blogStateService: BlogStateAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.blogCommentsElement.collaborator = new CollaboratorDto();
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.blogSubjectService.findAll().subscribe((data) => this.blogSubjects = data);
        this.blogStateService.findAll().subscribe((data) => this.blogStates = data);
    }



    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new BlogDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }



    validateBlogComments(){
        this.errorMessages = new Array();
    }


    public  setValidation(value: boolean){
    }

    public addBlogComments() {
        if( this.item.blogComments == null )
            this.item.blogComments = new Array<BlogCommentDto>();
       this.validateBlogComments();
       if (this.errorMessages.length === 0) {
              this.item.blogComments.push({... this.blogCommentsElement});
              this.blogCommentsElement = new BlogCommentDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteblogComments(p: BlogCommentDto) {
        this.item.blogComments.forEach((element, index) => {
            if (element === p) { this.item.blogComments.splice(index, 1); }
        });
    }

    public editblogComments(p: BlogCommentDto) {
        this.blogCommentsElement = {... p};
        this.activeTab = 0;
    }


    public  validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateBlogSubject(blogSubject: string) {
    const isPermistted = await this.roleService.isPermitted('BlogSubject', 'add');
    if(isPermistted) {
         this.blogSubject = new BlogSubjectDto();
         this.createBlogSubjectDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateBlogState(blogState: string) {
    const isPermistted = await this.roleService.isPermitted('BlogState', 'add');
    if(isPermistted) {
         this.blogState = new BlogStateDto();
         this.createBlogStateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get createBlogSubjectDialog(): boolean {
        return this.blogSubjectService.createDialog;
    }
    set createBlogSubjectDialog(value: boolean) {
        this.blogSubjectService.createDialog= value;
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
    get createBlogStateDialog(): boolean {
        return this.blogStateService.createDialog;
    }
    set createBlogStateDialog(value: boolean) {
        this.blogStateService.createDialog= value;
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




    get validBlogSubjectCode(): boolean {
        return this._validBlogSubjectCode;
    }
    set validBlogSubjectCode(value: boolean) {
        this._validBlogSubjectCode = value;
    }
    get validBlogSubjectLibelle(): boolean {
        return this._validBlogSubjectLibelle;
    }
    set validBlogSubjectLibelle(value: boolean) {
        this._validBlogSubjectLibelle = value;
    }
    get validBlogStateCode(): boolean {
        return this._validBlogStateCode;
    }
    set validBlogStateCode(value: boolean) {
        this._validBlogStateCode = value;
    }
    get validBlogStateLibelle(): boolean {
        return this._validBlogStateLibelle;
    }
    set validBlogStateLibelle(value: boolean) {
        this._validBlogStateLibelle = value;
    }

    get blogCommentsElement(): BlogCommentDto {
        if( this._blogCommentsElement == null )
            this._blogCommentsElement = new BlogCommentDto();
        return this._blogCommentsElement;
    }

    set blogCommentsElement(value: BlogCommentDto) {
        this._blogCommentsElement = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): BlogCriteria {
        return this.service.criteria;
    }

    set criteria(value: BlogCriteria) {
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
