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




import {CouponAdminService} from 'src/app/shared/service/admin/coupon/CouponAdmin.service';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponCriteria} from 'src/app/shared/criteria/coupon/CouponCriteria.model';


import {InfluencerDto} from 'src/app/shared/model/coupon/Influencer.model';
import {InfluencerAdminService} from 'src/app/shared/service/admin/coupon/InfluencerAdmin.service';
import {CouponStateDto} from 'src/app/shared/model/coupon/CouponState.model';
import {CouponStateAdminService} from 'src/app/shared/service/admin/coupon/CouponStateAdmin.service';

@Component({
  selector: 'app-coupon-edit-admin',
  templateUrl: './coupon-edit-admin.component.html'
})
export class CouponEditAdminComponent implements OnInit {

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



    private _validCouponCode = true;
    private _validCouponLibelle = true;

    private _validCouponStateCode = true;



    constructor(private service: CouponAdminService , private influencerService: InfluencerAdminService, private couponStateService: CouponStateAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.influencerService.findAll().subscribe((data) => this.influencers = data);
        this.couponStateService.findAll().subscribe((data) => this.couponStates = data);
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
            this.item = new CouponDto();
        } , error =>{
            console.log(error);
        });
    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validCouponCode = value;
        this.validCouponLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCouponCode();
        this.validateCouponLibelle();
    }

    public validateCouponCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCouponCode = false;
        } else {
            this.validCouponCode = true;
        }
    }

    public validateCouponLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCouponLibelle = false;
        } else {
            this.validCouponLibelle = true;
        }
    }




   public async openCreateInfluencer(influencer: string) {
        const isPermistted = await this.roleService.isPermitted('Influencer', 'edit');
        if (isPermistted) {
             this.influencer = new InfluencerDto();
             this.createInfluencerDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateCouponState(couponState: string) {
        const isPermistted = await this.roleService.isPermitted('CouponState', 'edit');
        if (isPermistted) {
             this.couponState = new CouponStateDto();
             this.createCouponStateDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get influencer(): InfluencerDto {
        return this.influencerService.item;
    }
    set influencer(value: InfluencerDto) {
        this.influencerService.item = value;
    }
    get influencers(): Array<InfluencerDto> {
        return this.influencerService.items;
    }
    set influencers(value: Array<InfluencerDto>) {
        this.influencerService.items = value;
    }
    get createInfluencerDialog(): boolean {
        return this.influencerService.createDialog;
    }
    set createInfluencerDialog(value: boolean) {
        this.influencerService.createDialog= value;
    }
    get couponState(): CouponStateDto {
        return this.couponStateService.item;
    }
    set couponState(value: CouponStateDto) {
        this.couponStateService.item = value;
    }
    get couponStates(): Array<CouponStateDto> {
        return this.couponStateService.items;
    }
    set couponStates(value: Array<CouponStateDto>) {
        this.couponStateService.items = value;
    }
    get createCouponStateDialog(): boolean {
        return this.couponStateService.createDialog;
    }
    set createCouponStateDialog(value: boolean) {
        this.couponStateService.createDialog= value;
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

    get validCouponStateCode(): boolean {
        return this._validCouponStateCode;
    }
    set validCouponStateCode(value: boolean) {
        this._validCouponStateCode = value;
    }

	get items(): Array<CouponDto> {
        return this.service.items;
    }

    set items(value: Array<CouponDto>) {
        this.service.items = value;
    }

    get item(): CouponDto {
        return this.service.item;
    }

    set item(value: CouponDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CouponCriteria {
        return this.service.criteria;
    }

    set criteria(value: CouponCriteria) {
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
