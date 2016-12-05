function initializetmplDashboardSection() {
    flxContainerDashBoardHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxContainerDashBoardHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox"
    }, {}, {});
    flxContainerDashBoardHeader.setDefaultUnit(kony.flex.DP);
    var CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "slFboxbashboardsegRow2",
        "top": "0",
        "width": "100%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e.setDefaultUnit(kony.flex.DP);
    var imgstatus = new kony.ui.Image2({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgstatus",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "capsule.png",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelname = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "labelname",
        "includeFontPadding": false,
        "isVisible": true,
        "left": "5%",
        "skin": "sknSegmentTmplDashBoard",
        "text": "SAC Accept",
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
    var labelChiefComplaint = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "labelChiefComplaint",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "Cardiac Anomolies",
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
    var labelCondition = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "labelCondition",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_Label_d06b5d10406e4206ad38e4c06d979596,
        "skin": "sknSegmentTmplDashBoard",
        "text": "Critical",
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
    var bt = new kony.ui.Button({
        "height": "18dp",
        "id": "bt",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Label_d06b5d10406e4206ad38e4c06d979596,
        "skin": "CopyslButtonGlossBlue056578cf3bdb646",
        "top": "17dp",
        "width": "11dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e.add(imgstatus, labelname, labelChiefComplaint, labelCondition, bt);
    flxContainerDashBoardHeader.add(CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e);
}