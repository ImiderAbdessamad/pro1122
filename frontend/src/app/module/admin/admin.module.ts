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

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component';
import { ActivationAdminComponent } from './activation-admin/activation-admin.component';
import { ForgetPasswordAdminComponent } from './forget-password-admin/forget-password-admin.component';


import { CloudAdminModule } from './view/cloud/cloud-admin.module';
import { CloudAdminRoutingModule } from './view/cloud/cloud-admin-routing.module';
import { ForumAdminModule } from './view/forum/forum-admin.module';
import { ForumAdminRoutingModule } from './view/forum/forum-admin-routing.module';
import { ContactusAdminModule } from './view/contactus/contactus-admin.module';
import { ContactusAdminRoutingModule } from './view/contactus/contactus-admin-routing.module';
import { PayementAdminModule } from './view/payement/payement-admin.module';
import { PayementAdminRoutingModule } from './view/payement/payement-admin-routing.module';
import { InscriptionAdminModule } from './view/inscription/inscription-admin.module';
import { InscriptionAdminRoutingModule } from './view/inscription/inscription-admin-routing.module';
import { CouponAdminModule } from './view/coupon/coupon-admin.module';
import { CouponAdminRoutingModule } from './view/coupon/coupon-admin-routing.module';
import { ProjectAdminModule } from './view/project/project-admin.module';
import { ProjectAdminRoutingModule } from './view/project/project-admin-routing.module';
import { PackagingAdminModule } from './view/packaging/packaging-admin.module';
import { PackagingAdminRoutingModule } from './view/packaging/packaging-admin-routing.module';
import { SupportAdminModule } from './view/support/support-admin.module';
import { SupportAdminRoutingModule } from './view/support/support-admin-routing.module';
import { CollaboratorAdminModule } from './view/collaborator/collaborator-admin.module';
import { CollaboratorAdminRoutingModule } from './view/collaborator/collaborator-admin-routing.module';
import { BlogAdminModule } from './view/blog/blog-admin.module';
import { BlogAdminRoutingModule } from './view/blog/blog-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
   ChangePasswordAdminComponent,
   ActivationAdminComponent,
   ForgetPasswordAdminComponent
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
  CloudAdminModule,
  CloudAdminRoutingModule,
  ForumAdminModule,
  ForumAdminRoutingModule,
  ContactusAdminModule,
  ContactusAdminRoutingModule,
  PayementAdminModule,
  PayementAdminRoutingModule,
  InscriptionAdminModule,
  InscriptionAdminRoutingModule,
  CouponAdminModule,
  CouponAdminRoutingModule,
  ProjectAdminModule,
  ProjectAdminRoutingModule,
  PackagingAdminModule,
  PackagingAdminRoutingModule,
  SupportAdminModule,
  SupportAdminRoutingModule,
  CollaboratorAdminModule,
  CollaboratorAdminRoutingModule,
  BlogAdminModule,
  BlogAdminRoutingModule,
   SecurityModule,
   SecurityRoutingModule
  ],
  exports: [
    LoginAdminComponent,
    RegisterAdminComponent,
    ChangePasswordAdminComponent,
    ActivationAdminComponent,
    ForgetPasswordAdminComponent,

    CloudAdminModule,
    ForumAdminModule,
    ContactusAdminModule,
    PayementAdminModule,
    InscriptionAdminModule,
    CouponAdminModule,
    ProjectAdminModule,
    PackagingAdminModule,
    SupportAdminModule,
    CollaboratorAdminModule,
    BlogAdminModule,
    SecurityModule
  ],

})
export class AdminModule { }
