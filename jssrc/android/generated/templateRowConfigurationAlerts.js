function initializetemplateRowConfigurationAlerts() {
    flxTemplateRowConfigurationAlertsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxTemplateRowConfigurationAlertsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFboTmplManageAlerts"
    }, {}, {});
    flxTemplateRowConfigurationAlertsContainer.setDefaultUnit(kony.flex.DP);
    var labelManageAlertsType = new kony.ui.Label({
        "height": "30dp",
        "id": "labelManageAlertsType",
        "isVisible": true,
        "skin": "skinTemplateCongigurationAlerts",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer0cdb60b5132e040 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "FlexContainer0cdb60b5132e040",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cdb60b5132e040.setDefaultUnit(kony.flex.DP);
    var btnManageAlertsEmail = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "15dp",
        "id": "btnManageAlertsEmail",
        "isVisible": true,
        "right": 0,
        "skin": "sknBtnManageAlerts",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0cdb60b5132e040.add(btnManageAlertsEmail);
    var CopyFlexContainer046138e35029a4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer046138e35029a4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer046138e35029a4a.setDefaultUnit(kony.flex.DP);
    var btnManageAlertText = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "15dp",
        "id": "btnManageAlertText",
        "isVisible": true,
        "right": 0,
        "skin": "sknBtnManageAlertsText",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer046138e35029a4a.add(btnManageAlertText);
    var CopyFlexContainer0f0a492a0b4c446 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer0f0a492a0b4c446",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f0a492a0b4c446.setDefaultUnit(kony.flex.DP);
    var btnManageAlertNotification = new kony.ui.Button({
        "bottom": 0,
        "centerX": "50%",
        "centerY": "50%",
        "height": "18dp",
        "id": "btnManageAlertNotification",
        "isVisible": true,
        "right": 0,
        "skin": "sknBtnManageAlertsNotification",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0f0a492a0b4c446.add(btnManageAlertNotification);
    flxTemplateRowConfigurationAlertsContainer.add(labelManageAlertsType, FlexContainer0cdb60b5132e040, CopyFlexContainer046138e35029a4a, CopyFlexContainer0f0a492a0b4c446);
}