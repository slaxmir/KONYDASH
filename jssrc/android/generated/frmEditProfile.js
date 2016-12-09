function addWidgetsfrmEditProfile() {
    frmEditProfile.setDefaultUnit(kony.flex.DP);
    var flxContainer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100.00%",
        "id": "flxContainer1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "right": 0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainer1.setDefaultUnit(kony.flex.DP);
    var flxActionbarContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxActionbarContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxActionbarContainer.setDefaultUnit(kony.flex.DP);
    var imgMenuOpen = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "5%",
        "onTouchStart": AS_NamedActions_59f90898340d4953be384a35208868b0,
        "src": "icons_03.png",
        "top": "26%",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelProfile1 = new kony.ui.Label({
        "centerY": "48%",
        "id": "labelProfile1",
        "isVisible": true,
        "left": "13%",
        "skin": "skinActionBarHeader",
        "text": "Edit Profile",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "72%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image0f4ef1b57b1094b = new kony.ui.Image2({
        "height": "26dp",
        "id": "Image0f4ef1b57b1094b",
        "isVisible": true,
        "left": "310dp",
        "skin": "slImage",
        "src": "update.png",
        "top": "15dp",
        "width": "26dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxActionbarContainer.add(imgMenuOpen, labelProfile1, Image0f4ef1b57b1094b);
    var flxScrollBodyContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50.00%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "pagingEnabled": false,
        "right": "0%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0e5d233f8d36347",
        "top": "0.00%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrollBodyContainer.setDefaultUnit(kony.flex.DP);
    var CopyepLabelUsername0c305062ab10c41 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyepLabelUsername0c305062ab10c41",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Username",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0de25adc46c3a46 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0de25adc46c3a46",
        "isVisible": true,
        "skin": "ntedit",
        "text": "Phanirc",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyepLabelFirstName0c838f5c8d70d42 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyepLabelFirstName0c838f5c8d70d42",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "First Name*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0f6770acf6fd542 = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "CopyLabel0f6770acf6fd542",
        "isVisible": true,
        "skin": "ntedit",
        "text": "phani",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyepLabelLastName04c65b5b97e9b46 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyepLabelLastName04c65b5b97e9b46",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Last Name*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0cc8592b6215d4a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0cc8592b6215d4a",
        "isVisible": true,
        "skin": "ntedit",
        "text": "rc",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0cfef840dacc14b = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyLabel0cfef840dacc14b",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copytfusername08890d464730d43 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername08890d464730d43",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "editable",
        "text": "Phani@evhc.in",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel087c83bf4890b48 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50.32%",
        "id": "CopyLabel087c83bf4890b48",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Phone",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2.00%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copytfusername04e07543c3ce248 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername04e07543c3ce248",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "editable",
        "text": "4578894563",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel01a0f985f34ea4d = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyLabel01a0f985f34ea4d",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Cell Phone",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copytfusername06cf4b312660c4a = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername06cf4b312660c4a",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "editable",
        "text": "4547879945",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel06a732202f8e640 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyLabel06a732202f8e640",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "User Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0724a8c93d74146 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0724a8c93d74146",
        "isVisible": true,
        "skin": "ntedit",
        "text": "Clinic",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel09c6bac55a8fb48 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyLabel09c6bac55a8fb48",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "User Role",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0fdc08999132f44 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0fdc08999132f44",
        "isVisible": true,
        "skin": "ntedit",
        "text": "Clinician",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel013658c058c4e47 = new kony.ui.Label({
        "bottom": "1%",
        "centerX": "50%",
        "id": "CopyLabel013658c058c4e47",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "NPI Number*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copytfusername0259551c7cd9d44 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername0259551c7cd9d44",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "editable",
        "text": "4547879945",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1%",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel0fbc8530da22c43 = new kony.ui.Label({
        "bottom": "5dp",
        "centerX": "50%",
        "id": "CopyLabel0fbc8530da22c43",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Default Facility",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ListBox0712caeb0d21a4d = new kony.ui.ListBox({
        "bottom": "5dp",
        "centerX": "50%",
        "height": "40dp",
        "id": "ListBox0712caeb0d21a4d",
        "isVisible": true,
        "masterData": [
            ["lb1", "Phaneendra ED"],
            ["lb2", "Phaneendra FSED"],
            ["lb3", "Phaneendra UG"],
            ["Key950", "Test Cleveland Clinic - Cleveland"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Phaneendra ED"],
        "skin": "CopyslListBox05eb6be14a9454f",
        "top": "1%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyLabel018bdbbf92ca042 = new kony.ui.Label({
        "bottom": "5dp",
        "centerX": "50%",
        "id": "CopyLabel018bdbbf92ca042",
        "isVisible": true,
        "skin": "sknEditProfileLabel1",
        "text": "Degree",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer0c4a9186b1ed944 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "FlexContainer0c4a9186b1ed944",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    FlexContainer0c4a9186b1ed944.setDefaultUnit(kony.flex.DP);
    var CopyLabel05aacfa9249da4b = new kony.ui.Label({
        "centerX": "50.03%",
        "id": "CopyLabel05aacfa9249da4b",
        "isVisible": true,
        "skin": "ntedit",
        "text": "Select degree",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2.45%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image093c298a173a848 = new kony.ui.Image2({
        "height": "40dp",
        "id": "Image093c298a173a848",
        "isVisible": true,
        "left": "314dp",
        "skin": "slImage",
        "src": "dropdwnimg.png",
        "top": "1dp",
        "width": "28dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0c4a9186b1ed944.add(CopyLabel05aacfa9249da4b, Image093c298a173a848);
    var FlexContainer01615e4ebb07244 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
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
    var Image07ba4f09130e74f = new kony.ui.Image2({
        "height": "25dp",
        "id": "Image07ba4f09130e74f",
        "isVisible": true,
        "left": "5dp",
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
        "text": "Change Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "27%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 6
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer01615e4ebb07244.add(Image07ba4f09130e74f, Label0ae0c1648a9dd4e);
    var FlexContainer035608f7aea9f47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "194dp",
        "id": "FlexContainer035608f7aea9f47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    FlexContainer035608f7aea9f47.setDefaultUnit(kony.flex.DP);
    var Label0c431f692987d40 = new kony.ui.Label({
        "id": "Label0c431f692987d40",
        "isVisible": true,
        "left": "18dp",
        "skin": "CopyslLabel03a1aa91f18b347",
        "text": "* Password length must be between 3 and 8 characters",
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
    var Copytfusername0efd671ca5a2745 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername0efd671ca5a2745",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Old Password",
        "secureTextEntry": true,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "Copyeditable017d8ee2e77f141",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Copytfusername066b2e000fa4241 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername066b2e000fa4241",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "New Password",
        "secureTextEntry": true,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "Copyeditable0d4938a7f84e54f",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Copytfusername0a9c9b374d55049 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "bottom": "5dp",
        "centerX": "50%",
        "id": "Copytfusername0a9c9b374d55049",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": null,
        "placeholder": "Re-enter New Password",
        "secureTextEntry": true,
        "skin": "editable",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "Copyeditable0444253943efb4a",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    FlexContainer035608f7aea9f47.add(Label0c431f692987d40, Copytfusername0efd671ca5a2745, Copytfusername066b2e000fa4241, Copytfusername0a9c9b374d55049);
    var flxContainerInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50.00%",
        "clipBounds": true,
        "id": "flxContainerInfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox0fb98f6005e514b",
        "top": "2%",
        "width": "90%",
        "zIndex": 5
    }, {}, {});
    flxContainerInfo.setDefaultUnit(kony.flex.DP);
    var CopyLabel01052f794fc3c4e = new kony.ui.Label({
        "id": "CopyLabel01052f794fc3c4e",
        "isVisible": true,
        "left": "6dp",
        "skin": "sknEPLabel2",
        "text": "Referring Facility",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Segment0002ee999218345 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Test Cleveland Clinic - Cleveland (Clinic)"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Phaneendra ED (Clinic)"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Phaneendra UG (Clinic)"
        }],
        "groupCells": false,
        "id": "Segment0002ee999218345",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg00711d2eff97a44",
        "rowSkin": "Copyseg0f3acb11822474c",
        "rowTemplate": CopyFlexContainer075c9ac293fb748,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "2dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer075c9ac293fb748": "CopyFlexContainer075c9ac293fb748",
            "Image081203e63fbf643": "Image081203e63fbf643",
            "Label0c981bd3b128e47": "Label0c981bd3b128e47"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0bb2b08710dae47 = new kony.ui.Label({
        "id": "CopyLabel0bb2b08710dae47",
        "isVisible": true,
        "left": "6dp",
        "skin": "sknEPLabel2",
        "text": "Referring Facility Groups",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopySegment06e7fc81b9c7349 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }, {
            "Image081203e63fbf643": "bullet.png",
            "Label0c981bd3b128e47": "Label"
        }],
        "groupCells": false,
        "id": "CopySegment06e7fc81b9c7349",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0e0eb0edf04a044",
        "rowTemplate": CopyFlexContainer075c9ac293fb748,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "2dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer075c9ac293fb748": "CopyFlexContainer075c9ac293fb748",
            "Image081203e63fbf643": "Image081203e63fbf643",
            "Label0c981bd3b128e47": "Label0c981bd3b128e47"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainerInfo.add(CopyLabel01052f794fc3c4e, Segment0002ee999218345, CopyLabel0bb2b08710dae47, CopySegment06e7fc81b9c7349);
    flxScrollBodyContainer.add(CopyepLabelUsername0c305062ab10c41, Label0de25adc46c3a46, CopyepLabelFirstName0c838f5c8d70d42, CopyLabel0f6770acf6fd542, CopyepLabelLastName04c65b5b97e9b46, CopyLabel0cc8592b6215d4a, CopyLabel0cfef840dacc14b, Copytfusername08890d464730d43, CopyLabel087c83bf4890b48, Copytfusername04e07543c3ce248, CopyLabel01a0f985f34ea4d, Copytfusername06cf4b312660c4a, CopyLabel06a732202f8e640, CopyLabel0724a8c93d74146, CopyLabel09c6bac55a8fb48, CopyLabel0fdc08999132f44, CopyLabel013658c058c4e47, Copytfusername0259551c7cd9d44, CopyLabel0fbc8530da22c43, ListBox0712caeb0d21a4d, CopyLabel018bdbbf92ca042, FlexContainer0c4a9186b1ed944, FlexContainer01615e4ebb07244, FlexContainer035608f7aea9f47, flxContainerInfo);
    flxContainer1.add(flxActionbarContainer, flxScrollBodyContainer);
    var flxMenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-80%",
        "right": 0,
        "skin": "sknMenu",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxMenuContainer.setDefaultUnit(kony.flex.DP);
    var flxMenuProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxMenuProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var imgMenuProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "80dp",
        "id": "imgMenuProfilePic",
        "isVisible": true,
        "left": "20dp",
        "src": "icons_07.png",
        "top": "30dp",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flxLineContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinLine",
        "top": "151dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineContainer.setDefaultUnit(kony.flex.DP);
    flxLineContainer.add();
    var labelUsername = new kony.ui.Label({
        "centerX": "51.08%",
        "id": "labelUsername",
        "isVisible": true,
        "left": 98,
        "skin": "CopyskinMenuLabel00e1400c6b3a74f",
        "text": "Swaraj RC",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "116dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMenuProfileDetailsContainer.add(imgMenuProfilePic, flxLineContainer, labelUsername);
    var flxMenuItemsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "flxMenuItemsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuItemsContainer.setDefaultUnit(kony.flex.DP);
    var flxDashBoardContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxDashBoardContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDashBoardContainer.setDefaultUnit(kony.flex.DP);
    var imgDashBoard = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgDashBoard",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_03.png",
        "top": "9dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDashBoard = new kony.ui.Label({
        "id": "labelDashBoard",
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
    flxDashBoardContainer.add(imgDashBoard, labelDashBoard);
    var flxDischargeNotificationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxDischargeNotificationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDischargeNotificationContainer.setDefaultUnit(kony.flex.DP);
    var imgDischargeNotification = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgDischargeNotification",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_07.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDischargeNotification = new kony.ui.Label({
        "id": "labelDischargeNotification",
        "isVisible": true,
        "left": "25.00%",
        "skin": "skinMenuLabel",
        "text": "Discharge Notifications",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDischargeNotificationContainer.add(imgDischargeNotification, labelDischargeNotification);
    var flxAdmittCointer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxAdmittCointer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAdmittCointer.setDefaultUnit(kony.flex.DP);
    var imgAdmit = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgAdmit",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_11.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelAdmit = new kony.ui.Label({
        "id": "labelAdmit",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Admit",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAdmittCointer.add(imgAdmit, labelAdmit);
    var flxSupportContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxSupportContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSupportContainer.setDefaultUnit(kony.flex.DP);
    var imgSupport = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgSupport",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_15.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelSupport = new kony.ui.Label({
        "id": "labelSupport",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Support",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSupportContainer.add(imgSupport, labelSupport);
    var flxProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProfileContainer.setDefaultUnit(kony.flex.DP);
    var imgProfile = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgProfile",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_19.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelProfile = new kony.ui.Label({
        "id": "labelProfile",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Profile",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxProfileContainer.add(imgProfile, labelProfile);
    var flxConfigarationAlertsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxConfigarationAlertsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxConfigarationAlertsContainer.setDefaultUnit(kony.flex.DP);
    var imgConfigureAdmissionAlertsl = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgConfigureAdmissionAlertsl",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_23.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigureAdmissionAlerts = new kony.ui.Label({
        "id": "labelConfigureAdmissionAlerts",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Manage Alerts",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConfigarationAlertsContainer.add(imgConfigureAdmissionAlertsl, labelConfigureAdmissionAlerts);
    var flxAlerttoneSettings = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxAlerttoneSettings",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAlerttoneSettings.setDefaultUnit(kony.flex.DP);
    var imgAlertToneSettings = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgAlertToneSettings",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_27.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelAlerttoneSettings = new kony.ui.Label({
        "id": "labelAlerttoneSettings",
        "isVisible": true,
        "left": "24.98%",
        "skin": "skinMenuLabel",
        "text": "Alert Tone Settings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAlerttoneSettings.add(imgAlertToneSettings, labelAlerttoneSettings);
    var flxLogoutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxLogoutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLogoutContainer.setDefaultUnit(kony.flex.DP);
    var imgLogout = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgLogout",
        "isVisible": true,
        "left": "22dp",
        "src": "menu_31.png",
        "top": "5dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelLogout = new kony.ui.Label({
        "id": "labelLogout",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "LogOut",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLogoutContainer.add(imgLogout, labelLogout);
    var FlexContainer0b649aae5ffd040 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35dp",
        "id": "FlexContainer0b649aae5ffd040",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox06a7bf2770c6242",
        "top": "425dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b649aae5ffd040.setDefaultUnit(kony.flex.DP);
    var Label024694653a6a04a = new kony.ui.Label({
        "id": "Label024694653a6a04a",
        "isVisible": true,
        "left": "22dp",
        "skin": "CopyslLabel08205867ee7744e",
        "text": "© DASH 2016.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel08d5039c9b1934a = new kony.ui.Label({
        "id": "CopyLabel08d5039c9b1934a",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0d41d8afbe4e14e",
        "text": "Business Associate Agreement ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0654298db22b04a = new kony.ui.Label({
        "id": "CopyLabel0654298db22b04a",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0d41d8afbe4e14e",
        "text": "Privacy Policy",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0b649aae5ffd040.add(Label024694653a6a04a, CopyLabel08d5039c9b1934a, CopyLabel0654298db22b04a);
    flxMenuItemsContainer.add(flxDashBoardContainer, flxDischargeNotificationContainer, flxAdmittCointer, flxSupportContainer, flxProfileContainer, flxConfigarationAlertsContainer, flxAlerttoneSettings, flxLogoutContainer, FlexContainer0b649aae5ffd040);
    flxMenuContainer.add(flxMenuProfileDetailsContainer, flxMenuItemsContainer);
    frmEditProfile.add(flxContainer1, flxMenuContainer);
};

function frmEditProfileGlobals() {
    frmEditProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEditProfile,
        "enabledForIdleTimeout": false,
        "id": "frmEditProfile",
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
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmEditProfile.info = {
        "kuid": "7f237bf94cbe40eca705b8771c4cc80c"
    };
};