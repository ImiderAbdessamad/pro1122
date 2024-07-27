
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { ProjectListCollaboratorComponent } from './project/list/project-list-collaborator.component';
import { RemoteRepoTypeListCollaboratorComponent } from './remote-repo-type/list/remote-repo-type-list-collaborator.component';
import { ProjectTechnologyListCollaboratorComponent } from './project-technology/list/project-technology-list-collaborator.component';
import { YamlFileListCollaboratorComponent } from './yaml-file/list/yaml-file-list-collaborator.component';
import { ProjectTechnologyProfileListCollaboratorComponent } from './project-technology-profile/list/project-technology-profile-list-collaborator.component';
import { ProjectTechnologyTypeListCollaboratorComponent } from './project-technology-type/list/project-technology-type-list-collaborator.component';
import { ConversationListCollaboratorComponent } from './conversation/list/conversation-list-collaborator.component';
import { ProjectDetailListCollaboratorComponent } from './project-detail/list/project-detail-list-collaborator.component';
import { RemoteRepoInfoListCollaboratorComponent } from './remote-repo-info/list/remote-repo-info-list-collaborator.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {

                            path: 'action-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ActionPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission-user',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionUserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'role',
                            children: [
                                {
                                    path: 'list',
                                    component: RoleListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'user',
                            children: [
                                {
                                    path: 'list',
                                    component: UserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                        {

                            path: 'project',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'remote-repo-type',
                            children: [
                                {
                                    path: 'list',
                                    component: RemoteRepoTypeListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-technology',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectTechnologyListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'yaml-file',
                            children: [
                                {
                                    path: 'list',
                                    component: YamlFileListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-technology-profile',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectTechnologyProfileListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-technology-type',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectTechnologyTypeListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'conversation',
                            children: [
                                {
                                    path: 'list',
                                    component: ConversationListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-detail',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectDetailListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'remote-repo-info',
                            children: [
                                {
                                    path: 'list',
                                    component: RemoteRepoInfoListCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ProjectCollaboratorRoutingModule { }
