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

import { AgentCreateAgentComponent } from './agent/create/agent-create-agent.component';
import { AgentEditAgentComponent } from './agent/edit/agent-edit-agent.component';
import { AgentViewAgentComponent } from './agent/view/agent-view-agent.component';
import { AgentListAgentComponent } from './agent/list/agent-list-agent.component';
import { CustumorSupportConversationCreateAgentComponent } from './custumor-support-conversation/create/custumor-support-conversation-create-agent.component';
import { CustumorSupportConversationEditAgentComponent } from './custumor-support-conversation/edit/custumor-support-conversation-edit-agent.component';
import { CustumorSupportConversationViewAgentComponent } from './custumor-support-conversation/view/custumor-support-conversation-view-agent.component';
import { CustumorSupportConversationListAgentComponent } from './custumor-support-conversation/list/custumor-support-conversation-list-agent.component';
import { CustumorSupportConversationCategoryCreateAgentComponent } from './custumor-support-conversation-category/create/custumor-support-conversation-category-create-agent.component';
import { CustumorSupportConversationCategoryEditAgentComponent } from './custumor-support-conversation-category/edit/custumor-support-conversation-category-edit-agent.component';
import { CustumorSupportConversationCategoryViewAgentComponent } from './custumor-support-conversation-category/view/custumor-support-conversation-category-view-agent.component';
import { CustumorSupportConversationCategoryListAgentComponent } from './custumor-support-conversation-category/list/custumor-support-conversation-category-list-agent.component';
import { CustumorSupportConversationStateCreateAgentComponent } from './custumor-support-conversation-state/create/custumor-support-conversation-state-create-agent.component';
import { CustumorSupportConversationStateEditAgentComponent } from './custumor-support-conversation-state/edit/custumor-support-conversation-state-edit-agent.component';
import { CustumorSupportConversationStateViewAgentComponent } from './custumor-support-conversation-state/view/custumor-support-conversation-state-view-agent.component';
import { CustumorSupportConversationStateListAgentComponent } from './custumor-support-conversation-state/list/custumor-support-conversation-state-list-agent.component';
import { CustumorSupportConversationMessageCreateAgentComponent } from './custumor-support-conversation-message/create/custumor-support-conversation-message-create-agent.component';
import { CustumorSupportConversationMessageEditAgentComponent } from './custumor-support-conversation-message/edit/custumor-support-conversation-message-edit-agent.component';
import { CustumorSupportConversationMessageViewAgentComponent } from './custumor-support-conversation-message/view/custumor-support-conversation-message-view-agent.component';
import { CustumorSupportConversationMessageListAgentComponent } from './custumor-support-conversation-message/list/custumor-support-conversation-message-list-agent.component';

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

    AgentCreateAgentComponent,
    AgentListAgentComponent,
    AgentViewAgentComponent,
    AgentEditAgentComponent,
    CustumorSupportConversationCreateAgentComponent,
    CustumorSupportConversationListAgentComponent,
    CustumorSupportConversationViewAgentComponent,
    CustumorSupportConversationEditAgentComponent,
    CustumorSupportConversationCategoryCreateAgentComponent,
    CustumorSupportConversationCategoryListAgentComponent,
    CustumorSupportConversationCategoryViewAgentComponent,
    CustumorSupportConversationCategoryEditAgentComponent,
    CustumorSupportConversationStateCreateAgentComponent,
    CustumorSupportConversationStateListAgentComponent,
    CustumorSupportConversationStateViewAgentComponent,
    CustumorSupportConversationStateEditAgentComponent,
    CustumorSupportConversationMessageCreateAgentComponent,
    CustumorSupportConversationMessageListAgentComponent,
    CustumorSupportConversationMessageViewAgentComponent,
    CustumorSupportConversationMessageEditAgentComponent,
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
  AgentCreateAgentComponent,
  AgentListAgentComponent,
  AgentViewAgentComponent,
  AgentEditAgentComponent,
  CustumorSupportConversationCreateAgentComponent,
  CustumorSupportConversationListAgentComponent,
  CustumorSupportConversationViewAgentComponent,
  CustumorSupportConversationEditAgentComponent,
  CustumorSupportConversationCategoryCreateAgentComponent,
  CustumorSupportConversationCategoryListAgentComponent,
  CustumorSupportConversationCategoryViewAgentComponent,
  CustumorSupportConversationCategoryEditAgentComponent,
  CustumorSupportConversationStateCreateAgentComponent,
  CustumorSupportConversationStateListAgentComponent,
  CustumorSupportConversationStateViewAgentComponent,
  CustumorSupportConversationStateEditAgentComponent,
  CustumorSupportConversationMessageCreateAgentComponent,
  CustumorSupportConversationMessageListAgentComponent,
  CustumorSupportConversationMessageViewAgentComponent,
  CustumorSupportConversationMessageEditAgentComponent,
  ],
})
export class SupportAgentModule { }
