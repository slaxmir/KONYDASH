function initializetmplForgotPassword() {
    FlexContainer0bd9c45c1840a41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "FlexContainer0bd9c45c1840a41",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox057414f2765c546"
    }, {}, {});
    FlexContainer0bd9c45c1840a41.setDefaultUnit(kony.flex.DP);
    var Label0bd79a4e00faf48 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0bd79a4e00faf48",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabel",
        "text": "*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label056b50bdee0fa43 = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "Label056b50bdee0fa43",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel0e367bc0ec2094d",
        "text": "You will receive password reset link to the email address you entered above",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0bd9c45c1840a41.add(Label0bd79a4e00faf48, Label056b50bdee0fa43);
}