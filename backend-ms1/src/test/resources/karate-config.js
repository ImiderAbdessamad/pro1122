function fn() {

    
    var config = {};
    
   
    const rootUrlDev = 'http://localhost:8036/';
    const adminCredentialsDev = {"username": "admin","password": "123"};
    const urlDev = 'jdbc:mysql://localhost:3306/zyn';

    const usernameDev = 'root';
    const passwordDev = '';
    const driverDev = 'com.mysql.cj.jdbc.Driver';


    const rootUrlInit = 'https://stage-host/';
    const adminCredentialsInit = {"username": "admin","password": "123"};
    const urlInit = 'jdbc:mysql://localhost:8036/peps-order';
    const usernameInit = 'root';
    const passwordInit = '';
    const driverInit = 'com.mysql.cj.jdbc.Driver';
    
    
    const rootUrlE2e = 'https://e2e-host/';
    const adminCredentialsE2e = {"username": "admin","password": "123"};
    const urlE2e = 'jdbc:mysql://localhost:8036/peps-order';
    const usernameE2e = 'root';
    const passwordE2e = '';
    const driverE2e = 'com.mysql.cj.jdbc.Driver';
    
    var env = karate.env; // get java system property 'karate.env'
    if (!env || env=='dev') {
        env = 'dev';
        config.rootUrl = rootUrlDev;
        config.adminCredentials = adminCredentialsDev;
        config.datasource = { username: usernameDev, password: passwordDev, url: urlDev, driverClassName: driverDev }
    }
    if (env == 'int') {
        // over-ride only those that need to be
        config.rootUrl = rootUrlInit;
        config.adminCredentials = adminCredentialsInit;
        config.datasource = { username: usernameInit, password: passwordInit, url: urlInit, driverClassName: driverInit }
    } else if (env == 'e2e') {
        config.rootUrl = rootUrlE2e;
        config.adminCredentials = adminCredentialsE2e;
        config.datasource = { username: usernameE2e, password: passwordE2e, url: urlE2e, driverClassName: driverE2e }
    }

    config.actuatorUri = config.rootUrl + 'actuator/';
    config.adminUri = config.rootUrl + 'api/admin/';

    config.projectUrl = config.adminUri + 'project/';
    config.paimentCouponUrl = config.adminUri + 'paimentCoupon/';
    config.blogUrl = config.adminUri + 'blog/';
    config.inscriptionCollaboratorStateUrl = config.adminUri + 'inscriptionCollaboratorState/';
    config.paimentCollaboratorStateUrl = config.adminUri + 'paimentCollaboratorState/';
    config.remoteRepoTypeUrl = config.adminUri + 'remoteRepoType/';
    config.influencerUrl = config.adminUri + 'influencer/';
    config.paimentCouponStateUrl = config.adminUri + 'paimentCouponState/';
    config.forumStateUrl = config.adminUri + 'forumState/';
    config.projectTechnologyUrl = config.adminUri + 'projectTechnology/';
    config.yamlFileUrl = config.adminUri + 'yamlFile/';
    config.agentUrl = config.adminUri + 'agent/';
    config.cityUrl = config.adminUri + 'city/';
    config.packagingPlanUrl = config.adminUri + 'packagingPlan/';
    config.couponStateUrl = config.adminUri + 'couponState/';
    config.custumorSupportConversationUrl = config.adminUri + 'custumorSupportConversation/';
    config.forumUrl = config.adminUri + 'forum/';
    config.offreCloudProviderUrl = config.adminUri + 'offreCloudProvider/';
    config.paimentCollaboratorUrl = config.adminUri + 'paimentCollaborator/';
    config.projectTechnologyProfileUrl = config.adminUri + 'projectTechnologyProfile/';
    config.cloudProviderUrl = config.adminUri + 'cloudProvider/';
    config.blogSubjectUrl = config.adminUri + 'blogSubject/';
    config.contactUsCategoryUrl = config.adminUri + 'contactUsCategory/';
    config.blogCommentUrl = config.adminUri + 'blogComment/';
    config.inscriptionCollaboratorUrl = config.adminUri + 'inscriptionCollaborator/';
    config.contactUsStateUrl = config.adminUri + 'contactUsState/';
    config.forumSubjectUrl = config.adminUri + 'forumSubject/';
    config.projectTechnologyTypeUrl = config.adminUri + 'projectTechnologyType/';
    config.custumorSupportConversationCategoryUrl = config.adminUri + 'custumorSupportConversationCategory/';
    config.couponUrl = config.adminUri + 'coupon/';
    config.packagingUrl = config.adminUri + 'packaging/';
    config.custumorSupportConversationStateUrl = config.adminUri + 'custumorSupportConversationState/';
    config.blogStateUrl = config.adminUri + 'blogState/';
    config.packagingDetailGroupUrl = config.adminUri + 'packagingDetailGroup/';
    config.conversationUrl = config.adminUri + 'conversation/';
    config.custumorSupportConversationMessageUrl = config.adminUri + 'custumorSupportConversationMessage/';
    config.collaboratorUrl = config.adminUri + 'collaborator/';
    config.paimentCollaboratorTypeUrl = config.adminUri + 'paimentCollaboratorType/';
    config.forumCommentUrl = config.adminUri + 'forumComment/';
    config.projectDetailUrl = config.adminUri + 'projectDetail/';
    config.packagingDetailUrl = config.adminUri + 'packagingDetail/';
    config.countryUrl = config.adminUri + 'country/';
    config.contactUsUrl = config.adminUri + 'contactUs/';
    config.remoteRepoInfoUrl = config.adminUri + 'remoteRepoInfo/';

    common = karate.callSingle('classpath:common.feature', config);
    config.uniqueId = common.uniqueId
    config.db = common.db
    config.adminToken = common.adminToken
    config.env = env;

    karate.log('karate.env =', karate.env);
    karate.log('config =', config);
    // don't waste time waiting for a connection or if servers don't respond within 5 seconds
    karate.configure('connectTimeout', 5000);
    karate.configure('readTimeout', 5000);
    return config;
}
