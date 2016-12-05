function initializetmplDashboard() {
    CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "skntmplRoundedbgDashboardborderblue"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e.setDefaultUnit(kony.flex.DP);
    var FlexContainer0fb1e2f7758184e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "FlexContainer0fb1e2f7758184e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFboxDashbordColapse",
        "top": "0dp",
        "width": "2%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0fb1e2f7758184e.setDefaultUnit(kony.flex.DP);
    FlexContainer0fb1e2f7758184e.add();
    var FlexContainer04b1e195e498540 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "FlexContainer04b1e195e498540",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "right": "5dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04b1e195e498540.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0f7a2b74862b742 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "30dp",
        "id": "CopyFlexContainer0f7a2b74862b742",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": 0,
        "skin": "skntmplRoundedbgDashboardstattus",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f7a2b74862b742.setDefaultUnit(kony.flex.PERCENTAGE);
    var FlexContainer027b38e27710d47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "30dp",
        "id": "FlexContainer027b38e27710d47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer027b38e27710d47.setDefaultUnit(kony.flex.DP);
    var imgstatus = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "49.29%",
        "id": "imgstatus",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "capsule.png",
        "width": "70%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer027b38e27710d47.add(imgstatus);
    var labeValuelname = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "labeValuelname",
        "includeFontPadding": false,
        "isVisible": true,
        "left": 5,
        "skin": "sknSegmentTmplDashBoard",
        "text": "John Smith",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelValueChiefComplaint = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "labelValueChiefComplaint",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "KIdney stones issues",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labeValuelCondition = new kony.ui.Label({
        "centerY": 50,
        "height": "30dp",
        "id": "labeValuelCondition",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "Guarded",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labeValuelBedType = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "labeValuelBedType",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "Intensive Care unit",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0f7a2b74862b742.add(FlexContainer027b38e27710d47, labeValuelname, labelValueChiefComplaint, labeValuelCondition, labeValuelBedType);
    var CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skntmplRoundedbgDashboardstattus",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c.setDefaultUnit(kony.flex.DP);
    var lableRef = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "lableRef",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknDashBoardHeader",
        "text": "Adm #",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelValueAdm = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelValueAdm",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "HCAPH110816-0005",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelAgeSex = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelAgeSex",
        "includeFontPadding": false,
        "isVisible": true,
        "left": 0,
        "skin": "sknDashBoardHeader",
        "text": "Age/Sex",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "27.78%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelValueAge = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelValueAge",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "25F",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c.add(lableRef, labelValueAdm, labelAgeSex, labelValueAge);
    var CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skntmplRoundedbgDashboardstattus",
        "top": "0",
        "width": "100%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140.setDefaultUnit(kony.flex.DP);
    var labelRefFac = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelRefFac",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknDashBoardHeader",
        "text": "Ref Fac",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelValueReferringFacility = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelValueReferringFacility",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "PhanidraED",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelSepsisScreeing = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelSepsisScreeing",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknDashBoardHeader",
        "text": "Sepsis Screening",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelValueSepsisScreening = new kony.ui.Label({
        "bottom": "5dp",
        "centerY": "50%",
        "id": "labelValueSepsisScreening",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "Negative",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140.add(labelRefFac, labelValueReferringFacility, labelSepsisScreeing, labelValueSepsisScreening);
    FlexContainer04b1e195e498540.add(CopyFlexContainer0f7a2b74862b742, CopyflxTemplateRowConfigurationAlertsContainer04fbe30676a584c, CopyflxTemplateRowConfigurationAlertsContainer0555522c60d9140);
    CopyflxTemplateRowConfigurationAlertsContainer0be534a1baf644e.add(FlexContainer0fb1e2f7758184e, FlexContainer04b1e195e498540);
}