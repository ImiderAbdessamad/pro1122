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

import { ProjectCreateCollaboratorComponent } from './project/create/project-create-collaborator.component';
import { ProjectEditCollaboratorComponent } from './project/edit/project-edit-collaborator.component';
import { ProjectViewCollaboratorComponent } from './project/view/project-view-collaborator.component';
import { ProjectListCollaboratorComponent } from './project/list/project-list-collaborator.component';
import { RemoteRepoTypeCreateCollaboratorComponent } from './remote-repo-type/create/remote-repo-type-create-collaborator.component';
import { RemoteRepoTypeEditCollaboratorComponent } from './remote-repo-type/edit/remote-repo-type-edit-collaborator.component';
import { RemoteRepoTypeViewCollaboratorComponent } from './remote-repo-type/view/remote-repo-type-view-collaborator.component';
import { RemoteRepoTypeListCollaboratorComponent } from './remote-repo-type/list/remote-repo-type-list-collaborator.component';
import { ProjectTechnologyCreateCollaboratorComponent } from './project-technology/create/project-technology-create-collaborator.component';
import { ProjectTechnologyEditCollaboratorComponent } from './project-technology/edit/project-technology-edit-collaborator.component';
import { ProjectTechnologyViewCollaboratorComponent } from './project-technology/view/project-technology-view-collaborator.component';
import { ProjectTechnologyListCollaboratorComponent } from './project-technology/list/project-technology-list-collaborator.component';
import { YamlFileCreateCollaboratorComponent } from './yaml-file/create/yaml-file-create-collaborator.component';
import { YamlFileEditCollaboratorComponent } from './yaml-file/edit/yaml-file-edit-collaborator.component';
import { YamlFileViewCollaboratorComponent } from './yaml-file/view/yaml-file-view-collaborator.component';
import { YamlFileListCollaboratorComponent } from './yaml-file/list/yaml-file-list-collaborator.component';
import { ProjectTechnologyProfileCreateCollaboratorComponent } from './project-technology-profile/create/project-technology-profile-create-collaborator.component';
import { ProjectTechnologyProfileEditCollaboratorComponent } from './project-technology-profile/edit/project-technology-profile-edit-collaborator.component';
import { ProjectTechnologyProfileViewCollaboratorComponent } from './project-technology-profile/view/project-technology-profile-view-collaborator.component';
import { ProjectTechnologyProfileListCollaboratorComponent } from './project-technology-profile/list/project-technology-profile-list-collaborator.component';
import { ProjectTechnologyTypeCreateCollaboratorComponent } from './project-technology-type/create/project-technology-type-create-collaborator.component';
import { ProjectTechnologyTypeEditCollaboratorComponent } from './project-technology-type/edit/project-technology-type-edit-collaborator.component';
import { ProjectTechnologyTypeViewCollaboratorComponent } from './project-technology-type/view/project-technology-type-view-collaborator.component';
import { ProjectTechnologyTypeListCollaboratorComponent } from './project-technology-type/list/project-technology-type-list-collaborator.component';
import { ConversationCreateCollaboratorComponent } from './conversation/create/conversation-create-collaborator.component';
import { ConversationEditCollaboratorComponent } from './conversation/edit/conversation-edit-collaborator.component';
import { ConversationViewCollaboratorComponent } from './conversation/view/conversation-view-collaborator.component';
import { ConversationListCollaboratorComponent } from './conversation/list/conversation-list-collaborator.component';
import { ProjectDetailCreateCollaboratorComponent } from './project-detail/create/project-detail-create-collaborator.component';
import { ProjectDetailEditCollaboratorComponent } from './project-detail/edit/project-detail-edit-collaborator.component';
import { ProjectDetailViewCollaboratorComponent } from './project-detail/view/project-detail-view-collaborator.component';
import { ProjectDetailListCollaboratorComponent } from './project-detail/list/project-detail-list-collaborator.component';
import { RemoteRepoInfoCreateCollaboratorComponent } from './remote-repo-info/create/remote-repo-info-create-collaborator.component';
import { RemoteRepoInfoEditCollaboratorComponent } from './remote-repo-info/edit/remote-repo-info-edit-collaborator.component';
import { RemoteRepoInfoViewCollaboratorComponent } from './remote-repo-info/view/remote-repo-info-view-collaborator.component';
import { RemoteRepoInfoListCollaboratorComponent } from './remote-repo-info/list/remote-repo-info-list-collaborator.component';

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

    ProjectCreateCollaboratorComponent,
    ProjectListCollaboratorComponent,
    ProjectViewCollaboratorComponent,
    ProjectEditCollaboratorComponent,
    RemoteRepoTypeCreateCollaboratorComponent,
    RemoteRepoTypeListCollaboratorComponent,
    RemoteRepoTypeViewCollaboratorComponent,
    RemoteRepoTypeEditCollaboratorComponent,
    ProjectTechnologyCreateCollaboratorComponent,
    ProjectTechnologyListCollaboratorComponent,
    ProjectTechnologyViewCollaboratorComponent,
    ProjectTechnologyEditCollaboratorComponent,
    YamlFileCreateCollaboratorComponent,
    YamlFileListCollaboratorComponent,
    YamlFileViewCollaboratorComponent,
    YamlFileEditCollaboratorComponent,
    ProjectTechnologyProfileCreateCollaboratorComponent,
    ProjectTechnologyProfileListCollaboratorComponent,
    ProjectTechnologyProfileViewCollaboratorComponent,
    ProjectTechnologyProfileEditCollaboratorComponent,
    ProjectTechnologyTypeCreateCollaboratorComponent,
    ProjectTechnologyTypeListCollaboratorComponent,
    ProjectTechnologyTypeViewCollaboratorComponent,
    ProjectTechnologyTypeEditCollaboratorComponent,
    ConversationCreateCollaboratorComponent,
    ConversationListCollaboratorComponent,
    ConversationViewCollaboratorComponent,
    ConversationEditCollaboratorComponent,
    ProjectDetailCreateCollaboratorComponent,
    ProjectDetailListCollaboratorComponent,
    ProjectDetailViewCollaboratorComponent,
    ProjectDetailEditCollaboratorComponent,
    RemoteRepoInfoCreateCollaboratorComponent,
    RemoteRepoInfoListCollaboratorComponent,
    RemoteRepoInfoViewCollaboratorComponent,
    RemoteRepoInfoEditCollaboratorComponent,
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
  ProjectCreateCollaboratorComponent,
  ProjectListCollaboratorComponent,
  ProjectViewCollaboratorComponent,
  ProjectEditCollaboratorComponent,
  RemoteRepoTypeCreateCollaboratorComponent,
  RemoteRepoTypeListCollaboratorComponent,
  RemoteRepoTypeViewCollaboratorComponent,
  RemoteRepoTypeEditCollaboratorComponent,
  ProjectTechnologyCreateCollaboratorComponent,
  ProjectTechnologyListCollaboratorComponent,
  ProjectTechnologyViewCollaboratorComponent,
  ProjectTechnologyEditCollaboratorComponent,
  YamlFileCreateCollaboratorComponent,
  YamlFileListCollaboratorComponent,
  YamlFileViewCollaboratorComponent,
  YamlFileEditCollaboratorComponent,
  ProjectTechnologyProfileCreateCollaboratorComponent,
  ProjectTechnologyProfileListCollaboratorComponent,
  ProjectTechnologyProfileViewCollaboratorComponent,
  ProjectTechnologyProfileEditCollaboratorComponent,
  ProjectTechnologyTypeCreateCollaboratorComponent,
  ProjectTechnologyTypeListCollaboratorComponent,
  ProjectTechnologyTypeViewCollaboratorComponent,
  ProjectTechnologyTypeEditCollaboratorComponent,
  ConversationCreateCollaboratorComponent,
  ConversationListCollaboratorComponent,
  ConversationViewCollaboratorComponent,
  ConversationEditCollaboratorComponent,
  ProjectDetailCreateCollaboratorComponent,
  ProjectDetailListCollaboratorComponent,
  ProjectDetailViewCollaboratorComponent,
  ProjectDetailEditCollaboratorComponent,
  RemoteRepoInfoCreateCollaboratorComponent,
  RemoteRepoInfoListCollaboratorComponent,
  RemoteRepoInfoViewCollaboratorComponent,
  RemoteRepoInfoEditCollaboratorComponent,
  ],
})
export class ProjectCollaboratorModule { }
