function initializetmplSegAdmitFormSepsisScreeing() {
    FlexContainer015d1849741fb40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "FlexContainer015d1849741fb40",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer015d1849741fb40.setDefaultUnit(kony.flex.DP);
    var Label01f4722b5cff940 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label01f4722b5cff940",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabeladmitformSepsisScreeing",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image0db9d3915da5f41 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "15dp",
        "id": "Image0db9d3915da5f41",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "tick_03.png",
        "top": "5dp",
        "width": "15dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer015d1849741fb40.add(Label01f4722b5cff940, Image0db9d3915da5f41);
}