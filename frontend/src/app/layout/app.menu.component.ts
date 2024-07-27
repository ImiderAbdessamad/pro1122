import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
  modelCollaborator: any[];
  modelInfluencer: any[];
  modelOpen: any[];
  modelAgent: any[];
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Cloud Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste offre cloud provider',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/cloud/offre-cloud-provider/list']
								  },
								  {
									label: 'Liste cloud provider',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/cloud/cloud-provider/list']
								  },
						]
					  },
					  {
						label: 'Paiment Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste city',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/collaborator/city/list']
								  },
								  {
									label: 'Liste paiment collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/payement/paiment-collaborator/list']
								  },
								  {
									label: 'Liste inscription collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscription/inscription-collaborator/list']
								  },
								  {
									label: 'Liste paiment collaborator type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/payement/paiment-collaborator-type/list']
								  },
								  {
									label: 'Liste country',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/collaborator/country/list']
								  },
						]
					  },
					  {
						label: 'Project Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste project',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/project/list']
								  },
								  {
									label: 'Liste inscription collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscription/inscription-collaborator-state/list']
								  },
								  {
									label: 'Liste paiment collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/payement/paiment-collaborator-state/list']
								  },
								  {
									label: 'Liste remote repo type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/remote-repo-type/list']
								  },
								  {
									label: 'Liste project technology',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/project-technology/list']
								  },
								  {
									label: 'Liste project technology profile',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/project-technology-profile/list']
								  },
								  {
									label: 'Liste project technology type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/project-technology-type/list']
								  },
								  {
									label: 'Liste conversation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/conversation/list']
								  },
								  {
									label: 'Liste project detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/project-detail/list']
								  },
								  {
									label: 'Liste remote repo info',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/remote-repo-info/list']
								  },
						]
					  },
					  {
						label: 'Packaging Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste packaging plan',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/packaging/packaging-plan/list']
								  },
								  {
									label: 'Liste packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/packaging/packaging/list']
								  },
								  {
									label: 'Liste packaging detail group',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/packaging/packaging-detail-group/list']
								  },
								  {
									label: 'Liste packaging detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/packaging/packaging-detail/list']
								  },
						]
					  },
					  {
						label: 'Yaml Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste yaml file',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/project/yaml-file/list']
								  },
						]
					  },
					  {
						label: 'Collaborator Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/collaborator/collaborator/list']
								  },
						]
					  },
					  {
						label: 'Coupon Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/paiment-coupon/list']
								  },
								  {
									label: 'Liste influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/influencer/list']
								  },
								  {
									label: 'Liste paiment coupon state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/paiment-coupon-state/list']
								  },
								  {
									label: 'Liste coupon state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/coupon-state/list']
								  },
								  {
									label: 'Liste coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/coupon/list']
								  },
						]
					  },
					  {
						label: 'Blog Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste blog',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/blog/blog/list']
								  },
								  {
									label: 'Liste blog subject',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/blog/blog-subject/list']
								  },
								  {
									label: 'Liste blog comment',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/blog/blog-comment/list']
								  },
								  {
									label: 'Liste blog state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/blog/blog-state/list']
								  },
						]
					  },
					  {
						label: 'Contact US Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste contact us category',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/contactus/contact-us-category/list']
								  },
								  {
									label: 'Liste contact us state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/contactus/contact-us-state/list']
								  },
								  {
									label: 'Liste contact us',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/contactus/contact-us/list']
								  },
						]
					  },
					  {
						label: 'Customer Support Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste agent',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/support/agent/list']
								  },
								  {
									label: 'Liste custumor support conversation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/support/custumor-support-conversation/list']
								  },
								  {
									label: 'Liste custumor support conversation category',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/support/custumor-support-conversation-category/list']
								  },
								  {
									label: 'Liste custumor support conversation state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/support/custumor-support-conversation-state/list']
								  },
								  {
									label: 'Liste custumor support conversation message',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/support/custumor-support-conversation-message/list']
								  },
						]
					  },
					  {
						label: 'Forum Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste forum state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/forum/forum-state/list']
								  },
								  {
									label: 'Liste forum',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/forum/forum/list']
								  },
								  {
									label: 'Liste forum subject',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/forum/forum-subject/list']
								  },
								  {
									label: 'Liste forum comment',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/forum/forum-comment/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelCollaborator =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Cloud Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste offre cloud provider',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/cloud/offre-cloud-provider/list']
								  },
								  {
									label: 'Liste cloud provider',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/cloud/cloud-provider/list']
								  },
						]
					  },
					  {
						label: 'Paiment Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste city',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/collaborator/city/list']
								  },
								  {
									label: 'Liste paiment collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/payement/paiment-collaborator/list']
								  },
								  {
									label: 'Liste inscription collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-collaborator/list']
								  },
								  {
									label: 'Liste paiment collaborator type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/payement/paiment-collaborator-type/list']
								  },
								  {
									label: 'Liste country',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/collaborator/country/list']
								  },
						]
					  },
					  {
						label: 'Project Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste project',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project/list']
								  },
								  {
									label: 'Liste inscription collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-collaborator-state/list']
								  },
								  {
									label: 'Liste paiment collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/payement/paiment-collaborator-state/list']
								  },
								  {
									label: 'Liste remote repo type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/remote-repo-type/list']
								  },
								  {
									label: 'Liste project technology',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project-technology/list']
								  },
								  {
									label: 'Liste project technology profile',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project-technology-profile/list']
								  },
								  {
									label: 'Liste project technology type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project-technology-type/list']
								  },
								  {
									label: 'Liste conversation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/conversation/list']
								  },
								  {
									label: 'Liste project detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project-detail/list']
								  },
								  {
									label: 'Liste remote repo info',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/remote-repo-info/list']
								  },
						]
					  },
					  {
						label: 'Packaging Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste packaging plan',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/packaging/packaging-plan/list']
								  },
								  {
									label: 'Liste packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/packaging/packaging/list']
								  },
								  {
									label: 'Liste packaging detail group',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/packaging/packaging-detail-group/list']
								  },
								  {
									label: 'Liste packaging detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/packaging/packaging-detail/list']
								  },
						]
					  },
					  {
						label: 'Yaml Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste yaml file',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/yaml-file/list']
								  },
						]
					  },
					  {
						label: 'Collaborator Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/collaborator/collaborator/list']
								  },
						]
					  },
					  {
						label: 'Blog Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste blog',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/blog/blog/list']
								  },
								  {
									label: 'Liste blog subject',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/blog/blog-subject/list']
								  },
								  {
									label: 'Liste blog comment',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/blog/blog-comment/list']
								  },
						]
					  },
					  {
						label: 'Contact US Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste contact us',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/contactus/contact-us/list']
								  },
						]
					  },
					  {
						label: 'Customer Support Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste custumor support conversation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/support/custumor-support-conversation/list']
								  },
								  {
									label: 'Liste custumor support conversation message',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/support/custumor-support-conversation-message/list']
								  },
						]
					  },
					  {
						label: 'Forum Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste forum',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/forum/forum/list']
								  },
								  {
									label: 'Liste forum subject',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/forum/forum-subject/list']
								  },
								  {
									label: 'Liste forum comment',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/forum/forum-comment/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelInfluencer =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Coupon Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/coupon/paiment-coupon/list']
								  },
								  {
									label: 'Liste influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/coupon/influencer/list']
								  },
								  {
									label: 'Liste coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/coupon/coupon/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelOpen =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Packaging Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste packaging plan',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/packaging/packaging-plan/list']
								  },
								  {
									label: 'Liste packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/packaging/packaging/list']
								  },
								  {
									label: 'Liste packaging detail group',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/packaging/packaging-detail-group/list']
								  },
								  {
									label: 'Liste packaging detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/packaging/packaging-detail/list']
								  },
						]
					  },
					  {
						label: 'Blog Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste blog',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/blog/blog/list']
								  },
								  {
									label: 'Liste blog comment',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/blog/blog-comment/list']
								  },
						]
					  },
					  {
						label: 'Contact US Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste contact us',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/contactus/contact-us/list']
								  },
						]
					  },
					  {
						label: 'Forum Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste forum',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/forum/forum/list']
								  },
								  {
									label: 'Liste forum comment',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/open/forum/forum-comment/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelAgent =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Collaborator Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/agent/collaborator/collaborator/list']
								  },
						]
					  },
					  {
						label: 'Customer Support Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste agent',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/agent/support/agent/list']
								  },
								  {
									label: 'Liste custumor support conversation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/agent/support/custumor-support-conversation/list']
								  },
								  {
									label: 'Liste custumor support conversation category',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/agent/support/custumor-support-conversation-category/list']
								  },
								  {
									label: 'Liste custumor support conversation state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/agent/support/custumor-support-conversation-state/list']
								  },
								  {
									label: 'Liste custumor support conversation message',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/agent/support/custumor-support-conversation-message/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
