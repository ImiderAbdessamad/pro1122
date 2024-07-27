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




import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCriteria} from 'src/app/shared/criteria/collaborator/CollaboratorCriteria.model';


import {CountryDto} from 'src/app/shared/model/collaborator/Country.model';
import {CountryAdminService} from 'src/app/shared/service/admin/collaborator/CountryAdmin.service';
import {CityDto} from 'src/app/shared/model/collaborator/City.model';
import {CityAdminService} from 'src/app/shared/service/admin/collaborator/CityAdmin.service';

@Component({
  selector: 'app-collaborator-edit-admin',
  templateUrl: './collaborator-edit-admin.component.html'
})
export class CollaboratorEditAdminComponent implements OnInit {

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




    private _validCountryCode = true;
    private _validCountryLibelle = true;
    private _validCityCode = true;
    private _validCityLibelle = true;



    constructor(private service: CollaboratorAdminService , private countryService: CountryAdminService, private cityService: CityAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.countryService.findAll().subscribe((data) => this.countrys = data);
        this.cityService.findAll().subscribe((data) => this.citys = data);
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
            this.item = new CollaboratorDto();
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




   public async openCreateCountry(country: string) {
        const isPermistted = await this.roleService.isPermitted('Country', 'edit');
        if (isPermistted) {
             this.country = new CountryDto();
             this.createCountryDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateCity(city: string) {
        const isPermistted = await this.roleService.isPermitted('City', 'edit');
        if (isPermistted) {
             this.city = new CityDto();
             this.createCityDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get country(): CountryDto {
        return this.countryService.item;
    }
    set country(value: CountryDto) {
        this.countryService.item = value;
    }
    get countrys(): Array<CountryDto> {
        return this.countryService.items;
    }
    set countrys(value: Array<CountryDto>) {
        this.countryService.items = value;
    }
    get createCountryDialog(): boolean {
        return this.countryService.createDialog;
    }
    set createCountryDialog(value: boolean) {
        this.countryService.createDialog= value;
    }
    get city(): CityDto {
        return this.cityService.item;
    }
    set city(value: CityDto) {
        this.cityService.item = value;
    }
    get citys(): Array<CityDto> {
        return this.cityService.items;
    }
    set citys(value: Array<CityDto>) {
        this.cityService.items = value;
    }
    get createCityDialog(): boolean {
        return this.cityService.createDialog;
    }
    set createCityDialog(value: boolean) {
        this.cityService.createDialog= value;
    }



    get validCountryCode(): boolean {
        return this._validCountryCode;
    }
    set validCountryCode(value: boolean) {
        this._validCountryCode = value;
    }
    get validCountryLibelle(): boolean {
        return this._validCountryLibelle;
    }
    set validCountryLibelle(value: boolean) {
        this._validCountryLibelle = value;
    }
    get validCityCode(): boolean {
        return this._validCityCode;
    }
    set validCityCode(value: boolean) {
        this._validCityCode = value;
    }
    get validCityLibelle(): boolean {
        return this._validCityLibelle;
    }
    set validCityLibelle(value: boolean) {
        this._validCityLibelle = value;
    }

	get items(): Array<CollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<CollaboratorDto>) {
        this.service.items = value;
    }

    get item(): CollaboratorDto {
        return this.service.item;
    }

    set item(value: CollaboratorDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: CollaboratorCriteria) {
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
