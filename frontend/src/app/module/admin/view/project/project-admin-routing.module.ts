
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { ProjectListAdminComponent } from './project/list/project-list-admin.component';
import { RemoteRepoTypeListAdminComponent } from './remote-repo-type/list/remote-repo-type-list-admin.component';
import { ProjectTechnologyListAdminComponent } from './project-technology/list/project-technology-list-admin.component';
import { YamlFileListAdminComponent } from './yaml-file/list/yaml-file-list-admin.component';
import { ProjectTechnologyProfileListAdminComponent } from './project-technology-profile/list/project-technology-profile-list-admin.component';
import { ProjectTechnologyTypeListAdminComponent } from './project-technology-type/list/project-technology-type-list-admin.component';
import { ConversationListAdminComponent } from './conversation/list/conversation-list-admin.component';
import { ProjectDetailListAdminComponent } from './project-detail/list/project-detail-list-admin.component';
import { RemoteRepoInfoListAdminComponent } from './remote-repo-info/list/remote-repo-info-list-admin.component';
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
                                    component: ProjectListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'remote-repo-type',
                            children: [
                                {
                                    path: 'list',
                                    component: RemoteRepoTypeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-technology',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectTechnologyListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'yaml-file',
                            children: [
                                {
                                    path: 'list',
                                    component: YamlFileListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-technology-profile',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectTechnologyProfileListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-technology-type',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectTechnologyTypeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'conversation',
                            children: [
                                {
                                    path: 'list',
                                    component: ConversationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'project-detail',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjectDetailListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'remote-repo-info',
                            children: [
                                {
                                    path: 'list',
                                    component: RemoteRepoInfoListAdminComponent ,
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
export class ProjectAdminRoutingModule { }
