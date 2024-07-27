
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { AgentListAgentComponent } from './agent/list/agent-list-agent.component';
import { CustumorSupportConversationListAgentComponent } from './custumor-support-conversation/list/custumor-support-conversation-list-agent.component';
import { CustumorSupportConversationCategoryListAgentComponent } from './custumor-support-conversation-category/list/custumor-support-conversation-category-list-agent.component';
import { CustumorSupportConversationStateListAgentComponent } from './custumor-support-conversation-state/list/custumor-support-conversation-state-list-agent.component';
import { CustumorSupportConversationMessageListAgentComponent } from './custumor-support-conversation-message/list/custumor-support-conversation-message-list-agent.component';
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

                            path: 'agent',
                            children: [
                                {
                                    path: 'list',
                                    component: AgentListAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'custumor-support-conversation',
                            children: [
                                {
                                    path: 'list',
                                    component: CustumorSupportConversationListAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'custumor-support-conversation-category',
                            children: [
                                {
                                    path: 'list',
                                    component: CustumorSupportConversationCategoryListAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'custumor-support-conversation-state',
                            children: [
                                {
                                    path: 'list',
                                    component: CustumorSupportConversationStateListAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'custumor-support-conversation-message',
                            children: [
                                {
                                    path: 'list',
                                    component: CustumorSupportConversationMessageListAgentComponent ,
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
export class SupportAgentRoutingModule { }
