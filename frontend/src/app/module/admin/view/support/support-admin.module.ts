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

import { AgentCreateAdminComponent } from './agent/create/agent-create-admin.component';
import { AgentEditAdminComponent } from './agent/edit/agent-edit-admin.component';
import { AgentViewAdminComponent } from './agent/view/agent-view-admin.component';
import { AgentListAdminComponent } from './agent/list/agent-list-admin.component';
import { CustumorSupportConversationCreateAdminComponent } from './custumor-support-conversation/create/custumor-support-conversation-create-admin.component';
import { CustumorSupportConversationEditAdminComponent } from './custumor-support-conversation/edit/custumor-support-conversation-edit-admin.component';
import { CustumorSupportConversationViewAdminComponent } from './custumor-support-conversation/view/custumor-support-conversation-view-admin.component';
import { CustumorSupportConversationListAdminComponent } from './custumor-support-conversation/list/custumor-support-conversation-list-admin.component';
import { CustumorSupportConversationCategoryCreateAdminComponent } from './custumor-support-conversation-category/create/custumor-support-conversation-category-create-admin.component';
import { CustumorSupportConversationCategoryEditAdminComponent } from './custumor-support-conversation-category/edit/custumor-support-conversation-category-edit-admin.component';
import { CustumorSupportConversationCategoryViewAdminComponent } from './custumor-support-conversation-category/view/custumor-support-conversation-category-view-admin.component';
import { CustumorSupportConversationCategoryListAdminComponent } from './custumor-support-conversation-category/list/custumor-support-conversation-category-list-admin.component';
import { CustumorSupportConversationStateCreateAdminComponent } from './custumor-support-conversation-state/create/custumor-support-conversation-state-create-admin.component';
import { CustumorSupportConversationStateEditAdminComponent } from './custumor-support-conversation-state/edit/custumor-support-conversation-state-edit-admin.component';
import { CustumorSupportConversationStateViewAdminComponent } from './custumor-support-conversation-state/view/custumor-support-conversation-state-view-admin.component';
import { CustumorSupportConversationStateListAdminComponent } from './custumor-support-conversation-state/list/custumor-support-conversation-state-list-admin.component';
import { CustumorSupportConversationMessageCreateAdminComponent } from './custumor-support-conversation-message/create/custumor-support-conversation-message-create-admin.component';
import { CustumorSupportConversationMessageEditAdminComponent } from './custumor-support-conversation-message/edit/custumor-support-conversation-message-edit-admin.component';
import { CustumorSupportConversationMessageViewAdminComponent } from './custumor-support-conversation-message/view/custumor-support-conversation-message-view-admin.component';
import { CustumorSupportConversationMessageListAdminComponent } from './custumor-support-conversation-message/list/custumor-support-conversation-message-list-admin.component';

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

    AgentCreateAdminComponent,
    AgentListAdminComponent,
    AgentViewAdminComponent,
    AgentEditAdminComponent,
    CustumorSupportConversationCreateAdminComponent,
    CustumorSupportConversationListAdminComponent,
    CustumorSupportConversationViewAdminComponent,
    CustumorSupportConversationEditAdminComponent,
    CustumorSupportConversationCategoryCreateAdminComponent,
    CustumorSupportConversationCategoryListAdminComponent,
    CustumorSupportConversationCategoryViewAdminComponent,
    CustumorSupportConversationCategoryEditAdminComponent,
    CustumorSupportConversationStateCreateAdminComponent,
    CustumorSupportConversationStateListAdminComponent,
    CustumorSupportConversationStateViewAdminComponent,
    CustumorSupportConversationStateEditAdminComponent,
    CustumorSupportConversationMessageCreateAdminComponent,
    CustumorSupportConversationMessageListAdminComponent,
    CustumorSupportConversationMessageViewAdminComponent,
    CustumorSupportConversationMessageEditAdminComponent,
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
  AgentCreateAdminComponent,
  AgentListAdminComponent,
  AgentViewAdminComponent,
  AgentEditAdminComponent,
  CustumorSupportConversationCreateAdminComponent,
  CustumorSupportConversationListAdminComponent,
  CustumorSupportConversationViewAdminComponent,
  CustumorSupportConversationEditAdminComponent,
  CustumorSupportConversationCategoryCreateAdminComponent,
  CustumorSupportConversationCategoryListAdminComponent,
  CustumorSupportConversationCategoryViewAdminComponent,
  CustumorSupportConversationCategoryEditAdminComponent,
  CustumorSupportConversationStateCreateAdminComponent,
  CustumorSupportConversationStateListAdminComponent,
  CustumorSupportConversationStateViewAdminComponent,
  CustumorSupportConversationStateEditAdminComponent,
  CustumorSupportConversationMessageCreateAdminComponent,
  CustumorSupportConversationMessageListAdminComponent,
  CustumorSupportConversationMessageViewAdminComponent,
  CustumorSupportConversationMessageEditAdminComponent,
  ],
})
export class SupportAdminModule { }
