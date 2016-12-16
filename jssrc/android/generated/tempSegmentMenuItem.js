function initializetempSegmentMenuItem() {
    segRowFlxMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "segRowFlxMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0089a407eddb445",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    segRowFlxMenu.setDefaultUnit(kony.flex.DP);
    var imgMeniIcon = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgMeniIcon",
        "isVisible": true,
        "left": "22dp",
        "skin": "slImage",
        "src": "menu_03.png",
        "top": "9dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelMenulItem = new kony.ui.Label({
        "id": "labelMenulItem",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "DashBoard",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    segRowFlxMenu.add(imgMeniIcon, labelMenulItem);
}