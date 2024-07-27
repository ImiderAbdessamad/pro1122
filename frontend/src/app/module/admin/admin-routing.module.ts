import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { ActivationAdminComponent } from './activation-admin/activation-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { ForgetPasswordAdminComponent } from './forget-password-admin/forget-password-admin.component';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component';

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
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },{
                            path: 'forget-password',
                            children: [
                                {
                                    path: '',
                                    component: ForgetPasswordAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },{
                            path: 'change-password',
                            children: [
                                {
                                    path: '',
                                    component: ChangePasswordAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'activation',
                            children: [
                                {
                                    path: '',
                                    component: ActivationAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'cloud',
                            loadChildren: () => import('./view/cloud/cloud-admin-routing.module').then(x => x.CloudAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'forum',
                            loadChildren: () => import('./view/forum/forum-admin-routing.module').then(x => x.ForumAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'contactus',
                            loadChildren: () => import('./view/contactus/contactus-admin-routing.module').then(x => x.ContactusAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'payement',
                            loadChildren: () => import('./view/payement/payement-admin-routing.module').then(x => x.PayementAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-admin-routing.module').then(x => x.InscriptionAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'coupon',
                            loadChildren: () => import('./view/coupon/coupon-admin-routing.module').then(x => x.CouponAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'project',
                            loadChildren: () => import('./view/project/project-admin-routing.module').then(x => x.ProjectAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-admin-routing.module').then(x => x.PackagingAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'support',
                            loadChildren: () => import('./view/support/support-admin-routing.module').then(x => x.SupportAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import('./view/collaborator/collaborator-admin-routing.module').then(x => x.CollaboratorAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'blog',
                            loadChildren: () => import('./view/blog/blog-admin-routing.module').then(x => x.BlogAdminRoutingModule),
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
export class AdminRoutingModule { }
