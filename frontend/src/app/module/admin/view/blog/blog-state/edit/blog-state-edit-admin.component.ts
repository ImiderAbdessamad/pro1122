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




import {BlogStateAdminService} from 'src/app/shared/service/admin/blog/BlogStateAdmin.service';
import {BlogStateDto} from 'src/app/shared/model/blog/BlogState.model';
import {BlogStateCriteria} from 'src/app/shared/criteria/blog/BlogStateCriteria.model';



@Component({
  selector: 'app-blog-state-edit-admin',
  templateUrl: './blog-state-edit-admin.component.html'
})
export class BlogStateEditAdminComponent implements OnInit {

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



    private _validBlogStateCode = true;
    private _validBlogStateLibelle = true;




    constructor(private service: BlogStateAdminService , @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
    }

    public prepareEdit() {
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
            this.item = new BlogStateDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validBlogStateCode = value;
        this.validBlogStateLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateBlogStateCode();
        this.validateBlogStateLibelle();
    }

    public validateBlogStateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validBlogStateCode = false;
        } else {
            this.validBlogStateCode = true;
        }
    }

    public validateBlogStateLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validBlogStateLibelle = false;
        } else {
            this.validBlogStateLibelle = true;
        }
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


	get items(): Array<BlogStateDto> {
        return this.service.items;
    }

    set items(value: Array<BlogStateDto>) {
        this.service.items = value;
    }

    get item(): BlogStateDto {
        return this.service.item;
    }

    set item(value: BlogStateDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): BlogStateCriteria {
        return this.service.criteria;
    }

    set criteria(value: BlogStateCriteria) {
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
