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

import { InscriptionCollaboratorStateCreateCollaboratorComponent } from './inscription-collaborator-state/create/inscription-collaborator-state-create-collaborator.component';
import { InscriptionCollaboratorStateEditCollaboratorComponent } from './inscription-collaborator-state/edit/inscription-collaborator-state-edit-collaborator.component';
import { InscriptionCollaboratorStateViewCollaboratorComponent } from './inscription-collaborator-state/view/inscription-collaborator-state-view-collaborator.component';
import { InscriptionCollaboratorStateListCollaboratorComponent } from './inscription-collaborator-state/list/inscription-collaborator-state-list-collaborator.component';
import { InscriptionCollaboratorCreateCollaboratorComponent } from './inscription-collaborator/create/inscription-collaborator-create-collaborator.component';
import { InscriptionCollaboratorEditCollaboratorComponent } from './inscription-collaborator/edit/inscription-collaborator-edit-collaborator.component';
import { InscriptionCollaboratorViewCollaboratorComponent } from './inscription-collaborator/view/inscription-collaborator-view-collaborator.component';
import { InscriptionCollaboratorListCollaboratorComponent } from './inscription-collaborator/list/inscription-collaborator-list-collaborator.component';

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

    InscriptionCollaboratorStateCreateCollaboratorComponent,
    InscriptionCollaboratorStateListCollaboratorComponent,
    InscriptionCollaboratorStateViewCollaboratorComponent,
    InscriptionCollaboratorStateEditCollaboratorComponent,
    InscriptionCollaboratorCreateCollaboratorComponent,
    InscriptionCollaboratorListCollaboratorComponent,
    InscriptionCollaboratorViewCollaboratorComponent,
    InscriptionCollaboratorEditCollaboratorComponent,
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
  InscriptionCollaboratorStateCreateCollaboratorComponent,
  InscriptionCollaboratorStateListCollaboratorComponent,
  InscriptionCollaboratorStateViewCollaboratorComponent,
  InscriptionCollaboratorStateEditCollaboratorComponent,
  InscriptionCollaboratorCreateCollaboratorComponent,
  InscriptionCollaboratorListCollaboratorComponent,
  InscriptionCollaboratorViewCollaboratorComponent,
  InscriptionCollaboratorEditCollaboratorComponent,
  ],
})
export class InscriptionCollaboratorModule { }
