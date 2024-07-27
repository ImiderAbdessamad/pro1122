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

import { ForumCreateCollaboratorComponent } from './forum/create/forum-create-collaborator.component';
import { ForumEditCollaboratorComponent } from './forum/edit/forum-edit-collaborator.component';
import { ForumViewCollaboratorComponent } from './forum/view/forum-view-collaborator.component';
import { ForumListCollaboratorComponent } from './forum/list/forum-list-collaborator.component';
import { ForumSubjectCreateCollaboratorComponent } from './forum-subject/create/forum-subject-create-collaborator.component';
import { ForumSubjectEditCollaboratorComponent } from './forum-subject/edit/forum-subject-edit-collaborator.component';
import { ForumSubjectViewCollaboratorComponent } from './forum-subject/view/forum-subject-view-collaborator.component';
import { ForumSubjectListCollaboratorComponent } from './forum-subject/list/forum-subject-list-collaborator.component';
import { ForumCommentCreateCollaboratorComponent } from './forum-comment/create/forum-comment-create-collaborator.component';
import { ForumCommentEditCollaboratorComponent } from './forum-comment/edit/forum-comment-edit-collaborator.component';
import { ForumCommentViewCollaboratorComponent } from './forum-comment/view/forum-comment-view-collaborator.component';
import { ForumCommentListCollaboratorComponent } from './forum-comment/list/forum-comment-list-collaborator.component';

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

    ForumCreateCollaboratorComponent,
    ForumListCollaboratorComponent,
    ForumViewCollaboratorComponent,
    ForumEditCollaboratorComponent,
    ForumSubjectCreateCollaboratorComponent,
    ForumSubjectListCollaboratorComponent,
    ForumSubjectViewCollaboratorComponent,
    ForumSubjectEditCollaboratorComponent,
    ForumCommentCreateCollaboratorComponent,
    ForumCommentListCollaboratorComponent,
    ForumCommentViewCollaboratorComponent,
    ForumCommentEditCollaboratorComponent,
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
  ForumCreateCollaboratorComponent,
  ForumListCollaboratorComponent,
  ForumViewCollaboratorComponent,
  ForumEditCollaboratorComponent,
  ForumSubjectCreateCollaboratorComponent,
  ForumSubjectListCollaboratorComponent,
  ForumSubjectViewCollaboratorComponent,
  ForumSubjectEditCollaboratorComponent,
  ForumCommentCreateCollaboratorComponent,
  ForumCommentListCollaboratorComponent,
  ForumCommentViewCollaboratorComponent,
  ForumCommentEditCollaboratorComponent,
  ],
})
export class ForumCollaboratorModule { }
