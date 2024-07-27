import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { LoginInfluencerComponent } from './login-influencer/login-influencer.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';
import { ChangePasswordInfluencerComponent } from './change-password-influencer/change-password-influencer.component';
import { ActivationInfluencerComponent } from './activation-influencer/activation-influencer.component';
import { ForgetPasswordInfluencerComponent } from './forget-password-influencer/forget-password-influencer.component';


import { CouponInfluencerModule } from './view/coupon/coupon-influencer.module';
import { CouponInfluencerRoutingModule } from './view/coupon/coupon-influencer-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginInfluencerComponent,
   RegisterInfluencerComponent,
   ChangePasswordInfluencerComponent,
   ActivationInfluencerComponent,
   ForgetPasswordInfluencerComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  CouponInfluencerModule,
  CouponInfluencerRoutingModule,
   SecurityModule,
   SecurityRoutingModule
  ],
  exports: [
    LoginInfluencerComponent,
    RegisterInfluencerComponent,
    ChangePasswordInfluencerComponent,
    ActivationInfluencerComponent,
    ForgetPasswordInfluencerComponent,

    CouponInfluencerModule,
    SecurityModule
  ],

})
export class InfluencerModule { }
