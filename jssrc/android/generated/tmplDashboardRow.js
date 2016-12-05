function initializetmplDashboardRow() {
    flxDashboardRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxDashboardRow",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    flxDashboardRow.setDefaultUnit(kony.flex.DP);
    var CopyflxTemplateRowConfigurationAlertsContainer0b37568c64a1e44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyflxTemplateRowConfigurationAlertsContainer0b37568c64a1e44",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFboxbashboardsegRow1",
        "top": "0dp",
        "width": "15%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer0b37568c64a1e44.setDefaultUnit(kony.flex.DP);
    var lableRef = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lableRef",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknDashBoardHeader",
        "text": "Ref #",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelReferringFacility = new kony.ui.Label({
        "bottom": "5dp",
        "id": "labelReferringFacility",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknDashBoardHeader",
        "text": "Ref Fac",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTemplateRowConfigurationAlertsContainer0b37568c64a1e44.add(lableRef, labelReferringFacility);
    var CopyflxTemplateRowConfigurationAlertsContainer0059c7a62a9ff4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyflxTemplateRowConfigurationAlertsContainer0059c7a62a9ff4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0",
        "skin": "lFboxbashboardsegRow2",
        "top": "0",
        "width": "40%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer0059c7a62a9ff4c.setDefaultUnit(kony.flex.DP);
    var labelValueRef = new kony.ui.Label({
        "bottom": "5dp",
        "id": "labelValueRef",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "HCAPH110816-0005",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "100%",
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
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTemplateRowConfigurationAlertsContainer0059c7a62a9ff4c.add(labelValueRef, labelValueReferringFacility);
    var CopyflxTemplateRowConfigurationAlertsContainer0f13eb723747643 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyflxTemplateRowConfigurationAlertsContainer0f13eb723747643",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFboxbashboardsegRow1",
        "top": "0",
        "width": "30%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer0f13eb723747643.setDefaultUnit(kony.flex.DP);
    var labelAgeSex = new kony.ui.Label({
        "bottom": "5dp",
        "id": "labelAgeSex",
        "includeFontPadding": false,
        "isVisible": true,
        "left": "5%",
        "skin": "sknDashBoardHeader",
        "text": "Age/Sex",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
        "id": "labelSepsisScreeing",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknDashBoardHeader",
        "text": "Sepsis Screening",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTemplateRowConfigurationAlertsContainer0f13eb723747643.add(labelAgeSex, labelSepsisScreeing);
    var CopyflxTemplateRowConfigurationAlertsContainer070f3d912b44f4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyflxTemplateRowConfigurationAlertsContainer070f3d912b44f4b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0",
        "skin": "lFboxbashboardsegRow2",
        "top": "0",
        "width": "14.58%"
    }, {}, {});
    CopyflxTemplateRowConfigurationAlertsContainer070f3d912b44f4b.setDefaultUnit(kony.flex.DP);
    var lableValueAgeSex = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lableValueAgeSex",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "25F",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
        "id": "labelValueSepsisScreening",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknSegmentTmplDashBoard",
        "text": "Negative",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTemplateRowConfigurationAlertsContainer070f3d912b44f4b.add(lableValueAgeSex, labelValueSepsisScreening);
    flxDashboardRow.add(CopyflxTemplateRowConfigurationAlertsContainer0b37568c64a1e44, CopyflxTemplateRowConfigurationAlertsContainer0059c7a62a9ff4c, CopyflxTemplateRowConfigurationAlertsContainer0f13eb723747643, CopyflxTemplateRowConfigurationAlertsContainer070f3d912b44f4b);
}