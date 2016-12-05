function addWidgetsfrmSupport() {
    frmSupport.setDefaultUnit(kony.flex.DP);
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
        "centerY": "50%",
        "height": "40%",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "10dp",
        "onTouchStart": AS_NamedActions_59f90898340d4953be384a35208868b0,
        "src": "imgshape11copy9fd7333c0.png",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigurationAdmissionAlerts = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "labelConfigurationAdmissionAlerts",
        "isVisible": true,
        "skin": "skinActionBarHeader",
        "text": "Support",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxActionbarContainer.add(imgMenuOpen, labelConfigurationAdmissionAlerts);
    var flxBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": 0,
        "skin": "skinBody",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyContainer.setDefaultUnit(kony.flex.DP);
    var supportTabRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "supportTabRow",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    supportTabRow.setDefaultUnit(kony.flex.DP);
    var Button06f47252b88da45 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "Button06f47252b88da45",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue05fdca1fe8c3744",
        "text": "General Feedback",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var generalFeedbackTab = new kony.ui.Button({
        "height": "100%",
        "id": "generalFeedbackTab",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportTabSkin",
        "text": "General Feedback",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0de5a00ef927e45 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "Button0de5a00ef927e45",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue0ec7815a20dea44",
        "text": "Report An Issue",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var ReportAnIssueTab = new kony.ui.Button({
        "height": "100%",
        "id": "ReportAnIssueTab",
        "isVisible": true,
        "left": 0,
        "skin": "supportTabSkin",
        "text": "Report An Issue",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    supportTabRow.add(Button06f47252b88da45, generalFeedbackTab, Button0de5a00ef927e45, ReportAnIssueTab);
    var reportIssueTabContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "82%",
        "id": "reportIssueTabContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox01d89946072df49",
        "top": "6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportIssueTabContainer.setDefaultUnit(kony.flex.DP);
    var reportActiveIcon = new kony.ui.Image2({
        "height": "12dp",
        "id": "reportActiveIcon",
        "isVisible": true,
        "right": "25%",
        "skin": "slImage",
        "src": "activeicon.png",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel02a9fff528fad4a = new kony.ui.Label({
        "centerX": "50%",
        "height": "8%",
        "id": "CopyLabel02a9fff528fad4a",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0ebd9a7770f5f4e",
        "text": "Report An Issue",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var reportIssueContent = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "reportIssueContent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportIssueContent.setDefaultUnit(kony.flex.DP);
    var reportTabContentRow1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reportTabContentRow1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportTabContentRow1.setDefaultUnit(kony.flex.DP);
    var supportImpLabel1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "supportImpLabel1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%"
    }, {}, {});
    supportImpLabel1.setDefaultUnit(kony.flex.DP);
    var reportSelectModuleLabel1 = new kony.ui.Label({
        "id": "reportSelectModuleLabel1",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportContLabel",
        "text": "Select Module  ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0e5a66263aefe43 = new kony.ui.Label({
        "id": "Label0e5a66263aefe43",
        "isVisible": true,
        "left": "90dp",
        "skin": "starSkin",
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
    supportImpLabel1.add(reportSelectModuleLabel1, Label0e5a66263aefe43);
    var reportSelectModuleListBox = new kony.ui.ListBox({
        "height": "40dp",
        "id": "reportSelectModuleListBox",
        "isVisible": true,
        "left": "3%",
        "masterData": [
            ["lb1", "Choose Module"],
            ["lb2", "Admission Details"],
            ["lb3", "Dashboard"],
            ["Key335", "Discharge Notifications"],
            ["Key674", "Form"],
            ["Key255", "Profile"]
        ],
        "right": "2%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Choose Module"],
        "skin": "supportFieldsSkin",
        "top": "30dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    reportTabContentRow1.add(supportImpLabel1, reportSelectModuleListBox);
    var reportIssueHeadingSection1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reportIssueHeadingSection1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "4dp",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    reportIssueHeadingSection1.setDefaultUnit(kony.flex.DP);
    var reportHeadingLabel1 = new kony.ui.Label({
        "id": "reportHeadingLabel1",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportHeadingSkin",
        "text": "Describe the bug in as much detail as possible",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var supportHeadingBorder1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3dp",
        "id": "supportHeadingBorder1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "supportBorderSkin",
        "top": "40dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    supportHeadingBorder1.setDefaultUnit(kony.flex.DP);
    supportHeadingBorder1.add();
    reportIssueHeadingSection1.add(reportHeadingLabel1, supportHeadingBorder1);
    var reportTabContentRow2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reportTabContentRow2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportTabContentRow2.setDefaultUnit(kony.flex.DP);
    var reportBrowserLabel = new kony.ui.Label({
        "id": "reportBrowserLabel",
        "isVisible": true,
        "left": "3%",
        "right": "2%",
        "skin": "supportContLabel",
        "text": "Which browser are you using?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "11dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var reportBowserList = new kony.ui.ListBox({
        "height": "40dp",
        "id": "reportBowserList",
        "isVisible": true,
        "left": "3%",
        "masterData": [
            ["lb1", "Choose Browser"],
            ["lb2", "Internet Explorer"],
            ["lb3", "Firefox"],
            ["Key901", "Google Chrome"],
            ["Key381", "Safari"],
            ["Key166", "Opera"],
            ["Key910", "Other"]
        ],
        "right": "2%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Choose Browser"],
        "skin": "supportFieldsSkin",
        "top": "35dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    reportTabContentRow2.add(reportBrowserLabel, reportBowserList);
    var reportTabContentRow3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reportTabContentRow3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "supporttextFieldSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportTabContentRow3.setDefaultUnit(kony.flex.DP);
    var supportImpLabel2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "supportImpLabel2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%"
    }, {}, {});
    supportImpLabel2.setDefaultUnit(kony.flex.DP);
    var CopyreportSelectModuleLabel05da12ea0ebfe47 = new kony.ui.Label({
        "id": "CopyreportSelectModuleLabel05da12ea0ebfe47",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportContLabel",
        "text": "Explain the issue you encountered.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0b62b8d65633742 = new kony.ui.Label({
        "id": "CopyLabel0b62b8d65633742",
        "isVisible": true,
        "left": "220dp",
        "skin": "starSkin",
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
    supportImpLabel2.add(CopyreportSelectModuleLabel05da12ea0ebfe47, CopyLabel0b62b8d65633742);
    var TextArea06c9a8d1ee3eb4a = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "90dp",
        "id": "TextArea06c9a8d1ee3eb4a",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "numberOfVisibleLines": 3,
        "right": "2%",
        "skin": "textAreaSupportSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "30dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    reportTabContentRow3.add(supportImpLabel2, TextArea06c9a8d1ee3eb4a);
    var reportTabContentRow4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reportTabContentRow4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportTabContentRow4.setDefaultUnit(kony.flex.DP);
    var CopysupportImpLabel08bacddd0efde47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopysupportImpLabel08bacddd0efde47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%"
    }, {}, {});
    CopysupportImpLabel08bacddd0efde47.setDefaultUnit(kony.flex.DP);
    var CopyreportSelectModuleLabel0feac97584cd545 = new kony.ui.Label({
        "id": "CopyreportSelectModuleLabel0feac97584cd545",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportContLabel",
        "text": "What were you doing when you experienced the problem?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopysupportImpLabel08bacddd0efde47.add(CopyreportSelectModuleLabel0feac97584cd545);
    var CopyTextArea0d5cfcb76e40b41 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "90dp",
        "id": "CopyTextArea0d5cfcb76e40b41",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "numberOfVisibleLines": 3,
        "right": "2%",
        "skin": "textAreaSupportSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "30dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    reportTabContentRow4.add(CopysupportImpLabel08bacddd0efde47, CopyTextArea0d5cfcb76e40b41);
    var reportTabContentRow5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reportTabContentRow5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    reportTabContentRow5.setDefaultUnit(kony.flex.DP);
    var CopysupportImpLabel0e376c204ebb24b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopysupportImpLabel0e376c204ebb24b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%"
    }, {}, {});
    CopysupportImpLabel0e376c204ebb24b.setDefaultUnit(kony.flex.DP);
    var CopyreportSelectModuleLabel030d9117ae13447 = new kony.ui.Label({
        "id": "CopyreportSelectModuleLabel030d9117ae13447",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportContLabel",
        "text": "What steps can we follow to reproduce the problem?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopysupportImpLabel0e376c204ebb24b.add(CopyreportSelectModuleLabel030d9117ae13447);
    var CopyTextArea0412831b8e7744b = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "90dp",
        "id": "CopyTextArea0412831b8e7744b",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "numberOfVisibleLines": 3,
        "right": "2%",
        "skin": "textAreaSupportSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "30dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    reportTabContentRow5.add(CopysupportImpLabel0e376c204ebb24b, CopyTextArea0412831b8e7744b);
    var CopyLabel02369650cae8945 = new kony.ui.Label({
        "id": "CopyLabel02369650cae8945",
        "isVisible": true,
        "left": "10dp",
        "skin": "labelsupport1",
        "text": "Attach Files/ScreenShots here",
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
    var CopyFlexScrollContainer05c466fcc95124e = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "5%",
        "horizontalScrollIndicator": true,
        "id": "CopyFlexScrollContainer05c466fcc95124e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "10dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexScrollContainer05c466fcc95124e.setDefaultUnit(kony.flex.DP);
    var CopyButton09df10a8dce1d45 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "CopyButton09df10a8dce1d45",
        "isVisible": true,
        "left": "0dp",
        "skin": "chooseBtnSkin",
        "text": "Choose File",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel07a6c8f11495a4c = new kony.ui.Label({
        "id": "CopyLabel07a6c8f11495a4c",
        "isVisible": true,
        "left": "10dp",
        "skin": "labelsupport1",
        "text": "No File Choosen",
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
    CopyFlexScrollContainer05c466fcc95124e.add(CopyButton09df10a8dce1d45, CopyLabel07a6c8f11495a4c);
    var CopyLabel0cf43a64cbc2243 = new kony.ui.Label({
        "id": "CopyLabel0cf43a64cbc2243",
        "isVisible": true,
        "left": "0dp",
        "skin": "Copylabelsupport07a146253c87b4f",
        "text": "You may also report your issue by calling DASH support team at 1-855-8-STREAM x 100",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [5, 5, 5, 5],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer07895a70b818e49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "20dp",
        "clipBounds": true,
        "height": "40dp",
        "id": "CopyFlexContainer07895a70b818e49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07895a70b818e49.setDefaultUnit(kony.flex.DP);
    var Button0ea722b1cab0648 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "Button0ea722b1cab0648",
        "isVisible": true,
        "left": "25%",
        "skin": "CopyslButtonGlossBlue07a309eb8f7d740",
        "text": "Send",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton02d3cd22ec1774f = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "CopyButton02d3cd22ec1774f",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslButtonGlossBlue0b23b36f274c447",
        "text": "Cancel",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer07895a70b818e49.add(Button0ea722b1cab0648, CopyButton02d3cd22ec1774f);
    reportIssueContent.add(reportTabContentRow1, reportIssueHeadingSection1, reportTabContentRow2, reportTabContentRow3, reportTabContentRow4, reportTabContentRow5, CopyLabel02369650cae8945, CopyFlexScrollContainer05c466fcc95124e, CopyLabel0cf43a64cbc2243, CopyFlexContainer07895a70b818e49);
    reportIssueTabContainer.add(reportActiveIcon, CopyLabel02a9fff528fad4a, reportIssueContent);
    var generalFeedbackTabContaine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "82%",
        "id": "generalFeedbackTabContaine",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox01d89946072df49",
        "top": "6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    generalFeedbackTabContaine.setDefaultUnit(kony.flex.DP);
    var CopyreportActiveIcon07feec779acf14d = new kony.ui.Image2({
        "height": "12dp",
        "id": "CopyreportActiveIcon07feec779acf14d",
        "isVisible": true,
        "left": "25%",
        "skin": "slImage",
        "src": "activeicon.png",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel06909932e1ebc46 = new kony.ui.Label({
        "centerX": "50%",
        "height": "8%",
        "id": "CopyLabel06909932e1ebc46",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0ebd9a7770f5f4e",
        "text": "Report An Issue",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyreportIssueContent08a542d7470a24e = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "CopyreportIssueContent08a542d7470a24e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyreportIssueContent08a542d7470a24e.setDefaultUnit(kony.flex.DP);
    var CopyreportTabContentRow02b9bb39e060f43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyreportTabContentRow02b9bb39e060f43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyreportTabContentRow02b9bb39e060f43.setDefaultUnit(kony.flex.DP);
    var CopysupportImpLabel0196247d4d55e41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopysupportImpLabel0196247d4d55e41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%"
    }, {}, {});
    CopysupportImpLabel0196247d4d55e41.setDefaultUnit(kony.flex.DP);
    var CopyreportSelectModuleLabel0c33e63d9b0b34f = new kony.ui.Label({
        "id": "CopyreportSelectModuleLabel0c33e63d9b0b34f",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportContLabel",
        "text": "Select Module  ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel021897b430ddf46 = new kony.ui.Label({
        "id": "CopyLabel021897b430ddf46",
        "isVisible": true,
        "left": "90dp",
        "skin": "starSkin",
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
    CopysupportImpLabel0196247d4d55e41.add(CopyreportSelectModuleLabel0c33e63d9b0b34f, CopyLabel021897b430ddf46);
    var CopyreportSelectModuleListBox024816da7fb0b46 = new kony.ui.ListBox({
        "height": "40dp",
        "id": "CopyreportSelectModuleListBox024816da7fb0b46",
        "isVisible": true,
        "left": "3%",
        "masterData": [
            ["lb1", "Choose Module"],
            ["lb2", "Admission Details"],
            ["lb3", "Dashboard"],
            ["Key335", "Discharge Notifications"],
            ["Key674", "Form"],
            ["Key255", "Profile"]
        ],
        "right": "2%",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Choose Module"],
        "skin": "supportFieldsSkin",
        "top": "30dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    CopyreportTabContentRow02b9bb39e060f43.add(CopysupportImpLabel0196247d4d55e41, CopyreportSelectModuleListBox024816da7fb0b46);
    var CopyreportTabContentRow0bc2c9c68d8484e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyreportTabContentRow0bc2c9c68d8484e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "supporttextFieldSkin",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyreportTabContentRow0bc2c9c68d8484e.setDefaultUnit(kony.flex.DP);
    var CopysupportImpLabel0b33431c314e244 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopysupportImpLabel0b33431c314e244",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "2%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%"
    }, {}, {});
    CopysupportImpLabel0b33431c314e244.setDefaultUnit(kony.flex.DP);
    var CopyreportSelectModuleLabel01b42aafc30ab4b = new kony.ui.Label({
        "id": "CopyreportSelectModuleLabel01b42aafc30ab4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "supportContLabel",
        "text": "Your Feedback",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0a1b4d1ec85a843 = new kony.ui.Label({
        "id": "CopyLabel0a1b4d1ec85a843",
        "isVisible": true,
        "left": "90dp",
        "skin": "starSkin",
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
    CopysupportImpLabel0b33431c314e244.add(CopyreportSelectModuleLabel01b42aafc30ab4b, CopyLabel0a1b4d1ec85a843);
    var CopyTextArea06f5b4f2416bb47 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "90dp",
        "id": "CopyTextArea06f5b4f2416bb47",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "numberOfVisibleLines": 3,
        "right": "2%",
        "skin": "textAreaSupportSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "30dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    CopyreportTabContentRow0bc2c9c68d8484e.add(CopysupportImpLabel0b33431c314e244, CopyTextArea06f5b4f2416bb47);
    var CopyFlexContainer0b2bc9da1772a4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "20dp",
        "clipBounds": true,
        "height": "40dp",
        "id": "CopyFlexContainer0b2bc9da1772a4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b2bc9da1772a4c.setDefaultUnit(kony.flex.DP);
    var CopyButton0c46395739dc546 = new kony.ui.Button({
        "height": "40dp",
        "id": "CopyButton0c46395739dc546",
        "isVisible": true,
        "left": "25%",
        "skin": "CopyslButtonGlossBlue07a309eb8f7d740",
        "text": "Send",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0592b16e29d8741 = new kony.ui.Button({
        "height": "40dp",
        "id": "CopyButton0592b16e29d8741",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslButtonGlossBlue0b23b36f274c447",
        "text": "Cancel",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0b2bc9da1772a4c.add(CopyButton0c46395739dc546, CopyButton0592b16e29d8741);
    CopyreportIssueContent08a542d7470a24e.add(CopyreportTabContentRow02b9bb39e060f43, CopyreportTabContentRow0bc2c9c68d8484e, CopyFlexContainer0b2bc9da1772a4c);
    generalFeedbackTabContaine.add(CopyreportActiveIcon07feec779acf14d, CopyLabel06909932e1ebc46, CopyreportIssueContent08a542d7470a24e);
    flxBodyContainer.add(supportTabRow, reportIssueTabContainer, generalFeedbackTabContaine);
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
        "onClick": AS_NamedActions_ae9476a8164c45e09f2c52d480b93779,
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
    frmSupport.add(flxContainer1, flxMenuContainer);
};

function frmSupportGlobals() {
    frmSupport = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSupport,
        "enabledForIdleTimeout": false,
        "id": "frmSupport",
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
    frmSupport.info = {
        "kuid": "b3b5324350fc4699a656b11729de50de"
    };
};