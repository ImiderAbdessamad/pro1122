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

import { LoginOpenComponent } from './login-open/login-open.component';
import { RegisterOpenComponent } from './register-open/register-open.component';
import { ChangePasswordOpenComponent } from './change-password-open/change-password-open.component';
import { ActivationOpenComponent } from './activation-open/activation-open.component';
import { ForgetPasswordOpenComponent } from './forget-password-open/forget-password-open.component';


import { ForumOpenModule } from './view/forum/forum-open.module';
import { ForumOpenRoutingModule } from './view/forum/forum-open-routing.module';
import { ContactusOpenModule } from './view/contactus/contactus-open.module';
import { ContactusOpenRoutingModule } from './view/contactus/contactus-open-routing.module';
import { PackagingOpenModule } from './view/packaging/packaging-open.module';
import { PackagingOpenRoutingModule } from './view/packaging/packaging-open-routing.module';
import { BlogOpenModule } from './view/blog/blog-open.module';
import { BlogOpenRoutingModule } from './view/blog/blog-open-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginOpenComponent,
   RegisterOpenComponent,
   ChangePasswordOpenComponent,
   ActivationOpenComponent,
   ForgetPasswordOpenComponent
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
  ForumOpenModule,
  ForumOpenRoutingModule,
  ContactusOpenModule,
  ContactusOpenRoutingModule,
  PackagingOpenModule,
  PackagingOpenRoutingModule,
  BlogOpenModule,
  BlogOpenRoutingModule,
   SecurityModule,
   SecurityRoutingModule
  ],
  exports: [
    LoginOpenComponent,
    RegisterOpenComponent,
    ChangePasswordOpenComponent,
    ActivationOpenComponent,
    ForgetPasswordOpenComponent,

    ForumOpenModule,
    ContactusOpenModule,
    PackagingOpenModule,
    BlogOpenModule,
    SecurityModule
  ],

})
export class OpenModule { }
