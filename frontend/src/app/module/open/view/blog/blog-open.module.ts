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

import { BlogCreateOpenComponent } from './blog/create/blog-create-open.component';
import { BlogEditOpenComponent } from './blog/edit/blog-edit-open.component';
import { BlogViewOpenComponent } from './blog/view/blog-view-open.component';
import { BlogListOpenComponent } from './blog/list/blog-list-open.component';
import { BlogCommentCreateOpenComponent } from './blog-comment/create/blog-comment-create-open.component';
import { BlogCommentEditOpenComponent } from './blog-comment/edit/blog-comment-edit-open.component';
import { BlogCommentViewOpenComponent } from './blog-comment/view/blog-comment-view-open.component';
import { BlogCommentListOpenComponent } from './blog-comment/list/blog-comment-list-open.component';

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

    BlogCreateOpenComponent,
    BlogListOpenComponent,
    BlogViewOpenComponent,
    BlogEditOpenComponent,
    BlogCommentCreateOpenComponent,
    BlogCommentListOpenComponent,
    BlogCommentViewOpenComponent,
    BlogCommentEditOpenComponent,
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
  BlogCreateOpenComponent,
  BlogListOpenComponent,
  BlogViewOpenComponent,
  BlogEditOpenComponent,
  BlogCommentCreateOpenComponent,
  BlogCommentListOpenComponent,
  BlogCommentViewOpenComponent,
  BlogCommentEditOpenComponent,
  ],
})
export class BlogOpenModule { }
