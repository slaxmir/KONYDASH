function addWidgetsfrmDischargeNotiifcattions() {
    frmDischargeNotiifcattions.setDefaultUnit(kony.flex.DP);
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
        "height": "35%",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "5%",
        "src": "icons_03.png",
        "top": "20%",
        "width": "7%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDischargeNotifications1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelDischargeNotifications1",
        "isVisible": true,
        "left": "20%",
        "skin": "skinActionBarHeader",
        "text": "Discharge Notifications",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxActionbarContainer.add(imgMenuOpen, labelDischargeNotifications1);
    var flxBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "right": 0,
        "skin": "skinBody",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyContainer.setDefaultUnit(kony.flex.DP);
    var flxPsychAdmissionContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPsychAdmissionContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPsychAdmissionContainer.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
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
        "text": "Status",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "25%",
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
        "left": "5dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "First Name",
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
        "left": "5dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Last Name",
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
        "left": "15dp",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Referring Facility",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.add(CopylabelPsychAdmission032ac767f58c74c, CopylabelPsychEmail057d679da186d46, CopylabelPsychText08723ef5ecfae41, CopylabelPsyncAppNotification0a04bbcb77a844b);
    var CopysegmentPsychAdmission03cfd4ed9fe0f46 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }, {
            "imgstatus": "capsule.png",
            "labeValuelBedType": "PhanidraED",
            "labeValuelCondition": "PhanidraED",
            "labeValuelname": "Test",
            "labelAgeSex": "Age/Sex",
            "labelRefFac": "Ref Fac",
            "labelSepsisScreeing": "Sepsis Screening",
            "labelValueAdm": "HCAPH110816-0005",
            "labelValueAge": "25F",
            "labelValueChiefComplaint": "PhaniRC",
            "labelValueReferringFacility": "PhanidraED",
            "labelValueSepsisScreening": "Negative",
            "lableRef": "Adm #"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "CopysegmentPsychAdmission03cfd4ed9fe0f46",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_ac86c9c1f003412fabcd06df48034207,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0f7a2b74862b742": "CopyFlexContainer0f7a2b74862b742",
            "CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c": "CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c",
            "CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140": "CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140",
            "CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e": "CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e",
            "FlexContainer027b38e27710d47": "FlexContainer027b38e27710d47",
            "FlexContainer04b1e195e498540": "FlexContainer04b1e195e498540",
            "FlexContainer0fb1e2f7758184e": "FlexContainer0fb1e2f7758184e",
            "imgstatus": "imgstatus",
            "labeValuelBedType": "labeValuelBedType",
            "labeValuelCondition": "labeValuelCondition",
            "labeValuelname": "labeValuelname",
            "labelAgeSex": "labelAgeSex",
            "labelRefFac": "labelRefFac",
            "labelSepsisScreeing": "labelSepsisScreeing",
            "labelValueAdm": "labelValueAdm",
            "labelValueAge": "labelValueAge",
            "labelValueChiefComplaint": "labelValueChiefComplaint",
            "labelValueReferringFacility": "labelValueReferringFacility",
            "labelValueSepsisScreening": "labelValueSepsisScreening",
            "lableRef": "lableRef"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPsychAdmissionContainer.add(CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d, CopysegmentPsychAdmission03cfd4ed9fe0f46);
    flxBodyContainer.add(flxPsychAdmissionContainer);
    flxContainer1.add(flxActionbarContainer, flxBodyContainer);
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
    var imgMenuProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100dp",
        "id": "imgMenuProfilePic",
        "isVisible": true,
        "left": "20dp",
        "src": "imagedrag.png",
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
    flxMenuProfileDetailsContainer.add(imgMenuProfilePic, flxLineContainer, labelUsername);
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
        "src": "imagedrag.png",
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
        "src": "imagedrag.png",
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
        "src": "imagedrag.png",
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
        "src": "imagedrag.png",
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
        "src": "imagedrag.png",
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
        "src": "imagedrag.png",
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
        "text": "Configure Admission Alerts",
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
    var flxLogoutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxLogoutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLogoutContainer.setDefaultUnit(kony.flex.DP);
    var imgLogout = new kony.ui.Image2({
        "height": "75%",
        "id": "imgLogout",
        "isVisible": true,
        "left": "0dp",
        "src": "imagedrag.png",
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
    flxMenuItemsContainer.add(flxDashBoardContainer, flxDischargeNotificationContainer, flxAdmittCointer, flxSupportContainer, flxProfileContainer, flxConfigarationAlertsContainer, flxLogoutContainer);
    flxMenuContainer.add(flxMenuProfileDetailsContainer, flxMenuItemsContainer);
    frmDischargeNotiifcattions.add(flxContainer1, flxMenuContainer);
};

function frmDischargeNotiifcattionsGlobals() {
    frmDischargeNotiifcattions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDischargeNotiifcattions,
        "enabledForIdleTimeout": false,
        "id": "frmDischargeNotiifcattions",
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
    frmDischargeNotiifcattions.info = {
        "kuid": "668c7fae5a8b449ba7b1e583f7bb4355"
    };
};