function addWidgetsfrmRegister() {
    frmRegister.setDefaultUnit(kony.flex.DP);
    var flxregisterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxregisterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox03f772a29d63d49",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxregisterContainer.setDefaultUnit(kony.flex.DP);
    var flxRegBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxRegBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox08a009b54e5eb4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRegBodyContainer.setDefaultUnit(kony.flex.DP);
    var flxRegScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxRegScrollContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0ed6dbdc7701248",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRegScrollContainer.setDefaultUnit(kony.flex.DP);
    var CopyimgDashReg0a516e5f055794a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "150dp",
        "id": "CopyimgDashReg0a516e5f055794a",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "dashlogo.png",
        "top": "5dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxRegChildContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "10dp",
        "clipBounds": true,
        "height": "140%",
        "id": "flxRegChildContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox02e75e6e03ebb41",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxRegChildContainer.setDefaultUnit(kony.flex.DP);
    var CopybtnBackToLogin031b60e73e45a4b = new kony.ui.Button({
        "height": "35dp",
        "id": "CopybtnBackToLogin031b60e73e45a4b",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_NamedActions_3c74bd01e75c4bfe95dc0f5eb28edd07,
        "skin": "addBtnSkin1",
        "text": "Back to login",
        "top": "9dp",
        "width": "113dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer049adf90952f142 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer049adf90952f142",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09b2313577dc94d",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer049adf90952f142.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer049adf90952f142.add();
    var CopyLabel01def07e7cb0e49 = new kony.ui.Label({
        "bottom": 10,
        "centerX": "50%",
        "id": "CopyLabel01def07e7cb0e49",
        "isVisible": true,
        "left": "78dp",
        "skin": "CopyslLabel0e5f3bf61aab74f",
        "text": "Registration",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var firstNameRow1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "firstNameRow1",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    firstNameRow1.setDefaultUnit(kony.flex.DP);
    firstNameRow1.add();
    var TextFieldRegFirstName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_SENTENCES,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextFieldRegFirstName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "FirstName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "inputbox",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TextFieldRegLastName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_SENTENCES,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextFieldRegLastName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "LastName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "18dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "sknPlacehoderTBRegistration",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TextFieldRegEmailId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextFieldRegEmailId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Email Address*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "sknPlacehoderTBRegistration",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TextFieldRegUserName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextFieldRegUserName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Preferred Username*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "sknPlacehoderTBRegistration",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel0e0f8c631b11040 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0e0f8c631b11040",
        "isVisible": true,
        "left": "10%",
        "right": 10,
        "skin": "CopyslLabel03ce55cca781148",
        "text": "Where do you work?*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var RadioButtonGroupRegWork = new kony.ui.RadioButtonGroup({
        "id": "RadioButtonGroupRegWork",
        "isVisible": true,
        "left": "13dp",
        "masterData": [
            ["rbg1", "Hospital"],
            ["rbg2", "FSED"],
            ["rbg3", "Urgent Care"],
            ["Key140", "PCP Office"],
            ["Key372", "Other"]
        ],
        "selectedKey": "rbg1",
        "selectedKeyValue": ["rbg1", "Hospital"],
        "skin": "slRadioButtonGroupRegistration",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tickedImage": "radio_selected.png",
        "untickedImage": "radio_unchecked.png"
    });
    var FlexContainer01615e4ebb07244 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "47dp",
        "id": "FlexContainer01615e4ebb07244",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "13dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    FlexContainer01615e4ebb07244.setDefaultUnit(kony.flex.DP);
    var ImageCheckboxRegister = new kony.ui.Image2({
        "height": "25dp",
        "id": "ImageCheckboxRegister",
        "isVisible": true,
        "left": "5dp",
        "onTouchStart": AS_Image_9dbd93f496e54e21b01fce896f33748e,
        "skin": "slImage",
        "src": "uncheck.png",
        "top": "10dp",
        "width": "24dp",
        "zIndex": 6
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0ae0c1648a9dd4e = new kony.ui.Label({
        "id": "Label0ae0c1648a9dd4e",
        "isVisible": true,
        "left": "40dp",
        "skin": "CopyslLabel0bae839e1629e4a",
        "text": "I want here more about Direct Admission System for Hospital offers,products and services",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "85%",
        "zIndex": 6
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer01615e4ebb07244.add(ImageCheckboxRegister, Label0ae0c1648a9dd4e);
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
        "left": "5dp",
        "skin": "CopyslFbox011b601cf7ce749",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07f9c2dc2d82c49.setDefaultUnit(kony.flex.DP);
    var LabelCaptchaRegistration = new kony.ui.Label({
        "id": "LabelCaptchaRegistration",
        "isVisible": true,
        "left": "0dp",
        "right": "5dp",
        "skin": "CopyslLabel01587f4e67e3247",
        "text": "AU85W",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ImageRefreshCaptchaRegistration = new kony.ui.Image2({
        "centerX": -65,
        "height": "15dp",
        "id": "ImageRefreshCaptchaRegistration",
        "isVisible": true,
        "left": "40dp",
        "onTouchStart": AS_NamedActions_e50c1fa14d494810acb2ab23a3383da3,
        "skin": "slImage",
        "src": "refresharrow.png",
        "top": "13dp",
        "width": "15dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer07f9c2dc2d82c49.add(LabelCaptchaRegistration, ImageRefreshCaptchaRegistration);
    var TextFieldRegCaptcha = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextFieldRegCaptcha",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": "Enter Captcha",
        "right": "0%",
        "secureTextEntry": false,
        "skin": "inputbox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknPlacehoderTBRegistration",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer0aa605b4a9d8046.add(CopyFlexContainer07f9c2dc2d82c49, TextFieldRegCaptcha);
    var ButtonRegister = new kony.ui.Button({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "ButtonRegister",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_ae58b92fce404eeba00b163d8e4039c7,
        "right": "20%",
        "skin": "CopyslButtonGlossBlue098d40759906d43",
        "text": "Register",
        "top": "33dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText026de28b64e7e40 = new kony.ui.RichText({
        "bottom": "10dp",
        "centerX": "50%",
        "id": "CopyRichText026de28b64e7e40",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText01b16713e6e324c",
        "text": "\nNote: DASH Accounts are created Monday-Friday between 8AM-5PM CST (excluding holidays).",
        "top": "24dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer0e6a59740b3b44b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer0e6a59740b3b44b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "right": "2%",
        "skin": "CopyslFbox055b440af01ec45",
        "top": "3dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e6a59740b3b44b.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0e6a59740b3b44b.add();
    var CopyRichText01e6bfb722f5a41 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText01e6bfb722f5a41",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText01b16713e6e324c",
        "text": "IF THERE ARE ISSUES WITH THIS SITE,PLEASE CALL HCA CONTINENTAL TO ADMIN\n(909)-806-1800",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 6],
        "paddingInPixel": false
    }, {});
    flxRegChildContainer.add(CopybtnBackToLogin031b60e73e45a4b, CopyFlexContainer049adf90952f142, CopyLabel01def07e7cb0e49, firstNameRow1, TextFieldRegFirstName, TextFieldRegLastName, TextFieldRegEmailId, TextFieldRegUserName, CopyLabel0e0f8c631b11040, RadioButtonGroupRegWork, FlexContainer01615e4ebb07244, CopyFlexContainer0aa605b4a9d8046, ButtonRegister, CopyRichText026de28b64e7e40, CopyFlexContainer0e6a59740b3b44b, CopyRichText01e6bfb722f5a41);
    flxRegScrollContainer.add(CopyimgDashReg0a516e5f055794a, flxRegChildContainer);
    flxRegBodyContainer.add(flxRegScrollContainer);
    flxregisterContainer.add(flxRegBodyContainer);
    frmRegister.add(flxregisterContainer);
};

function frmRegisterGlobals() {
    frmRegister = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRegister,
        "enabledForIdleTimeout": false,
        "id": "frmRegister",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmRegister.info = {
        "kuid": "2009436c05454dd2b794ade3e07a66a2"
    };
};