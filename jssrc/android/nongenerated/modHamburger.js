function hamburger() {
    var pForm = kony.application.getCurrentForm();
    // console.log("1-------------------------");
    // alert(pForm.flxMenu.left);
    if (pForm.flxMenuContainer.left == '0%') {
        // console.log("2-------------------------");
        //do some thing here
        closeMenu();
    } else {
        //   console.log("3-------------------------");
        openMenu();
    }
}

function openMenu() {
    // console.log("4-------------------------");
    var pForm = kony.application.getCurrentForm();
    try {
        pForm.flxMenuContainer.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.7
        }, {
            "animationEnd": function() {}
        });
        pForm.flxContainer1.animate(kony.ui.createAnimation({
            "100": {
                "left": "85%",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.7
        }, {
            "animationEnd": function() {}
        });
        pForm.flxContainer1.setEnabled(true);
        /* if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "android"){
      pForm.flxContainer1.setEnbaled(true);
    }else{
       pForm.flxContainer1.setEnbaled(false);
	}*/
    } catch (err) {}
}

function closeMenu() {
    // console.log("5-------------------------");
    var pForm = kony.application.getCurrentForm();
    if (pForm == "frmHome") {}
    pForm.flxMenuContainer.animate(kony.ui.createAnimation({
        "100": {
            "left": "-85%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.7
    }, {
        "animationEnd": function() {}
    });
    pForm.flxContainer1.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.7
    }, {
        "animationEnd": function() {}
    });
    pForm.flxMenuContainer.setEnabled(true);
}
var segmentSideMenuData = [];

function setDataSegmentSideMenu() {
    var pForm = kony.application.getCurrentForm();
    pForm.SegmentSideMenu.widgetDataMap = {
        imgMeniIcon: "imgMeniIcon",
        labelMenulItem: "labelMenulItem",
        segRowFlxMenu: "segRowFlxMenu"
    };
    segmentSideMenuData = [{
        imgMeniIcon: {
            src: "menu_03",
            onTouchStart: navigateToDashBoard
        },
        labelMenulItem: {
            text: "DashBoard",
            onTouchStart: navigateToDashBoard
        }
    }, {
        imgMeniIcon: {
            src: "menu_07",
            onTouchStart: navigateToDischargeNotifications
        },
        labelMenulItem: {
            text: "Discharge Notifications",
            onTouchStart: navigateToDischargeNotifications
        }
    }, {
        imgMeniIcon: {
            src: "menu_11",
            onTouchStart: navigateToAdmitPage
        },
        labelMenulItem: {
            text: "Admit"
        }
    }, {
        imgMeniIcon: {
            src: "menu_15",
            onTouchStart: navigateToSupport
        },
        labelMenulItem: {
            text: "Support",
            onTouchStart: navigateToSupport
        }
    }, {
        imgMeniIcon: {
            src: "menu_19",
            onTouchStart: navigateToProfile
        },
        labelMenulItem: {
            text: "Profile",
            onTouchStart: navigateToProfile
        }
    }, {
        imgMeniIcon: {
            src: "menu_23",
            onTouchStart: navigateToManageAlerts
        },
        labelMenulItem: {
            text: "Manage Alerts",
            onTouchStart: navigateToManageAlerts
        }
    }, {
        imgMeniIcon: {
            src: "menu_27",
            onTouchStart: navigateToAlertToneSettings
        },
        labelMenulItem: {
            text: "Alert Tone Settings"
        },
        onTouchStart: navigateToAlertToneSettings
    }, {
        imgMeniIcon: {
            src: "menu_31",
            onTouchStart: navigateToLogin,
            onTouchStart: navigateToLogin
        },
        labelMenulItem: {
            text: "LogOut",
            onTouchStart: navigateToLogin
        }
    }];
    pForm.SegmentSideMenu.setData(segmentSideMenuData);
}

function navigateToDashBoard() {
    closeMenu();
    frmDashBoard.show();
}

function navigateToDischargeNotifications() {
    closeMenu();
}

function navigateToAdmitPage() {
    closeMenu();
    frmAdmitForm.show();
}

function navigateToSupport() {
    closeMenu();
    frmSupport.show();
}

function navigateToProfile() {
    closeMenu();
    frmEditProfile.show();
}

function navigateToManageAlerts() {
    closeMenu();
    frmConfigurationAlerts.show();
}

function navigateToAlertToneSettings() {
    closeMenu();
}

function navigateToLogin() {
    closeMenu();
    frmLogin.show();
}