package ma.zs.zyn;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.openfeign.EnableFeignClients;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import ma.zs.zyn.bean.core.collaborator.Collaborator;
import ma.zs.zyn.service.facade.admin.collaborator.CollaboratorAdminService;
import ma.zs.zyn.bean.core.coupon.Influencer;
import ma.zs.zyn.service.facade.admin.coupon.InfluencerAdminService;
import ma.zs.zyn.bean.core.support.Agent;
import ma.zs.zyn.service.facade.admin.support.AgentAdminService;
import ma.zs.zyn.zynerator.security.bean.*;
import ma.zs.zyn.zynerator.security.common.AuthoritiesConstants;
import ma.zs.zyn.zynerator.security.service.facade.*;

import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState;
import ma.zs.zyn.service.facade.admin.inscription.InscriptionCollaboratorStateAdminService;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorState;
import ma.zs.zyn.service.facade.admin.payement.PaimentCollaboratorStateAdminService;
import ma.zs.zyn.bean.core.project.RemoteRepoType;
import ma.zs.zyn.service.facade.admin.project.RemoteRepoTypeAdminService;
import ma.zs.zyn.bean.core.coupon.PaimentCouponState;
import ma.zs.zyn.service.facade.admin.coupon.PaimentCouponStateAdminService;
import ma.zs.zyn.bean.core.forum.ForumState;
import ma.zs.zyn.service.facade.admin.forum.ForumStateAdminService;
import ma.zs.zyn.bean.core.coupon.CouponState;
import ma.zs.zyn.service.facade.admin.coupon.CouponStateAdminService;
import ma.zs.zyn.bean.core.project.ProjectTechnologyProfile;
import ma.zs.zyn.service.facade.admin.project.ProjectTechnologyProfileAdminService;
import ma.zs.zyn.bean.core.contactus.ContactUsState;
import ma.zs.zyn.service.facade.admin.contactus.ContactUsStateAdminService;
import ma.zs.zyn.bean.core.project.ProjectTechnologyType;
import ma.zs.zyn.service.facade.admin.project.ProjectTechnologyTypeAdminService;
import ma.zs.zyn.bean.core.support.CustumorSupportConversationState;
import ma.zs.zyn.service.facade.admin.support.CustumorSupportConversationStateAdminService;
import ma.zs.zyn.bean.core.blog.BlogState;
import ma.zs.zyn.service.facade.admin.blog.BlogStateAdminService;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType;
import ma.zs.zyn.service.facade.admin.payement.PaimentCollaboratorTypeAdminService;

import ma.zs.zyn.zynerator.security.bean.User;
import ma.zs.zyn.zynerator.security.bean.Role;

@SpringBootApplication
//@EnableFeignClients
public class ZynApplication {
    public static ConfigurableApplicationContext ctx;
    //state: primary success info secondary warning danger contrast
    //_STATE(Pending=warning,Rejeted=danger,Validated=success)
    public static void main(String[] args) {
        ctx=SpringApplication.run(ZynApplication.class, args);
    }


    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }
    @Bean
    ObjectMapper objectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }

    @Bean
    public CommandLineRunner demo(UserService userService, RoleService roleService, ModelPermissionService modelPermissionService, ActionPermissionService actionPermissionService, ModelPermissionUserService modelPermissionUserService , CollaboratorAdminService collaboratorService, InfluencerAdminService influencerService, AgentAdminService agentService) {
    return (args) -> {
        if(true){

            createInscriptionCollaboratorState();
            createPaimentCollaboratorState();
            createRemoteRepoType();
            createPaimentCouponState();
            createForumState();
            createCouponState();
            createProjectTechnologyProfile();
            createContactUsState();
            createProjectTechnologyType();
            createCustumorSupportConversationState();
            createBlogState();
            createPaimentCollaboratorType();

        // ModelPermissions
        List<ModelPermission> modelPermissions = new ArrayList<>();
        addPermission(modelPermissions);
        modelPermissions.forEach(e -> modelPermissionService.create(e));
        // ActionPermissions
        List<ActionPermission> actionPermissions = new ArrayList<>();
        addActionPermission(actionPermissions);
        actionPermissions.forEach(e -> actionPermissionService.create(e));

		// User Admin
        User userForAdmin = new User("admin");
		userForAdmin.setPassword("123");
		// Role Admin
		Role roleForAdmin = new Role();
		roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
		roleForAdmin.setCreatedAt(LocalDateTime.now());
		Role roleForAdminSaved = roleService.create(roleForAdmin);
		RoleUser roleUserForAdmin = new RoleUser();
		roleUserForAdmin.setRole(roleForAdminSaved);
		if (userForAdmin.getRoleUsers() == null)
			userForAdmin.setRoleUsers(new ArrayList<>());

		userForAdmin.getRoleUsers().add(roleUserForAdmin);
		if (userForAdmin.getModelPermissionUsers() == null)
			userForAdmin.setModelPermissionUsers(new ArrayList<>());


        userForAdmin.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        userService.create(userForAdmin);

		// User Collaborator
        Collaborator userForCollaborator = new Collaborator("collaborator");
		userForCollaborator.setPassword("123");
		// Role Collaborator
		Role roleForCollaborator = new Role();
		roleForCollaborator.setAuthority(AuthoritiesConstants.COLLABORATOR);
		roleForCollaborator.setCreatedAt(LocalDateTime.now());
		Role roleForCollaboratorSaved = roleService.create(roleForCollaborator);
		RoleUser roleUserForCollaborator = new RoleUser();
		roleUserForCollaborator.setRole(roleForCollaboratorSaved);
		if (userForCollaborator.getRoleUsers() == null)
			userForCollaborator.setRoleUsers(new ArrayList<>());

		userForCollaborator.getRoleUsers().add(roleUserForCollaborator);
		if (userForCollaborator.getModelPermissionUsers() == null)
			userForCollaborator.setModelPermissionUsers(new ArrayList<>());


        userForCollaborator.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        collaboratorService.create(userForCollaborator);

		// User Influencer
        Influencer userForInfluencer = new Influencer("influencer");
		userForInfluencer.setPassword("123");
		// Role Influencer
		Role roleForInfluencer = new Role();
		roleForInfluencer.setAuthority(AuthoritiesConstants.INFLUENCER);
		roleForInfluencer.setCreatedAt(LocalDateTime.now());
		Role roleForInfluencerSaved = roleService.create(roleForInfluencer);
		RoleUser roleUserForInfluencer = new RoleUser();
		roleUserForInfluencer.setRole(roleForInfluencerSaved);
		if (userForInfluencer.getRoleUsers() == null)
			userForInfluencer.setRoleUsers(new ArrayList<>());

		userForInfluencer.getRoleUsers().add(roleUserForInfluencer);
		if (userForInfluencer.getModelPermissionUsers() == null)
			userForInfluencer.setModelPermissionUsers(new ArrayList<>());


        userForInfluencer.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        influencerService.create(userForInfluencer);

		// User Open
        User userForOpen = new User("open");
		userForOpen.setPassword("123");
		// Role Open
		Role roleForOpen = new Role();
		roleForOpen.setAuthority(AuthoritiesConstants.OPEN);
		roleForOpen.setCreatedAt(LocalDateTime.now());
		Role roleForOpenSaved = roleService.create(roleForOpen);
		RoleUser roleUserForOpen = new RoleUser();
		roleUserForOpen.setRole(roleForOpenSaved);
		if (userForOpen.getRoleUsers() == null)
			userForOpen.setRoleUsers(new ArrayList<>());

		userForOpen.getRoleUsers().add(roleUserForOpen);
		if (userForOpen.getModelPermissionUsers() == null)
			userForOpen.setModelPermissionUsers(new ArrayList<>());


        userForOpen.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        userService.create(userForOpen);

		// User Agent
        Agent userForAgent = new Agent("agent");
		userForAgent.setPassword("123");
		// Role Agent
		Role roleForAgent = new Role();
		roleForAgent.setAuthority(AuthoritiesConstants.AGENT);
		roleForAgent.setCreatedAt(LocalDateTime.now());
		Role roleForAgentSaved = roleService.create(roleForAgent);
		RoleUser roleUserForAgent = new RoleUser();
		roleUserForAgent.setRole(roleForAgentSaved);
		if (userForAgent.getRoleUsers() == null)
			userForAgent.setRoleUsers(new ArrayList<>());

		userForAgent.getRoleUsers().add(roleUserForAgent);
		if (userForAgent.getModelPermissionUsers() == null)
			userForAgent.setModelPermissionUsers(new ArrayList<>());


        userForAgent.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        agentService.create(userForAgent);

            }
        };
    }



    private void createInscriptionCollaboratorState(){
            InscriptionCollaboratorState itemSuccess = new InscriptionCollaboratorState();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Validated");
            inscriptionCollaboratorStateService.create(itemSuccess);
            InscriptionCollaboratorState itemDanger = new InscriptionCollaboratorState();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("Blocked");
            inscriptionCollaboratorStateService.create(itemDanger);
            InscriptionCollaboratorState itemWarning = new InscriptionCollaboratorState();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Pending");
            inscriptionCollaboratorStateService.create(itemWarning);

    }
    private void createPaimentCollaboratorState(){
            PaimentCollaboratorState itemSuccess = new PaimentCollaboratorState();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Validated");
            paimentCollaboratorStateService.create(itemSuccess);
            PaimentCollaboratorState itemDanger = new PaimentCollaboratorState();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("Blocked");
            paimentCollaboratorStateService.create(itemDanger);
            PaimentCollaboratorState itemWarning = new PaimentCollaboratorState();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Pending");
            paimentCollaboratorStateService.create(itemWarning);

    }
    private void createRemoteRepoType(){
            RemoteRepoType itemWarning = new RemoteRepoType();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("GitHub");
            remoteRepoTypeService.create(itemWarning);
            RemoteRepoType itemSuccess = new RemoteRepoType();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("GitLab");
            remoteRepoTypeService.create(itemSuccess);

    }
    private void createPaimentCouponState(){
            PaimentCouponState itemSuccess = new PaimentCouponState();
            itemSuccess.setLibelle("success");
            itemSuccess.setLibelle("Validated");
            paimentCouponStateService.create(itemSuccess);
            PaimentCouponState itemDanger = new PaimentCouponState();
            itemDanger.setLibelle("danger");
            itemDanger.setLibelle("Blocked");
            paimentCouponStateService.create(itemDanger);
            PaimentCouponState itemWarning = new PaimentCouponState();
            itemWarning.setLibelle("warning");
            itemWarning.setLibelle("Pending");
            paimentCouponStateService.create(itemWarning);

    }
    private void createForumState(){
            ForumState itemSuccess = new ForumState();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Validated");
            forumStateService.create(itemSuccess);
            ForumState itemDanger = new ForumState();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("Blocked");
            forumStateService.create(itemDanger);
            ForumState itemWarning = new ForumState();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Pending");
            forumStateService.create(itemWarning);

    }
    private void createCouponState(){
            CouponState itemSuccess = new CouponState();
            itemSuccess.setLibelle("success");
            itemSuccess.setLibelle("Validated");
            couponStateService.create(itemSuccess);
            CouponState itemDanger = new CouponState();
            itemDanger.setLibelle("danger");
            itemDanger.setLibelle("Blocked");
            couponStateService.create(itemDanger);
            CouponState itemWarning = new CouponState();
            itemWarning.setLibelle("warning");
            itemWarning.setLibelle("Pending");
            couponStateService.create(itemWarning);

    }
    private void createProjectTechnologyProfile(){
            ProjectTechnologyProfile itemWarning = new ProjectTechnologyProfile();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Junior");
            projectTechnologyProfileService.create(itemWarning);
            ProjectTechnologyProfile itemSuccess = new ProjectTechnologyProfile();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Senior");
            projectTechnologyProfileService.create(itemSuccess);

    }
    private void createContactUsState(){
            ContactUsState itemSuccess = new ContactUsState();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Validated");
            contactUsStateService.create(itemSuccess);
            ContactUsState itemDanger = new ContactUsState();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("Blocked");
            contactUsStateService.create(itemDanger);
            ContactUsState itemWarning = new ContactUsState();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Pending");
            contactUsStateService.create(itemWarning);

    }
    private void createProjectTechnologyType(){
            ProjectTechnologyType itemSuccess = new ProjectTechnologyType();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Front");
            projectTechnologyTypeService.create(itemSuccess);
            ProjectTechnologyType itemWarning = new ProjectTechnologyType();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Back");
            projectTechnologyTypeService.create(itemWarning);
            ProjectTechnologyType itemDanger = new ProjectTechnologyType();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("DB");
            projectTechnologyTypeService.create(itemDanger);

    }
    private void createCustumorSupportConversationState(){
            CustumorSupportConversationState itemSuccess = new CustumorSupportConversationState();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Validated");
            custumorSupportConversationStateService.create(itemSuccess);
            CustumorSupportConversationState itemDanger = new CustumorSupportConversationState();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("Closed");
            custumorSupportConversationStateService.create(itemDanger);
            CustumorSupportConversationState itemWarning = new CustumorSupportConversationState();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Pending");
            custumorSupportConversationStateService.create(itemWarning);

    }
    private void createBlogState(){
            BlogState itemSuccess = new BlogState();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Validated");
            blogStateService.create(itemSuccess);
            BlogState itemDanger = new BlogState();
            itemDanger.setCode("danger");
            itemDanger.setLibelle("Blocked");
            blogStateService.create(itemDanger);
            BlogState itemWarning = new BlogState();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Pending");
            blogStateService.create(itemWarning);

    }
    private void createPaimentCollaboratorType(){
            PaimentCollaboratorType itemWarning = new PaimentCollaboratorType();
            itemWarning.setCode("warning");
            itemWarning.setLibelle("Stripe");
            paimentCollaboratorTypeService.create(itemWarning);
            PaimentCollaboratorType itemSuccess = new PaimentCollaboratorType();
            itemSuccess.setCode("success");
            itemSuccess.setLibelle("Virement");
            paimentCollaboratorTypeService.create(itemSuccess);

    }

    private static String fakeString(String attributeName, int i) {
        return attributeName + i;
    }

    private static Long fakeLong(String attributeName, int i) {
        return  10L * i;
    }
    private static Integer fakeInteger(String attributeName, int i) {
        return  10 * i;
    }

    private static Double fakeDouble(String attributeName, int i) {
        return 10D * i;
    }

    private static BigDecimal fakeBigDecimal(String attributeName, int i) {
        return  BigDecimal.valueOf(i*1L*10);
    }

    private static Boolean fakeBoolean(String attributeName, int i) {
        return i % 2 == 0 ? true : false;
    }
    private static LocalDateTime fakeLocalDateTime(String attributeName, int i) {
        return LocalDateTime.now().plusDays(i);
    }


    private static void addPermission(List<ModelPermission> modelPermissions) {
        modelPermissions.add(new ModelPermission("Project"));
        modelPermissions.add(new ModelPermission("PaimentCoupon"));
        modelPermissions.add(new ModelPermission("Blog"));
        modelPermissions.add(new ModelPermission("InscriptionCollaboratorState"));
        modelPermissions.add(new ModelPermission("PaimentCollaboratorState"));
        modelPermissions.add(new ModelPermission("RemoteRepoType"));
        modelPermissions.add(new ModelPermission("Influencer"));
        modelPermissions.add(new ModelPermission("PaimentCouponState"));
        modelPermissions.add(new ModelPermission("ForumState"));
        modelPermissions.add(new ModelPermission("ProjectTechnology"));
        modelPermissions.add(new ModelPermission("YamlFile"));
        modelPermissions.add(new ModelPermission("Agent"));
        modelPermissions.add(new ModelPermission("City"));
        modelPermissions.add(new ModelPermission("PackagingPlan"));
        modelPermissions.add(new ModelPermission("CouponState"));
        modelPermissions.add(new ModelPermission("CustumorSupportConversation"));
        modelPermissions.add(new ModelPermission("Forum"));
        modelPermissions.add(new ModelPermission("OffreCloudProvider"));
        modelPermissions.add(new ModelPermission("PaimentCollaborator"));
        modelPermissions.add(new ModelPermission("ProjectTechnologyProfile"));
        modelPermissions.add(new ModelPermission("CloudProvider"));
        modelPermissions.add(new ModelPermission("BlogSubject"));
        modelPermissions.add(new ModelPermission("ContactUsCategory"));
        modelPermissions.add(new ModelPermission("BlogComment"));
        modelPermissions.add(new ModelPermission("InscriptionCollaborator"));
        modelPermissions.add(new ModelPermission("ContactUsState"));
        modelPermissions.add(new ModelPermission("ForumSubject"));
        modelPermissions.add(new ModelPermission("ProjectTechnologyType"));
        modelPermissions.add(new ModelPermission("CustumorSupportConversationCategory"));
        modelPermissions.add(new ModelPermission("Coupon"));
        modelPermissions.add(new ModelPermission("Packaging"));
        modelPermissions.add(new ModelPermission("CustumorSupportConversationState"));
        modelPermissions.add(new ModelPermission("BlogState"));
        modelPermissions.add(new ModelPermission("PackagingDetailGroup"));
        modelPermissions.add(new ModelPermission("Conversation"));
        modelPermissions.add(new ModelPermission("CustumorSupportConversationMessage"));
        modelPermissions.add(new ModelPermission("Collaborator"));
        modelPermissions.add(new ModelPermission("PaimentCollaboratorType"));
        modelPermissions.add(new ModelPermission("ForumComment"));
        modelPermissions.add(new ModelPermission("ProjectDetail"));
        modelPermissions.add(new ModelPermission("PackagingDetail"));
        modelPermissions.add(new ModelPermission("Country"));
        modelPermissions.add(new ModelPermission("ContactUs"));
        modelPermissions.add(new ModelPermission("RemoteRepoInfo"));
        modelPermissions.add(new ModelPermission("User"));
        modelPermissions.add(new ModelPermission("ModelPermission"));
        modelPermissions.add(new ModelPermission("ActionPermission"));
    }

    private static void addActionPermission(List<ActionPermission> actionPermissions) {
        actionPermissions.add(new ActionPermission("list"));
        actionPermissions.add(new ActionPermission("create"));
        actionPermissions.add(new ActionPermission("delete"));
        actionPermissions.add(new ActionPermission("edit"));
        actionPermissions.add(new ActionPermission("view"));
        actionPermissions.add(new ActionPermission("duplicate"));
    }


    @Autowired
    InscriptionCollaboratorStateAdminService inscriptionCollaboratorStateService;
    @Autowired
    PaimentCollaboratorStateAdminService paimentCollaboratorStateService;
    @Autowired
    RemoteRepoTypeAdminService remoteRepoTypeService;
    @Autowired
    PaimentCouponStateAdminService paimentCouponStateService;
    @Autowired
    ForumStateAdminService forumStateService;
    @Autowired
    CouponStateAdminService couponStateService;
    @Autowired
    ProjectTechnologyProfileAdminService projectTechnologyProfileService;
    @Autowired
    ContactUsStateAdminService contactUsStateService;
    @Autowired
    ProjectTechnologyTypeAdminService projectTechnologyTypeService;
    @Autowired
    CustumorSupportConversationStateAdminService custumorSupportConversationStateService;
    @Autowired
    BlogStateAdminService blogStateService;
    @Autowired
    PaimentCollaboratorTypeAdminService paimentCollaboratorTypeService;
}


