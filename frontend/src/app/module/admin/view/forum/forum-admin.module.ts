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

import { ForumStateCreateAdminComponent } from './forum-state/create/forum-state-create-admin.component';
import { ForumStateEditAdminComponent } from './forum-state/edit/forum-state-edit-admin.component';
import { ForumStateViewAdminComponent } from './forum-state/view/forum-state-view-admin.component';
import { ForumStateListAdminComponent } from './forum-state/list/forum-state-list-admin.component';
import { ForumCreateAdminComponent } from './forum/create/forum-create-admin.component';
import { ForumEditAdminComponent } from './forum/edit/forum-edit-admin.component';
import { ForumViewAdminComponent } from './forum/view/forum-view-admin.component';
import { ForumListAdminComponent } from './forum/list/forum-list-admin.component';
import { ForumSubjectCreateAdminComponent } from './forum-subject/create/forum-subject-create-admin.component';
import { ForumSubjectEditAdminComponent } from './forum-subject/edit/forum-subject-edit-admin.component';
import { ForumSubjectViewAdminComponent } from './forum-subject/view/forum-subject-view-admin.component';
import { ForumSubjectListAdminComponent } from './forum-subject/list/forum-subject-list-admin.component';
import { ForumCommentCreateAdminComponent } from './forum-comment/create/forum-comment-create-admin.component';
import { ForumCommentEditAdminComponent } from './forum-comment/edit/forum-comment-edit-admin.component';
import { ForumCommentViewAdminComponent } from './forum-comment/view/forum-comment-view-admin.component';
import { ForumCommentListAdminComponent } from './forum-comment/list/forum-comment-list-admin.component';

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

    ForumStateCreateAdminComponent,
    ForumStateListAdminComponent,
    ForumStateViewAdminComponent,
    ForumStateEditAdminComponent,
    ForumCreateAdminComponent,
    ForumListAdminComponent,
    ForumViewAdminComponent,
    ForumEditAdminComponent,
    ForumSubjectCreateAdminComponent,
    ForumSubjectListAdminComponent,
    ForumSubjectViewAdminComponent,
    ForumSubjectEditAdminComponent,
    ForumCommentCreateAdminComponent,
    ForumCommentListAdminComponent,
    ForumCommentViewAdminComponent,
    ForumCommentEditAdminComponent,
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
  ForumStateCreateAdminComponent,
  ForumStateListAdminComponent,
  ForumStateViewAdminComponent,
  ForumStateEditAdminComponent,
  ForumCreateAdminComponent,
  ForumListAdminComponent,
  ForumViewAdminComponent,
  ForumEditAdminComponent,
  ForumSubjectCreateAdminComponent,
  ForumSubjectListAdminComponent,
  ForumSubjectViewAdminComponent,
  ForumSubjectEditAdminComponent,
  ForumCommentCreateAdminComponent,
  ForumCommentListAdminComponent,
  ForumCommentViewAdminComponent,
  ForumCommentEditAdminComponent,
  ],
})
export class ForumAdminModule { }
