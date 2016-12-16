function addWidgetsfrmAdmitForm() {
    frmAdmitForm.setDefaultUnit(kony.flex.DP);
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
        "height": "25dp",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "5%",
        "onTouchStart": AS_NamedActions_59f90898340d4953be384a35208868b0,
        "skin": "slImage",
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
        "text": "Direct Admit Form",
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
    var flexAdmitFormContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexAdmitFormContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknTemp1",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexAdmitFormContainer.setDefaultUnit(kony.flex.DP);
    var admitFormHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "admitFormHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "CopyadmitFormHDSkin012ef11e08da64d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitFormHeader.setDefaultUnit(kony.flex.DP);
    var admitTabSectionMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "admitTabSectionMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabSectionMain.setDefaultUnit(kony.flex.DP);
    var selectClinicTab = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "selectClinicTab",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onClick": AS_NamedActions_1352f25abbd14c909e7ab7b40b4ef99f,
        "onTouchStart": AS_FlexContainer_627d5a4635d74ac6b25de8bcbc9914fa,
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    selectClinicTab.setDefaultUnit(kony.flex.DP);
    var clinicImgID = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "clinicImgID",
        "isVisible": true,
        "left": "0dp",
        "src": "clinic.png",
        "top": "12dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tabList1 = new kony.ui.Label({
        "centerX": "50%",
        "id": "tabList1",
        "isVisible": true,
        "left": "0dp",
        "skin": "tabListSkin",
        "text": "Select Clinic",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    selectClinicTab.add(clinicImgID, tabList1);
    var tabDevider = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 1,
        "clipBounds": true,
        "height": "40dp",
        "id": "tabDevider",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "right": 1,
        "skin": "tabDeviderSkin",
        "top": "12dp",
        "width": "2dp",
        "zIndex": 1
    }, {}, {});
    tabDevider.setDefaultUnit(kony.flex.DP);
    tabDevider.add();
    var selectFormTypeTab = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "selectFormTypeTab",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "onClick": AS_NamedActions_4fad31864dc34c84a154802c95fab512,
        "onTouchStart": AS_FlexContainer_d197f2480f534774aaf67307793bb7b7,
        "right": "0dp",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    selectFormTypeTab.setDefaultUnit(kony.flex.DP);
    var formTypeImgID = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "formTypeImgID",
        "isVisible": true,
        "left": "0dp",
        "src": "formtype.png",
        "top": "10dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tabList2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "tabList2",
        "isVisible": true,
        "left": "0dp",
        "skin": "tabListSkin",
        "text": "Select Form Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    selectFormTypeTab.add(formTypeImgID, tabList2);
    admitTabSectionMain.add(selectClinicTab, tabDevider, selectFormTypeTab);
    admitFormHeader.add(admitTabSectionMain);
    var selectClinicAndFormTypeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "selectClinicAndFormTypeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "12%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    selectClinicAndFormTypeContainer.setDefaultUnit(kony.flex.DP);
    var selectClinicList = new kony.ui.ListBox({
        "focusSkin": "CopypatientAdmitHSPSelectBxSkin0bf4020f7d4564b",
        "height": "40dp",
        "id": "selectClinicList",
        "isVisible": false,
        "left": "2%",
        "masterData": [
            ["lb1", "select"],
            ["lb2", "HCL"],
            ["lb3", "GOIO"]
        ],
        "onSelection": AS_NamedActions_1b4bb0b105db410faed8ac7e165ed7ff,
        "right": "2%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "select"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "selecticon.png",
        "placeholderSkin": "CopypatientAdmitHSPSelectBxSkin065aa47808bd542",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var selectFormTypeList = new kony.ui.ListBox({
        "focusSkin": "CopypatientAdmitHSPSelectBxSkin0856d2c11878b41",
        "height": "40dp",
        "id": "selectFormTypeList",
        "isVisible": true,
        "left": "2%",
        "masterData": [
            ["lb1", "select "],
            ["lb2", "HCL"],
            ["lb3", "GOIO"]
        ],
        "onSelection": AS_NamedActions_96dba70c43c645a7a93754c6f2c04519,
        "right": "2%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "select "],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "selecticon.png",
        "placeholder": "klkl",
        "placeholderSkin": "CopypatientAdmitHSPSelectBxSkin0dabedf26c0064a",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var FlexContainerdownarrows = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerdownarrows",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknArrowDown",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerdownarrows.setDefaultUnit(kony.flex.DP);
    var imgArrowClinic = new kony.ui.Image2({
        "centerX": "25%",
        "height": "7dp",
        "id": "imgArrowClinic",
        "isVisible": true,
        "left": "80dp",
        "skin": "slImage",
        "src": "activeicon.png",
        "top": "-1dp",
        "width": "12dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgArrowFormType = new kony.ui.Image2({
        "centerX": "75%",
        "height": "7dp",
        "id": "imgArrowFormType",
        "isVisible": true,
        "left": "80dp",
        "skin": "slImage",
        "src": "activeicon.png",
        "top": "-1dp",
        "width": "12dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainerdownarrows.add(imgArrowClinic, imgArrowFormType);
    var LabelTabNote = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "40%",
        "height": "40dp",
        "id": "LabelTabNote",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknTabNote",
        "text": "Please Select Clinic and Form Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    selectClinicAndFormTypeContainer.add(selectClinicList, selectFormTypeList, FlexContainerdownarrows, LabelTabNote);
    var admitFormTabSection = new kony.ui.TabPane({
        "activeFocusSkin": "CopytabColorSkin0a0ae4d64fd824f",
        "activeSkin": "tabColorSkin",
        "activeTabs": [0],
        "height": "90%",
        "id": "admitFormTabSection",
        "inactiveSkin": "CopytabCanvasInactive0a17bff67241244",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "0dp",
        "top": "12.40%",
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
        "tabHeaderHeight": 40
    });
    var TestpatientTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "TestpatientTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onInit": AS_NamedActions_13f36a91edd14b358667a0fc935daedd,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab0d75ef89300e045",
        "tabName": "Patient",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    TestpatientTab.setDefaultUnit(kony.flex.PERCENTAGE);
    var admitTabActiveBorder1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "admitTabActiveBorder1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabActiveBorder1.setDefaultUnit(kony.flex.DP);
    var FlexContainer0da4767ec53a646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "FlexContainer0da4767ec53a646",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "admitFormTabBorderColorSkin",
        "top": "0dp",
        "width": "33.33%"
    }, {}, {});
    FlexContainer0da4767ec53a646.setDefaultUnit(kony.flex.DP);
    FlexContainer0da4767ec53a646.add();
    admitTabActiveBorder1.add(FlexContainer0da4767ec53a646);
    var innerTabRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "7%",
        "id": "innerTabRow",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "innerTabRowSkin",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    innerTabRow.setDefaultUnit(kony.flex.DP);
    var CopylableAdmissionDetails0725922a2fb6d4f = new kony.ui.Label({
        "id": "CopylableAdmissionDetails0725922a2fb6d4f",
        "isVisible": true,
        "skin": "sknLblFeilds",
        "text": "Feilds",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "25%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyinnerTabRow0109c776e0a144e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyinnerTabRow0109c776e0a144e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "innerTabRowSkin1",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    CopyinnerTabRow0109c776e0a144e.setDefaultUnit(kony.flex.DP);
    var CopylableAdmissionDetails08abbdb044db44e = new kony.ui.Label({
        "id": "CopylableAdmissionDetails08abbdb044db44e",
        "isVisible": true,
        "left": "25dp",
        "right": "2dp",
        "skin": "labelstarforMandatory",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "3%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnPatientMandatory = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnPatientMandatory",
        "isVisible": true,
        "onClick": AS_NamedActions_13f36a91edd14b358667a0fc935daedd,
        "skin": "sknbtnFeilds",
        "text": "Mandatory",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    var btnPatientPreferred = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnPatientPreferred",
        "isVisible": true,
        "onClick": AS_NamedActions_e8648570061a438f81bd3b5e552c1d9d,
        "skin": "sknbtnFeilds",
        "text": "Preferred",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    var btnPatientAll = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnPatientAll",
        "isVisible": true,
        "onClick": AS_NamedActions_deb97a05f6be4f88b44ebb4958662026,
        "right": "0dp",
        "skin": "sknbtnFeilds",
        "text": "All",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    CopyinnerTabRow0109c776e0a144e.add(CopylableAdmissionDetails08abbdb044db44e, btnPatientMandatory, btnPatientPreferred, btnPatientAll);
    innerTabRow.add(CopylableAdmissionDetails0725922a2fb6d4f, CopyinnerTabRow0109c776e0a144e);
    var patientMandatorySection = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "72%",
        "horizontalScrollIndicator": true,
        "id": "patientMandatorySection",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2.00%",
        "pagingEnabled": false,
        "right": "2%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "12%",
        "verticalScrollIndicator": true,
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    patientMandatorySection.setDefaultUnit(kony.flex.DP);
    var flexContainerPatientInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerPatientInfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerPatientInfo.setDefaultUnit(kony.flex.DP);
    var imgCollapsable1 = new kony.ui.Image2({
        "height": "40dp",
        "id": "imgCollapsable1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lableAdmissionDetails = new kony.ui.Label({
        "centerY": "20dp",
        "id": "lableAdmissionDetails",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_13ba87fe395740aea317e3a6fe90d233,
        "skin": "sknadmissionDetails1",
        "text": "Patient Info",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormPatientStatus = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormPatientStatus",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_13ba87fe395740aea317e3a6fe90d233,
        "right": "0%",
        "skin": "slImage",
        "src": "collapseclose.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerPatientInfo.add(imgCollapsable1, lableAdmissionDetails, imgCollapseArrowAdmitFormPatientStatus);
    var flxContainerPatientInfoAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerPatientInfoAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerPatientInfoAdmitForm.setDefaultUnit(kony.flex.DP);
    var TFFirstName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin068d9620452d048",
        "height": "40dp",
        "id": "TFFirstName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": 0,
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "FirstName",
        "right": 0,
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TFLastName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_WORDS,
        "focusSkin": "CopytextFieldSkin003be3879b8c040",
        "height": "40dp",
        "id": "TFLastName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": 0,
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Last Name",
        "right": 0,
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var FlexContainer04bef1e93257c44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "FlexContainer04bef1e93257c44",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2%",
        "skin": "slFbox",
        "top": "15dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04bef1e93257c44.setDefaultUnit(kony.flex.DP);
    var LblAdmiFormMale = new kony.ui.Label({
        "id": "LblAdmiFormMale",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_Label_acdd31124b7b440783b623fd5c2ef0b0,
        "skin": "slLabelMediationOrders",
        "text": "Male",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LblAdmitFormFemale = new kony.ui.Label({
        "id": "LblAdmitFormFemale",
        "isVisible": true,
        "left": "30dp",
        "onTouchStart": AS_Label_6251f3853c3d4bebb3b0fff75e713d81,
        "skin": "slLabelMediationOrders",
        "text": "Female",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer04bef1e93257c44.add(LblAdmiFormMale, LblAdmitFormFemale);
    var CalendarAdmitFormDOB = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateComponents": [5, 11, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 5,
        "formattedDate": "05/11/2016",
        "height": "40dp",
        "hour": 0,
        "id": "CalendarAdmitFormDOB",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 11,
        "onSelection": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "seconds": 0,
        "skin": "sknCalendarAdmitpage",
        "top": "10dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "100%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {});
    var TFSSN = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0ab5a1d32b2744f",
        "height": "40dp",
        "id": "TFSSN",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "SSN",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxContainerPatientInfoAdmitForm.add(TFFirstName, TFLastName, FlexContainer04bef1e93257c44, CalendarAdmitFormDOB, TFSSN);
    var flexContainerAdmittingPreferences = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerAdmittingPreferences",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerAdmittingPreferences.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable06aa96fb3003642 = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable06aa96fb3003642",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0d971933ceeb24b = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0d971933ceeb24b",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_a9f6edee3bfa48828a6a358068400672,
        "skin": "sknadmissionDetails1",
        "text": "Admitting Preferences",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormAdmitingPreferences = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormAdmitingPreferences",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_a9f6edee3bfa48828a6a358068400672,
        "right": "0%",
        "skin": "slImage",
        "src": "collapseclose.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerAdmittingPreferences.add(CopyimgCollapsable06aa96fb3003642, CopylableAdmissionDetails0d971933ceeb24b, imgCollapseArrowAdmitFormAdmitingPreferences);
    var flxContainerAdmittingPreferencesAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerAdmittingPreferencesAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerAdmittingPreferencesAdmitForm.setDefaultUnit(kony.flex.DP);
    var patientTitleRow1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "patientTitleRow1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "right": "2%",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    patientTitleRow1.setDefaultUnit(kony.flex.DP);
    var LabelAdmittingHospital = new kony.ui.Label({
        "id": "LabelAdmittingHospital",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblAdmittingPreferences",
        "text": "Admitting Hospital",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var patientTitleRow1Star = new kony.ui.Label({
        "id": "patientTitleRow1Star",
        "isVisible": true,
        "left": "128dp",
        "skin": "labelstar",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    patientTitleRow1.add(LabelAdmittingHospital, patientTitleRow1Star);
    var ListBoxAdmittingHospital = new kony.ui.ListBox({
        "height": "40dp",
        "id": "ListBoxAdmittingHospital",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "Select Hospital"],
            ["1", "Test Phani Hospital"],
            ["2", "Test PhaniRC Hospital"]
        ],
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Select Hospital"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon.png",
        "placeholder": "Select Hospital",
        "tickedImage": "tick_03.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var patientTitleRow2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "patientTitleRow2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "right": "2%",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    patientTitleRow2.setDefaultUnit(kony.flex.DP);
    var lblAdmittingGroup = new kony.ui.Label({
        "id": "lblAdmittingGroup",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblAdmittingPreferences",
        "text": "Admitting Group ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopypatientTitleRow0c65f592e78494a = new kony.ui.Label({
        "id": "CopypatientTitleRow0c65f592e78494a",
        "isVisible": true,
        "left": "121dp",
        "skin": "labelstar",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    patientTitleRow2.add(lblAdmittingGroup, CopypatientTitleRow0c65f592e78494a);
    var ListBoxAdmittingGroup = new kony.ui.ListBox({
        "height": "40dp",
        "id": "ListBoxAdmittingGroup",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "Select Group"],
            ["1", "Test AP Group(No Doctor On Call)  "],
            ["2", "OtherGroup - Test Hospital for Running Scripts(No Doctor On Call)"],
            ["3", "SAC Group  "]
        ],
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Select Group"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon.png",
        "placeholder": "Select Group",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var ListBoxSelectPhysicialAdmitForm = new kony.ui.ListBox({
        "height": "40dp",
        "id": "ListBoxSelectPhysicialAdmitForm",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "Select Physician"],
            ["lb2", "Test AP Group(No Doctor On Call)  "]
        ],
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Select Physician"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon.png",
        "placeholder": "Select Physician",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblRequestDocToDoc = new kony.ui.Label({
        "id": "lblRequestDocToDoc",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblAdmittingPreferences",
        "text": "Request Doc To Doc",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "96%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ListBoxRequestDocToDocAdmitForm = new kony.ui.ListBox({
        "height": "40dp",
        "id": "ListBoxRequestDocToDocAdmitForm",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Yes"],
            ["lb2", "No"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Yes"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var patientTitleRow3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "patientTitleRow3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "right": "2%",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    patientTitleRow3.setDefaultUnit(kony.flex.DP);
    var lblPatientETA = new kony.ui.Label({
        "id": "lblPatientETA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblAdmittingPreferences",
        "text": "Patient ETA ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopypatientTitleRow0211449b4892544 = new kony.ui.Label({
        "id": "CopypatientTitleRow0211449b4892544",
        "isVisible": true,
        "left": "92dp",
        "skin": "labelstar",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    patientTitleRow3.add(lblPatientETA, CopypatientTitleRow0211449b4892544);
    var ListBoxPatienETA = new kony.ui.ListBox({
        "height": "40dp",
        "id": "ListBoxPatienETA",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["0", "Select ETA"],
            ["1", "ASAP"],
            ["2", "Within 3 Hours"],
            ["3", "Within 6 Hours"]
        ],
        "selectedKey": "0",
        "selectedKeyValue": ["0", "Select ETA"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon.png",
        "placeholder": "Select ETA",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flxContainerAdmittingPreferencesAdmitForm.add(patientTitleRow1, ListBoxAdmittingHospital, patientTitleRow2, ListBoxAdmittingGroup, ListBoxSelectPhysicialAdmitForm, lblRequestDocToDoc, ListBoxRequestDocToDocAdmitForm, patientTitleRow3, ListBoxPatienETA);
    var flexContainerBedAssignAlert = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerBedAssignAlert",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerBedAssignAlert.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0925f86a3057d4e = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0925f86a3057d4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0f8061b93e4d241 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0f8061b93e4d241",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_538c0551c725445cb34599759af920f1,
        "skin": "sknadmissionDetails1",
        "text": "Bed Assign Alert",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitPageBedAssignAlert = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitPageBedAssignAlert",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_538c0551c725445cb34599759af920f1,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerBedAssignAlert.add(CopyimgCollapsable0925f86a3057d4e, CopylableAdmissionDetails0f8061b93e4d241, imgCollapseArrowAdmitPageBedAssignAlert);
    var flxContainerBedAssignAlertAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerBedAssignAlertAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerBedAssignAlertAdmitForm.setDefaultUnit(kony.flex.DP);
    var tfEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0ca2a7b5c5b3646",
        "height": "40dp",
        "id": "tfEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "maxTextLength": null,
        "placeholder": "Patient Email",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtpatientCellPhone = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0f513678f76e54b",
        "height": "40dp",
        "id": "txtpatientCellPhone",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Patient Cell Phone",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopytfFirstName09a1571832b3a49 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0b523c08ef3ba4b",
        "height": "40dp",
        "id": "CopytfFirstName09a1571832b3a49",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Staff Cell Phone",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxContainerBedAssignAlertAdmitForm.add(tfEmail, txtpatientCellPhone, CopytfFirstName09a1571832b3a49);
    var flexContainerPatientDiagnosis = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerPatientDiagnosis",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerPatientDiagnosis.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0d2b186a732e141 = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0d2b186a732e141",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0b2f0524f583a44 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0b2f0524f583a44",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_d2dc0f6b70824b2d9f5642e525a43317,
        "skin": "sknadmissionDetails1",
        "text": "Patient Diagnosis",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitformPatientDiagnosis = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitformPatientDiagnosis",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_d2dc0f6b70824b2d9f5642e525a43317,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerPatientDiagnosis.add(CopyimgCollapsable0d2b186a732e141, CopylableAdmissionDetails0b2f0524f583a44, imgCollapseArrowAdmitformPatientDiagnosis);
    var flxContainerPatientDiagnosisAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerPatientDiagnosisAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerPatientDiagnosisAdmitForm.setDefaultUnit(kony.flex.DP);
    var TBChiefComplaint = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0320586b8ebd042",
        "height": "40dp",
        "id": "TBChiefComplaint",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Chief Complaint",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var tbAdditionalinfo = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin01304978231d041",
        "height": "40dp",
        "id": "tbAdditionalinfo",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Additional Info",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxContainerPatientDiagnosisAdmitForm.add(TBChiefComplaint, tbAdditionalinfo);
    var flexContainerInfectiousDiseaseQuestionnaire = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerInfectiousDiseaseQuestionnaire",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerInfectiousDiseaseQuestionnaire.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0758d7cdaa0634b = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0758d7cdaa0634b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails089eb49958b0645 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails089eb49958b0645",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_3517a8ee729842769c095c8668e88353,
        "skin": "sknadmissionDetails1",
        "text": "Infectious Disease Questionnaire",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormInfectiousDiseaseQuestionarrie = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormInfectiousDiseaseQuestionarrie",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_3517a8ee729842769c095c8668e88353,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerInfectiousDiseaseQuestionnaire.add(CopyimgCollapsable0758d7cdaa0634b, CopylableAdmissionDetails089eb49958b0645, imgCollapseArrowAdmitFormInfectiousDiseaseQuestionarrie);
    var flxContainerInfectiousDiceaseQuestionareAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerInfectiousDiceaseQuestionareAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerInfectiousDiceaseQuestionareAdmitForm.setDefaultUnit(kony.flex.DP);
    var RichText0e268e6eb0ef847 = new kony.ui.RichText({
        "id": "RichText0e268e6eb0ef847",
        "isVisible": true,
        "left": "5dp",
        "skin": "slRichTexInfectiousDiseaseQuestionnaire1",
        "text": "During the past 21 days (3 weeks) has the patient:",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText009dcff9c115440 = new kony.ui.RichText({
        "id": "CopyRichText009dcff9c115440",
        "isVisible": true,
        "left": "5dp",
        "skin": "slRichTexInfectiousDiseaseQuestionnaire1",
        "text": "Had contact with a person known or suspected of having Ebola?",
        "top": "5dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer0cc9f2aea626547 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0cc9f2aea626547",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0cc9f2aea626547.setDefaultUnit(kony.flex.DP);
    var LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO = new kony.ui.Label({
        "id": "LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS__0577968ac2964d3da988556b5dcf0bee,
        "skin": "slLabelMediationOrders",
        "text": "No",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes = new kony.ui.Label({
        "id": "LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes",
        "isVisible": true,
        "left": "30dp",
        "onTouchStart": AS__f50604f9c95b417089b25351103d9244,
        "skin": "slLabelMediationOrders",
        "text": "Yes",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0cc9f2aea626547.add(LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO, LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes);
    var CopyRichText0a65fe0b6569844 = new kony.ui.RichText({
        "id": "CopyRichText0a65fe0b6569844",
        "isVisible": true,
        "left": "5dp",
        "skin": "slRichTexInfectiousDiseaseQuestionnaire1",
        "text": "Travelled to a country in West Africa (Guinea, Liberia, Nigeria, Senegal or Sierra Leone)?",
        "top": "5dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer0ce6a6ed28b7b42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0ce6a6ed28b7b42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ce6a6ed28b7b42.setDefaultUnit(kony.flex.DP);
    var LabelInfectiousDiseaseQuestionnaireTravelledNo = new kony.ui.Label({
        "id": "LabelInfectiousDiseaseQuestionnaireTravelledNo",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS__80ae979ceaab4c07862076f7a0c061fa,
        "skin": "slLabelMediationOrders",
        "text": "No",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LabelInfectiousDiseaseQuestionnaireTravelledYes = new kony.ui.Label({
        "id": "LabelInfectiousDiseaseQuestionnaireTravelledYes",
        "isVisible": true,
        "left": "30dp",
        "onTouchStart": AS__e69cc64b83e54ec29e1a445c59c1abc6,
        "skin": "slLabelMediationOrders",
        "text": "Yes",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0ce6a6ed28b7b42.add(LabelInfectiousDiseaseQuestionnaireTravelledNo, LabelInfectiousDiseaseQuestionnaireTravelledYes);
    flxContainerInfectiousDiceaseQuestionareAdmitForm.add(RichText0e268e6eb0ef847, CopyRichText009dcff9c115440, CopyFlexContainer0cc9f2aea626547, CopyRichText0a65fe0b6569844, CopyFlexContainer0ce6a6ed28b7b42);
    var flexContainerSepsisScreening = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerSepsisScreening",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerSepsisScreening.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0a86e8b2dc4464b = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0a86e8b2dc4464b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails07ef8275757564e = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails07ef8275757564e",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_c0851c46d4304418bb300c7a97d1abc3,
        "skin": "sknadmissionDetails1",
        "text": "Sepsis Screening",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormSepsisScreeing = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormSepsisScreeing",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_c0851c46d4304418bb300c7a97d1abc3,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerSepsisScreening.add(CopyimgCollapsable0a86e8b2dc4464b, CopylableAdmissionDetails07ef8275757564e, imgCollapseArrowAdmitFormSepsisScreeing);
    var flxContainerSepsisScreeingAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerSepsisScreeingAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerSepsisScreeingAdmitForm.setDefaultUnit(kony.flex.DP);
    var FlexContainer030961230942f49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer030961230942f49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    FlexContainer030961230942f49.setDefaultUnit(kony.flex.DP);
    var Label0c84c621b102246 = new kony.ui.Label({
        "id": "Label0c84c621b102246",
        "isVisible": true,
        "left": "5dp",
        "skin": "fieldLabel2Skin",
        "text": "SIRS:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0443da55fb2f945 = new kony.ui.Label({
        "id": "Label0443da55fb2f945",
        "isVisible": true,
        "left": "0dp",
        "skin": "labelstar",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "-2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer030961230942f49.add(Label0c84c621b102246, Label0443da55fb2f945);
    var SegmentSepsisScreeingSIRS = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Label"
        }, {
            "labelmediationOthers": "Label"
        }, {
            "labelmediationOthers": "Label"
        }, {
            "labelmediationOthers": "Label"
        }, {
            "labelmediationOthers": "Label"
        }],
        "groupCells": false,
        "id": "SegmentSepsisScreeingSIRS",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS__5b397197fec94fb5821098fc2c584f80,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "75%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainerSepsisScreeingAdmitForm.add(FlexContainer030961230942f49, SegmentSepsisScreeingSIRS);
    var flexContainerVitalSigns = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerVitalSigns",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerVitalSigns.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable085c227ed25e249 = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable085c227ed25e249",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails06ce43ff962814d = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails06ce43ff962814d",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_ce830ea07f2b4479a29c460e4393818e,
        "skin": "sknadmissionDetails1",
        "text": "Vital Signs",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitformVitalSigns = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitformVitalSigns",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_ce830ea07f2b4479a29c460e4393818e,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerVitalSigns.add(CopyimgCollapsable085c227ed25e249, CopylableAdmissionDetails06ce43ff962814d, imgCollapseArrowAdmitformVitalSigns);
    var flxContainerVitalSignsAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerVitalSignsAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerVitalSignsAdmitForm.setDefaultUnit(kony.flex.DP);
    var CalendarAdmitformVitalSigns = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateComponents": [5, 11, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 5,
        "formattedDate": "05/11/2016",
        "height": "40dp",
        "hour": 0,
        "id": "CalendarAdmitformVitalSigns",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 11,
        "onSelection": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "dd/MM/yyyy",
        "seconds": 0,
        "skin": "sknCalendarAdmitpage",
        "top": "0dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "100%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {});
    var TBAdmitFormTemparature = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0b9881512908346",
        "height": "40dp",
        "id": "TBAdmitFormTemparature",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Temperature *(F)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormBP = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin00a33d5aa773347",
        "height": "40dp",
        "id": "TBAdmitFormBP",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Blood Pressure *(Systolic)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormDiastolic = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin005c20acea1d649",
        "height": "40dp",
        "id": "TBAdmitFormDiastolic",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Diastolic *",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormPulse = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0855c53b5c70646",
        "height": "40dp",
        "id": "TBAdmitFormPulse",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Pulse *(BPM)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormO2Level = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0e2b847d99e094c",
        "height": "40dp",
        "id": "TBAdmitFormO2Level",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "O2 Level *(%)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormWeight = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0cdff98a16e9e41",
        "height": "40dp",
        "id": "TBAdmitFormWeight",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Weight *(Pounds)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormHeight = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin0ebaaa2771df84c",
        "height": "40dp",
        "id": "TBAdmitFormHeight",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Height *(Inches)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TBAdmitFormBodyMass = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin097d3664ea13049",
        "height": "40dp",
        "id": "TBAdmitFormBodyMass",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_a511e27cdb9b40fdbe41098c1a435a26,
        "placeholder": "Body mass index-BMI(Lb/In^2)",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxContainerVitalSignsAdmitForm.add(CalendarAdmitformVitalSigns, TBAdmitFormTemparature, TBAdmitFormBP, TBAdmitFormDiastolic, TBAdmitFormPulse, TBAdmitFormO2Level, TBAdmitFormWeight, TBAdmitFormHeight, TBAdmitFormBodyMass);
    var flexContainerPatientStatus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerPatientStatus",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerPatientStatus.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0e051f7eac28a47 = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0e051f7eac28a47",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0f45944c1ed8349 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0f45944c1ed8349",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_8d0e1c801eb84f4a8b88961a6f470fb6,
        "skin": "sknadmissionDetails1",
        "text": "Patient Status",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormPatientStatus1 = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormPatientStatus1",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_8d0e1c801eb84f4a8b88961a6f470fb6,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerPatientStatus.add(CopyimgCollapsable0e051f7eac28a47, CopylableAdmissionDetails0f45944c1ed8349, imgCollapseArrowAdmitFormPatientStatus1);
    var flxContainerPatientStatusAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerPatientStatusAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerPatientStatusAdmitForm.setDefaultUnit(kony.flex.DP);
    var CopyLabel0b75c0481e6ff48 = new kony.ui.Label({
        "id": "CopyLabel0b75c0481e6ff48",
        "isVisible": true,
        "left": "10dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Code status (tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var SegmentPatientStatusCodeStatus = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "ImagePatientCodeStatus1": "imagedrag.png",
            "ImagePatientCodeStatus2": "imagedrag.png",
            "ImagePatientCodeStatus3": "imagedrag.png",
            "ImagePatientCodeStatus4": "imagedrag.png",
            "LabelPatientCodeStatus1": "Label",
            "LabelPatientCodeStatus2": "Label",
            "LabelPatientCodeStatus3": "Label",
            "LabelPatientCodeStatus4": "Label"
        }],
        "groupCells": false,
        "id": "SegmentPatientStatusCodeStatus",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer0c2984e9049944e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "5dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0c2984e9049944e": "CopyFlexContainer0c2984e9049944e",
            "FlexContainerPatientStatusCodeStatus1": "FlexContainerPatientStatusCodeStatus1",
            "FlexContainerPatientStatusCodeStatus2": "FlexContainerPatientStatusCodeStatus2",
            "FlexContainerPatientStatusCodeStatus3": "FlexContainerPatientStatusCodeStatus3",
            "FlexContainerPatientStatusCodeStatus4": "FlexContainerPatientStatusCodeStatus4",
            "ImagePatientCodeStatus1": "ImagePatientCodeStatus1",
            "ImagePatientCodeStatus2": "ImagePatientCodeStatus2",
            "ImagePatientCodeStatus3": "ImagePatientCodeStatus3",
            "ImagePatientCodeStatus4": "ImagePatientCodeStatus4",
            "LabelPatientCodeStatus1": "LabelPatientCodeStatus1",
            "LabelPatientCodeStatus2": "LabelPatientCodeStatus2",
            "LabelPatientCodeStatus3": "LabelPatientCodeStatus3",
            "LabelPatientCodeStatus4": "LabelPatientCodeStatus4"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainerPatientStatusAdmitForm.add(CopyLabel0b75c0481e6ff48, SegmentPatientStatusCodeStatus);
    patientMandatorySection.add(flexContainerPatientInfo, flxContainerPatientInfoAdmitForm, flexContainerAdmittingPreferences, flxContainerAdmittingPreferencesAdmitForm, flexContainerBedAssignAlert, flxContainerBedAssignAlertAdmitForm, flexContainerPatientDiagnosis, flxContainerPatientDiagnosisAdmitForm, flexContainerInfectiousDiseaseQuestionnaire, flxContainerInfectiousDiceaseQuestionareAdmitForm, flexContainerSepsisScreening, flxContainerSepsisScreeingAdmitForm, flexContainerVitalSigns, flxContainerVitalSignsAdmitForm, flexContainerPatientStatus, flxContainerPatientStatusAdmitForm);
    var admitTabStickyFooter1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 5,
        "clipBounds": true,
        "height": "50dp",
        "id": "admitTabStickyFooter1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox007396ecdc0154b",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabStickyFooter1.setDefaultUnit(kony.flex.DP);
    var patientSubmit = new kony.ui.Button({
        "height": "100%",
        "id": "patientSubmit",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_2d8730b20ada430e8123dab92eb2265d,
        "skin": "sknAdmitFormSubmitDisable",
        "text": "Submit",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 1],
        "paddingInPixel": false
    }, {});
    admitTabStickyFooter1.add(patientSubmit);
    TestpatientTab.add(admitTabActiveBorder1, innerTabRow, patientMandatorySection, admitTabStickyFooter1);
    admitFormTabSection.addTab("TestpatientTab", "Patient", null, TestpatientTab, AS_NamedActions_13f36a91edd14b358667a0fc935daedd);
    var TestDiagnosTab = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "100%",
        "id": "TestDiagnosTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onInit": AS_NamedActions_c650ed97c0f5429f9b7d64f3be30c2be,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab034d8d96299ed4a",
        "tabName": "Diagnostics",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    TestDiagnosTab.setDefaultUnit(kony.flex.DP);
    var admitTabActiveBorder2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "admitTabActiveBorder2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabActiveBorder2.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer056c5894ca66b49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "CopyFlexContainer056c5894ca66b49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33.33%",
        "skin": "admitFormTabBorderColorSkin",
        "top": "0dp",
        "width": "33.33%"
    }, {}, {});
    CopyFlexContainer056c5894ca66b49.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer056c5894ca66b49.add();
    admitTabActiveBorder2.add(CopyFlexContainer056c5894ca66b49);
    var CopyinnerTabRow06443f593da7347 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "7%",
        "id": "CopyinnerTabRow06443f593da7347",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "innerTabRowSkin",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyinnerTabRow06443f593da7347.setDefaultUnit(kony.flex.DP);
    var CopylableAdmissionDetails0f139c38221e64a = new kony.ui.Label({
        "id": "CopylableAdmissionDetails0f139c38221e64a",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblFeilds",
        "text": "Feilds",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "25%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyinnerTabRow013ef110495d343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyinnerTabRow013ef110495d343",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "innerTabRowSkin1",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    CopyinnerTabRow013ef110495d343.setDefaultUnit(kony.flex.DP);
    var CopylableAdmissionDetails058a63e566abd49 = new kony.ui.Label({
        "id": "CopylableAdmissionDetails058a63e566abd49",
        "isVisible": true,
        "left": "25dp",
        "right": "2dp",
        "skin": "labelstarforMandatory",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "3%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnDiagnosticsMandatory = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnDiagnosticsMandatory",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_NamedActions_0cd65a6aaa874377936d28fca98abaf2,
        "skin": "sknbtnFeilds",
        "text": "Mandatory",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    var btnDiagnosticsPreferred = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnDiagnosticsPreferred",
        "isVisible": true,
        "left": 0,
        "onClick": AS__6477c23e4b024f879273f3fda0e8698f,
        "skin": "sknbtnFeilds",
        "text": "Preferred",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    var btnDiagnosticsall = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnDiagnosticsall",
        "isVisible": true,
        "onClick": AS_NamedActions_c650ed97c0f5429f9b7d64f3be30c2be,
        "right": "0dp",
        "skin": "sknbtnFeilds",
        "text": "All",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    CopyinnerTabRow013ef110495d343.add(CopylableAdmissionDetails058a63e566abd49, btnDiagnosticsMandatory, btnDiagnosticsPreferred, btnDiagnosticsall);
    CopyinnerTabRow06443f593da7347.add(CopylableAdmissionDetails0f139c38221e64a, CopyinnerTabRow013ef110495d343);
    var flxContainerdiagnosticsAll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "72%",
        "horizontalScrollIndicator": true,
        "id": "flxContainerdiagnosticsAll",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "pagingEnabled": false,
        "right": "2%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "12%",
        "verticalScrollIndicator": true,
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxContainerdiagnosticsAll.setDefaultUnit(kony.flex.DP);
    var flexContainerMedicalHistory = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerMedicalHistory",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "-10dp",
        "width": "100%"
    }, {}, {});
    flexContainerMedicalHistory.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0504883898bf34a = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0504883898bf34a",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails039d4183dda064d = new kony.ui.Label({
        "centerY": "24dp",
        "id": "CopylableAdmissionDetails039d4183dda064d",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_133a1a770f3e4dcbb9284e6122566f39,
        "skin": "sknadmissionDetails1",
        "text": "Medical History",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmiitFormMedicalHistory = new kony.ui.Image2({
        "centerY": "24dp",
        "height": "20dp",
        "id": "imgCollapseArrowAdmiitFormMedicalHistory",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_133a1a770f3e4dcbb9284e6122566f39,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerMedicalHistory.add(CopyimgCollapsable0504883898bf34a, CopylableAdmissionDetails039d4183dda064d, imgCollapseArrowAdmiitFormMedicalHistory);
    var FlexContainerMedicalHistoryAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerMedicalHistoryAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerMedicalHistoryAdmitForm.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c3d793482e6141 = new kony.ui.Label({
        "id": "CopyLabel0c3d793482e6141",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Comorbidity (Tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var SetmentComorbidity = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "btnComorbidity1": "Button",
            "btnComorbidity2": "Button",
            "btnComorbidity3": "Button",
            "btnComorbidity4": "Button",
            "btnComorbidity5": "Button"
        }],
        "groupCells": false,
        "id": "SetmentComorbidity",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer018b5621e817e4e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": true,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer018b5621e817e4e": "CopyFlexContainer018b5621e817e4e",
            "btnComorbidity1": "btnComorbidity1",
            "btnComorbidity2": "btnComorbidity2",
            "btnComorbidity3": "btnComorbidity3",
            "btnComorbidity4": "btnComorbidity4",
            "btnComorbidity5": "btnComorbidity5"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0446c27a3082c40 = new kony.ui.Label({
        "id": "CopyLabel0446c27a3082c40",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Allergies(Tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var SegmentAllergies = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "btnComorbidity1": "Button",
            "btnComorbidity2": "Button",
            "btnComorbidity3": "Button",
            "btnComorbidity4": "Button",
            "btnComorbidity5": "Button"
        }],
        "groupCells": false,
        "id": "SegmentAllergies",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer018b5621e817e4e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": true,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer018b5621e817e4e": "CopyFlexContainer018b5621e817e4e",
            "btnComorbidity1": "btnComorbidity1",
            "btnComorbidity2": "btnComorbidity2",
            "btnComorbidity3": "btnComorbidity3",
            "btnComorbidity4": "btnComorbidity4",
            "btnComorbidity5": "btnComorbidity5"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopytfFirstName0f6ff52cefa7d47 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin063630916e3624f",
        "height": "40dp",
        "id": "CopytfFirstName0f6ff52cefa7d47",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Other Allergies",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyTextArea009cea42688254d = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextArea0b4b635454e244f",
        "id": "CopyTextArea009cea42688254d",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0561307d1efb542",
        "text": "Brief Pertinent Medical Information\n",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "placeholderSkin": "textAreaPlaceHolderSkin"
    });
    var CopyLabel0a3b6d57f5c8840 = new kony.ui.Label({
        "id": "CopyLabel0a3b6d57f5c8840",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Attach Pertinent Patient Madical Bills",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainerMedicalHistoryAdmitForm.add(CopyLabel0c3d793482e6141, SetmentComorbidity, CopyLabel0446c27a3082c40, SegmentAllergies, CopytfFirstName0f6ff52cefa7d47, CopyTextArea009cea42688254d, CopyLabel0a3b6d57f5c8840);
    var flexContainerModeOfTransport = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerModeOfTransport",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerModeOfTransport.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0206ce621a73b4e = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0206ce621a73b4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails06a9bab5d7bf142 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails06a9bab5d7bf142",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_3669fa437d63467385e3dac43b321d13,
        "skin": "sknadmissionDetails1",
        "text": "Mode Of Transport",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitformModeOfTransport = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitformModeOfTransport",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_3669fa437d63467385e3dac43b321d13,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerModeOfTransport.add(CopyimgCollapsable0206ce621a73b4e, CopylableAdmissionDetails06a9bab5d7bf142, imgCollapseArrowAdmitformModeOfTransport);
    var FlexContainerModeOfTransportAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerModeOfTransportAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerModeOfTransportAdmitForm.setDefaultUnit(kony.flex.DP);
    var CopyLabel02ea850849d6942 = new kony.ui.Label({
        "id": "CopyLabel02ea850849d6942",
        "isVisible": true,
        "left": "10dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Mode of Transport (tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0457168d64be44a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0457168d64be44a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0457168d64be44a.setDefaultUnit(kony.flex.DP);
    var segmodeOfTransport1 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imageModeOfTransport": "imagedrag.png",
            "labelModeOfTransport": "Label"
        }, {
            "imageModeOfTransport": "imagedrag.png",
            "labelModeOfTransport": "Label"
        }, {
            "imageModeOfTransport": "imagedrag.png",
            "labelModeOfTransport": "Label"
        }],
        "groupCells": false,
        "id": "segmodeOfTransport1",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS__b0690075fe954ae6ad72e2fff3cb0ca8,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer0e7241c3c9ec048,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0e7241c3c9ec048": "CopyFlexContainer0e7241c3c9ec048",
            "imageModeOfTransport": "imageModeOfTransport",
            "labelModeOfTransport": "labelModeOfTransport"
        },
        "width": "50%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segmodeOfTransport2 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imageModeOfTransport": "imagedrag.png",
            "labelModeOfTransport": "Label"
        }, {
            "imageModeOfTransport": "imagedrag.png",
            "labelModeOfTransport": "Label"
        }, {
            "imageModeOfTransport": "imagedrag.png",
            "labelModeOfTransport": "Label"
        }],
        "groupCells": false,
        "id": "segmodeOfTransport2",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__6bee695c7dec487a9b04af7d35968c54,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer0e7241c3c9ec048,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0e7241c3c9ec048": "CopyFlexContainer0e7241c3c9ec048",
            "imageModeOfTransport": "imageModeOfTransport",
            "labelModeOfTransport": "labelModeOfTransport"
        },
        "width": "50%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0457168d64be44a.add(segmodeOfTransport1, segmodeOfTransport2);
    FlexContainerModeOfTransportAdmitForm.add(CopyLabel02ea850849d6942, CopyFlexContainer0457168d64be44a);
    var flexContainerPrimaryCareProvider = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerPrimaryCareProvider",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerPrimaryCareProvider.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0f58385ac673d4e = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0f58385ac673d4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0e40253d1a76742 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0e40253d1a76742",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_7d02766afc544cd8b3a4d4dc26f97795,
        "skin": "sknadmissionDetails1",
        "text": "Primary Care Provider",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmiitFormPrimaryCareProvider = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmiitFormPrimaryCareProvider",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_7d02766afc544cd8b3a4d4dc26f97795,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerPrimaryCareProvider.add(CopyimgCollapsable0f58385ac673d4e, CopylableAdmissionDetails0e40253d1a76742, imgCollapseArrowAdmiitFormPrimaryCareProvider);
    var FlexContainerPrimaryCareProviderAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerPrimaryCareProviderAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerPrimaryCareProviderAdmitForm.setDefaultUnit(kony.flex.DP);
    var CopyetFirstName0c5368485cfe042 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_WORDS,
        "focusSkin": "CopytextFieldSkin0e4346a154ea74f",
        "height": "40dp",
        "id": "CopyetFirstName0c5368485cfe042",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "PCP's Firstname",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyetLastName0cb04dfd3dfdc41 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin07fd2d3a2eb2c4f",
        "height": "40dp",
        "id": "CopyetLastName0cb04dfd3dfdc41",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "PCP's Lastname",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    FlexContainerPrimaryCareProviderAdmitForm.add(CopyetFirstName0c5368485cfe042, CopyetLastName0cb04dfd3dfdc41);
    flxContainerdiagnosticsAll.add(flexContainerMedicalHistory, FlexContainerMedicalHistoryAdmitForm, flexContainerModeOfTransport, FlexContainerModeOfTransportAdmitForm, flexContainerPrimaryCareProvider, FlexContainerPrimaryCareProviderAdmitForm);
    var admitTabStickyFooter2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "admitTabStickyFooter2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": "0dp",
        "skin": "CopyslFbox007396ecdc0154b",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabStickyFooter2.setDefaultUnit(kony.flex.DP);
    var DiagosticsSubmit = new kony.ui.Button({
        "centerX": "50%",
        "height": "100%",
        "id": "DiagosticsSubmit",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_782920efa8d1416eb4f4391d1b08db39,
        "skin": "sknAdmitFormSubmitDisable",
        "text": "Submit",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    admitTabStickyFooter2.add(DiagosticsSubmit);
    var FlexContainerNoFeilds = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerNoFeilds",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerNoFeilds.setDefaultUnit(kony.flex.DP);
    var Label0a9f095f974dd4b = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50dp",
        "id": "Label0a9f095f974dd4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelNoFeilds",
        "text": "No feilds in this category",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainerNoFeilds.add(Label0a9f095f974dd4b);
    TestDiagnosTab.add(admitTabActiveBorder2, CopyinnerTabRow06443f593da7347, flxContainerdiagnosticsAll, admitTabStickyFooter2, FlexContainerNoFeilds);
    admitFormTabSection.addTab("TestDiagnosTab", "Diagnostics", null, TestDiagnosTab, AS_NamedActions_c650ed97c0f5429f9b7d64f3be30c2be);
    var TestRecommendTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "TestRecommendTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onInit": AS_Button_bd9074a1ed624bea82d3877a955634eb,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab045da3b78ebfc49",
        "tabName": "Recommendations",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    TestRecommendTab.setDefaultUnit(kony.flex.DP);
    var admitTabActiveBorder3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "admitTabActiveBorder3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabActiveBorder3.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0e3a7444f1e334d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "CopyFlexContainer0e3a7444f1e334d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66.67%",
        "skin": "admitFormTabBorderColorSkin",
        "top": "0dp",
        "width": "33.33%"
    }, {}, {});
    CopyFlexContainer0e3a7444f1e334d.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0e3a7444f1e334d.add();
    admitTabActiveBorder3.add(CopyFlexContainer0e3a7444f1e334d);
    var CopyinnerTabRow09d92c6a92f4d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "7%",
        "id": "CopyinnerTabRow09d92c6a92f4d46",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "innerTabRowSkin",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyinnerTabRow09d92c6a92f4d46.setDefaultUnit(kony.flex.DP);
    var CopylableAdmissionDetails04064b65fc5f44b = new kony.ui.Label({
        "id": "CopylableAdmissionDetails04064b65fc5f44b",
        "isVisible": true,
        "left": 0,
        "skin": "sknLblFeilds",
        "text": "Feilds",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0",
        "width": "25%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyinnerTabRow060e90274a2834f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyinnerTabRow060e90274a2834f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "innerTabRowSkin1",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    CopyinnerTabRow060e90274a2834f.setDefaultUnit(kony.flex.DP);
    var CopylableAdmissionDetails04658f579306241 = new kony.ui.Label({
        "id": "CopylableAdmissionDetails04658f579306241",
        "isVisible": true,
        "left": "25dp",
        "right": "2dp",
        "skin": "labelstarforMandatory",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "3%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnRecommendationsMandatory = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnRecommendationsMandatory",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS__6de8822e217f4e1a87614b09e72157ba,
        "skin": "sknbtnFeilds",
        "text": "Mandatory",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    var btnRecommendationsPreferred = new kony.ui.Button({
        "id": "btnRecommendationsPreferred",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS__795d08d7df7740c7a925a1c1385da303,
        "skin": "sknbtnFeilds",
        "text": "Preferred",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    var btnRecommendationsall = new kony.ui.Button({
        "focusSkin": "sknbtnFeildsEnbale1",
        "id": "btnRecommendationsall",
        "isVisible": true,
        "onTouchStart": AS_Button_bd9074a1ed624bea82d3877a955634eb,
        "right": "0dp",
        "skin": "sknbtnFeilds",
        "text": "All",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    CopyinnerTabRow060e90274a2834f.add(CopylableAdmissionDetails04658f579306241, btnRecommendationsMandatory, btnRecommendationsPreferred, btnRecommendationsall);
    CopyinnerTabRow09d92c6a92f4d46.add(CopylableAdmissionDetails04064b65fc5f44b, CopyinnerTabRow060e90274a2834f);
    var recommendationAll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "72%",
        "horizontalScrollIndicator": true,
        "id": "recommendationAll",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "pagingEnabled": false,
        "right": "2%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "12%",
        "verticalScrollIndicator": true,
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    recommendationAll.setDefaultUnit(kony.flex.DP);
    var flexContainerMedicationOrders = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerMedicationOrders",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_NamedActions_d256045992a84e089f04f20ed1f3e15d,
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%"
    }, {}, {});
    flexContainerMedicationOrders.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable034e0c53f87b047 = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable034e0c53f87b047",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails05f046e468b874f = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails05f046e468b874f",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_d256045992a84e089f04f20ed1f3e15d,
        "skin": "sknadmissionDetails1",
        "text": "Medication Orders",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormMedicationOrders = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormMedicationOrders",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_d256045992a84e089f04f20ed1f3e15d,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerMedicationOrders.add(CopyimgCollapsable034e0c53f87b047, CopylableAdmissionDetails05f046e468b874f, imgCollapseArrowAdmitFormMedicationOrders);
    var FlexContainerMedicationOrdersAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerMedicationOrdersAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerMedicationOrdersAdmitForm.setDefaultUnit(kony.flex.DP);
    var RichText05369fb8d23f444 = new kony.ui.RichText({
        "id": "RichText05369fb8d23f444",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknMedicationOrdersRichtxt",
        "text": "Please Note: Any orders that appear should be taken as recommendations from the referring physician to the accepting physician ONLY and are not to be acted on without express consent from the accepting physician.",
        "top": "5dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyListBox0171279a225dc4c = new kony.ui.ListBox({
        "height": "40dp",
        "id": "CopyListBox0171279a225dc4c",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Test Hospital for Running Scripts"],
            ["lb2", "Test Phani Hospital"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Test Hospital for Running Scripts"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon1.png",
        "tickedImage": "tick_03.png",
        "untickedImage": "uncheck.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyListBox06676573e02b94f = new kony.ui.ListBox({
        "height": "40dp",
        "id": "CopyListBox06676573e02b94f",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Test Hospital for Running Scripts"],
            ["lb2", "Test Phani Hospital"]
        ],
        "selectedKey": "lb2",
        "selectedKeyValue": ["lb2", "Test Phani Hospital"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "activeicon1.png",
        "untickedImage": "uncheck.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyLabel0734475b0c8f44b = new kony.ui.Label({
        "id": "CopyLabel0734475b0c8f44b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Order Medications (Tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var segOtherMediations = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Resume All Home Medications"
        }],
        "groupCells": false,
        "id": "segOtherMediations",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS_NamedActions_1bb2f3bf16b241628f94fee5b4ab9391,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "5dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel08d276627a2d647 = new kony.ui.Label({
        "id": "CopyLabel08d276627a2d647",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "PRN Meds (Tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var segmentPRNMeds = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Albuterol 2.5 mg via Ben q6h prn sob"
        }, {
            "labelmediationOthers": "Ambien 5 mg po qhs prn insomnia"
        }, {
            "labelmediationOthers": "Ativan 1 mg po/iv q6h prn agitation"
        }, {
            "labelmediationOthers": "Clonidine 0.1 mg po q 6h prn SBP >= 160"
        }, {
            "labelmediationOthers": "Dilaudid 1 mg iv q4h prn pain scale 1-5"
        }, {
            "labelmediationOthers": "Dilaudid 2 mg iv q4h prn pain scale 6-10"
        }, {
            "labelmediationOthers": "Electrolyte replacement protocol"
        }, {
            "labelmediationOthers": "Hydralazine 10 mg iv q 2h prn SBP >= 160"
        }, {
            "labelmediationOthers": "Ibuprofen 400 mg po q 6h prn fever/pain"
        }, {
            "labelmediationOthers": "Labetolol 10 mg iv q 2h prn SBP >= 160"
        }, {
            "labelmediationOthers": "Maalox 30 cc q 6h prn indigestion"
        }, {
            "labelmediationOthers": "Nicotine patch 21 mcg/hr q day"
        }],
        "groupCells": false,
        "id": "segmentPRNMeds",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS__5fe8882bb1fd46e4ad96044f8e24e5a8,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {});
    FlexContainerMedicationOrdersAdmitForm.add(RichText05369fb8d23f444, CopyListBox0171279a225dc4c, CopyListBox06676573e02b94f, CopyLabel0734475b0c8f44b, segOtherMediations, CopyLabel08d276627a2d647, segmentPRNMeds);
    var FlexContaineTests = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContaineTests",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_NamedActions_e08328f0fedc4f92836454ffa750ffc8,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    FlexContaineTests.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable09b98ca56a35b4a = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable09b98ca56a35b4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0e4319bb2a2ad42 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0e4319bb2a2ad42",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknadmissionDetails1",
        "text": "Tests (Tap to select)",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmitFormTests = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmitFormTests",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_e08328f0fedc4f92836454ffa750ffc8,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContaineTests.add(CopyimgCollapsable09b98ca56a35b4a, CopylableAdmissionDetails0e4319bb2a2ad42, imgCollapseArrowAdmitFormTests);
    var FlexContainerTestsAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerTestsAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainerTestsAdmitForm.setDefaultUnit(kony.flex.DP);
    var CopyLabel0113809d916b644 = new kony.ui.Label({
        "id": "CopyLabel0113809d916b644",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Blood Tests",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer005951b15aa9f43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer005951b15aa9f43",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer005951b15aa9f43.setDefaultUnit(kony.flex.DP);
    var segmentBloodTests1 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Blood CX"
        }, {
            "labelmediationOthers": "BMP"
        }, {
            "labelmediationOthers": "CBC"
        }, {
            "labelmediationOthers": "CKMB"
        }],
        "groupCells": false,
        "id": "segmentBloodTests1",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__a893da236ebe49049e84d804dab3b27b,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "30%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segmentBloodTests2 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "CMP"
        }, {
            "labelmediationOthers": "D Dimer"
        }, {
            "labelmediationOthers": "FLP"
        }, {
            "labelmediationOthers": "LFT"
        }],
        "groupCells": false,
        "id": "segmentBloodTests2",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__97f02b238cef4196bb4415d13f286c08,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "30%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segmentBloodTests3 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "PT"
        }, {
            "labelmediationOthers": "PTT"
        }, {
            "labelmediationOthers": "Trop"
        }, {
            "labelmediationOthers": "TSH"
        }],
        "groupCells": false,
        "id": "segmentBloodTests3",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__ace80bd712154a80945ce30169b88c5c,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "30%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer005951b15aa9f43.add(segmentBloodTests1, segmentBloodTests2, segmentBloodTests3);
    var CopyLabel046c10ff803bb44 = new kony.ui.Label({
        "id": "CopyLabel046c10ff803bb44",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabelDiagonosticsHeading",
        "text": "Urine Tests",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer06eb591f06f064b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer06eb591f06f064b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2%",
        "right": "2%",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer06eb591f06f064b.setDefaultUnit(kony.flex.DP);
    var lblUrineTestsCS = new kony.ui.Label({
        "id": "lblUrineTestsCS",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS__91271a58263a4b61b985af875cbaea8a,
        "skin": "slLabelRecomendationsTests",
        "text": "C&S",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "20%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblUrineTestsCA = new kony.ui.Label({
        "id": "lblUrineTestsCA",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS__eb076c1b4ca841ee901c63b3ad35a9b4,
        "skin": "slLabelRecomendationsTests",
        "text": "UA",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "20%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer06eb591f06f064b.add(lblUrineTestsCS, lblUrineTestsCA);
    FlexContainerTestsAdmitForm.add(CopyLabel0113809d916b644, FlexContainer005951b15aa9f43, CopyLabel046c10ff803bb44, CopyFlexContainer06eb591f06f064b);
    var flexContainerImaging = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerImaging",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_NamedActions_d5ab48750bc44382859c8adac883e95c,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerImaging.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable0a6ba823d0e574b = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable0a6ba823d0e574b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails0cb45c0a07b7347 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails0cb45c0a07b7347",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_NamedActions_d5ab48750bc44382859c8adac883e95c,
        "skin": "sknadmissionDetails1",
        "text": "Imaging / Tests",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmiitFormImaging = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmiitFormImaging",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_NamedActions_d5ab48750bc44382859c8adac883e95c,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerImaging.add(CopyimgCollapsable0a6ba823d0e574b, CopylableAdmissionDetails0cb45c0a07b7347, imgCollapseArrowAdmiitFormImaging);
    var FlexContainerImagingAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerImagingAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainerImagingAdmitForm.setDefaultUnit(kony.flex.DP);
    var FlexContainer0808f30ff70a340 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0808f30ff70a340",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0808f30ff70a340.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer06a5927645d9d4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer06a5927645d9d4e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%"
    }, {}, {});
    CopyFlexContainer06a5927645d9d4e.setDefaultUnit(kony.flex.DP);
    var Image0b838be2318fe47 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "Image0b838be2318fe47",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "xray.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label092bc33f76e2744 = new kony.ui.Label({
        "id": "Label092bc33f76e2744",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelRecomendationsTests",
        "text": "X-Rays",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer06a5927645d9d4e.add(Image0b838be2318fe47, Label092bc33f76e2744);
    var segmentImagingTestsXRays = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Chest X-Ray Portable"
        }, {
            "labelmediationOthers": "KUB"
        }, {
            "labelmediationOthers": "PA/Lateral"
        }, {
            "labelmediationOthers": "Other"
        }],
        "groupCells": false,
        "id": "segmentImagingTestsXRays",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__2fee923db57e40dd822642b011c9e53b,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0f3342dc77dc54e",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "85%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0808f30ff70a340.add(CopyFlexContainer06a5927645d9d4e, segmentImagingTestsXRays);
    var CopyFlexContainer08476b1fb4fd845 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer08476b1fb4fd845",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer08476b1fb4fd845.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer02e312d49f8d34b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer02e312d49f8d34b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%"
    }, {}, {});
    CopyFlexContainer02e312d49f8d34b.setDefaultUnit(kony.flex.DP);
    var CopyImage0a28a12a4addc4d = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "CopyImage0a28a12a4addc4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "us.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel01341f0a198724b = new kony.ui.Label({
        "id": "CopyLabel01341f0a198724b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelRecomendationsTests",
        "text": "US",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer02e312d49f8d34b.add(CopyImage0a28a12a4addc4d, CopyLabel01341f0a198724b);
    var segmentImaginTestsUS = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Abdomen"
        }, {
            "labelmediationOthers": "Doppler - Arterial"
        }, {
            "labelmediationOthers": "Doppler - Venous"
        }, {
            "labelmediationOthers": "Pelvis"
        }, {
            "labelmediationOthers": "Renal"
        }],
        "groupCells": false,
        "id": "segmentImaginTestsUS",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__f552ff361bbd40638e6b9423f92c08ae,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0b08981f13dff47",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "85%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer08476b1fb4fd845.add(CopyFlexContainer02e312d49f8d34b, segmentImaginTestsUS);
    var CopyFlexContainer07d53879e494f4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer07d53879e494f4a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer07d53879e494f4a.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer06b206d471c2a40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer06b206d471c2a40",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%"
    }, {}, {});
    CopyFlexContainer06b206d471c2a40.setDefaultUnit(kony.flex.DP);
    var CopyImage07f767137d3704a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "CopyImage07f767137d3704a",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ct.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0f58c76d0241b41 = new kony.ui.Label({
        "id": "CopyLabel0f58c76d0241b41",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelRecomendationsTests",
        "text": "CT",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer06b206d471c2a40.add(CopyImage07f767137d3704a, CopyLabel0f58c76d0241b41);
    var segmentImagingTestsCT = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Abdomen and Pelvis no contrast Stone Protocol"
        }, {
            "labelmediationOthers": "Abdomen and Pelvis with and without contrast"
        }, {
            "labelmediationOthers": "Brain no contrast"
        }, {
            "labelmediationOthers": "Brain with contrast"
        }, {
            "labelmediationOthers": "Chest PE Protocol"
        }, {
            "labelmediationOthers": "Chest with and without contrast"
        }],
        "groupCells": false,
        "id": "segmentImagingTestsCT",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__2e0665e9d89944e8bea87c67562fe35c,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg042cbd84050994b",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "85%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer07d53879e494f4a.add(CopyFlexContainer06b206d471c2a40, segmentImagingTestsCT);
    var CopyFlexContainer0bece98a556ac4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0bece98a556ac4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0bece98a556ac4c.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0492c2b85aee847 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0492c2b85aee847",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%"
    }, {}, {});
    CopyFlexContainer0492c2b85aee847.setDefaultUnit(kony.flex.DP);
    var CopyImage0f36c55314abc42 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "CopyImage0f36c55314abc42",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "mri.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0fcfa649e895d4b = new kony.ui.Label({
        "id": "CopyLabel0fcfa649e895d4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelRecomendationsTests",
        "text": "MRI",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0492c2b85aee847.add(CopyImage0f36c55314abc42, CopyLabel0fcfa649e895d4b);
    var segmentImagingTestsMRI = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "MRA Neck"
        }, {
            "labelmediationOthers": "MRCP"
        }, {
            "labelmediationOthers": "MRI C Spine"
        }, {
            "labelmediationOthers": "MRI L/S Spine"
        }, {
            "labelmediationOthers": "MRI/MRA Brain"
        }],
        "groupCells": false,
        "id": "segmentImagingTestsMRI",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__ab68fcbd80b043d084df39cb1b3dfe12,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0058f1d18f0ca49",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "85%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0bece98a556ac4c.add(CopyFlexContainer0492c2b85aee847, segmentImagingTestsMRI);
    var CopyFlexContainer0f9911042d19947 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0f9911042d19947",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0f9911042d19947.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer00755eb064db540 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer00755eb064db540",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%"
    }, {}, {});
    CopyFlexContainer00755eb064db540.setDefaultUnit(kony.flex.DP);
    var CopyImage0482e3854b9d948 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25dp",
        "id": "CopyImage0482e3854b9d948",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "mri.png",
        "top": "0dp",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel02d4712f61b2a47 = new kony.ui.Label({
        "id": "CopyLabel02d4712f61b2a47",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelRecomendationsTests",
        "text": "EKG",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer00755eb064db540.add(CopyImage0482e3854b9d948, CopyLabel02d4712f61b2a47);
    var segmentImagingTestsEKG = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "EKG"
        }],
        "groupCells": false,
        "id": "segmentImagingTestsEKG",
        "isVisible": true,
        "left": "5dp",
        "needPageIndicator": true,
        "onRowClick": AS__490469733ab24dd0873283df8bbd7755,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0a240fa22e54847",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "85%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0f9911042d19947.add(CopyFlexContainer00755eb064db540, segmentImagingTestsEKG);
    FlexContainerImagingAdmitForm.add(FlexContainer0808f30ff70a340, CopyFlexContainer08476b1fb4fd845, CopyFlexContainer07d53879e494f4a, CopyFlexContainer0bece98a556ac4c, CopyFlexContainer0f9911042d19947);
    var flexContainerSpecialityConsults = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerSpecialityConsults",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_c84915d7e9774bad8c054996b66182a0,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerSpecialityConsults.setDefaultUnit(kony.flex.DP);
    var CopyimgCollapsable00bffe7e3180443 = new kony.ui.Image2({
        "height": "40dp",
        "id": "CopyimgCollapsable00bffe7e3180443",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylableAdmissionDetails01aeec04320d743 = new kony.ui.Label({
        "centerY": "20dp",
        "id": "CopylableAdmissionDetails01aeec04320d743",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknadmissionDetails1",
        "text": "Speciality Consults",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmiitFormSpecialityConsults = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdmiitFormSpecialityConsults",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_FlexContainer_c84915d7e9774bad8c054996b66182a0,
        "right": "0%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerSpecialityConsults.add(CopyimgCollapsable00bffe7e3180443, CopylableAdmissionDetails01aeec04320d743, imgCollapseArrowAdmiitFormSpecialityConsults);
    var FlexContainerSpecialityConsultsAdmitForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerSpecialityConsultsAdmitForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerSpecialityConsultsAdmitForm.setDefaultUnit(kony.flex.DP);
    var FlexContainer04d9339d29f0343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer04d9339d29f0343",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    FlexContainer04d9339d29f0343.setDefaultUnit(kony.flex.DP);
    var Label05a9d4679f87240 = new kony.ui.Label({
        "id": "Label05a9d4679f87240",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelRecomendationsTests",
        "text": "Consults",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var segmentSpecialityConsults = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelmediationOthers": "Cardiology"
        }, {
            "labelmediationOthers": "Gen Surgery"
        }, {
            "labelmediationOthers": "GI"
        }, {
            "labelmediationOthers": "ID"
        }, {
            "labelmediationOthers": "Nephrology"
        }, {
            "labelmediationOthers": "Neurology"
        }, {
            "labelmediationOthers": "Podiatry"
        }, {
            "labelmediationOthers": "Pulmonology"
        }],
        "groupCells": false,
        "id": "segmentSpecialityConsults",
        "isVisible": true,
        "left": "10dp",
        "needPageIndicator": true,
        "onRowClick": AS__c0ff320afed7478e9f583eaeb0a0ea3c,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg06696a0d07f004f",
        "rowTemplate": FlexContainer09b5d195a6ab142,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer09b5d195a6ab142": "FlexContainer09b5d195a6ab142",
            "labelmediationOthers": "labelmediationOthers"
        },
        "width": "80%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer04d9339d29f0343.add(Label05a9d4679f87240, segmentSpecialityConsults);
    var CopytfFirstName0007d1dc6ee084d = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopytextFieldSkin061f3c5f2c7174a",
        "height": "40dp",
        "id": "CopytfFirstName0007d1dc6ee084d",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Preferred Consultant",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "inputPlaceholderColor1",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TextArea0c762ce33a7d646 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextArea0824be0791f8e43",
        "id": "TextArea0c762ce33a7d646",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Additional Orders",
        "skin": "CopyslTextArea0ad56e11fc1a040",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "placeholderSkin": "textAreaPlaceHolderSkin"
    });
    FlexContainerSpecialityConsultsAdmitForm.add(FlexContainer04d9339d29f0343, CopytfFirstName0007d1dc6ee084d, TextArea0c762ce33a7d646);
    recommendationAll.add(flexContainerMedicationOrders, FlexContainerMedicationOrdersAdmitForm, FlexContaineTests, FlexContainerTestsAdmitForm, flexContainerImaging, FlexContainerImagingAdmitForm, flexContainerSpecialityConsults, FlexContainerSpecialityConsultsAdmitForm);
    var admitTabStickyFooter3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "admitTabStickyFooter3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": "0dp",
        "skin": "CopyslFbox007396ecdc0154b",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabStickyFooter3.setDefaultUnit(kony.flex.DP);
    var RecommendationSubmit = new kony.ui.Button({
        "height": "100%",
        "id": "RecommendationSubmit",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_c3ba88ba59bc48f5b1e2b3ab9e80f0cb,
        "skin": "sknAdmitFormSubmitDisable",
        "text": "Submit",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false
    }, {});
    admitTabStickyFooter3.add(RecommendationSubmit);
    var FlexContainerRecommendationNoFeilds = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerRecommendationNoFeilds",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerRecommendationNoFeilds.setDefaultUnit(kony.flex.DP);
    var CopyLabel09ee356d4cf4d4d = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50dp",
        "id": "CopyLabel09ee356d4cf4d4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelNoFeilds",
        "text": "No feilds in this category",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainerRecommendationNoFeilds.add(CopyLabel09ee356d4cf4d4d);
    var recomTest1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "40dp",
        "id": "recomTest1",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": "0dp",
        "skin": "CopyslFbox0eee9b5ac20d844",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    recomTest1.setDefaultUnit(kony.flex.DP);
    recomTest1.add();
    TestRecommendTab.add(admitTabActiveBorder3, CopyinnerTabRow09d92c6a92f4d46, recommendationAll, admitTabStickyFooter3, FlexContainerRecommendationNoFeilds, recomTest1);
    admitFormTabSection.addTab("TestRecommendTab", "Recommendations", null, TestRecommendTab, AS_Button_bd9074a1ed624bea82d3877a955634eb);
    flexAdmitFormContainer.add(admitFormHeader, selectClinicAndFormTypeContainer, admitFormTabSection);
    flxBodyContainer.add(flexAdmitFormContainer);
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
    frmAdmitForm.add(flxContainer1, flxMenuContainer);
};

function frmAdmitFormGlobals() {
    frmAdmitForm = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAdmitForm,
        "enabledForIdleTimeout": false,
        "id": "frmAdmitForm",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_e6c3c8549b4e4a37adbd6e9ff5b1d25e
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    frmAdmitForm.info = {
        "kuid": "a61f86b4fb384227b844ba626c644872"
    };
};