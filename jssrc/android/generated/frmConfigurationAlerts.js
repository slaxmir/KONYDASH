function addWidgetsfrmConfigurationAlerts() {
    frmConfigurationAlerts.setDefaultUnit(kony.flex.DP);
    var flxMenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-80%",
        "right": 0,
        "skin": "sknMenu",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxMenuContainer.setDefaultUnit(kony.flex.DP);
    var flxMenuProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxMenuProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var imgMenuClose = new kony.ui.Image2({
        "height": "20dp",
        "id": "imgMenuClose",
        "isVisible": true,
        "left": "90%",
        "right": "10%",
        "src": "close.png",
        "top": "10dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgMenuProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100dp",
        "id": "imgMenuProfilePic",
        "isVisible": true,
        "left": "20dp",
        "src": "icons_07.png",
        "top": "20dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flxLineContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinLine",
        "top": "148dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineContainer.setDefaultUnit(kony.flex.DP);
    flxLineContainer.add();
    var labelUsername = new kony.ui.Label({
        "centerX": "50%",
        "id": "labelUsername",
        "isVisible": true,
        "left": 98,
        "skin": "skinMenuLabel",
        "text": "Swaraj RC",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "120dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMenuProfileDetailsContainer.add(imgMenuClose, imgMenuProfilePic, flxLineContainer, labelUsername);
    var flxMenuItemsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "flxMenuItemsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuItemsContainer.setDefaultUnit(kony.flex.DP);
    var flxDashBoardContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxDashBoardContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_NamedActions_631da807ab464002a5587d29b7ed9efd,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDashBoardContainer.setDefaultUnit(kony.flex.DP);
    var imgDashBoard = new kony.ui.Image2({
        "height": "75%",
        "id": "imgDashBoard",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_03.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDashBoard = new kony.ui.Label({
        "height": "100%",
        "id": "labelDashBoard",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "DashBoard",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDashBoardContainer.add(imgDashBoard, labelDashBoard);
    var flxDischargeNotificationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxDischargeNotificationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDischargeNotificationContainer.setDefaultUnit(kony.flex.DP);
    var imgDischargeNotification = new kony.ui.Image2({
        "height": "75%",
        "id": "imgDischargeNotification",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_07.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDischargeNotification = new kony.ui.Label({
        "height": "100%",
        "id": "labelDischargeNotification",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Discharge Notifications",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDischargeNotificationContainer.add(imgDischargeNotification, labelDischargeNotification);
    var flxAdmittCointer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxAdmittCointer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_NamedActions_92351225a2bc411e97fed2807a916c90,
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAdmittCointer.setDefaultUnit(kony.flex.DP);
    var imgAdmit = new kony.ui.Image2({
        "height": "75%",
        "id": "imgAdmit",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_11.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelAdmit = new kony.ui.Label({
        "height": "100%",
        "id": "labelAdmit",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Admit",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAdmittCointer.add(imgAdmit, labelAdmit);
    var flxSupportContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxSupportContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_NamedActions_2ad466e34ded4873ac916d6af07a054a,
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSupportContainer.setDefaultUnit(kony.flex.DP);
    var imgSupport = new kony.ui.Image2({
        "height": "75%",
        "id": "imgSupport",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_15.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelSupport = new kony.ui.Label({
        "height": "100%",
        "id": "labelSupport",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Support",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSupportContainer.add(imgSupport, labelSupport);
    var flxProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_NamedActions_05d3c02a2c394dc9aedbef399f38818a,
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProfileContainer.setDefaultUnit(kony.flex.DP);
    var imgProfile = new kony.ui.Image2({
        "height": "75%",
        "id": "imgProfile",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_19.png",
        "top": "5%",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelProfile = new kony.ui.Label({
        "height": "100%",
        "id": "labelProfile",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Profile",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxProfileContainer.add(imgProfile, labelProfile);
    var flxConfigarationAlertsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxConfigarationAlertsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_NamedActions_59f90898340d4953be384a35208868b0,
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxConfigarationAlertsContainer.setDefaultUnit(kony.flex.DP);
    var imgConfigureAdmissionAlertsl = new kony.ui.Image2({
        "height": "75%",
        "id": "imgConfigureAdmissionAlertsl",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_23.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigureAdmissionAlerts = new kony.ui.Label({
        "height": "100%",
        "id": "labelConfigureAdmissionAlerts",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Manage Alerts",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConfigarationAlertsContainer.add(imgConfigureAdmissionAlertsl, labelConfigureAdmissionAlerts);
    var flxAlerttoneSettings = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxAlerttoneSettings",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAlerttoneSettings.setDefaultUnit(kony.flex.DP);
    var imgAlertToneSettings = new kony.ui.Image2({
        "height": "75%",
        "id": "imgAlertToneSettings",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_27.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelAlerttoneSettings = new kony.ui.Label({
        "height": "100%",
        "id": "labelAlerttoneSettings",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Alert Tone Settings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAlerttoneSettings.add(imgAlertToneSettings, labelAlerttoneSettings);
    var flxLogoutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxLogoutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_NamedActions_3c74bd01e75c4bfe95dc0f5eb28edd07,
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLogoutContainer.setDefaultUnit(kony.flex.DP);
    var imgLogout = new kony.ui.Image2({
        "height": "75%",
        "id": "imgLogout",
        "isVisible": true,
        "left": "0dp",
        "src": "menu_31.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelLogout = new kony.ui.Label({
        "height": "100%",
        "id": "labelLogout",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "LogOut",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLogoutContainer.add(imgLogout, labelLogout);
    flxMenuItemsContainer.add(flxDashBoardContainer, flxDischargeNotificationContainer, flxAdmittCointer, flxSupportContainer, flxProfileContainer, flxConfigarationAlertsContainer, flxAlerttoneSettings, flxLogoutContainer);
    flxMenuContainer.add(flxMenuProfileDetailsContainer, flxMenuItemsContainer);
    var flxContainer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxContainer1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "right": 0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainer1.setDefaultUnit(kony.flex.DP);
    var flxActionbarContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxActionbarContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxActionbarContainer.setDefaultUnit(kony.flex.DP);
    var imgMenuOpen = new kony.ui.Image2({
        "height": "20dp",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "5%",
        "onTouchStart": AS_NamedActions_59f90898340d4953be384a35208868b0,
        "src": "icons_03.png",
        "top": "20dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigurationAdmissionAlerts = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelConfigurationAdmissionAlerts",
        "isVisible": true,
        "left": "20%",
        "skin": "skinActionBarHeader",
        "text": "Manage Alerts",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "65.01%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxActionbarContainer.add(imgMenuOpen, labelConfigurationAdmissionAlerts);
    var flxBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": 0,
        "skin": "skinBody",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyContainer.setDefaultUnit(kony.flex.DP);
    var flxBodyScrollCointer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxBodyScrollCointer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyScrollCointer.setDefaultUnit(kony.flex.DP);
    var TabConfigurationAdmissionAlerts = new kony.ui.TabPane({
        "activeFocusSkin": "CopytabCanvas038b5bec321824c",
        "activeSkin": "CopytabCanvas069c76196e4904f",
        "activeTabs": [2],
        "height": "100.26%",
        "id": "TabConfigurationAdmissionAlerts",
        "inactiveSkin": "CopytabCanvasInactive052646609077543",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "0dp",
        "top": "0.01%",
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "collapsibleviewconfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                "image1": "tableftarrow.png",
                "image2": "tabrightarrow.png"
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
        "width": "100%",
        "zIndex": 1
    }, {
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tabHeaderHeight": 30
    });
    var tabDirectAdmission = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabDirectAdmission",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "onInit": AS_NamedActions_11b6d54803234f5593c17f17d8ede9f7,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab05cba3ab230774a",
        "tabName": "Direct Admission",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabDirectAdmission.setDefaultUnit(kony.flex.PERCENTAGE);
    var flxPsychAdmissionContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPsychAdmissionContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPsychAdmissionContainer.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission032ac767f58c74c = new kony.ui.Label({
        "id": "CopylabelPsychAdmission032ac767f58c74c",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail057d679da186d46 = new kony.ui.Label({
        "id": "CopylabelPsychEmail057d679da186d46",
        "isVisible": true,
        "left": "-16dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText08723ef5ecfae41 = new kony.ui.Label({
        "id": "CopylabelPsychText08723ef5ecfae41",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification0a04bbcb77a844b = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification0a04bbcb77a844b",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Notification",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.add(CopylabelPsychAdmission032ac767f58c74c, CopylabelPsychEmail057d679da186d46, CopylabelPsychText08723ef5ecfae41, CopylabelPsyncAppNotification0a04bbcb77a844b);
    var SegmentDirectAdmission = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnManageAlertNotification": "",
            "btnManageAlertText": "",
            "btnManageAlertsEmail": "",
            "labelManageAlertsType": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "SegmentDirectAdmission",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg02dde64fd099145",
        "rowTemplate": flxTemplateRowConfigurationAlertsContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "-10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer046138e35029a4a": "CopyFlexContainer046138e35029a4a",
            "CopyFlexContainer0f0a492a0b4c446": "CopyFlexContainer0f0a492a0b4c446",
            "FlexContainer0cdb60b5132e040": "FlexContainer0cdb60b5132e040",
            "btnManageAlertNotification": "btnManageAlertNotification",
            "btnManageAlertText": "btnManageAlertText",
            "btnManageAlertsEmail": "btnManageAlertsEmail",
            "flxTemplateRowConfigurationAlertsContainer": "flxTemplateRowConfigurationAlertsContainer",
            "labelManageAlertsType": "labelManageAlertsType"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPsychAdmissionContainer.add(CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d, SegmentDirectAdmission);
    tabDirectAdmission.add(flxPsychAdmissionContainer);
    TabConfigurationAdmissionAlerts.addTab("tabDirectAdmission", "Direct Admission", null, tabDirectAdmission, AS_NamedActions_11b6d54803234f5593c17f17d8ede9f7);
    var tabEDReferral = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "100%",
        "id": "tabEDReferral",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "onInit": AS__3a8895e4588a4fb0a96388157af9cccc,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab0441d55abd19e47",
        "tabName": "ED Referral",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabEDReferral.setDefaultUnit(kony.flex.PERCENTAGE);
    var CopyflxPsychAdmissionContainer0f594455f0a0b4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxPsychAdmissionContainer0f594455f0a0b4a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionContainer0f594455f0a0b4a.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0cb054e90f39045 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "CopyflxPsychAdmissionHeaderContainer0cb054e90f39045",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer0cb054e90f39045.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission0d3dbf60f67ac4f = new kony.ui.Label({
        "id": "CopylabelPsychAdmission0d3dbf60f67ac4f",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail080e3861fba534a = new kony.ui.Label({
        "id": "CopylabelPsychEmail080e3861fba534a",
        "isVisible": true,
        "left": "-15dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText0e15413496c254f = new kony.ui.Label({
        "id": "CopylabelPsychText0e15413496c254f",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification085c2f3c62e9745 = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification085c2f3c62e9745",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Notification",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0cb054e90f39045.add(CopylabelPsychAdmission0d3dbf60f67ac4f, CopylabelPsychEmail080e3861fba534a, CopylabelPsychText0e15413496c254f, CopylabelPsyncAppNotification085c2f3c62e9745);
    var SegmentEDReferral = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnManageAlertNotification": "",
            "btnManageAlertText": "",
            "btnManageAlertsEmail": "",
            "labelManageAlertsType": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "SegmentEDReferral",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0470e73fd04874c",
        "rowTemplate": flxTemplateRowConfigurationAlertsContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "-10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer046138e35029a4a": "CopyFlexContainer046138e35029a4a",
            "CopyFlexContainer0f0a492a0b4c446": "CopyFlexContainer0f0a492a0b4c446",
            "FlexContainer0cdb60b5132e040": "FlexContainer0cdb60b5132e040",
            "btnManageAlertNotification": "btnManageAlertNotification",
            "btnManageAlertText": "btnManageAlertText",
            "btnManageAlertsEmail": "btnManageAlertsEmail",
            "flxTemplateRowConfigurationAlertsContainer": "flxTemplateRowConfigurationAlertsContainer",
            "labelManageAlertsType": "labelManageAlertsType"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxPsychAdmissionContainer0f594455f0a0b4a.add(CopyflxPsychAdmissionHeaderContainer0cb054e90f39045, SegmentEDReferral);
    tabEDReferral.add(CopyflxPsychAdmissionContainer0f594455f0a0b4a);
    TabConfigurationAdmissionAlerts.addTab("tabEDReferral", "ED Referral", null, tabEDReferral, AS__3a8895e4588a4fb0a96388157af9cccc);
    var tabPsychAdmission = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabPsychAdmission",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "onInit": AS__af5a550807234e29a4df7a342c0ec16a,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab022b93ef730f142",
        "tabName": "Psych Admission",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabPsychAdmission.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionContainer0847b9a3b5ce34b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxPsychAdmissionContainer0847b9a3b5ce34b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionContainer0847b9a3b5ce34b.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer09277f8935e444b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6.31%",
        "id": "CopyflxPsychAdmissionHeaderContainer09277f8935e444b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer09277f8935e444b.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission0eef87444f50d4d = new kony.ui.Label({
        "id": "CopylabelPsychAdmission0eef87444f50d4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail0f180bf64b3c648 = new kony.ui.Label({
        "id": "CopylabelPsychEmail0f180bf64b3c648",
        "isVisible": true,
        "left": "-17dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText02c85ac3e4bbd4f = new kony.ui.Label({
        "id": "CopylabelPsychText02c85ac3e4bbd4f",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification023091a7c9b0247 = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification023091a7c9b0247",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Notification",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer09277f8935e444b.add(CopylabelPsychAdmission0eef87444f50d4d, CopylabelPsychEmail0f180bf64b3c648, CopylabelPsychText02c85ac3e4bbd4f, CopylabelPsyncAppNotification023091a7c9b0247);
    var SegmentPsychAdmission = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnManageAlertNotification": "",
            "btnManageAlertText": "",
            "btnManageAlertsEmail": "",
            "labelManageAlertsType": "Label"
        }],
        "groupCells": false,
        "height": "98.18%",
        "id": "SegmentPsychAdmission",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0bee888d2081e4b",
        "rowTemplate": flxTemplateRowConfigurationAlertsContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer046138e35029a4a": "CopyFlexContainer046138e35029a4a",
            "CopyFlexContainer0f0a492a0b4c446": "CopyFlexContainer0f0a492a0b4c446",
            "FlexContainer0cdb60b5132e040": "FlexContainer0cdb60b5132e040",
            "btnManageAlertNotification": "btnManageAlertNotification",
            "btnManageAlertText": "btnManageAlertText",
            "btnManageAlertsEmail": "btnManageAlertsEmail",
            "flxTemplateRowConfigurationAlertsContainer": "flxTemplateRowConfigurationAlertsContainer",
            "labelManageAlertsType": "labelManageAlertsType"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxPsychAdmissionContainer0847b9a3b5ce34b.add(CopyflxPsychAdmissionHeaderContainer09277f8935e444b, SegmentPsychAdmission);
    tabPsychAdmission.add(CopyflxPsychAdmissionContainer0847b9a3b5ce34b);
    TabConfigurationAdmissionAlerts.addTab("tabPsychAdmission", "Psych Admission", null, tabPsychAdmission, AS__af5a550807234e29a4df7a342c0ec16a);
    flxBodyScrollCointer.add(TabConfigurationAdmissionAlerts);
    flxBodyContainer.add(flxBodyScrollCointer);
    flxContainer1.add(flxActionbarContainer, flxBodyContainer);
    frmConfigurationAlerts.add(flxMenuContainer, flxContainer1);
};

function frmConfigurationAlertsGlobals() {
    frmConfigurationAlerts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmConfigurationAlerts,
        "enabledForIdleTimeout": false,
        "id": "frmConfigurationAlerts",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmConfigurationAlerts.info = {
        "kuid": "3b35a92be3cd4556a58b224a47a8d314"
    };
};