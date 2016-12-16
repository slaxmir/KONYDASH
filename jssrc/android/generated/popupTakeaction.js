function addWidgetspopupTakeaction() {
    var popupUpdateAdmissionsRow1 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupUpdateAdmissionsRow1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupUpdateAdmissionsTitle = new kony.ui.Label({
        "id": "popupUpdateAdmissionsTitle",
        "isVisible": true,
        "skin": "popupReferringFacilityTitleSkin",
        "text": "Update Admissions",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var TakeActionCloseIcon = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "TakeActionCloseIcon",
        "isVisible": true,
        "skin": "popCloseIconSkin",
        "text": "X"
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    popupUpdateAdmissionsRow1.add(popupUpdateAdmissionsTitle, TakeActionCloseIcon);
    var referringUpdateAdmissionsBorder = new kony.ui.Line({
        "id": "referringUpdateAdmissionsBorder",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 2
    }, {});
    var popupBedAvailable = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupBedAvailable",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow2Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupBedAvailableHeading1 = new kony.ui.Label({
        "id": "popupBedAvailableHeading1",
        "isVisible": true,
        "skin": "popupReferringFacilityRow2Heading1Skin",
        "text": "Bed Available",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 10, 1, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    popupBedAvailable.add(popupBedAvailableHeading1);
    var BedAvailableTextAreaLabel = new kony.ui.Label({
        "id": "BedAvailableTextAreaLabel",
        "isVisible": true,
        "skin": "CopyslLabel085287381776447",
        "text": "Note",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 2, 1, 1],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var BedAvailableTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyBedAvailableTextAreaSkin07bd9103bdc714b",
        "id": "BedAvailableTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Note",
        "skin": "BedAvailableTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var BedAvailableButtonsRow = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "BedAvailableButtonsRow",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "BedAvailableButtonsRowSkin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 3, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var BedAvailableButton = new kony.ui.Button({
        "id": "BedAvailableButton",
        "isVisible": true,
        "skin": "BedAvailableButtonSkin",
        "text": "Bed Available"
    }, {
        "containerWeight": 48,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var BedUnAvailableButton = new kony.ui.Button({
        "id": "BedUnAvailableButton",
        "isVisible": true,
        "skin": "BedUnAvailableButtonSkin",
        "text": "Bed UnAvailable"
    }, {
        "containerWeight": 48,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    BedAvailableButtonsRow.add(BedAvailableButton, BedUnAvailableButton);
    var popupBedAssignRow2 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupBedAssignRow2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow2Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupBedAssignHeading = new kony.ui.Label({
        "id": "popupBedAssignHeading",
        "isVisible": true,
        "skin": "popupReferringFacilityRow2Heading1Skin",
        "text": "Bed Assign",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 6, 1, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    popupBedAssignRow2.add(popupBedAssignHeading);
    var BedAssignLocationLabel = new kony.ui.Label({
        "id": "BedAssignLocationLabel",
        "isVisible": true,
        "skin": "CopyslLabel085287381776447",
        "text": "Location",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 2, 1, 1],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var BedAssignLocation = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyBedAssignNurseSkin09f49aa818d7547",
        "id": "BedAssignLocation",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Location",
        "secureTextEntry": false,
        "skin": "BedAssignNurseSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "marginInPixel": false,
        "padding": [3, 4, 1, 4],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var BedAssignNurseLabel = new kony.ui.Label({
        "id": "BedAssignNurseLabel",
        "isVisible": true,
        "skin": "CopyslLabel085287381776447",
        "text": "Nurse",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 5, 1, 1],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var BedAssignNurse = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyBedAssignNurseSkin0c26b42d1c0c24c",
        "id": "BedAssignNurse",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Nurse",
        "secureTextEntry": false,
        "skin": "BedAssignNurseSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 3, 2, 0],
        "marginInPixel": false,
        "padding": [3, 4, 1, 4],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var BedAssigntextNoteLabel = new kony.ui.Label({
        "id": "BedAssigntextNoteLabel",
        "isVisible": true,
        "skin": "CopyslLabel085287381776447",
        "text": "Note",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 5, 1, 1],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var BedAssignTextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyBedAssignTextAreaSkin014b140a4720a43",
        "id": "BedAssignTextArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Note",
        "skin": "BedAssignTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 3, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var BedAssignButton = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "BedAssignButton",
        "isVisible": true,
        "skin": "BedAssignButtonSkin",
        "text": "Bed Assign"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [20, 4, 20, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    popupTakeaction.add(popupUpdateAdmissionsRow1, referringUpdateAdmissionsBorder, popupBedAvailable, BedAvailableTextAreaLabel, BedAvailableTextArea, BedAvailableButtonsRow, popupBedAssignRow2, BedAssignLocationLabel, BedAssignLocation, BedAssignNurseLabel, BedAssignNurse, BedAssigntextNoteLabel, BedAssignTextArea, BedAssignButton);
};

function popupTakeactionGlobals() {
    popupTakeaction = new kony.ui.Popup({
        "addWidgets": addWidgetspopupTakeaction,
        "id": "popupTakeaction",
        "isModal": false,
        "skin": "popupTakeactionSkin",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": 80,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 95,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN
    });
    popupTakeaction.info = {
        "kuid": "3a82dc76aa7646ac913b72895a18ac33"
    };
};