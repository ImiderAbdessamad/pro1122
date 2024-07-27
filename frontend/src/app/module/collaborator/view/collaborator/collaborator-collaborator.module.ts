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

import { CityCreateCollaboratorComponent } from './city/create/city-create-collaborator.component';
import { CityEditCollaboratorComponent } from './city/edit/city-edit-collaborator.component';
import { CityViewCollaboratorComponent } from './city/view/city-view-collaborator.component';
import { CityListCollaboratorComponent } from './city/list/city-list-collaborator.component';
import { CollaboratorCreateCollaboratorComponent } from './collaborator/create/collaborator-create-collaborator.component';
import { CollaboratorEditCollaboratorComponent } from './collaborator/edit/collaborator-edit-collaborator.component';
import { CollaboratorViewCollaboratorComponent } from './collaborator/view/collaborator-view-collaborator.component';
import { CollaboratorListCollaboratorComponent } from './collaborator/list/collaborator-list-collaborator.component';
import { CountryCreateCollaboratorComponent } from './country/create/country-create-collaborator.component';
import { CountryEditCollaboratorComponent } from './country/edit/country-edit-collaborator.component';
import { CountryViewCollaboratorComponent } from './country/view/country-view-collaborator.component';
import { CountryListCollaboratorComponent } from './country/list/country-list-collaborator.component';

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

    CityCreateCollaboratorComponent,
    CityListCollaboratorComponent,
    CityViewCollaboratorComponent,
    CityEditCollaboratorComponent,
    CollaboratorCreateCollaboratorComponent,
    CollaboratorListCollaboratorComponent,
    CollaboratorViewCollaboratorComponent,
    CollaboratorEditCollaboratorComponent,
    CountryCreateCollaboratorComponent,
    CountryListCollaboratorComponent,
    CountryViewCollaboratorComponent,
    CountryEditCollaboratorComponent,
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
  CityCreateCollaboratorComponent,
  CityListCollaboratorComponent,
  CityViewCollaboratorComponent,
  CityEditCollaboratorComponent,
  CollaboratorCreateCollaboratorComponent,
  CollaboratorListCollaboratorComponent,
  CollaboratorViewCollaboratorComponent,
  CollaboratorEditCollaboratorComponent,
  CountryCreateCollaboratorComponent,
  CountryListCollaboratorComponent,
  CountryViewCollaboratorComponent,
  CountryEditCollaboratorComponent,
  ],
})
export class CollaboratorCollaboratorModule { }
