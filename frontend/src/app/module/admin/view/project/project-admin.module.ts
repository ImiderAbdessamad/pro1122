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

import { ProjectCreateAdminComponent } from './project/create/project-create-admin.component';
import { ProjectEditAdminComponent } from './project/edit/project-edit-admin.component';
import { ProjectViewAdminComponent } from './project/view/project-view-admin.component';
import { ProjectListAdminComponent } from './project/list/project-list-admin.component';
import { RemoteRepoTypeCreateAdminComponent } from './remote-repo-type/create/remote-repo-type-create-admin.component';
import { RemoteRepoTypeEditAdminComponent } from './remote-repo-type/edit/remote-repo-type-edit-admin.component';
import { RemoteRepoTypeViewAdminComponent } from './remote-repo-type/view/remote-repo-type-view-admin.component';
import { RemoteRepoTypeListAdminComponent } from './remote-repo-type/list/remote-repo-type-list-admin.component';
import { ProjectTechnologyCreateAdminComponent } from './project-technology/create/project-technology-create-admin.component';
import { ProjectTechnologyEditAdminComponent } from './project-technology/edit/project-technology-edit-admin.component';
import { ProjectTechnologyViewAdminComponent } from './project-technology/view/project-technology-view-admin.component';
import { ProjectTechnologyListAdminComponent } from './project-technology/list/project-technology-list-admin.component';
import { YamlFileCreateAdminComponent } from './yaml-file/create/yaml-file-create-admin.component';
import { YamlFileEditAdminComponent } from './yaml-file/edit/yaml-file-edit-admin.component';
import { YamlFileViewAdminComponent } from './yaml-file/view/yaml-file-view-admin.component';
import { YamlFileListAdminComponent } from './yaml-file/list/yaml-file-list-admin.component';
import { ProjectTechnologyProfileCreateAdminComponent } from './project-technology-profile/create/project-technology-profile-create-admin.component';
import { ProjectTechnologyProfileEditAdminComponent } from './project-technology-profile/edit/project-technology-profile-edit-admin.component';
import { ProjectTechnologyProfileViewAdminComponent } from './project-technology-profile/view/project-technology-profile-view-admin.component';
import { ProjectTechnologyProfileListAdminComponent } from './project-technology-profile/list/project-technology-profile-list-admin.component';
import { ProjectTechnologyTypeCreateAdminComponent } from './project-technology-type/create/project-technology-type-create-admin.component';
import { ProjectTechnologyTypeEditAdminComponent } from './project-technology-type/edit/project-technology-type-edit-admin.component';
import { ProjectTechnologyTypeViewAdminComponent } from './project-technology-type/view/project-technology-type-view-admin.component';
import { ProjectTechnologyTypeListAdminComponent } from './project-technology-type/list/project-technology-type-list-admin.component';
import { ConversationCreateAdminComponent } from './conversation/create/conversation-create-admin.component';
import { ConversationEditAdminComponent } from './conversation/edit/conversation-edit-admin.component';
import { ConversationViewAdminComponent } from './conversation/view/conversation-view-admin.component';
import { ConversationListAdminComponent } from './conversation/list/conversation-list-admin.component';
import { ProjectDetailCreateAdminComponent } from './project-detail/create/project-detail-create-admin.component';
import { ProjectDetailEditAdminComponent } from './project-detail/edit/project-detail-edit-admin.component';
import { ProjectDetailViewAdminComponent } from './project-detail/view/project-detail-view-admin.component';
import { ProjectDetailListAdminComponent } from './project-detail/list/project-detail-list-admin.component';
import { RemoteRepoInfoCreateAdminComponent } from './remote-repo-info/create/remote-repo-info-create-admin.component';
import { RemoteRepoInfoEditAdminComponent } from './remote-repo-info/edit/remote-repo-info-edit-admin.component';
import { RemoteRepoInfoViewAdminComponent } from './remote-repo-info/view/remote-repo-info-view-admin.component';
import { RemoteRepoInfoListAdminComponent } from './remote-repo-info/list/remote-repo-info-list-admin.component';

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

    ProjectCreateAdminComponent,
    ProjectListAdminComponent,
    ProjectViewAdminComponent,
    ProjectEditAdminComponent,
    RemoteRepoTypeCreateAdminComponent,
    RemoteRepoTypeListAdminComponent,
    RemoteRepoTypeViewAdminComponent,
    RemoteRepoTypeEditAdminComponent,
    ProjectTechnologyCreateAdminComponent,
    ProjectTechnologyListAdminComponent,
    ProjectTechnologyViewAdminComponent,
    ProjectTechnologyEditAdminComponent,
    YamlFileCreateAdminComponent,
    YamlFileListAdminComponent,
    YamlFileViewAdminComponent,
    YamlFileEditAdminComponent,
    ProjectTechnologyProfileCreateAdminComponent,
    ProjectTechnologyProfileListAdminComponent,
    ProjectTechnologyProfileViewAdminComponent,
    ProjectTechnologyProfileEditAdminComponent,
    ProjectTechnologyTypeCreateAdminComponent,
    ProjectTechnologyTypeListAdminComponent,
    ProjectTechnologyTypeViewAdminComponent,
    ProjectTechnologyTypeEditAdminComponent,
    ConversationCreateAdminComponent,
    ConversationListAdminComponent,
    ConversationViewAdminComponent,
    ConversationEditAdminComponent,
    ProjectDetailCreateAdminComponent,
    ProjectDetailListAdminComponent,
    ProjectDetailViewAdminComponent,
    ProjectDetailEditAdminComponent,
    RemoteRepoInfoCreateAdminComponent,
    RemoteRepoInfoListAdminComponent,
    RemoteRepoInfoViewAdminComponent,
    RemoteRepoInfoEditAdminComponent,
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
  ProjectCreateAdminComponent,
  ProjectListAdminComponent,
  ProjectViewAdminComponent,
  ProjectEditAdminComponent,
  RemoteRepoTypeCreateAdminComponent,
  RemoteRepoTypeListAdminComponent,
  RemoteRepoTypeViewAdminComponent,
  RemoteRepoTypeEditAdminComponent,
  ProjectTechnologyCreateAdminComponent,
  ProjectTechnologyListAdminComponent,
  ProjectTechnologyViewAdminComponent,
  ProjectTechnologyEditAdminComponent,
  YamlFileCreateAdminComponent,
  YamlFileListAdminComponent,
  YamlFileViewAdminComponent,
  YamlFileEditAdminComponent,
  ProjectTechnologyProfileCreateAdminComponent,
  ProjectTechnologyProfileListAdminComponent,
  ProjectTechnologyProfileViewAdminComponent,
  ProjectTechnologyProfileEditAdminComponent,
  ProjectTechnologyTypeCreateAdminComponent,
  ProjectTechnologyTypeListAdminComponent,
  ProjectTechnologyTypeViewAdminComponent,
  ProjectTechnologyTypeEditAdminComponent,
  ConversationCreateAdminComponent,
  ConversationListAdminComponent,
  ConversationViewAdminComponent,
  ConversationEditAdminComponent,
  ProjectDetailCreateAdminComponent,
  ProjectDetailListAdminComponent,
  ProjectDetailViewAdminComponent,
  ProjectDetailEditAdminComponent,
  RemoteRepoInfoCreateAdminComponent,
  RemoteRepoInfoListAdminComponent,
  RemoteRepoInfoViewAdminComponent,
  RemoteRepoInfoEditAdminComponent,
  ],
})
export class ProjectAdminModule { }
