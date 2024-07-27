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

import { PackagingPlanCreateOpenComponent } from './packaging-plan/create/packaging-plan-create-open.component';
import { PackagingPlanEditOpenComponent } from './packaging-plan/edit/packaging-plan-edit-open.component';
import { PackagingPlanViewOpenComponent } from './packaging-plan/view/packaging-plan-view-open.component';
import { PackagingPlanListOpenComponent } from './packaging-plan/list/packaging-plan-list-open.component';
import { PackagingCreateOpenComponent } from './packaging/create/packaging-create-open.component';
import { PackagingEditOpenComponent } from './packaging/edit/packaging-edit-open.component';
import { PackagingViewOpenComponent } from './packaging/view/packaging-view-open.component';
import { PackagingListOpenComponent } from './packaging/list/packaging-list-open.component';
import { PackagingDetailGroupCreateOpenComponent } from './packaging-detail-group/create/packaging-detail-group-create-open.component';
import { PackagingDetailGroupEditOpenComponent } from './packaging-detail-group/edit/packaging-detail-group-edit-open.component';
import { PackagingDetailGroupViewOpenComponent } from './packaging-detail-group/view/packaging-detail-group-view-open.component';
import { PackagingDetailGroupListOpenComponent } from './packaging-detail-group/list/packaging-detail-group-list-open.component';
import { PackagingDetailCreateOpenComponent } from './packaging-detail/create/packaging-detail-create-open.component';
import { PackagingDetailEditOpenComponent } from './packaging-detail/edit/packaging-detail-edit-open.component';
import { PackagingDetailViewOpenComponent } from './packaging-detail/view/packaging-detail-view-open.component';
import { PackagingDetailListOpenComponent } from './packaging-detail/list/packaging-detail-list-open.component';

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

    PackagingPlanCreateOpenComponent,
    PackagingPlanListOpenComponent,
    PackagingPlanViewOpenComponent,
    PackagingPlanEditOpenComponent,
    PackagingCreateOpenComponent,
    PackagingListOpenComponent,
    PackagingViewOpenComponent,
    PackagingEditOpenComponent,
    PackagingDetailGroupCreateOpenComponent,
    PackagingDetailGroupListOpenComponent,
    PackagingDetailGroupViewOpenComponent,
    PackagingDetailGroupEditOpenComponent,
    PackagingDetailCreateOpenComponent,
    PackagingDetailListOpenComponent,
    PackagingDetailViewOpenComponent,
    PackagingDetailEditOpenComponent,
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
  PackagingPlanCreateOpenComponent,
  PackagingPlanListOpenComponent,
  PackagingPlanViewOpenComponent,
  PackagingPlanEditOpenComponent,
  PackagingCreateOpenComponent,
  PackagingListOpenComponent,
  PackagingViewOpenComponent,
  PackagingEditOpenComponent,
  PackagingDetailGroupCreateOpenComponent,
  PackagingDetailGroupListOpenComponent,
  PackagingDetailGroupViewOpenComponent,
  PackagingDetailGroupEditOpenComponent,
  PackagingDetailCreateOpenComponent,
  PackagingDetailListOpenComponent,
  PackagingDetailViewOpenComponent,
  PackagingDetailEditOpenComponent,
  ],
})
export class PackagingOpenModule { }
