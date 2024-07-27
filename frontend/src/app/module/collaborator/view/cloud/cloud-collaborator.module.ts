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

import { OffreCloudProviderCreateCollaboratorComponent } from './offre-cloud-provider/create/offre-cloud-provider-create-collaborator.component';
import { OffreCloudProviderEditCollaboratorComponent } from './offre-cloud-provider/edit/offre-cloud-provider-edit-collaborator.component';
import { OffreCloudProviderViewCollaboratorComponent } from './offre-cloud-provider/view/offre-cloud-provider-view-collaborator.component';
import { OffreCloudProviderListCollaboratorComponent } from './offre-cloud-provider/list/offre-cloud-provider-list-collaborator.component';
import { CloudProviderCreateCollaboratorComponent } from './cloud-provider/create/cloud-provider-create-collaborator.component';
import { CloudProviderEditCollaboratorComponent } from './cloud-provider/edit/cloud-provider-edit-collaborator.component';
import { CloudProviderViewCollaboratorComponent } from './cloud-provider/view/cloud-provider-view-collaborator.component';
import { CloudProviderListCollaboratorComponent } from './cloud-provider/list/cloud-provider-list-collaborator.component';

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

    OffreCloudProviderCreateCollaboratorComponent,
    OffreCloudProviderListCollaboratorComponent,
    OffreCloudProviderViewCollaboratorComponent,
    OffreCloudProviderEditCollaboratorComponent,
    CloudProviderCreateCollaboratorComponent,
    CloudProviderListCollaboratorComponent,
    CloudProviderViewCollaboratorComponent,
    CloudProviderEditCollaboratorComponent,
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
  OffreCloudProviderCreateCollaboratorComponent,
  OffreCloudProviderListCollaboratorComponent,
  OffreCloudProviderViewCollaboratorComponent,
  OffreCloudProviderEditCollaboratorComponent,
  CloudProviderCreateCollaboratorComponent,
  CloudProviderListCollaboratorComponent,
  CloudProviderViewCollaboratorComponent,
  CloudProviderEditCollaboratorComponent,
  ],
})
export class CloudCollaboratorModule { }