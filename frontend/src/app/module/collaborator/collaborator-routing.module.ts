import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { ActivationCollaboratorComponent } from './activation-collaborator/activation-collaborator.component';
import { LoginCollaboratorComponent } from './login-collaborator/login-collaborator.component';
import { RegisterCollaboratorComponent } from './register-collaborator/register-collaborator.component';
import { ForgetPasswordCollaboratorComponent } from './forget-password-collaborator/forget-password-collaborator.component';
import { ChangePasswordCollaboratorComponent } from './change-password-collaborator/change-password-collaborator.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },{
                            path: 'forget-password',
                            children: [
                                {
                                    path: '',
                                    component: ForgetPasswordCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },{
                            path: 'change-password',
                            children: [
                                {
                                    path: '',
                                    component: ChangePasswordCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'activation',
                            children: [
                                {
                                    path: '',
                                    component: ActivationCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'cloud',
                            loadChildren: () => import('./view/cloud/cloud-collaborator-routing.module').then(x => x.CloudCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'forum',
                            loadChildren: () => import('./view/forum/forum-collaborator-routing.module').then(x => x.ForumCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'contactus',
                            loadChildren: () => import('./view/contactus/contactus-collaborator-routing.module').then(x => x.ContactusCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'payement',
                            loadChildren: () => import('./view/payement/payement-collaborator-routing.module').then(x => x.PayementCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-collaborator-routing.module').then(x => x.InscriptionCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'project',
                            loadChildren: () => import('./view/project/project-collaborator-routing.module').then(x => x.ProjectCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-collaborator-routing.module').then(x => x.PackagingCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'support',
                            loadChildren: () => import('./view/support/support-collaborator-routing.module').then(x => x.SupportCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import('./view/collaborator/collaborator-collaborator-routing.module').then(x => x.CollaboratorCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'blog',
                            loadChildren: () => import('./view/blog/blog-collaborator-routing.module').then(x => x.BlogCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CollaboratorRoutingModule { }
