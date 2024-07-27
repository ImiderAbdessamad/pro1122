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


import {PaimentCouponInfluencerService} from 'src/app/shared/service/influencer/coupon/PaimentCouponInfluencer.service';
import {PaimentCouponDto} from 'src/app/shared/model/coupon/PaimentCoupon.model';
import {PaimentCouponCriteria} from 'src/app/shared/criteria/coupon/PaimentCouponCriteria.model';

import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponInfluencerService} from 'src/app/shared/service/influencer/coupon/CouponInfluencer.service';
import {PaimentCouponStateDto} from 'src/app/shared/model/coupon/PaimentCouponState.model';
import {PaimentCouponStateInfluencerService} from 'src/app/shared/service/influencer/coupon/PaimentCouponStateInfluencer.service';
@Component({
  selector: 'app-paiment-coupon-view-influencer',
  templateUrl: './paiment-coupon-view-influencer.component.html'
})
export class PaimentCouponViewInfluencerComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PaimentCouponInfluencerService, private couponService: CouponInfluencerService, private paimentCouponStateService: PaimentCouponStateInfluencerService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PaimentCouponCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCouponCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
