//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "KONYDASH",
    appName: "KONYDASH",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCopyFBox0a9cedc484f624d();
    initializeCopytmplDashboard06a9d2fffad814a();
    initializeFBox0ce6da63e12d141();
    initializetemplateEditProfileInfo1();
    initializetemplateEditProfileInfo2();
    initializetemplateRowConfigurationAlerts();
    initializeTemplateSegmentComorbidity();
    initializetempSegmentMenuItem();
    initializetmplAdmissionDetails1();
    initializetmplDashboard();
    initializetmplDashboardRow();
    initializetmplDashboardSection();
    initializetmplForgotPassword();
    initializetmplModeofTransport();
    initializetmplModeofTransport2();
    initializetmplModeofTransport3();
    initializetmplModeofTransport4();
    initializetmplModeofTransport5();
    initializetmplPatientStatusCodeStatus();
    initializetmplRecomondationsMediationOrders();
    initializetmplSegAdmitFormSepsisScreeing();
    initializetmpSegemntlAdmissionAdditionalInfo();
    frmAdmissionGlobals();
    frmAdmitFormGlobals();
    frmConfigurationAlertsGlobals();
    frmDashBoardGlobals();
    frmDischargeDetailsGlobals();
    frmDischargeNotiifcattionsGlobals();
    frmEditProfileGlobals();
    frmForgetPasswordGlobals();
    frmLoginGlobals();
    frmRegisterGlobals();
    frmSupportGlobals();
    popupReferringFacilityGlobals();
    popupTakeactionGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;