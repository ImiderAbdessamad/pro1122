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




import {PaimentCollaboratorAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorAdmin.service';
import {PaimentCollaboratorDto} from 'src/app/shared/model/payement/PaimentCollaborator.model';
import {PaimentCollaboratorCriteria} from 'src/app/shared/criteria/payement/PaimentCollaboratorCriteria.model';


import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponAdminService} from 'src/app/shared/service/admin/coupon/CouponAdmin.service';
import {OffreCloudProviderDto} from 'src/app/shared/model/cloud/OffreCloudProvider.model';
import {OffreCloudProviderAdminService} from 'src/app/shared/service/admin/cloud/OffreCloudProviderAdmin.service';
import {PaimentCollaboratorStateDto} from 'src/app/shared/model/payement/PaimentCollaboratorState.model';
import {PaimentCollaboratorStateAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorStateAdmin.service';
import {PaimentCollaboratorTypeDto} from 'src/app/shared/model/payement/PaimentCollaboratorType.model';
import {PaimentCollaboratorTypeAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorTypeAdmin.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingAdminService} from 'src/app/shared/service/admin/packaging/PackagingAdmin.service';
import {CountryDto} from 'src/app/shared/model/collaborator/Country.model';
import {CountryAdminService} from 'src/app/shared/service/admin/collaborator/CountryAdmin.service';
import {CityDto} from 'src/app/shared/model/collaborator/City.model';
import {CityAdminService} from 'src/app/shared/service/admin/collaborator/CityAdmin.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorAdminService} from 'src/app/shared/service/admin/inscription/InscriptionCollaboratorAdmin.service';

@Component({
  selector: 'app-paiment-collaborator-edit-admin',
  templateUrl: './paiment-collaborator-edit-admin.component.html'
})
export class PaimentCollaboratorEditAdminComponent implements OnInit {

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



    private _validPaimentCollaboratorCardHolder = true;
    private _validPaimentCollaboratorCardNumber = true;
    private _validPaimentCollaboratorCvc = true;
    private _validPaimentCollaboratorCountry = true;

    private _validCountryCode = true;
    private _validCountryLibelle = true;
    private _validCityCode = true;
    private _validCityLibelle = true;
    private _validPackagingCode = true;
    private _validPaimentCollaboratorStateCode = true;
    private _validPaimentCollaboratorStateLibelle = true;
    private _validPaimentCollaboratorTypeCode = true;
    private _validPaimentCollaboratorTypeLibelle = true;
    private _validCouponCode = true;
    private _validCouponLibelle = true;
    private _validOffreCloudProviderCode = true;
    private _validOffreCloudProviderLibelle = true;



    constructor(private service: PaimentCollaboratorAdminService , private collaboratorService: CollaboratorAdminService, private couponService: CouponAdminService, private offreCloudProviderService: OffreCloudProviderAdminService, private paimentCollaboratorStateService: PaimentCollaboratorStateAdminService, private paimentCollaboratorTypeService: PaimentCollaboratorTypeAdminService, private packagingService: PackagingAdminService, private countryService: CountryAdminService, private cityService: CityAdminService, private inscriptionCollaboratorService: InscriptionCollaboratorAdminService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.packagingService.findAll().subscribe((data) => this.packagings = data);
        this.paimentCollaboratorStateService.findAll().subscribe((data) => this.paimentCollaboratorStates = data);
        this.paimentCollaboratorTypeService.findAll().subscribe((data) => this.paimentCollaboratorTypes = data);
        this.inscriptionCollaboratorService.findAll().subscribe((data) => this.inscriptionCollaborators = data);
        this.couponService.findAll().subscribe((data) => this.coupons = data);
        this.offreCloudProviderService.findAll().subscribe((data) => this.offreCloudProviders = data);
    }

    public prepareEdit() {
        this.item.startDate = this.service.format(this.item.startDate);
        this.item.endDate = this.service.format(this.item.endDate);
        this.item.paiementDate = this.service.format(this.item.paiementDate);
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
            this.item = new PaimentCollaboratorDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validPaimentCollaboratorCardHolder = value;
        this.validPaimentCollaboratorCardNumber = value;
        this.validPaimentCollaboratorCvc = value;
        this.validPaimentCollaboratorCountry = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaimentCollaboratorCardHolder();
        this.validatePaimentCollaboratorCardNumber();
        this.validatePaimentCollaboratorCvc();
        this.validatePaimentCollaboratorCountry();
    }

    public validatePaimentCollaboratorCardHolder(){
        if (this.stringUtilService.isEmpty(this.item.cardHolder)) {
            this.errorMessages.push('Card holder non valide');
            this.validPaimentCollaboratorCardHolder = false;
        } else {
            this.validPaimentCollaboratorCardHolder = true;
        }
    }

    public validatePaimentCollaboratorCardNumber(){
        if (this.stringUtilService.isEmpty(this.item.cardNumber)) {
            this.errorMessages.push('Card number non valide');
            this.validPaimentCollaboratorCardNumber = false;
        } else {
            this.validPaimentCollaboratorCardNumber = true;
        }
    }

    public validatePaimentCollaboratorCvc(){
        if (this.stringUtilService.isEmpty(this.item.cvc)) {
            this.errorMessages.push('Cvc non valide');
            this.validPaimentCollaboratorCvc = false;
        } else {
            this.validPaimentCollaboratorCvc = true;
        }
    }

    public validatePaimentCollaboratorCountry(){
        if (this.stringUtilService.isEmpty(this.item.country)) {
            this.errorMessages.push('Country non valide');
            this.validPaimentCollaboratorCountry = false;
        } else {
            this.validPaimentCollaboratorCountry = true;
        }
    }




   public async openCreatePaimentCollaboratorType(paimentCollaboratorType: string) {
        const isPermistted = await this.roleService.isPermitted('PaimentCollaboratorType', 'edit');
        if (isPermistted) {
             this.paimentCollaboratorType = new PaimentCollaboratorTypeDto();
             this.createPaimentCollaboratorTypeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreatePaimentCollaboratorState(paimentCollaboratorState: string) {
        const isPermistted = await this.roleService.isPermitted('PaimentCollaboratorState', 'edit');
        if (isPermistted) {
             this.paimentCollaboratorState = new PaimentCollaboratorStateDto();
             this.createPaimentCollaboratorStateDialog = true;
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
    get inscriptionCollaborator(): InscriptionCollaboratorDto {
        return this.inscriptionCollaboratorService.item;
    }
    set inscriptionCollaborator(value: InscriptionCollaboratorDto) {
        this.inscriptionCollaboratorService.item = value;
    }
    get inscriptionCollaborators(): Array<InscriptionCollaboratorDto> {
        return this.inscriptionCollaboratorService.items;
    }
    set inscriptionCollaborators(value: Array<InscriptionCollaboratorDto>) {
        this.inscriptionCollaboratorService.items = value;
    }
    get createInscriptionCollaboratorDialog(): boolean {
        return this.inscriptionCollaboratorService.createDialog;
    }
    set createInscriptionCollaboratorDialog(value: boolean) {
        this.inscriptionCollaboratorService.createDialog= value;
    }
    get paimentCollaboratorType(): PaimentCollaboratorTypeDto {
        return this.paimentCollaboratorTypeService.item;
    }
    set paimentCollaboratorType(value: PaimentCollaboratorTypeDto) {
        this.paimentCollaboratorTypeService.item = value;
    }
    get paimentCollaboratorTypes(): Array<PaimentCollaboratorTypeDto> {
        return this.paimentCollaboratorTypeService.items;
    }
    set paimentCollaboratorTypes(value: Array<PaimentCollaboratorTypeDto>) {
        this.paimentCollaboratorTypeService.items = value;
    }
    get createPaimentCollaboratorTypeDialog(): boolean {
        return this.paimentCollaboratorTypeService.createDialog;
    }
    set createPaimentCollaboratorTypeDialog(value: boolean) {
        this.paimentCollaboratorTypeService.createDialog= value;
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
    get offreCloudProvider(): OffreCloudProviderDto {
        return this.offreCloudProviderService.item;
    }
    set offreCloudProvider(value: OffreCloudProviderDto) {
        this.offreCloudProviderService.item = value;
    }
    get offreCloudProviders(): Array<OffreCloudProviderDto> {
        return this.offreCloudProviderService.items;
    }
    set offreCloudProviders(value: Array<OffreCloudProviderDto>) {
        this.offreCloudProviderService.items = value;
    }
    get createOffreCloudProviderDialog(): boolean {
        return this.offreCloudProviderService.createDialog;
    }
    set createOffreCloudProviderDialog(value: boolean) {
        this.offreCloudProviderService.createDialog= value;
    }
    get paimentCollaboratorState(): PaimentCollaboratorStateDto {
        return this.paimentCollaboratorStateService.item;
    }
    set paimentCollaboratorState(value: PaimentCollaboratorStateDto) {
        this.paimentCollaboratorStateService.item = value;
    }
    get paimentCollaboratorStates(): Array<PaimentCollaboratorStateDto> {
        return this.paimentCollaboratorStateService.items;
    }
    set paimentCollaboratorStates(value: Array<PaimentCollaboratorStateDto>) {
        this.paimentCollaboratorStateService.items = value;
    }
    get createPaimentCollaboratorStateDialog(): boolean {
        return this.paimentCollaboratorStateService.createDialog;
    }
    set createPaimentCollaboratorStateDialog(value: boolean) {
        this.paimentCollaboratorStateService.createDialog= value;
    }
    get packaging(): PackagingDto {
        return this.packagingService.item;
    }
    set packaging(value: PackagingDto) {
        this.packagingService.item = value;
    }
    get packagings(): Array<PackagingDto> {
        return this.packagingService.items;
    }
    set packagings(value: Array<PackagingDto>) {
        this.packagingService.items = value;
    }
    get createPackagingDialog(): boolean {
        return this.packagingService.createDialog;
    }
    set createPackagingDialog(value: boolean) {
        this.packagingService.createDialog= value;
    }
    get coupon(): CouponDto {
        return this.couponService.item;
    }
    set coupon(value: CouponDto) {
        this.couponService.item = value;
    }
    get coupons(): Array<CouponDto> {
        return this.couponService.items;
    }
    set coupons(value: Array<CouponDto>) {
        this.couponService.items = value;
    }
    get createCouponDialog(): boolean {
        return this.couponService.createDialog;
    }
    set createCouponDialog(value: boolean) {
        this.couponService.createDialog= value;
    }


    get validPaimentCollaboratorCardHolder(): boolean {
        return this._validPaimentCollaboratorCardHolder;
    }
    set validPaimentCollaboratorCardHolder(value: boolean) {
        this._validPaimentCollaboratorCardHolder = value;
    }
    get validPaimentCollaboratorCardNumber(): boolean {
        return this._validPaimentCollaboratorCardNumber;
    }
    set validPaimentCollaboratorCardNumber(value: boolean) {
        this._validPaimentCollaboratorCardNumber = value;
    }
    get validPaimentCollaboratorCvc(): boolean {
        return this._validPaimentCollaboratorCvc;
    }
    set validPaimentCollaboratorCvc(value: boolean) {
        this._validPaimentCollaboratorCvc = value;
    }
    get validPaimentCollaboratorCountry(): boolean {
        return this._validPaimentCollaboratorCountry;
    }
    set validPaimentCollaboratorCountry(value: boolean) {
        this._validPaimentCollaboratorCountry = value;
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
    get validPackagingCode(): boolean {
        return this._validPackagingCode;
    }
    set validPackagingCode(value: boolean) {
        this._validPackagingCode = value;
    }
    get validPaimentCollaboratorStateCode(): boolean {
        return this._validPaimentCollaboratorStateCode;
    }
    set validPaimentCollaboratorStateCode(value: boolean) {
        this._validPaimentCollaboratorStateCode = value;
    }
    get validPaimentCollaboratorStateLibelle(): boolean {
        return this._validPaimentCollaboratorStateLibelle;
    }
    set validPaimentCollaboratorStateLibelle(value: boolean) {
        this._validPaimentCollaboratorStateLibelle = value;
    }
    get validPaimentCollaboratorTypeCode(): boolean {
        return this._validPaimentCollaboratorTypeCode;
    }
    set validPaimentCollaboratorTypeCode(value: boolean) {
        this._validPaimentCollaboratorTypeCode = value;
    }
    get validPaimentCollaboratorTypeLibelle(): boolean {
        return this._validPaimentCollaboratorTypeLibelle;
    }
    set validPaimentCollaboratorTypeLibelle(value: boolean) {
        this._validPaimentCollaboratorTypeLibelle = value;
    }
    get validCouponCode(): boolean {
        return this._validCouponCode;
    }
    set validCouponCode(value: boolean) {
        this._validCouponCode = value;
    }
    get validCouponLibelle(): boolean {
        return this._validCouponLibelle;
    }
    set validCouponLibelle(value: boolean) {
        this._validCouponLibelle = value;
    }
    get validOffreCloudProviderCode(): boolean {
        return this._validOffreCloudProviderCode;
    }
    set validOffreCloudProviderCode(value: boolean) {
        this._validOffreCloudProviderCode = value;
    }
    get validOffreCloudProviderLibelle(): boolean {
        return this._validOffreCloudProviderLibelle;
    }
    set validOffreCloudProviderLibelle(value: boolean) {
        this._validOffreCloudProviderLibelle = value;
    }

	get items(): Array<PaimentCollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentCollaboratorDto>) {
        this.service.items = value;
    }

    get item(): PaimentCollaboratorDto {
        return this.service.item;
    }

    set item(value: PaimentCollaboratorDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): PaimentCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorCriteria) {
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
