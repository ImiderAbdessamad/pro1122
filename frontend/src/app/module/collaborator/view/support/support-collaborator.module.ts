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

import { CustumorSupportConversationCreateCollaboratorComponent } from './custumor-support-conversation/create/custumor-support-conversation-create-collaborator.component';
import { CustumorSupportConversationEditCollaboratorComponent } from './custumor-support-conversation/edit/custumor-support-conversation-edit-collaborator.component';
import { CustumorSupportConversationViewCollaboratorComponent } from './custumor-support-conversation/view/custumor-support-conversation-view-collaborator.component';
import { CustumorSupportConversationListCollaboratorComponent } from './custumor-support-conversation/list/custumor-support-conversation-list-collaborator.component';
import { CustumorSupportConversationMessageCreateCollaboratorComponent } from './custumor-support-conversation-message/create/custumor-support-conversation-message-create-collaborator.component';
import { CustumorSupportConversationMessageEditCollaboratorComponent } from './custumor-support-conversation-message/edit/custumor-support-conversation-message-edit-collaborator.component';
import { CustumorSupportConversationMessageViewCollaboratorComponent } from './custumor-support-conversation-message/view/custumor-support-conversation-message-view-collaborator.component';
import { CustumorSupportConversationMessageListCollaboratorComponent } from './custumor-support-conversation-message/list/custumor-support-conversation-message-list-collaborator.component';

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

    CustumorSupportConversationCreateCollaboratorComponent,
    CustumorSupportConversationListCollaboratorComponent,
    CustumorSupportConversationViewCollaboratorComponent,
    CustumorSupportConversationEditCollaboratorComponent,
    CustumorSupportConversationMessageCreateCollaboratorComponent,
    CustumorSupportConversationMessageListCollaboratorComponent,
    CustumorSupportConversationMessageViewCollaboratorComponent,
    CustumorSupportConversationMessageEditCollaboratorComponent,
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
  CustumorSupportConversationCreateCollaboratorComponent,
  CustumorSupportConversationListCollaboratorComponent,
  CustumorSupportConversationViewCollaboratorComponent,
  CustumorSupportConversationEditCollaboratorComponent,
  CustumorSupportConversationMessageCreateCollaboratorComponent,
  CustumorSupportConversationMessageListCollaboratorComponent,
  CustumorSupportConversationMessageViewCollaboratorComponent,
  CustumorSupportConversationMessageEditCollaboratorComponent,
  ],
})
export class SupportCollaboratorModule { }
