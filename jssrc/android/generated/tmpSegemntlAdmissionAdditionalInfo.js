function initializetmpSegemntlAdmissionAdditionalInfo() {
    FlexContainer0b505c83adc6248 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "FlexContainer0b505c83adc6248",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "skntemplFlxbg"
    }, {}, {});
    FlexContainer0b505c83adc6248.setDefaultUnit(kony.flex.DP);
    var tmplSegFlexContainersegAdmissionSub1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "tmplSegFlexContainersegAdmissionSub1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    tmplSegFlexContainersegAdmissionSub1.setDefaultUnit(kony.flex.DP);
    var tmplSegAdmissionAditionalInfolabelDate = new kony.ui.Label({
        "id": "tmplSegAdmissionAditionalInfolabelDate",
        "isVisible": true,
        "left": "10dp",
        "skin": "skntmplSegAdmissionAditionalInfolabelValue1",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "22%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var tmplSegAdmissionAditionalInfolabelUser = new kony.ui.Label({
        "id": "tmplSegAdmissionAditionalInfolabelUser",
        "isVisible": true,
        "left": "0dp",
        "skin": "skntmplSegAdmissionAditionalInfolabelValue1",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var tmplSegAdmissionAditionalInfolabelStatus = new kony.ui.Label({
        "id": "tmplSegAdmissionAditionalInfolabelStatus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skntmplSegAdmissionAditionalInfolabelValue1",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var tmplSegAdmissionAditionalInfolabelActionNote = new kony.ui.Label({
        "id": "tmplSegAdmissionAditionalInfolabelActionNote",
        "isVisible": true,
        "left": "0dp",
        "skin": "skntmplSegAdmissionAditionalInfolabelValue1",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    tmplSegFlexContainersegAdmissionSub1.add(tmplSegAdmissionAditionalInfolabelDate, tmplSegAdmissionAditionalInfolabelUser, tmplSegAdmissionAditionalInfolabelStatus, tmplSegAdmissionAditionalInfolabelActionNote);
    var tmplSegFlexContainerAdmissionSub2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "tmplSegFlexContainerAdmissionSub2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    tmplSegFlexContainerAdmissionSub2.setDefaultUnit(kony.flex.DP);
    var tmplSegAdmissionAditionalInfolabeRevoke = new kony.ui.Label({
        "id": "tmplSegAdmissionAditionalInfolabeRevoke",
        "isVisible": true,
        "left": "10dp",
        "skin": "skntmplSegAdmissionAditionalInfolabelValue1",
        "text": "Revoke",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var tmplSegAdmissionAditionalInfolabeValueRevoke = new kony.ui.Label({
        "id": "tmplSegAdmissionAditionalInfolabeValueRevoke",
        "isVisible": true,
        "left": "5%",
        "skin": "skntmplSegAdmissionAditionalInfolabelValue1",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    tmplSegFlexContainerAdmissionSub2.add(tmplSegAdmissionAditionalInfolabeRevoke, tmplSegAdmissionAditionalInfolabeValueRevoke);
    FlexContainer0b505c83adc6248.add(tmplSegFlexContainersegAdmissionSub1, tmplSegFlexContainerAdmissionSub2);
}