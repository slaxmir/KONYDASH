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
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxregisterContainer.setDefaultUnit(kony.flex.DP);
    var flxHeaderConinter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxHeaderConinter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderConinter.setDefaultUnit(kony.flex.DP);
    var labelDash = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelDash",
        "isVisible": true,
        "left": "10dp",
        "skin": "skinActionBarHeader",
        "text": "DASH",
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
    var imgSetting = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSetting",
        "isVisible": true,
        "left": "85%",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeaderConinter.add(labelDash, imgSetting);
    var flxBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyContainer.setDefaultUnit(kony.flex.DP);
    var flxScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollContainer",
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
    flxScrollContainer.setDefaultUnit(kony.flex.DP);
    var imgDashReg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "150dp",
        "id": "imgDashReg",
        "isVisible": true,
        "left": "0dp",
        "src": "dashlogo.png",
        "top": "5dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxRegFormContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxRegFormContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10%",
        "right": "10%",
        "skin": "CopyslFbox02e75e6e03ebb41",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxRegFormContainer.setDefaultUnit(kony.flex.DP);
    var btnBackToLogin = new kony.ui.Button({
        "height": "25dp",
        "id": "btnBackToLogin",
        "isVisible": true,
        "left": "10dp",
        "skin": "addBtnSkin1",
        "text": "Back to login",
        "top": "5dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer058cffe21941742 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "FlexContainer058cffe21941742",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09b2313577dc94d",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer058cffe21941742.setDefaultUnit(kony.flex.DP);
    FlexContainer058cffe21941742.add();
    var CopyLabel0caec9b2c381f4a = new kony.ui.Label({
        "bottom": 10,
        "centerX": "50%",
        "id": "CopyLabel0caec9b2c381f4a",
        "isVisible": true,
        "left": "78dp",
        "skin": "CopyslLabel0e5f3bf61aab74f",
        "text": "Register",
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
    var CopyTextField0b3dbf6f9157c45 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField0b3dbf6f9157c45",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "FirstName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField03035ac9a488948 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField03035ac9a488948",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "LastName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField05179fe87bf704a = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField05179fe87bf704a",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Email Address*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField067a2299a91bd42 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField067a2299a91bd42",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Preferred Username*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var Label08d494911138c43 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label08d494911138c43",
        "isVisible": true,
        "left": "10%",
        "right": 10,
        "skin": "CopyslLabel03ce55cca781148",
        "text": "Where do you worrk?*",
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
    var RadioButtonGroup0eddb088d464d47 = new kony.ui.RadioButtonGroup({
        "height": "160dp",
        "id": "RadioButtonGroup0eddb088d464d47",
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
        "skin": "slRadioButtonGroup",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CheckBoxGroup0de39f4ba45da49 = new kony.ui.CheckBoxGroup({
        "height": "50dp",
        "id": "CheckBoxGroup0de39f4ba45da49",
        "isVisible": true,
        "left": "10%",
        "masterData": [
            ["cbg1", "I want here more about Direct Admission System for Hospital offers,products and services"]
        ],
        "right": "10%",
        "skin": "CopyslCheckBoxGroup0bb16e04fbccd44",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer08fbc3db241e844 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer08fbc3db241e844",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10%",
        "right": "10%",
        "skin": "CopyslFbox0c85e24dc7b4e4e",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer08fbc3db241e844.setDefaultUnit(kony.flex.DP);
    var FlexContainer07f15095083554c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer07f15095083554c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "CopyslFbox011b601cf7ce749",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlexContainer07f15095083554c.setDefaultUnit(kony.flex.DP);
    var Label01f14d48753b143 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label01f14d48753b143",
        "isVisible": true,
        "left": "0dp",
        "right": "5dp",
        "text": "A U 8 5 W",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image0c6b5287844cc44 = new kony.ui.Image2({
        "centerX": 0,
        "height": "40dp",
        "id": "Image0c6b5287844cc44",
        "isVisible": true,
        "left": "50%",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer07f15095083554c.add(Label01f14d48753b143, Image0c6b5287844cc44);
    var CopyTextField0c03b46296cd840 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField0c03b46296cd840",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    FlexContainer08fbc3db241e844.add(FlexContainer07f15095083554c, CopyTextField0c03b46296cd840);
    var CopyButton01c1cc8be902447 = new kony.ui.Button({
        "bottom": "10dp",
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "CopyButton01c1cc8be902447",
        "isVisible": true,
        "left": "0%",
        "right": "20%",
        "skin": "CopyslButtonGlossBlue098d40759906d43",
        "text": "Register",
        "top": "10dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0d9c624b17e764b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "10dp",
        "clipBounds": true,
        "height": "2dp",
        "id": "FlexContainer0d9c624b17e764b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox055b440af01ec45",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0d9c624b17e764b.setDefaultUnit(kony.flex.DP);
    FlexContainer0d9c624b17e764b.add();
    var RichText0521ebe0f144644 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText0521ebe0f144644",
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
    flxRegFormContainer.add(btnBackToLogin, FlexContainer058cffe21941742, CopyLabel0caec9b2c381f4a, CopyTextField0b3dbf6f9157c45, CopyTextField03035ac9a488948, CopyTextField05179fe87bf704a, CopyTextField067a2299a91bd42, Label08d494911138c43, RadioButtonGroup0eddb088d464d47, CheckBoxGroup0de39f4ba45da49, FlexContainer08fbc3db241e844, CopyButton01c1cc8be902447, FlexContainer0d9c624b17e764b, RichText0521ebe0f144644);
    flxScrollContainer.add(imgDashReg, flxRegFormContainer);
    flxBodyContainer.add(flxScrollContainer);
    var CopyflxBodyContainer0b52a503a41a846 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxBodyContainer0b52a503a41a846",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox08a009b54e5eb4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxBodyContainer0b52a503a41a846.setDefaultUnit(kony.flex.DP);
    var CopyflxScrollContainer0509039aef13646 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "CopyflxScrollContainer0509039aef13646",
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
    CopyflxScrollContainer0509039aef13646.setDefaultUnit(kony.flex.DP);
    var CopyimgDashReg05a025373be3e45 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "150dp",
        "id": "CopyimgDashReg05a025373be3e45",
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
    var CopyflxRegFormContainer05ffb75c5d8514c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyflxRegFormContainer05ffb75c5d8514c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10%",
        "right": "10%",
        "skin": "CopyslFbox02e75e6e03ebb41",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyflxRegFormContainer05ffb75c5d8514c.setDefaultUnit(kony.flex.DP);
    var CopybtnBackToLogin0b1011856b7a041 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "CopybtnBackToLogin0b1011856b7a041",
        "isVisible": true,
        "left": "10dp",
        "skin": "addBtnSkin1",
        "text": "Back to login",
        "top": "5dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer0f9227b73702042 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer0f9227b73702042",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09b2313577dc94d",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f9227b73702042.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0f9227b73702042.add();
    var CopyLabel0e1b1b3e9a79546 = new kony.ui.Label({
        "bottom": 10,
        "centerX": "50%",
        "id": "CopyLabel0e1b1b3e9a79546",
        "isVisible": true,
        "left": "78dp",
        "skin": "CopyslLabel0e5f3bf61aab74f",
        "text": "Register",
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
    var CopyTextField018e4da5038e34c = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField018e4da5038e34c",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "FirstName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField02d639b333be446 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField02d639b333be446",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "LastName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField05f394846f94d4f = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField05f394846f94d4f",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Email Address*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField046f1d9a4a1d64b = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField046f1d9a4a1d64b",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Preferred Username*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyLabel053f5d33c1a384a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel053f5d33c1a384a",
        "isVisible": true,
        "left": "10%",
        "right": 10,
        "skin": "CopyslLabel03ce55cca781148",
        "text": "Where do you worrk?*",
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
    var CopyRadioButtonGroup04ff01e7f10d24d = new kony.ui.RadioButtonGroup({
        "height": "160dp",
        "id": "CopyRadioButtonGroup04ff01e7f10d24d",
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
        "skin": "slRadioButtonGroup",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyCheckBoxGroup0b84fcc34f3214d = new kony.ui.CheckBoxGroup({
        "height": "50dp",
        "id": "CopyCheckBoxGroup0b84fcc34f3214d",
        "isVisible": true,
        "left": "10%",
        "masterData": [
            ["cbg1", "I want here more about Direct Admission System for Hospital offers,products and services"]
        ],
        "right": "10%",
        "skin": "CopyslCheckBoxGroup0bb16e04fbccd44",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer0a426f8bae32648 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0a426f8bae32648",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10%",
        "right": "10%",
        "skin": "CopyslFbox0c85e24dc7b4e4e",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a426f8bae32648.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer01a83cf0f48f840 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer01a83cf0f48f840",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "CopyslFbox011b601cf7ce749",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer01a83cf0f48f840.setDefaultUnit(kony.flex.DP);
    var CopyLabel0ea89a5a8c2c64d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ea89a5a8c2c64d",
        "isVisible": true,
        "left": "0dp",
        "right": "5dp",
        "skin": "slLabel",
        "text": "A U 8 5 W",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage016611d63ed374a = new kony.ui.Image2({
        "centerX": 0,
        "height": "40dp",
        "id": "CopyImage016611d63ed374a",
        "isVisible": true,
        "left": "50%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer01a83cf0f48f840.add(CopyLabel0ea89a5a8c2c64d, CopyImage016611d63ed374a);
    var CopyTextField00886159c4bcc4c = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField00886159c4bcc4c",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    CopyFlexContainer0a426f8bae32648.add(CopyFlexContainer01a83cf0f48f840, CopyTextField00886159c4bcc4c);
    var CopyButton07df9eb33f13342 = new kony.ui.Button({
        "bottom": "10dp",
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "CopyButton07df9eb33f13342",
        "isVisible": true,
        "left": "0%",
        "right": "20%",
        "skin": "CopyslButtonGlossBlue098d40759906d43",
        "text": "Register",
        "top": "10dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer02eb6271269334d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "10dp",
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer02eb6271269334d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox055b440af01ec45",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer02eb6271269334d.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer02eb6271269334d.add();
    var CopyRichText00418f86c972749 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText00418f86c972749",
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
    CopyflxRegFormContainer05ffb75c5d8514c.add(CopybtnBackToLogin0b1011856b7a041, CopyFlexContainer0f9227b73702042, CopyLabel0e1b1b3e9a79546, CopyTextField018e4da5038e34c, CopyTextField02d639b333be446, CopyTextField05f394846f94d4f, CopyTextField046f1d9a4a1d64b, CopyLabel053f5d33c1a384a, CopyRadioButtonGroup04ff01e7f10d24d, CopyCheckBoxGroup0b84fcc34f3214d, CopyFlexContainer0a426f8bae32648, CopyButton07df9eb33f13342, CopyFlexContainer02eb6271269334d, CopyRichText00418f86c972749);
    CopyflxScrollContainer0509039aef13646.add(CopyimgDashReg05a025373be3e45, CopyflxRegFormContainer05ffb75c5d8514c);
    CopyflxBodyContainer0b52a503a41a846.add(CopyflxScrollContainer0509039aef13646);
    flxregisterContainer.add(flxHeaderConinter, flxBodyContainer, CopyflxBodyContainer0b52a503a41a846);
    var CopyflxregisterContainer0606567a656824c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxregisterContainer0606567a656824c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox03f772a29d63d49",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxregisterContainer0606567a656824c.setDefaultUnit(kony.flex.DP);
    var CopyflxBodyContainer07d15c6dd11a843 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxBodyContainer07d15c6dd11a843",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox08a009b54e5eb4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxBodyContainer07d15c6dd11a843.setDefaultUnit(kony.flex.DP);
    var CopyflxScrollContainer0a557e0a566e646 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "CopyflxScrollContainer0a557e0a566e646",
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
    CopyflxScrollContainer0a557e0a566e646.setDefaultUnit(kony.flex.DP);
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
    var CopyflxRegFormContainer00651f0c1c98243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "10dp",
        "clipBounds": true,
        "height": "140%",
        "id": "CopyflxRegFormContainer00651f0c1c98243",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox02e75e6e03ebb41",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyflxRegFormContainer00651f0c1c98243.setDefaultUnit(kony.flex.DP);
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
    var CopyTextField0f9fc16caf7f04a = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField0f9fc16caf7f04a",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "FirstName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox03955cc79771f40",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
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
    var CopyTextField008ca952ee6194e = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField008ca952ee6194e",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "LastName*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0d95698a9614f44",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var CopyTextField07fc21078b94147 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField07fc21078b94147",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Email Address*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0da7be1e142c046",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var CopyTextField01037180e46b24a = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField01037180e46b24a",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Preferred Username*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox00f75c79c0a014f",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var CopyRadioButtonGroup09a1375425c054e = new kony.ui.RadioButtonGroup({
        "focusSkin": "CopyslRadioButtonGroup0385269eec16c4d",
        "height": "160dp",
        "id": "CopyRadioButtonGroup09a1375425c054e",
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
        "skin": "CopyslRadioButtonGroup06641b0fa165044",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyCheckBoxGroup0e5000e3307f84f = new kony.ui.CheckBoxGroup({
        "height": "50dp",
        "id": "CopyCheckBoxGroup0e5000e3307f84f",
        "isVisible": true,
        "left": "2%",
        "masterData": [
            ["cbg1", "I want here more about Direct Admission System for Hospital offers,products and services"]
        ],
        "right": "2%",
        "skin": "CopyslCheckBoxGroup0bb16e04fbccd44",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage08809a75f9fd441 = new kony.ui.Image2({
        "centerX": -65,
        "height": "15dp",
        "id": "CopyImage08809a75f9fd441",
        "isVisible": true,
        "left": "40dp",
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
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer0aa605b4a9d8046.add(CopyFlexContainer07f9c2dc2d82c49, CopyTextField0ba4b3ede7bf641);
    var CopyButton07eb81e646d3d4b = new kony.ui.Button({
        "bottom": "10dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyButton07eb81e646d3d4b",
        "isVisible": true,
        "left": "0%",
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
    CopyflxRegFormContainer00651f0c1c98243.add(CopybtnBackToLogin031b60e73e45a4b, CopyFlexContainer049adf90952f142, CopyLabel01def07e7cb0e49, firstNameRow1, CopyTextField0f9fc16caf7f04a, CopyTextField008ca952ee6194e, CopyTextField07fc21078b94147, CopyTextField01037180e46b24a, CopyLabel0e0f8c631b11040, CopyRadioButtonGroup09a1375425c054e, CopyCheckBoxGroup0e5000e3307f84f, CopyFlexContainer0aa605b4a9d8046, CopyButton07eb81e646d3d4b, CopyRichText026de28b64e7e40, CopyFlexContainer0e6a59740b3b44b, CopyRichText01e6bfb722f5a41);
    CopyflxScrollContainer0a557e0a566e646.add(CopyimgDashReg0a516e5f055794a, CopyflxRegFormContainer00651f0c1c98243);
    CopyflxBodyContainer07d15c6dd11a843.add(CopyflxScrollContainer0a557e0a566e646);
    CopyflxregisterContainer0606567a656824c.add(CopyflxBodyContainer07d15c6dd11a843);
    frmRegister.add(flxregisterContainer, CopyflxregisterContainer0606567a656824c);
};

function frmRegisterGlobals() {
    frmRegister = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRegister,
        "enabledForIdleTimeout": false,
        "id": "frmRegister",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true
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
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmRegister.info = {
        "kuid": "2009436c05454dd2b794ade3e07a66a2"
    };
};