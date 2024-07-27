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

import { PackagingPlanCreateAdminComponent } from './packaging-plan/create/packaging-plan-create-admin.component';
import { PackagingPlanEditAdminComponent } from './packaging-plan/edit/packaging-plan-edit-admin.component';
import { PackagingPlanViewAdminComponent } from './packaging-plan/view/packaging-plan-view-admin.component';
import { PackagingPlanListAdminComponent } from './packaging-plan/list/packaging-plan-list-admin.component';
import { PackagingCreateAdminComponent } from './packaging/create/packaging-create-admin.component';
import { PackagingEditAdminComponent } from './packaging/edit/packaging-edit-admin.component';
import { PackagingViewAdminComponent } from './packaging/view/packaging-view-admin.component';
import { PackagingListAdminComponent } from './packaging/list/packaging-list-admin.component';
import { PackagingDetailGroupCreateAdminComponent } from './packaging-detail-group/create/packaging-detail-group-create-admin.component';
import { PackagingDetailGroupEditAdminComponent } from './packaging-detail-group/edit/packaging-detail-group-edit-admin.component';
import { PackagingDetailGroupViewAdminComponent } from './packaging-detail-group/view/packaging-detail-group-view-admin.component';
import { PackagingDetailGroupListAdminComponent } from './packaging-detail-group/list/packaging-detail-group-list-admin.component';
import { PackagingDetailCreateAdminComponent } from './packaging-detail/create/packaging-detail-create-admin.component';
import { PackagingDetailEditAdminComponent } from './packaging-detail/edit/packaging-detail-edit-admin.component';
import { PackagingDetailViewAdminComponent } from './packaging-detail/view/packaging-detail-view-admin.component';
import { PackagingDetailListAdminComponent } from './packaging-detail/list/packaging-detail-list-admin.component';

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

    PackagingPlanCreateAdminComponent,
    PackagingPlanListAdminComponent,
    PackagingPlanViewAdminComponent,
    PackagingPlanEditAdminComponent,
    PackagingCreateAdminComponent,
    PackagingListAdminComponent,
    PackagingViewAdminComponent,
    PackagingEditAdminComponent,
    PackagingDetailGroupCreateAdminComponent,
    PackagingDetailGroupListAdminComponent,
    PackagingDetailGroupViewAdminComponent,
    PackagingDetailGroupEditAdminComponent,
    PackagingDetailCreateAdminComponent,
    PackagingDetailListAdminComponent,
    PackagingDetailViewAdminComponent,
    PackagingDetailEditAdminComponent,
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
  PackagingPlanCreateAdminComponent,
  PackagingPlanListAdminComponent,
  PackagingPlanViewAdminComponent,
  PackagingPlanEditAdminComponent,
  PackagingCreateAdminComponent,
  PackagingListAdminComponent,
  PackagingViewAdminComponent,
  PackagingEditAdminComponent,
  PackagingDetailGroupCreateAdminComponent,
  PackagingDetailGroupListAdminComponent,
  PackagingDetailGroupViewAdminComponent,
  PackagingDetailGroupEditAdminComponent,
  PackagingDetailCreateAdminComponent,
  PackagingDetailListAdminComponent,
  PackagingDetailViewAdminComponent,
  PackagingDetailEditAdminComponent,
  ],
})
export class PackagingAdminModule { }
