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

import { PackagingPlanCreateCollaboratorComponent } from './packaging-plan/create/packaging-plan-create-collaborator.component';
import { PackagingPlanEditCollaboratorComponent } from './packaging-plan/edit/packaging-plan-edit-collaborator.component';
import { PackagingPlanViewCollaboratorComponent } from './packaging-plan/view/packaging-plan-view-collaborator.component';
import { PackagingPlanListCollaboratorComponent } from './packaging-plan/list/packaging-plan-list-collaborator.component';
import { PackagingCreateCollaboratorComponent } from './packaging/create/packaging-create-collaborator.component';
import { PackagingEditCollaboratorComponent } from './packaging/edit/packaging-edit-collaborator.component';
import { PackagingViewCollaboratorComponent } from './packaging/view/packaging-view-collaborator.component';
import { PackagingListCollaboratorComponent } from './packaging/list/packaging-list-collaborator.component';
import { PackagingDetailGroupCreateCollaboratorComponent } from './packaging-detail-group/create/packaging-detail-group-create-collaborator.component';
import { PackagingDetailGroupEditCollaboratorComponent } from './packaging-detail-group/edit/packaging-detail-group-edit-collaborator.component';
import { PackagingDetailGroupViewCollaboratorComponent } from './packaging-detail-group/view/packaging-detail-group-view-collaborator.component';
import { PackagingDetailGroupListCollaboratorComponent } from './packaging-detail-group/list/packaging-detail-group-list-collaborator.component';
import { PackagingDetailCreateCollaboratorComponent } from './packaging-detail/create/packaging-detail-create-collaborator.component';
import { PackagingDetailEditCollaboratorComponent } from './packaging-detail/edit/packaging-detail-edit-collaborator.component';
import { PackagingDetailViewCollaboratorComponent } from './packaging-detail/view/packaging-detail-view-collaborator.component';
import { PackagingDetailListCollaboratorComponent } from './packaging-detail/list/packaging-detail-list-collaborator.component';

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

    PackagingPlanCreateCollaboratorComponent,
    PackagingPlanListCollaboratorComponent,
    PackagingPlanViewCollaboratorComponent,
    PackagingPlanEditCollaboratorComponent,
    PackagingCreateCollaboratorComponent,
    PackagingListCollaboratorComponent,
    PackagingViewCollaboratorComponent,
    PackagingEditCollaboratorComponent,
    PackagingDetailGroupCreateCollaboratorComponent,
    PackagingDetailGroupListCollaboratorComponent,
    PackagingDetailGroupViewCollaboratorComponent,
    PackagingDetailGroupEditCollaboratorComponent,
    PackagingDetailCreateCollaboratorComponent,
    PackagingDetailListCollaboratorComponent,
    PackagingDetailViewCollaboratorComponent,
    PackagingDetailEditCollaboratorComponent,
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
  PackagingPlanCreateCollaboratorComponent,
  PackagingPlanListCollaboratorComponent,
  PackagingPlanViewCollaboratorComponent,
  PackagingPlanEditCollaboratorComponent,
  PackagingCreateCollaboratorComponent,
  PackagingListCollaboratorComponent,
  PackagingViewCollaboratorComponent,
  PackagingEditCollaboratorComponent,
  PackagingDetailGroupCreateCollaboratorComponent,
  PackagingDetailGroupListCollaboratorComponent,
  PackagingDetailGroupViewCollaboratorComponent,
  PackagingDetailGroupEditCollaboratorComponent,
  PackagingDetailCreateCollaboratorComponent,
  PackagingDetailListCollaboratorComponent,
  PackagingDetailViewCollaboratorComponent,
  PackagingDetailEditCollaboratorComponent,
  ],
})
export class PackagingCollaboratorModule { }
