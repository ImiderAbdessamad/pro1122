import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {PaimentCouponInfluencerService} from 'src/app/shared/service/influencer/coupon/PaimentCouponInfluencer.service';
import {PaimentCouponDto} from 'src/app/shared/model/coupon/PaimentCoupon.model';
import {PaimentCouponCriteria} from 'src/app/shared/criteria/coupon/PaimentCouponCriteria.model';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponInfluencerService} from 'src/app/shared/service/influencer/coupon/CouponInfluencer.service';
import {PaimentCouponStateDto} from 'src/app/shared/model/coupon/PaimentCouponState.model';
import {PaimentCouponStateInfluencerService} from 'src/app/shared/service/influencer/coupon/PaimentCouponStateInfluencer.service';
@Component({
  selector: 'app-paiment-coupon-create-influencer',
  templateUrl: './paiment-coupon-create-influencer.component.html'
})
export class PaimentCouponCreateInfluencerComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;



    private _validCouponCode = true;
    private _validCouponLibelle = true;
    private _validPaimentCouponStateCode = true;

	constructor(private service: PaimentCouponInfluencerService , private couponService: CouponInfluencerService, private paimentCouponStateService: PaimentCouponStateInfluencerService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.couponService.findAll().subscribe((data) => this.coupons = data);
        this.paimentCouponStateService.findAll().subscribe((data) => this.paimentCouponStates = data);
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
                this.item = new PaimentCouponDto();
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
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateCoupon(coupon: string) {
    const isPermistted = await this.roleService.isPermitted('Coupon', 'add');
    if(isPermistted) {
         this.coupon = new CouponDto();
         this.createCouponDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreatePaimentCouponState(paimentCouponState: string) {
    const isPermistted = await this.roleService.isPermitted('PaimentCouponState', 'add');
    if(isPermistted) {
         this.paimentCouponState = new PaimentCouponStateDto();
         this.createPaimentCouponStateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get paimentCouponState(): PaimentCouponStateDto {
        return this.paimentCouponStateService.item;
    }
    set paimentCouponState(value: PaimentCouponStateDto) {
        this.paimentCouponStateService.item = value;
    }
    get paimentCouponStates(): Array<PaimentCouponStateDto> {
        return this.paimentCouponStateService.items;
    }
    set paimentCouponStates(value: Array<PaimentCouponStateDto>) {
        this.paimentCouponStateService.items = value;
    }
    get createPaimentCouponStateDialog(): boolean {
        return this.paimentCouponStateService.createDialog;
    }
    set createPaimentCouponStateDialog(value: boolean) {
        this.paimentCouponStateService.createDialog= value;
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
    get validPaimentCouponStateCode(): boolean {
        return this._validPaimentCouponStateCode;
    }
    set validPaimentCouponStateCode(value: boolean) {
        this._validPaimentCouponStateCode = value;
    }


    get items(): Array<PaimentCouponDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentCouponDto>) {
        this.service.items = value;
    }

    get item(): PaimentCouponDto {
        return this.service.item;
    }

    set item(value: PaimentCouponDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PaimentCouponCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCouponCriteria) {
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
