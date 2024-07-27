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

import { ContactUsCategoryCreateAdminComponent } from './contact-us-category/create/contact-us-category-create-admin.component';
import { ContactUsCategoryEditAdminComponent } from './contact-us-category/edit/contact-us-category-edit-admin.component';
import { ContactUsCategoryViewAdminComponent } from './contact-us-category/view/contact-us-category-view-admin.component';
import { ContactUsCategoryListAdminComponent } from './contact-us-category/list/contact-us-category-list-admin.component';
import { ContactUsStateCreateAdminComponent } from './contact-us-state/create/contact-us-state-create-admin.component';
import { ContactUsStateEditAdminComponent } from './contact-us-state/edit/contact-us-state-edit-admin.component';
import { ContactUsStateViewAdminComponent } from './contact-us-state/view/contact-us-state-view-admin.component';
import { ContactUsStateListAdminComponent } from './contact-us-state/list/contact-us-state-list-admin.component';
import { ContactUsCreateAdminComponent } from './contact-us/create/contact-us-create-admin.component';
import { ContactUsEditAdminComponent } from './contact-us/edit/contact-us-edit-admin.component';
import { ContactUsViewAdminComponent } from './contact-us/view/contact-us-view-admin.component';
import { ContactUsListAdminComponent } from './contact-us/list/contact-us-list-admin.component';

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

    ContactUsCategoryCreateAdminComponent,
    ContactUsCategoryListAdminComponent,
    ContactUsCategoryViewAdminComponent,
    ContactUsCategoryEditAdminComponent,
    ContactUsStateCreateAdminComponent,
    ContactUsStateListAdminComponent,
    ContactUsStateViewAdminComponent,
    ContactUsStateEditAdminComponent,
    ContactUsCreateAdminComponent,
    ContactUsListAdminComponent,
    ContactUsViewAdminComponent,
    ContactUsEditAdminComponent,
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
  ContactUsCategoryCreateAdminComponent,
  ContactUsCategoryListAdminComponent,
  ContactUsCategoryViewAdminComponent,
  ContactUsCategoryEditAdminComponent,
  ContactUsStateCreateAdminComponent,
  ContactUsStateListAdminComponent,
  ContactUsStateViewAdminComponent,
  ContactUsStateEditAdminComponent,
  ContactUsCreateAdminComponent,
  ContactUsListAdminComponent,
  ContactUsViewAdminComponent,
  ContactUsEditAdminComponent,
  ],
})
export class ContactusAdminModule { }
