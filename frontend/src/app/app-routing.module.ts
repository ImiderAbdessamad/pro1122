import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';
import {AppLayoutComponent} from 'src/app/layout/app.layout.component';

import {HomePublicComponent} from 'src/app/public/home/home-public.component';

import {LoginAdminComponent} from 'src/app/module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from 'src/app/module/admin/register-admin/register-admin.component';
import {ChangePasswordAdminComponent} from 'src/app/module/admin/change-password-admin/change-password-admin.component';
import {LoginCollaboratorComponent} from 'src/app/module/collaborator/login-collaborator/login-collaborator.component';
import {RegisterCollaboratorComponent} from 'src/app/module/collaborator/register-collaborator/register-collaborator.component';
import {ChangePasswordCollaboratorComponent} from 'src/app/module/collaborator/change-password-collaborator/change-password-collaborator.component';
import {LoginInfluencerComponent} from 'src/app/module/influencer/login-influencer/login-influencer.component';
import {RegisterInfluencerComponent} from 'src/app/module/influencer/register-influencer/register-influencer.component';
import {ChangePasswordInfluencerComponent} from 'src/app/module/influencer/change-password-influencer/change-password-influencer.component';
import {LoginOpenComponent} from 'src/app/module/open/login-open/login-open.component';
import {RegisterOpenComponent} from 'src/app/module/open/register-open/register-open.component';
import {ChangePasswordOpenComponent} from 'src/app/module/open/change-password-open/change-password-open.component';
import {LoginAgentComponent} from 'src/app/module/agent/login-agent/login-agent.component';
import {RegisterAgentComponent} from 'src/app/module/agent/register-agent/register-agent.component';
import {ChangePasswordAgentComponent} from 'src/app/module/agent/change-password-agent/change-password-agent.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {path: '', component: HomePublicComponent},
                {path: 'admin/login', component: LoginAdminComponent },
                {path: 'admin/register', component: RegisterAdminComponent },
                {path: 'admin/changePassword', component: ChangePasswordAdminComponent },
                {path: 'collaborator/login', component: LoginCollaboratorComponent },
                {path: 'collaborator/register', component: RegisterCollaboratorComponent },
                {path: 'collaborator/changePassword', component: ChangePasswordCollaboratorComponent },
                {path: 'influencer/login', component: LoginInfluencerComponent },
                {path: 'influencer/register', component: RegisterInfluencerComponent },
                {path: 'influencer/changePassword', component: ChangePasswordInfluencerComponent },
                {path: 'open/login', component: LoginOpenComponent },
                {path: 'open/register', component: RegisterOpenComponent },
                {path: 'open/changePassword', component: ChangePasswordOpenComponent },
                {path: 'agent/login', component: LoginAgentComponent },
                {path: 'agent/register', component: RegisterAgentComponent },
                {path: 'agent/changePassword', component: ChangePasswordAgentComponent },
                {
                    path: 'app',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'admin',
                            loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import( './module/collaborator/collaborator-routing.module').then(x => x.CollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'influencer',
                            loadChildren: () => import( './module/influencer/influencer-routing.module').then(x => x.InfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'open',
                            loadChildren: () => import( './module/open/open-routing.module').then(x => x.OpenRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'agent',
                            loadChildren: () => import( './module/agent/agent-routing.module').then(x => x.AgentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ],
                    canActivate: [AuthGuard]
                },
            ],
                { scrollPositionRestoration: 'enabled' }
            ),
        ],
    exports: [RouterModule],
    })
export class AppRoutingModule { }
