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
        "bottom": "2dp",
        "height": "30dp",
        "id": "labelManageAlertsType",
        "isVisible": true,
        "left": "2dp",
        "right": "2dp",
        "skin": "skinTemplateCongigurationAlerts",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
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
        "top": "2dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cdb60b5132e040.setDefaultUnit(kony.flex.DP);
    var btnManageAlertsEmail = new kony.ui.Button({
        "bottom": "2dp",
        "height": "20dp",
        "id": "btnManageAlertsEmail",
        "isVisible": true,
        "left": "2dp",
        "right": "2dp",
        "skin": "sknBtnManageAlerts",
        "top": "2dp",
        "width": "25dp",
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
        "top": "2dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer046138e35029a4a.setDefaultUnit(kony.flex.DP);
    var btnManageAlertText = new kony.ui.Button({
        "bottom": "2dp",
        "height": "20dp",
        "id": "btnManageAlertText",
        "isVisible": true,
        "left": "2dp",
        "right": "2dp",
        "skin": "sknBtnManageAlertsText",
        "top": "2dp",
        "width": "25dp",
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
        "top": "2dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f0a492a0b4c446.setDefaultUnit(kony.flex.DP);
    var btnManageAlertNotification = new kony.ui.Button({
        "bottom": "2dp",
        "height": "20dp",
        "id": "btnManageAlertNotification",
        "isVisible": true,
        "left": "2dp",
        "right": "2dp",
        "skin": "sknBtnManageAlertsNotification",
        "top": "2dp",
        "width": "25dp",
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