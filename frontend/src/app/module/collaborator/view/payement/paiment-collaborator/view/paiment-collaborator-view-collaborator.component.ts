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


import {PaimentCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/payement/PaimentCollaboratorCollaborator.service';
import {PaimentCollaboratorDto} from 'src/app/shared/model/payement/PaimentCollaborator.model';
import {PaimentCollaboratorCriteria} from 'src/app/shared/criteria/payement/PaimentCollaboratorCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponCollaboratorService} from 'src/app/shared/service/collaborator/coupon/CouponCollaborator.service';
import {OffreCloudProviderDto} from 'src/app/shared/model/cloud/OffreCloudProvider.model';
import {OffreCloudProviderCollaboratorService} from 'src/app/shared/service/collaborator/cloud/OffreCloudProviderCollaborator.service';
import {PaimentCollaboratorStateDto} from 'src/app/shared/model/payement/PaimentCollaboratorState.model';
import {PaimentCollaboratorStateCollaboratorService} from 'src/app/shared/service/collaborator/payement/PaimentCollaboratorStateCollaborator.service';
import {PaimentCollaboratorTypeDto} from 'src/app/shared/model/payement/PaimentCollaboratorType.model';
import {PaimentCollaboratorTypeCollaboratorService} from 'src/app/shared/service/collaborator/payement/PaimentCollaboratorTypeCollaborator.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingCollaborator.service';
import {CountryDto} from 'src/app/shared/model/collaborator/Country.model';
import {CountryCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CountryCollaborator.service';
import {CityDto} from 'src/app/shared/model/collaborator/City.model';
import {CityCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CityCollaborator.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorCollaborator.service';
@Component({
  selector: 'app-paiment-collaborator-view-collaborator',
  templateUrl: './paiment-collaborator-view-collaborator.component.html'
})
export class PaimentCollaboratorViewCollaboratorComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PaimentCollaboratorCollaboratorService, private collaboratorService: CollaboratorCollaboratorService, private couponService: CouponCollaboratorService, private offreCloudProviderService: OffreCloudProviderCollaboratorService, private paimentCollaboratorStateService: PaimentCollaboratorStateCollaboratorService, private paimentCollaboratorTypeService: PaimentCollaboratorTypeCollaboratorService, private packagingService: PackagingCollaboratorService, private countryService: CountryCollaboratorService, private cityService: CityCollaboratorService, private inscriptionCollaboratorService: InscriptionCollaboratorCollaboratorService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PaimentCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
