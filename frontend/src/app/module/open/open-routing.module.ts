import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { ActivationOpenComponent } from './activation-open/activation-open.component';
import { LoginOpenComponent } from './login-open/login-open.component';
import { RegisterOpenComponent } from './register-open/register-open.component';
import { ForgetPasswordOpenComponent } from './forget-password-open/forget-password-open.component';
import { ChangePasswordOpenComponent } from './change-password-open/change-password-open.component';

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
                                    component: LoginOpenComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterOpenComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },{
                            path: 'forget-password',
                            children: [
                                {
                                    path: '',
                                    component: ForgetPasswordOpenComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },{
                            path: 'change-password',
                            children: [
                                {
                                    path: '',
                                    component: ChangePasswordOpenComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'activation',
                            children: [
                                {
                                    path: '',
                                    component: ActivationOpenComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'forum',
                            loadChildren: () => import('./view/forum/forum-open-routing.module').then(x => x.ForumOpenRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'contactus',
                            loadChildren: () => import('./view/contactus/contactus-open-routing.module').then(x => x.ContactusOpenRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-open-routing.module').then(x => x.PackagingOpenRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'blog',
                            loadChildren: () => import('./view/blog/blog-open-routing.module').then(x => x.BlogOpenRoutingModule),
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
export class OpenRoutingModule { }
