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

import { BlogCreateCollaboratorComponent } from './blog/create/blog-create-collaborator.component';
import { BlogEditCollaboratorComponent } from './blog/edit/blog-edit-collaborator.component';
import { BlogViewCollaboratorComponent } from './blog/view/blog-view-collaborator.component';
import { BlogListCollaboratorComponent } from './blog/list/blog-list-collaborator.component';
import { BlogSubjectCreateCollaboratorComponent } from './blog-subject/create/blog-subject-create-collaborator.component';
import { BlogSubjectEditCollaboratorComponent } from './blog-subject/edit/blog-subject-edit-collaborator.component';
import { BlogSubjectViewCollaboratorComponent } from './blog-subject/view/blog-subject-view-collaborator.component';
import { BlogSubjectListCollaboratorComponent } from './blog-subject/list/blog-subject-list-collaborator.component';
import { BlogCommentCreateCollaboratorComponent } from './blog-comment/create/blog-comment-create-collaborator.component';
import { BlogCommentEditCollaboratorComponent } from './blog-comment/edit/blog-comment-edit-collaborator.component';
import { BlogCommentViewCollaboratorComponent } from './blog-comment/view/blog-comment-view-collaborator.component';
import { BlogCommentListCollaboratorComponent } from './blog-comment/list/blog-comment-list-collaborator.component';

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

    BlogCreateCollaboratorComponent,
    BlogListCollaboratorComponent,
    BlogViewCollaboratorComponent,
    BlogEditCollaboratorComponent,
    BlogSubjectCreateCollaboratorComponent,
    BlogSubjectListCollaboratorComponent,
    BlogSubjectViewCollaboratorComponent,
    BlogSubjectEditCollaboratorComponent,
    BlogCommentCreateCollaboratorComponent,
    BlogCommentListCollaboratorComponent,
    BlogCommentViewCollaboratorComponent,
    BlogCommentEditCollaboratorComponent,
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
  BlogCreateCollaboratorComponent,
  BlogListCollaboratorComponent,
  BlogViewCollaboratorComponent,
  BlogEditCollaboratorComponent,
  BlogSubjectCreateCollaboratorComponent,
  BlogSubjectListCollaboratorComponent,
  BlogSubjectViewCollaboratorComponent,
  BlogSubjectEditCollaboratorComponent,
  BlogCommentCreateCollaboratorComponent,
  BlogCommentListCollaboratorComponent,
  BlogCommentViewCollaboratorComponent,
  BlogCommentEditCollaboratorComponent,
  ],
})
export class BlogCollaboratorModule { }
