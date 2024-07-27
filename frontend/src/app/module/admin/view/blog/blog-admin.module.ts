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

import { BlogCreateAdminComponent } from './blog/create/blog-create-admin.component';
import { BlogEditAdminComponent } from './blog/edit/blog-edit-admin.component';
import { BlogViewAdminComponent } from './blog/view/blog-view-admin.component';
import { BlogListAdminComponent } from './blog/list/blog-list-admin.component';
import { BlogSubjectCreateAdminComponent } from './blog-subject/create/blog-subject-create-admin.component';
import { BlogSubjectEditAdminComponent } from './blog-subject/edit/blog-subject-edit-admin.component';
import { BlogSubjectViewAdminComponent } from './blog-subject/view/blog-subject-view-admin.component';
import { BlogSubjectListAdminComponent } from './blog-subject/list/blog-subject-list-admin.component';
import { BlogCommentCreateAdminComponent } from './blog-comment/create/blog-comment-create-admin.component';
import { BlogCommentEditAdminComponent } from './blog-comment/edit/blog-comment-edit-admin.component';
import { BlogCommentViewAdminComponent } from './blog-comment/view/blog-comment-view-admin.component';
import { BlogCommentListAdminComponent } from './blog-comment/list/blog-comment-list-admin.component';
import { BlogStateCreateAdminComponent } from './blog-state/create/blog-state-create-admin.component';
import { BlogStateEditAdminComponent } from './blog-state/edit/blog-state-edit-admin.component';
import { BlogStateViewAdminComponent } from './blog-state/view/blog-state-view-admin.component';
import { BlogStateListAdminComponent } from './blog-state/list/blog-state-list-admin.component';

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

    BlogCreateAdminComponent,
    BlogListAdminComponent,
    BlogViewAdminComponent,
    BlogEditAdminComponent,
    BlogSubjectCreateAdminComponent,
    BlogSubjectListAdminComponent,
    BlogSubjectViewAdminComponent,
    BlogSubjectEditAdminComponent,
    BlogCommentCreateAdminComponent,
    BlogCommentListAdminComponent,
    BlogCommentViewAdminComponent,
    BlogCommentEditAdminComponent,
    BlogStateCreateAdminComponent,
    BlogStateListAdminComponent,
    BlogStateViewAdminComponent,
    BlogStateEditAdminComponent,
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
  BlogCreateAdminComponent,
  BlogListAdminComponent,
  BlogViewAdminComponent,
  BlogEditAdminComponent,
  BlogSubjectCreateAdminComponent,
  BlogSubjectListAdminComponent,
  BlogSubjectViewAdminComponent,
  BlogSubjectEditAdminComponent,
  BlogCommentCreateAdminComponent,
  BlogCommentListAdminComponent,
  BlogCommentViewAdminComponent,
  BlogCommentEditAdminComponent,
  BlogStateCreateAdminComponent,
  BlogStateListAdminComponent,
  BlogStateViewAdminComponent,
  BlogStateEditAdminComponent,
  ],
})
export class BlogAdminModule { }
