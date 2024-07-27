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

import { PaimentCollaboratorStateCreateAdminComponent } from './paiment-collaborator-state/create/paiment-collaborator-state-create-admin.component';
import { PaimentCollaboratorStateEditAdminComponent } from './paiment-collaborator-state/edit/paiment-collaborator-state-edit-admin.component';
import { PaimentCollaboratorStateViewAdminComponent } from './paiment-collaborator-state/view/paiment-collaborator-state-view-admin.component';
import { PaimentCollaboratorStateListAdminComponent } from './paiment-collaborator-state/list/paiment-collaborator-state-list-admin.component';
import { PaimentCollaboratorCreateAdminComponent } from './paiment-collaborator/create/paiment-collaborator-create-admin.component';
import { PaimentCollaboratorEditAdminComponent } from './paiment-collaborator/edit/paiment-collaborator-edit-admin.component';
import { PaimentCollaboratorViewAdminComponent } from './paiment-collaborator/view/paiment-collaborator-view-admin.component';
import { PaimentCollaboratorListAdminComponent } from './paiment-collaborator/list/paiment-collaborator-list-admin.component';
import { PaimentCollaboratorTypeCreateAdminComponent } from './paiment-collaborator-type/create/paiment-collaborator-type-create-admin.component';
import { PaimentCollaboratorTypeEditAdminComponent } from './paiment-collaborator-type/edit/paiment-collaborator-type-edit-admin.component';
import { PaimentCollaboratorTypeViewAdminComponent } from './paiment-collaborator-type/view/paiment-collaborator-type-view-admin.component';
import { PaimentCollaboratorTypeListAdminComponent } from './paiment-collaborator-type/list/paiment-collaborator-type-list-admin.component';

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

    PaimentCollaboratorStateCreateAdminComponent,
    PaimentCollaboratorStateListAdminComponent,
    PaimentCollaboratorStateViewAdminComponent,
    PaimentCollaboratorStateEditAdminComponent,
    PaimentCollaboratorCreateAdminComponent,
    PaimentCollaboratorListAdminComponent,
    PaimentCollaboratorViewAdminComponent,
    PaimentCollaboratorEditAdminComponent,
    PaimentCollaboratorTypeCreateAdminComponent,
    PaimentCollaboratorTypeListAdminComponent,
    PaimentCollaboratorTypeViewAdminComponent,
    PaimentCollaboratorTypeEditAdminComponent,
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
  PaimentCollaboratorStateCreateAdminComponent,
  PaimentCollaboratorStateListAdminComponent,
  PaimentCollaboratorStateViewAdminComponent,
  PaimentCollaboratorStateEditAdminComponent,
  PaimentCollaboratorCreateAdminComponent,
  PaimentCollaboratorListAdminComponent,
  PaimentCollaboratorViewAdminComponent,
  PaimentCollaboratorEditAdminComponent,
  PaimentCollaboratorTypeCreateAdminComponent,
  PaimentCollaboratorTypeListAdminComponent,
  PaimentCollaboratorTypeViewAdminComponent,
  PaimentCollaboratorTypeEditAdminComponent,
  ],
})
export class PayementAdminModule { }
