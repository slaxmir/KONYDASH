function addWidgetsfrmDashBoard() {
    frmDashBoard.setDefaultUnit(kony.flex.DP);
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
        "layoutType": kony.flex.FLOW_HORIZONTAL,
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDashBoard1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelDashBoard1",
        "isVisible": true,
        "left": "0dp",
        "skin": "skinActionBarHeader",
        "text": "Dash Board",
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
    flxActionbarContainer.add(imgMenuOpen, labelDashBoard1);
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
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPsychAdmissionContainer.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2%",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.setDefaultUnit(kony.flex.DP);
    var FlexContainer02a20a3da3e884a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "FlexContainer02a20a3da3e884a",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "2%",
        "zIndex": 1
    }, {}, {});
    FlexContainer02a20a3da3e884a.setDefaultUnit(kony.flex.DP);
    FlexContainer02a20a3da3e884a.add();
    var CopylabelPsychAdmission032ac767f58c74c = new kony.ui.Label({
        "centerY": "50.00%",
        "height": "30dp",
        "id": "CopylabelPsychAdmission032ac767f58c74c",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknDashBoardHeader",
        "text": "Status",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail057d679da186d46 = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopylabelPsychEmail057d679da186d46",
        "isVisible": true,
        "skin": "sknDashBoardHeader",
        "text": "Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText08723ef5ecfae41 = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopylabelPsychText08723ef5ecfae41",
        "isVisible": true,
        "skin": "sknDashBoardHeader",
        "text": "Chief Complaint",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification0a04bbcb77a844b = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopylabelPsyncAppNotification0a04bbcb77a844b",
        "isVisible": true,
        "skin": "sknDashBoardHeader",
        "text": "Condition",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification0059ae3e4a33d40 = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopylabelPsyncAppNotification0059ae3e4a33d40",
        "isVisible": true,
        "skin": "sknDashBoardHeader",
        "text": "Bed Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.add(FlexContainer02a20a3da3e884a, CopylabelPsychAdmission032ac767f58c74c, CopylabelPsychEmail057d679da186d46, CopylabelPsychText08723ef5ecfae41, CopylabelPsyncAppNotification0a04bbcb77a844b, CopylabelPsyncAppNotification0059ae3e4a33d40);
    var Segdashbaord = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ImageCollapsed": "collapselabelicon.png",
            "admValue1": "Label",
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
        "height": "95%",
        "id": "Segdashbaord",
        "isVisible": true,
        "left": "1.39%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_537e457f44164d389476c222380f49f1,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "right": "2%",
        "rowFocusSkin": "seg2Focus",
        "rowTemplate": CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0f7a2b74862b742": "CopyFlexContainer0f7a2b74862b742",
            "CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c": "CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c",
            "CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140": "CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140",
            "CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e": "CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e",
            "FlexContainer027b38e27710d47": "FlexContainer027b38e27710d47",
            "FlexContainer04b1e195e498540": "FlexContainer04b1e195e498540",
            "FlexContainerDashboard": "FlexContainerDashboard",
            "ImageCollapsed": "ImageCollapsed",
            "admValue1": "admValue1",
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
        "width": "96.72%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPsychAdmissionContainer.add(CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d, Segdashbaord);
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
        "height": "80dp",
        "id": "imgMenuProfilePic",
        "isVisible": true,
        "left": "20dp",
        "src": "icons_07.png",
        "top": "30dp",
        "width": "80dp",
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
        "top": "151dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineContainer.setDefaultUnit(kony.flex.DP);
    flxLineContainer.add();
    var labelUsername = new kony.ui.Label({
        "centerX": "51.08%",
        "id": "labelUsername",
        "isVisible": true,
        "left": 98,
        "skin": "CopyskinMenuLabel00e1400c6b3a74f",
        "text": "Swaraj RC",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "116dp",
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
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuItemsContainer.setDefaultUnit(kony.flex.DP);
    var Segment0dc75c7a0677f4e = new kony.ui.SegmentedUI2({
        "scrollingEvents": {},
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgMeniIcon": "",
            "labelMenulItem": ""
        }],
        "groupCells": false,
        "height": "80%",
        "id": "SegmentSideMenu",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg050fd68e3778b45",
        "rowSkin": "Copyseg0c0a0e2370cad40",
        "rowTemplate": segRowFlxMenu,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "imgMeniIcon": "imgMeniIcon",
            "labelMenulItem": "labelMenulItem",
            "segRowFlxMenu": "segRowFlxMenu"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0b649aae5ffd040 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35dp",
        "id": "FlexContainer0b649aae5ffd040",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox06a7bf2770c6242",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b649aae5ffd040.setDefaultUnit(kony.flex.DP);
    var Label024694653a6a04a = new kony.ui.Label({
        "id": "Label024694653a6a04a",
        "isVisible": true,
        "left": "22dp",
        "skin": "CopyslLabel08205867ee7744e",
        "text": "© DASH 2016.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel08d5039c9b1934a = new kony.ui.Label({
        "id": "CopyLabel08d5039c9b1934a",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0d41d8afbe4e14e",
        "text": "Business Associate Agreement ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0654298db22b04a = new kony.ui.Label({
        "id": "CopyLabel0654298db22b04a",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0d41d8afbe4e14e",
        "text": "Privacy Policy",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0b649aae5ffd040.add(Label024694653a6a04a, CopyLabel08d5039c9b1934a, CopyLabel0654298db22b04a);
    flxMenuItemsContainer.add(Segment0dc75c7a0677f4e, FlexContainer0b649aae5ffd040);
    flxMenuContainer.add(flxMenuProfileDetailsContainer, flxMenuItemsContainer);
    frmDashBoard.add(flxContainer1, flxMenuContainer);
};

function frmDashBoardGlobals() {
    frmDashBoard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashBoard,
        "enabledForIdleTimeout": false,
        "id": "frmDashBoard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_e6c3c8549b4e4a37adbd6e9ff5b1d25e,
        "preShow": AS_NamedActions_39f4aa24a2004cdeb65ac547cbe7ceee
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
    frmDashBoard.info = {
        "kuid": "4d052e83ef0b47678eb3c35c72c7d4a0"
    };
};