function initializetmplAdmissionDetails1() {
    flxContainerSegAdmisionDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContainerSegAdmisionDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "sknSegAdmisionDetails1"
    }, {}, {});
    flxContainerSegAdmisionDetails.setDefaultUnit(kony.flex.DP);
    var labelAdmissionDetailsHeading = new kony.ui.Label({
        "id": "labelAdmissionDetailsHeading",
        "isVisible": true,
        "left": "5dp",
        "skin": "labelAdmissionDetails",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelAdmissionDetailsValue = new kony.ui.Label({
        "id": "labelAdmissionDetailsValue",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlabelAdmissionDetailsValue",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxContainerSegAdmisionDetails.add(labelAdmissionDetailsHeading, labelAdmissionDetailsValue);
}