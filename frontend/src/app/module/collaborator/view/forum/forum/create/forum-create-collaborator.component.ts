import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




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
  selector: 'app-forum-create-collaborator',
  templateUrl: './forum-create-collaborator.component.html'
})
export class ForumCreateCollaboratorComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;

    private _forumCommentsElement = new ForumCommentDto();


    private _validForumSubjectCode = true;
    private _validForumSubjectLibelle = true;
    private _validForumStateCode = true;
    private _validForumStateLibelle = true;

	constructor(private service: ForumCollaboratorService , private collaboratorService: CollaboratorCollaboratorService, private forumSubjectService: ForumSubjectCollaboratorService, private forumStateService: ForumStateCollaboratorService, private forumCommentService: ForumCommentCollaboratorService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.forumCommentsElement.collaborator = new CollaboratorDto();
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.forumSubjectService.findAll().subscribe((data) => this.forumSubjects = data);
        this.forumStateService.findAll().subscribe((data) => this.forumStates = data);
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
                this.item = new ForumDto();
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



    validateForumComments(){
        this.errorMessages = new Array();
    }


    public  setValidation(value: boolean){
    }

    public addForumComments() {
        if( this.item.forumComments == null )
            this.item.forumComments = new Array<ForumCommentDto>();
       this.validateForumComments();
       if (this.errorMessages.length === 0) {
              this.item.forumComments.push({... this.forumCommentsElement});
              this.forumCommentsElement = new ForumCommentDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteforumComments(p: ForumCommentDto) {
        this.item.forumComments.forEach((element, index) => {
            if (element === p) { this.item.forumComments.splice(index, 1); }
        });
    }

    public editforumComments(p: ForumCommentDto) {
        this.forumCommentsElement = {... p};
        this.activeTab = 0;
    }


    public  validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateForumSubject(forumSubject: string) {
    const isPermistted = await this.roleService.isPermitted('ForumSubject', 'add');
    if(isPermistted) {
         this.forumSubject = new ForumSubjectDto();
         this.createForumSubjectDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateForumState(forumState: string) {
    const isPermistted = await this.roleService.isPermitted('ForumState', 'add');
    if(isPermistted) {
         this.forumState = new ForumStateDto();
         this.createForumStateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get createForumSubjectDialog(): boolean {
        return this.forumSubjectService.createDialog;
    }
    set createForumSubjectDialog(value: boolean) {
        this.forumSubjectService.createDialog= value;
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
    get createForumStateDialog(): boolean {
        return this.forumStateService.createDialog;
    }
    set createForumStateDialog(value: boolean) {
        this.forumStateService.createDialog= value;
    }




    get validForumSubjectCode(): boolean {
        return this._validForumSubjectCode;
    }
    set validForumSubjectCode(value: boolean) {
        this._validForumSubjectCode = value;
    }
    get validForumSubjectLibelle(): boolean {
        return this._validForumSubjectLibelle;
    }
    set validForumSubjectLibelle(value: boolean) {
        this._validForumSubjectLibelle = value;
    }
    get validForumStateCode(): boolean {
        return this._validForumStateCode;
    }
    set validForumStateCode(value: boolean) {
        this._validForumStateCode = value;
    }
    get validForumStateLibelle(): boolean {
        return this._validForumStateLibelle;
    }
    set validForumStateLibelle(value: boolean) {
        this._validForumStateLibelle = value;
    }

    get forumCommentsElement(): ForumCommentDto {
        if( this._forumCommentsElement == null )
            this._forumCommentsElement = new ForumCommentDto();
        return this._forumCommentsElement;
    }

    set forumCommentsElement(value: ForumCommentDto) {
        this._forumCommentsElement = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): ForumCriteria {
        return this.service.criteria;
    }

    set criteria(value: ForumCriteria) {
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
