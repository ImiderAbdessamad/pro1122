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




import {CustumorSupportConversationAgentService} from 'src/app/shared/service/agent/support/CustumorSupportConversationAgent.service';
import {CustumorSupportConversationDto} from 'src/app/shared/model/support/CustumorSupportConversation.model';
import {CustumorSupportConversationCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationCriteria.model';


import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAgentService} from 'src/app/shared/service/agent/collaborator/CollaboratorAgent.service';
import {AgentDto} from 'src/app/shared/model/support/Agent.model';
import {AgentAgentService} from 'src/app/shared/service/agent/support/AgentAgent.service';
import {CustumorSupportConversationCategoryDto} from 'src/app/shared/model/support/CustumorSupportConversationCategory.model';
import {CustumorSupportConversationCategoryAgentService} from 'src/app/shared/service/agent/support/CustumorSupportConversationCategoryAgent.service';
import {CustumorSupportConversationStateDto} from 'src/app/shared/model/support/CustumorSupportConversationState.model';
import {CustumorSupportConversationStateAgentService} from 'src/app/shared/service/agent/support/CustumorSupportConversationStateAgent.service';
import {CustumorSupportConversationMessageDto} from 'src/app/shared/model/support/CustumorSupportConversationMessage.model';
import {CustumorSupportConversationMessageAgentService} from 'src/app/shared/service/agent/support/CustumorSupportConversationMessageAgent.service';

@Component({
  selector: 'app-custumor-support-conversation-edit-agent',
  templateUrl: './custumor-support-conversation-edit-agent.component.html'
})
export class CustumorSupportConversationEditAgentComponent implements OnInit {

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


    private _custumorSupportConversationMessagesElement = new CustumorSupportConversationMessageDto();


    private _validCustumorSupportConversationCategoryCode = true;
    private _validCustumorSupportConversationCategoryLibelle = true;
    private _validCustumorSupportConversationStateCode = true;
    private _validCustumorSupportConversationStateLibelle = true;



    constructor(private service: CustumorSupportConversationAgentService , private collaboratorService: CollaboratorAgentService, private agentService: AgentAgentService, private custumorSupportConversationCategoryService: CustumorSupportConversationCategoryAgentService, private custumorSupportConversationStateService: CustumorSupportConversationStateAgentService, private custumorSupportConversationMessageService: CustumorSupportConversationMessageAgentService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {

        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.agentService.findAll().subscribe((data) => this.agents = data);
        this.custumorSupportConversationCategoryService.findAll().subscribe((data) => this.custumorSupportConversationCategorys = data);
        this.custumorSupportConversationStateService.findAll().subscribe((data) => this.custumorSupportConversationStates = data);
    }

    public prepareEdit() {
        this.item.creationDate = this.service.format(this.item.creationDate);
        this.item.closingDate = this.service.format(this.item.closingDate);
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
            this.item = new CustumorSupportConversationDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public validateCustumorSupportConversationMessages(){
        this.errorMessages = new Array();
    }

    public setValidation(value: boolean){
    }

   public addCustumorSupportConversationMessages() {
        if( this.item.custumorSupportConversationMessages == null )
            this.item.custumorSupportConversationMessages = new Array<CustumorSupportConversationMessageDto>();
       this.validateCustumorSupportConversationMessages();
       if (this.errorMessages.length === 0) {
            if(this.custumorSupportConversationMessagesElement.id == null){
                this.item.custumorSupportConversationMessages.push(this.custumorSupportConversationMessagesElement);
            }else{
                const index = this.item.custumorSupportConversationMessages.findIndex(e => e.id == this.custumorSupportConversationMessagesElement.id);
                this.item.custumorSupportConversationMessages[index] = this.custumorSupportConversationMessagesElement;
            }
          this.custumorSupportConversationMessagesElement = new CustumorSupportConversationMessageDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteCustumorSupportConversationMessages(p: CustumorSupportConversationMessageDto) {
        this.item.custumorSupportConversationMessages.forEach((element, index) => {
            if (element === p) { this.item.custumorSupportConversationMessages.splice(index, 1); }
        });
    }

    public editCustumorSupportConversationMessages(p: CustumorSupportConversationMessageDto) {
        this.custumorSupportConversationMessagesElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   public async openCreateAgent(agent: string) {
        const isPermistted = await this.roleService.isPermitted('Agent', 'edit');
        if (isPermistted) {
             this.agent = new AgentDto();
             this.createAgentDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateCustumorSupportConversationCategory(custumorSupportConversationCategory: string) {
        const isPermistted = await this.roleService.isPermitted('CustumorSupportConversationCategory', 'edit');
        if (isPermistted) {
             this.custumorSupportConversationCategory = new CustumorSupportConversationCategoryDto();
             this.createCustumorSupportConversationCategoryDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateCustumorSupportConversationState(custumorSupportConversationState: string) {
        const isPermistted = await this.roleService.isPermitted('CustumorSupportConversationState', 'edit');
        if (isPermistted) {
             this.custumorSupportConversationState = new CustumorSupportConversationStateDto();
             this.createCustumorSupportConversationStateDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
    get createAgentDialog(): boolean {
        return this.agentService.createDialog;
    }
    set createAgentDialog(value: boolean) {
        this.agentService.createDialog= value;
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
    get createCustumorSupportConversationCategoryDialog(): boolean {
        return this.custumorSupportConversationCategoryService.createDialog;
    }
    set createCustumorSupportConversationCategoryDialog(value: boolean) {
        this.custumorSupportConversationCategoryService.createDialog= value;
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
    get createCustumorSupportConversationStateDialog(): boolean {
        return this.custumorSupportConversationStateService.createDialog;
    }
    set createCustumorSupportConversationStateDialog(value: boolean) {
        this.custumorSupportConversationStateService.createDialog= value;
    }

    get custumorSupportConversationMessagesElement(): CustumorSupportConversationMessageDto {
        if( this._custumorSupportConversationMessagesElement == null )
            this._custumorSupportConversationMessagesElement = new CustumorSupportConversationMessageDto();
         return this._custumorSupportConversationMessagesElement;
    }

    set custumorSupportConversationMessagesElement(value: CustumorSupportConversationMessageDto) {
        this._custumorSupportConversationMessagesElement = value;
    }


    get validCustumorSupportConversationCategoryCode(): boolean {
        return this._validCustumorSupportConversationCategoryCode;
    }
    set validCustumorSupportConversationCategoryCode(value: boolean) {
        this._validCustumorSupportConversationCategoryCode = value;
    }
    get validCustumorSupportConversationCategoryLibelle(): boolean {
        return this._validCustumorSupportConversationCategoryLibelle;
    }
    set validCustumorSupportConversationCategoryLibelle(value: boolean) {
        this._validCustumorSupportConversationCategoryLibelle = value;
    }
    get validCustumorSupportConversationStateCode(): boolean {
        return this._validCustumorSupportConversationStateCode;
    }
    set validCustumorSupportConversationStateCode(value: boolean) {
        this._validCustumorSupportConversationStateCode = value;
    }
    get validCustumorSupportConversationStateLibelle(): boolean {
        return this._validCustumorSupportConversationStateLibelle;
    }
    set validCustumorSupportConversationStateLibelle(value: boolean) {
        this._validCustumorSupportConversationStateLibelle = value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CustumorSupportConversationCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationCriteria) {
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
