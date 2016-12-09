function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90.51%",
        "id": "flxContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0d5c7b9eaef914c",
        "top": "10%",
        "width": "90%"
    }, {}, {});
    flxContainer.setDefaultUnit(kony.flex.DP);
    var flexForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90.13%",
        "id": "flexForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "right": "3%",
        "skin": "slBorder",
        "top": "71dp",
        "width": "98%"
    }, {}, {});
    flexForm.setDefaultUnit(kony.flex.DP);
    var Label05846d00eb5ae4f = new kony.ui.Label({
        "id": "Label05846d00eb5ae4f",
        "isVisible": true,
        "left": "29dp",
        "skin": "CopyslLabel0326f56bc85bf41",
        "text": "Select Hospital/System",
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
    var ListBox046ea5cabb0b44f = new kony.ui.ListBox({
        "centerX": 159,
        "height": "40dp",
        "id": "ListBox046ea5cabb0b44f",
        "isVisible": true,
        "left": 0,
        "masterData": [
            ["lb1", "Baptist Health of Southeast Texas"],
            ["lb2", "College Station Medical Center"],
            ["lb3", "Cypress Fairbanks Medical Center"],
            ["Key221", "Dignity Healthcare"],
            ["Key809", "HCA Continental"],
            ["Key465", "HCA Gulf Coast"],
            ["Key214", "HCA North Texas"],
            ["Key506", "NIX Health"],
            ["Key501", "Tomball Regional Medical Center"],
            ["Key202", "Valley Baptist Medical Center"],
            ["Key558", "AM Module"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Baptist Health of Southeast Texas"],
        "skin": "CopyslListBox05ee0bb3863274c",
        "top": "6dp",
        "width": 260,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyLabel0231dc097303045 = new kony.ui.Label({
        "id": "CopyLabel0231dc097303045",
        "isVisible": true,
        "left": "29dp",
        "skin": "CopyslLabel0326f56bc85bf41",
        "text": "User Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "16dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtUsr = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtUsr",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "secureTextEntry": false,
        "skin": "inputbox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "6dp",
        "width": "260dp",
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
    var CopyLabel0f7f8433a8d1541 = new kony.ui.Label({
        "id": "CopyLabel0f7f8433a8d1541",
        "isVisible": true,
        "left": "29dp",
        "skin": "CopyslLabel0326f56bc85bf41",
        "text": "Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "16dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtPass = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "49.65%",
        "height": "40dp",
        "id": "txtPass",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "secureTextEntry": true,
        "skin": "inputbox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "6dp",
        "width": "260dp",
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
    var horFlexC1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25dp",
        "id": "horFlexC1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "5dp",
        "width": "83%",
        "zIndex": 1
    }, {}, {});
    horFlexC1.setDefaultUnit(kony.flex.DP);
    var Image0e6f20bef2fd645 = new kony.ui.Image2({
        "height": "38px",
        "id": "Image0e6f20bef2fd645",
        "isVisible": true,
        "skin": "slImage",
        "src": "uncheck.png",
        "top": "4dp",
        "width": "50px",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylabelForgotPassword0e413f72fedeb48 = new kony.ui.Label({
        "centerX": 42,
        "height": "17dp",
        "id": "CopylabelForgotPassword0e413f72fedeb48",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Label_fd03141f2f974b758b09f851cff2a5c1,
        "right": 0,
        "skin": "CopyskinLabelRegister0c96150c001d643",
        "text": "Remember me",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelForgotPassword = new kony.ui.Label({
        "centerX": 114,
        "height": "17dp",
        "id": "labelForgotPassword",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Label_10591b3b26d44d58ba45107643bbbbea,
        "right": 0,
        "skin": "skinLabelRegister",
        "text": "Forgot Password?",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    horFlexC1.add(Image0e6f20bef2fd645, CopylabelForgotPassword0e413f72fedeb48, labelForgotPassword);
    var btnLogin = new kony.ui.Button({
        "centerX": "50.00%",
        "height": "40dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_d7fc02cd4fed4d7787cc597dcb3a01ff,
        "skin": "slLoginSkin1",
        "text": "Sign In",
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelRegister = new kony.ui.Label({
        "centerX": "60%",
        "id": "labelRegister",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_NamedActions_e9ff66d128fe44c280f00a79a3a057c0,
        "skin": "skinLabelRegister",
        "text": "Don't have account? Register",
        "top": "10dp",
        "width": "81.85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 10, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblAnnounce = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblAnnounce",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel039251fa175404a",
        "text": "By clicking \"Sign in\" above,",
        "top": "17dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblAnnounce03900473c8b054a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblAnnounce03900473c8b054a",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel039251fa175404a",
        "text": " I accept the Term & Condition",
        "top": "-2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btAnn2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "btAnn2",
        "isVisible": true,
        "left": "135dp",
        "skin": "sknLabel1",
        "text": "IF THERE ARE ISSUES WITH THE SITE, PLEASE CALL HCA TRANSFER CENTER TO ADMIT (187) 777-7422",
        "top": "11dp",
        "width": "255dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgStrm = new kony.ui.Image2({
        "centerX": "50%",
        "id": "imgStrm",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "footer.png",
        "top": "3dp",
        "width": "90dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label057fe168f411241 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label057fe168f411241",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel009e9aae34bd145",
        "text": "Privacy Policy",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "-1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexForm.add(Label05846d00eb5ae4f, ListBox046ea5cabb0b44f, CopyLabel0231dc097303045, txtUsr, CopyLabel0f7f8433a8d1541, txtPass, horFlexC1, btnLogin, labelRegister, lblAnnounce, CopylblAnnounce03900473c8b054a, btAnn2, imgStrm, Label057fe168f411241);
    flxContainer.add(flexForm);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "115dp",
        "id": "imgLogo",
        "imageWhenFailed": "pageondot.png",
        "isVisible": true,
        "left": "123dp",
        "skin": "slImage",
        "src": "dashlogo.png",
        "top": "11dp",
        "width": "115dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText09bc489a0054a43 = new kony.ui.RichText({
        "id": "CopyRichText09bc489a0054a43",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText0405b9b85b7284c",
        "text": "Note: By clicking “Sign In” above, I accept the following:\n\n",
        "top": "103%",
        "width": "90.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0edfdb231ea7a45 = new kony.ui.RichText({
        "id": "CopyRichText0edfdb231ea7a45",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText0405b9b85b7284c",
        "text": "You are about to access an HCA - Information Technology & Services, Inc. (IT&S) approved computer system. This system is to be used only by authorized users of IT&S, its customers and affiliates. As a user of this system, you have no expectation of privacy rights or ownership in anything you may create, store, send or receive on this system. By proceeding, your use of this system",
        "top": "106%",
        "width": "90.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0ea718206fb944e = new kony.ui.RichText({
        "id": "CopyRichText0ea718206fb944e",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText0405b9b85b7284c",
        "text": "1) constitutes your agreement that IT&S and/or your company may consent to law enforcement officials and agencies accessing information regarding your use of this network",
        "top": "122%",
        "width": "90.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText00baa39226c874a = new kony.ui.RichText({
        "id": "CopyRichText00baa39226c874a",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText0405b9b85b7284c",
        "text": "2) constitutes your consent to monitoring, retrieval, and disclosure of any information within this system for all purposes deemed appropriate by IT&S, including enforcement of rules concerning unacceptable uses of this system",
        "top": "130%",
        "width": "90.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText043db338a6d5b4c = new kony.ui.RichText({
        "id": "CopyRichText043db338a6d5b4c",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText0405b9b85b7284c",
        "text": "3) constitutes your agreement to comply with all privacy, security and other policies and procedures of IT&S and your company\nIf you have any questions about what constitutes an acceptable use by you, please consult the written policies provided by IT&S and your company.",
        "top": "140%",
        "width": "90.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 2],
        "paddingInPixel": false
    }, {});
    frmLogin.add(flxContainer, imgLogo, CopyRichText09bc489a0054a43, CopyRichText0edfdb231ea7a45, CopyRichText0ea718206fb944e, CopyRichText00baa39226c874a, CopyRichText043db338a6d5b4c);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknLogin"
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
    frmLogin.info = {
        "kuid": "af8d18b74b094c8eb69dbe2a05f31739"
    };
};