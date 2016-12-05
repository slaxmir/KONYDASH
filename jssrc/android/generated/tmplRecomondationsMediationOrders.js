function initializetmplRecomondationsMediationOrders() {
    FlexContainer09b5d195a6ab142 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer09b5d195a6ab142",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer09b5d195a6ab142.setDefaultUnit(kony.flex.DP);
    var labelmediationOthers = new kony.ui.Label({
        "id": "labelmediationOthers",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelMediationOrders",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer09b5d195a6ab142.add(labelmediationOthers);
}