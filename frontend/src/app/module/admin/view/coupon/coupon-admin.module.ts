import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";

import { PaimentCouponCreateAdminComponent } from './paiment-coupon/create/paiment-coupon-create-admin.component';
import { PaimentCouponEditAdminComponent } from './paiment-coupon/edit/paiment-coupon-edit-admin.component';
import { PaimentCouponViewAdminComponent } from './paiment-coupon/view/paiment-coupon-view-admin.component';
import { PaimentCouponListAdminComponent } from './paiment-coupon/list/paiment-coupon-list-admin.component';
import { InfluencerCreateAdminComponent } from './influencer/create/influencer-create-admin.component';
import { InfluencerEditAdminComponent } from './influencer/edit/influencer-edit-admin.component';
import { InfluencerViewAdminComponent } from './influencer/view/influencer-view-admin.component';
import { InfluencerListAdminComponent } from './influencer/list/influencer-list-admin.component';
import { PaimentCouponStateCreateAdminComponent } from './paiment-coupon-state/create/paiment-coupon-state-create-admin.component';
import { PaimentCouponStateEditAdminComponent } from './paiment-coupon-state/edit/paiment-coupon-state-edit-admin.component';
import { PaimentCouponStateViewAdminComponent } from './paiment-coupon-state/view/paiment-coupon-state-view-admin.component';
import { PaimentCouponStateListAdminComponent } from './paiment-coupon-state/list/paiment-coupon-state-list-admin.component';
import { CouponStateCreateAdminComponent } from './coupon-state/create/coupon-state-create-admin.component';
import { CouponStateEditAdminComponent } from './coupon-state/edit/coupon-state-edit-admin.component';
import { CouponStateViewAdminComponent } from './coupon-state/view/coupon-state-view-admin.component';
import { CouponStateListAdminComponent } from './coupon-state/list/coupon-state-list-admin.component';
import { CouponCreateAdminComponent } from './coupon/create/coupon-create-admin.component';
import { CouponEditAdminComponent } from './coupon/edit/coupon-edit-admin.component';
import { CouponViewAdminComponent } from './coupon/view/coupon-view-admin.component';
import { CouponListAdminComponent } from './coupon/list/coupon-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    PaimentCouponCreateAdminComponent,
    PaimentCouponListAdminComponent,
    PaimentCouponViewAdminComponent,
    PaimentCouponEditAdminComponent,
    InfluencerCreateAdminComponent,
    InfluencerListAdminComponent,
    InfluencerViewAdminComponent,
    InfluencerEditAdminComponent,
    PaimentCouponStateCreateAdminComponent,
    PaimentCouponStateListAdminComponent,
    PaimentCouponStateViewAdminComponent,
    PaimentCouponStateEditAdminComponent,
    CouponStateCreateAdminComponent,
    CouponStateListAdminComponent,
    CouponStateViewAdminComponent,
    CouponStateEditAdminComponent,
    CouponCreateAdminComponent,
    CouponListAdminComponent,
    CouponViewAdminComponent,
    CouponEditAdminComponent,
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
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,
    EditorModule,
    TagModule,


  ],
  exports: [
  PaimentCouponCreateAdminComponent,
  PaimentCouponListAdminComponent,
  PaimentCouponViewAdminComponent,
  PaimentCouponEditAdminComponent,
  InfluencerCreateAdminComponent,
  InfluencerListAdminComponent,
  InfluencerViewAdminComponent,
  InfluencerEditAdminComponent,
  PaimentCouponStateCreateAdminComponent,
  PaimentCouponStateListAdminComponent,
  PaimentCouponStateViewAdminComponent,
  PaimentCouponStateEditAdminComponent,
  CouponStateCreateAdminComponent,
  CouponStateListAdminComponent,
  CouponStateViewAdminComponent,
  CouponStateEditAdminComponent,
  CouponCreateAdminComponent,
  CouponListAdminComponent,
  CouponViewAdminComponent,
  CouponEditAdminComponent,
  ],
})
export class CouponAdminModule { }
