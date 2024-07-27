import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {CityAdminService} from 'src/app/shared/service/admin/collaborator/CityAdmin.service';
import {CityDto} from 'src/app/shared/model/collaborator/City.model';
import {CityCriteria} from 'src/app/shared/criteria/collaborator/CityCriteria.model';
import {CountryDto} from 'src/app/shared/model/collaborator/Country.model';
import {CountryAdminService} from 'src/app/shared/service/admin/collaborator/CountryAdmin.service';
@Component({
  selector: 'app-city-create-admin',
  templateUrl: './city-create-admin.component.html'
})
export class CityCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



   private _validCityCode = true;
   private _validCityLibelle = true;
    private _validCountryCode = true;
    private _validCountryLibelle = true;

	constructor(private service: CityAdminService , private countryService: CountryAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.countryService.findAll().subscribe((data) => this.countrys = data);
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
                this.item = new CityDto();
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





    public  setValidation(value: boolean){
        this.validCityCode = value;
        this.validCityLibelle = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCityCode();
        this.validateCityLibelle();
    }

    public validateCityCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCityCode = false;
        } else {
            this.validCityCode = true;
        }
    }
    public validateCityLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validCityLibelle = false;
        } else {
            this.validCityLibelle = true;
        }
    }


    public async openCreateCountry(country: string) {
    const isPermistted = await this.roleService.isPermitted('Country', 'add');
    if(isPermistted) {
         this.country = new CountryDto();
         this.createCountryDialog = true;
    }else{
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


    get items(): Array<CityDto> {
        return this.service.items;
    }

    set items(value: Array<CityDto>) {
        this.service.items = value;
    }

    get item(): CityDto {
        return this.service.item;
    }

    set item(value: CityDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): CityCriteria {
        return this.service.criteria;
    }

    set criteria(value: CityCriteria) {
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
