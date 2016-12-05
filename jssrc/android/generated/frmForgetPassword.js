function addWidgetsfrmForgetPassword() {
    frmForgetPassword.setDefaultUnit(kony.flex.DP);
    var FlexContainer0908f84eac6624f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0908f84eac6624f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox09fdec8168da549",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0908f84eac6624f.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0b5cedb09b9ba47 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0b5cedb09b9ba47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0e128965edd2f43",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    FlexScrollContainer0b5cedb09b9ba47.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f202dd0708ea45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0f202dd0708ea45",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0f202dd0708ea45.setDefaultUnit(kony.flex.DP);
    var Label0de5ee502e6dd4d = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0de5ee502e6dd4d",
        "isVisible": true,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel00c212fd30af84f",
        "text": "Recover Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var TextField08c041ce9becd43 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextField08c041ce9becd43",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "inputbox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "30dp",
        "width": "260dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TextField0b759f4a65f754f = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextField0b759f4a65f754f",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Email",
        "right": 5,
        "secureTextEntry": false,
        "skin": "inputbox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "15dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyFlexContainer0aa605b4a9d8046 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0aa605b4a9d8046",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox0c85e24dc7b4e4e",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0aa605b4a9d8046.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer07f9c2dc2d82c49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer07f9c2dc2d82c49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "31dp",
        "skin": "CopyslFbox011b601cf7ce749",
        "top": "30dp",
        "width": "81.01%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07f9c2dc2d82c49.setDefaultUnit(kony.flex.DP);
    var CopyLabel001ef15ec4beb4f = new kony.ui.Label({
        "id": "CopyLabel001ef15ec4beb4f",
        "isVisible": true,
        "left": "0dp",
        "right": "5dp",
        "skin": "CopyslLabel01587f4e67e3247",
        "text": "A U 8 5 W",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "37.71%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage08809a75f9fd441 = new kony.ui.Image2({
        "centerX": -3,
        "height": "20dp",
        "id": "CopyImage08809a75f9fd441",
        "isVisible": true,
        "left": "20px",
        "skin": "slImage",
        "src": "refresharrow.png",
        "top": "10dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer07f9c2dc2d82c49.add(CopyLabel001ef15ec4beb4f, CopyImage08809a75f9fd441);
    var CopyTextField0ba4b3ede7bf641 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField0ba4b3ede7bf641",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "right": "0%",
        "secureTextEntry": false,
        "skin": "inputbox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "81.14%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer0aa605b4a9d8046.add(CopyFlexContainer07f9c2dc2d82c49, CopyTextField0ba4b3ede7bf641);
    var FlexContainer059a3741447d041 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "37.94%",
        "id": "FlexContainer059a3741447d041",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer059a3741447d041.setDefaultUnit(kony.flex.DP);
    var Label07600c98e528840 = new kony.ui.Label({
        "id": "Label07600c98e528840",
        "isVisible": true,
        "left": "11dp",
        "skin": "CopyslLabel034651595a6d14e",
        "text": "Note:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 5],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer0bd9c45c1840a41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0bd9c45c1840a41",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "CopyslFbox057414f2765c546",
        "top": "0",
        "width": "100%"
    }, {}, {});
    FlexContainer0bd9c45c1840a41.setDefaultUnit(kony.flex.DP);
    var Label0bd79a4e00faf48 = new kony.ui.Label({
        "centerY": "24%",
        "id": "Label0bd79a4e00faf48",
        "isVisible": true,
        "left": "30dp",
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
        "centerY": "43.90%",
        "height": "100%",
        "id": "Label056b50bdee0fa43",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0e367bc0ec2094d",
        "text": "You will receive password reset link to the email address you entered above",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "72.69%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0bd9c45c1840a41.add(Label0bd79a4e00faf48, Label056b50bdee0fa43);
    var CopyFlexContainer0aed1dc47d16d42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "28.57%",
        "id": "CopyFlexContainer0aed1dc47d16d42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "CopyslFbox057414f2765c546",
        "top": "0",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0aed1dc47d16d42.setDefaultUnit(kony.flex.DP);
    var CopyLabel07fa59dca34364e = new kony.ui.Label({
        "centerY": "32%",
        "id": "CopyLabel07fa59dca34364e",
        "isVisible": true,
        "left": "30dp",
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
    var CopyLabel0fd9f93f5f37246 = new kony.ui.Label({
        "centerY": "54%",
        "height": "90.00%",
        "id": "CopyLabel0fd9f93f5f37246",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0e367bc0ec2094d",
        "text": "The email will be from ‘notify@dashadmit.com’ with the subject: Password Reset",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "73.61%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0aed1dc47d16d42.add(CopyLabel07fa59dca34364e, CopyLabel0fd9f93f5f37246);
    var CopyFlexContainer06847e6b8b36446 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "28.57%",
        "id": "CopyFlexContainer06847e6b8b36446",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "CopyslFbox057414f2765c546",
        "top": "0",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer06847e6b8b36446.setDefaultUnit(kony.flex.DP);
    var CopyLabel0b27b7eb384944f = new kony.ui.Label({
        "centerY": "31%",
        "id": "CopyLabel0b27b7eb384944f",
        "isVisible": true,
        "left": "30dp",
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
    var CopyLabel022f945695bca46 = new kony.ui.Label({
        "centerY": "52%",
        "height": "90.00%",
        "id": "CopyLabel022f945695bca46",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0e367bc0ec2094d",
        "text": "If you don’t see the email in your inbox, check the spam/junk folder in your mailbox",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "73.15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer06847e6b8b36446.add(CopyLabel0b27b7eb384944f, CopyLabel022f945695bca46);
    FlexContainer059a3741447d041.add(Label07600c98e528840, FlexContainer0bd9c45c1840a41, CopyFlexContainer0aed1dc47d16d42, CopyFlexContainer06847e6b8b36446);
    var CopyFlexContainer0968557ed9d8c47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "CopyFlexContainer0968557ed9d8c47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "-1dp",
        "skin": "CopyslFbox057414f2765c546",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0968557ed9d8c47.setDefaultUnit(kony.flex.DP);
    var Button082685f14eea941 = new kony.ui.Button({
        "height": "100%",
        "id": "Button082685f14eea941",
        "isVisible": true,
        "left": "27.00%",
        "skin": "CopyslButtonGlossBlue0b391b1834cd048",
        "text": "Recover",
        "top": "-3dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0e634c20bffe04f = new kony.ui.Button({
        "height": "100%",
        "id": "Button0e634c20bffe04f",
        "isVisible": true,
        "left": "7dp",
        "onClick": AS_NamedActions_3c74bd01e75c4bfe95dc0f5eb28edd07,
        "skin": "CopyslButtonGlossBlue0c3e6bd33c8724f",
        "text": "Cancel",
        "top": "-3dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0968557ed9d8c47.add(Button082685f14eea941, Button0e634c20bffe04f);
    FlexContainer0f202dd0708ea45.add(Label0de5ee502e6dd4d, TextField08c041ce9becd43, TextField0b759f4a65f754f, CopyFlexContainer0aa605b4a9d8046, FlexContainer059a3741447d041, CopyFlexContainer0968557ed9d8c47);
    FlexScrollContainer0b5cedb09b9ba47.add(FlexContainer0f202dd0708ea45);
    FlexContainer0908f84eac6624f.add(FlexScrollContainer0b5cedb09b9ba47);
    frmForgetPassword.add(FlexContainer0908f84eac6624f);
};

function frmForgetPasswordGlobals() {
    frmForgetPassword = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmForgetPassword,
        "enabledForIdleTimeout": false,
        "id": "frmForgetPassword",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmForgetPassword.info = {
        "kuid": "daa5509eff724523a456709c90afaab0"
    };
};