function initializetmplModeofTransport2() {
    CopyFlexContainer048f465b866ba45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer048f465b866ba45",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox"
    }, {}, {});
    CopyFlexContainer048f465b866ba45.setDefaultUnit(kony.flex.DP);
    var imageModeOfTransport = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "imageModeOfTransport",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelModeOfTransport = new kony.ui.Label({
        "centerX": "50%",
        "id": "labelModeOfTransport",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabelMediationOrders",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer048f465b866ba45.add(imageModeOfTransport, labelModeOfTransport);
}