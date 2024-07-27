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




import {CustumorSupportConversationMessageAgentService} from 'src/app/shared/service/agent/support/CustumorSupportConversationMessageAgent.service';
import {CustumorSupportConversationMessageDto} from 'src/app/shared/model/support/CustumorSupportConversationMessage.model';
import {CustumorSupportConversationMessageCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationMessageCriteria.model';


import {CustumorSupportConversationDto} from 'src/app/shared/model/support/CustumorSupportConversation.model';
import {CustumorSupportConversationAgentService} from 'src/app/shared/service/agent/support/CustumorSupportConversationAgent.service';

@Component({
  selector: 'app-custumor-support-conversation-message-edit-agent',
  templateUrl: './custumor-support-conversation-message-edit-agent.component.html'
})
export class CustumorSupportConversationMessageEditAgentComponent implements OnInit {

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







    constructor(private service: CustumorSupportConversationMessageAgentService , private custumorSupportConversationService: CustumorSupportConversationAgentService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.custumorSupportConversationService.findAll().subscribe((data) => this.custumorSupportConversations = data);
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
            this.item = new CustumorSupportConversationMessageDto();
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




   public async openCreateCustumorSupportConversation(custumorSupportConversation: string) {
        const isPermistted = await this.roleService.isPermitted('CustumorSupportConversation', 'edit');
        if (isPermistted) {
             this.custumorSupportConversation = new CustumorSupportConversationDto();
             this.createCustumorSupportConversationDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
    get createCustumorSupportConversationDialog(): boolean {
        return this.custumorSupportConversationService.createDialog;
    }
    set createCustumorSupportConversationDialog(value: boolean) {
        this.custumorSupportConversationService.createDialog= value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CustumorSupportConversationMessageCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationMessageCriteria) {
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
