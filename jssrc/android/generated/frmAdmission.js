function addWidgetsfrmAdmission() {
    frmAdmission.setDefaultUnit(kony.flex.DP);
    var flxContainerAdmissiom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxContainerAdmissiom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxContainerAdmissiom.setDefaultUnit(kony.flex.DP);
    var flxActionbarContainerAdmission = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxActionbarContainerAdmission",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxActionbarContainerAdmission.setDefaultUnit(kony.flex.DP);
    var imgMenuOpenAdmission = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25%",
        "id": "imgMenuOpenAdmission",
        "isVisible": true,
        "left": "5%",
        "onTouchStart": AS_Image_3a3ed25d57a341029f1d783058727c84,
        "skin": "slImage",
        "src": "back_03.png",
        "top": "20dp",
        "width": "5%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelActionBarAdmission = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelActionBarAdmission",
        "isVisible": true,
        "left": "0dp",
        "skin": "skinActionBarHeader",
        "text": "Admission",
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
    flxActionbarContainerAdmission.add(imgMenuOpenAdmission, labelActionBarAdmission);
    var FlexContainerBodyAdmission = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "FlexContainerBodyAdmission",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopysknReferringFacilityInfo02eb33aed5f564a",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerBodyAdmission.setDefaultUnit(kony.flex.DP);
    var FlexContainerAdmissionSub1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "FlexContainerAdmissionSub1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainerAdmissionSub1.setDefaultUnit(kony.flex.DP);
    var ImageStatus = new kony.ui.Image2({
        "centerY": "50%",
        "id": "ImageStatus",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "admissiondetailsstatus.png",
        "top": "10dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnTakeAction = new kony.ui.Button({
        "centerY": "50%",
        "id": "btnTakeAction",
        "isVisible": true,
        "left": "30dp",
        "onClick": AS_NamedActions_526b9726d9f646619dec541686cd7b4f,
        "right": "5%",
        "skin": "sknTakeActionButton",
        "text": "Take Action",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false
    }, {});
    FlexContainerAdmissionSub1.add(ImageStatus, btnTakeAction);
    var FlexContainerAdmissionSub2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerAdmissionSub2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    FlexContainerAdmissionSub2.setDefaultUnit(kony.flex.DP);
    var LabeStatus = new kony.ui.Label({
        "id": "LabeStatus",
        "isVisible": true,
        "left": "15dp",
        "skin": "skncodeStatus",
        "text": "Code Status-",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelcodeStatus = new kony.ui.Label({
        "id": "labelcodeStatus",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknStaus",
        "text": "Pending",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var labelDocToDoc = new kony.ui.Label({
        "id": "labelDocToDoc",
        "isVisible": true,
        "left": "15%",
        "skin": "skncodeStatus",
        "text": "Doc to Doc Requested",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainerAdmissionSub2.add(LabeStatus, labelcodeStatus, labelDocToDoc);
    var flexContainerAdmissionSub3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerAdmissionSub3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "right": "5dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%"
    }, {}, {});
    flexContainerAdmissionSub3.setDefaultUnit(kony.flex.DP);
    var flxConReferringFacilityInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "flxConReferringFacilityInfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "onClick": AS_NamedActions_7b404dbb005749549e452e4d6ce70498,
        "skin": "sknAdmissionflx",
        "top": "0dp",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flxConReferringFacilityInfo.setDefaultUnit(kony.flex.DP);
    var CopyimgPrint05f5af9eb1e6743 = new kony.ui.Image2({
        "bottom": "1dp",
        "centerY": "50%",
        "id": "CopyimgPrint05f5af9eb1e6743",
        "isVisible": true,
        "left": "5dp",
        "right": "1dp",
        "skin": "slImage",
        "src": "info.png",
        "top": "1dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnReferringFacilityInfo = new kony.ui.Button({
        "bottom": "1dp",
        "centerY": "50%",
        "id": "btnReferringFacilityInfo",
        "isVisible": true,
        "left": "5dp",
        "right": "1dp",
        "skin": "sknTakeActionButton1",
        "text": "Referring Facility Info",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxConReferringFacilityInfo.add(CopyimgPrint05f5af9eb1e6743, btnReferringFacilityInfo);
    var flxConBoardingPass = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "flxConBoardingPass",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "sknAdmissionflxDisable",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxConBoardingPass.setDefaultUnit(kony.flex.DP);
    var CopyimgPrint08684fc3db5544c = new kony.ui.Image2({
        "centerY": "50%",
        "id": "CopyimgPrint08684fc3db5544c",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "boardingpass.png",
        "top": "0dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnReferringFacilityInfo0d11d054a96bb4b = new kony.ui.Button({
        "bottom": "1dp",
        "centerY": "50%",
        "id": "CopybtnReferringFacilityInfo0d11d054a96bb4b",
        "isVisible": true,
        "left": "5dp",
        "right": "1dp",
        "skin": "sknTakeActionButtonDisable",
        "text": "Boarding Pass",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {});
    flxConBoardingPass.add(CopyimgPrint08684fc3db5544c, CopybtnReferringFacilityInfo0d11d054a96bb4b);
    var flxConMOTform = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "flxConMOTform",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "sknAdmissionflxDisable",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxConMOTform.setDefaultUnit(kony.flex.DP);
    var CopyimgPrint0fca700c6b20045 = new kony.ui.Image2({
        "centerY": "50.00%",
        "id": "CopyimgPrint0fca700c6b20045",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infodisable.png",
        "top": "0dp",
        "width": "12%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnReferringFacilityInfo0cc949a35197749 = new kony.ui.Button({
        "centerY": "50%",
        "id": "CopybtnReferringFacilityInfo0cc949a35197749",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknTakeActionButtonDisable",
        "text": "MOT Form",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {});
    flxConMOTform.add(CopyimgPrint0fca700c6b20045, CopybtnReferringFacilityInfo0cc949a35197749);
    var CopyflxConMOTform0e9da8ee67e354e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "CopyflxConMOTform0e9da8ee67e354e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "skin": "sknAdmissionflx",
        "top": "0dp",
        "width": "8%",
        "zIndex": 1
    }, {}, {});
    CopyflxConMOTform0e9da8ee67e354e.setDefaultUnit(kony.flex.DP);
    var CopyimgPrint07bb0b642d4b144 = new kony.ui.Image2({
        "bottom": "1dp",
        "centerX": "50%",
        "centerY": "50%",
        "height": "15dp",
        "id": "CopyimgPrint07bb0b642d4b144",
        "isVisible": true,
        "left": "3dp",
        "right": "1dp",
        "skin": "slImage",
        "src": "printer.png",
        "top": "0dp",
        "width": "72.29%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxConMOTform0e9da8ee67e354e.add(CopyimgPrint07bb0b642d4b144);
    flexContainerAdmissionSub3.add(flxConReferringFacilityInfo, flxConBoardingPass, flxConMOTform, CopyflxConMOTform0e9da8ee67e354e);
    var flexContainerAdmissionDetailsBlock = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "36dp",
        "id": "flexContainerAdmissionDetailsBlock",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_68503974481a415db5ecd3e31fe5f652,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerAdmissionDetailsBlock.setDefaultUnit(kony.flex.DP);
    var imgCollapsable1 = new kony.ui.Image2({
        "height": "35dp",
        "id": "imgCollapsable1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lableAdmissionDetails = new kony.ui.Label({
        "centerY": "17dp",
        "id": "lableAdmissionDetails",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknadmissionDetails1",
        "text": "Admission Details[Direct Admission]",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdmissionDetails = new kony.ui.Image2({
        "centerY": "17dp",
        "height": "20dp",
        "id": "imgCollapseArrowAdmissionDetails",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_FlexContainer_68503974481a415db5ecd3e31fe5f652,
        "right": "0%",
        "skin": "slImage",
        "src": "collapseclose.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerAdmissionDetailsBlock.add(imgCollapsable1, lableAdmissionDetails, imgCollapseArrowAdmissionDetails);
    var SegmentAdmissionDetails = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelAdmissionDetailsHeading": "Admission Number",
            "labelAdmissionDetailsValue": "HCAFg082161223"
        }, {
            "labelAdmissionDetailsHeading": "First Name",
            "labelAdmissionDetailsValue": "John"
        }, {
            "labelAdmissionDetailsHeading": "Last Name",
            "labelAdmissionDetailsValue": "R"
        }, {
            "labelAdmissionDetailsHeading": "Age",
            "labelAdmissionDetailsValue": "30"
        }, {
            "labelAdmissionDetailsHeading": "Gender",
            "labelAdmissionDetailsValue": "Male"
        }],
        "groupCells": false,
        "id": "SegmentAdmissionDetails",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxContainerSegAdmisionDetails,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxContainerSegAdmisionDetails": "flxContainerSegAdmisionDetails",
            "labelAdmissionDetailsHeading": "labelAdmissionDetailsHeading",
            "labelAdmissionDetailsValue": "labelAdmissionDetailsValue"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexContainerVitalSignalsBlock = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "36dp",
        "id": "flexContainerVitalSignalsBlock",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_811d40bcf159457fbf7a153d2bb9ee6a,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerVitalSignalsBlock.setDefaultUnit(kony.flex.DP);
    var imgCollapsable2 = new kony.ui.Image2({
        "height": "44dp",
        "id": "imgCollapsable2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "-3dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lableAdmissionDetails2 = new kony.ui.Label({
        "centerY": "18dp",
        "id": "lableAdmissionDetails2",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknadmissionDetails1",
        "text": "Vital Signs",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowVitalSignals = new kony.ui.Image2({
        "centerY": "18dp",
        "height": "40dp",
        "id": "imgCollapseArrowVitalSignals",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_811d40bcf159457fbf7a153d2bb9ee6a,
        "skin": "slImage",
        "src": "collapseclose.png",
        "top": "3dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerVitalSignalsBlock.add(imgCollapsable2, lableAdmissionDetails2, imgCollapseArrowVitalSignals);
    var flexContainerShowVitalSigns = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerShowVitalSigns",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_81ae9b1cd5954d059dd679e59941a81f,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerShowVitalSigns.setDefaultUnit(kony.flex.DP);
    var SegmentVitalSigns = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelAdmissionDetailsHeading": "Vital Sign Date/Time",
            "labelAdmissionDetailsValue": "10/25/2016 1:46 PM"
        }, {
            "labelAdmissionDetailsHeading": "Temperature",
            "labelAdmissionDetailsValue": "80.00 F"
        }, {
            "labelAdmissionDetailsHeading": "Blood Pressure",
            "labelAdmissionDetailsValue": "128/89 Sys/Dias"
        }],
        "groupCells": false,
        "id": "SegmentVitalSigns",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxContainerSegAdmisionDetails,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxContainerSegAdmisionDetails": "flxContainerSegAdmisionDetails",
            "labelAdmissionDetailsHeading": "labelAdmissionDetailsHeading",
            "labelAdmissionDetailsValue": "labelAdmissionDetailsValue"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerShowVitalSigns.add(SegmentVitalSigns);
    var flexContainerSepsisScreeingBlock = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "36dp",
        "id": "flexContainerSepsisScreeingBlock",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_8283c08a069849b982e85d166112e4a3,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerSepsisScreeingBlock.setDefaultUnit(kony.flex.DP);
    var imgCollapsable3 = new kony.ui.Image2({
        "height": "38dp",
        "id": "imgCollapsable3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lableAdmissionDetails3 = new kony.ui.Label({
        "centerY": "18dp",
        "id": "lableAdmissionDetails3",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknadmissionDetails1",
        "text": "Sepsis Screeing",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowSepsisScreening = new kony.ui.Image2({
        "centerY": "18dp",
        "height": "40dp",
        "id": "imgCollapseArrowSepsisScreening",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_8283c08a069849b982e85d166112e4a3,
        "right": "0%",
        "skin": "slImage",
        "src": "collapseclose.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerSepsisScreeingBlock.add(imgCollapsable3, lableAdmissionDetails3, imgCollapseArrowSepsisScreening);
    var flexContainerSepsisScreeing = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerSepsisScreeing",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_049a8ef7b4184e5b8de1135d984de911,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerSepsisScreeing.setDefaultUnit(kony.flex.DP);
    var SegmentSepsisScreeing = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "labelAdmissionDetailsHeading": "Sepsis Screening",
            "labelAdmissionDetailsValue": "HR => 90"
        }, {
            "labelAdmissionDetailsHeading": "Suspected / Documented Infection",
            "labelAdmissionDetailsValue": "NO"
        }],
        "groupCells": false,
        "id": "SegmentSepsisScreeing",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxContainerSegAdmisionDetails,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxContainerSegAdmisionDetails": "flxContainerSegAdmisionDetails",
            "labelAdmissionDetailsHeading": "labelAdmissionDetailsHeading",
            "labelAdmissionDetailsValue": "labelAdmissionDetailsValue"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerSepsisScreeing.add(SegmentSepsisScreeing);
    var flexContainerAdditionalInfoBlock = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "36dp",
        "id": "flexContainerAdditionalInfoBlock",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_89fb95a2fd804ba0acb7ea58f4ddef6b,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    flexContainerAdditionalInfoBlock.setDefaultUnit(kony.flex.DP);
    var imgCollapsable4 = new kony.ui.Image2({
        "height": "37dp",
        "id": "imgCollapsable4",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "collapselabelicon.png",
        "top": "0dp",
        "width": "1%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lableAdmissionDetails4 = new kony.ui.Label({
        "centerY": "16dp",
        "id": "lableAdmissionDetails4",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknadmissionDetails1",
        "text": "Additional Infomation",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCollapseArrowAdditonalInfo = new kony.ui.Image2({
        "centerY": "16dp",
        "height": "40dp",
        "id": "imgCollapseArrowAdditonalInfo",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_89fb95a2fd804ba0acb7ea58f4ddef6b,
        "right": "0%",
        "skin": "slImage",
        "src": "collapseclose.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerAdditionalInfoBlock.add(imgCollapsable4, lableAdmissionDetails4, imgCollapseArrowAdditonalInfo);
    var flexContainerAdmissionShowAdditionalInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "1%",
        "clipBounds": true,
        "id": "flexContainerAdmissionShowAdditionalInfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "right": "2%",
        "skin": "flxAdmissionAditionalInfoBorder",
        "top": "1%",
        "width": "96%"
    }, {}, {});
    flexContainerAdmissionShowAdditionalInfo.setDefaultUnit(kony.flex.DP);
    var flxadmissionAdditionalInfoHeading = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxadmissionAdditionalInfoHeading",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknadmissionAdditionalInfoHeading",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxadmissionAdditionalInfoHeading.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission0f1a44bd3862145 = new kony.ui.Label({
        "id": "CopylabelPsychAdmission0f1a44bd3862145",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlabeladmissionAditionalInfo",
        "text": "Date",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail0f5d2d55305f841 = new kony.ui.Label({
        "id": "CopylabelPsychEmail0f5d2d55305f841",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlabeladmissionAditionalInfo",
        "text": "User",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText040d3c4f6815b45 = new kony.ui.Label({
        "id": "CopylabelPsychText040d3c4f6815b45",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlabeladmissionAditionalInfo",
        "text": "Status",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification06e2df98f481447 = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification06e2df98f481447",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknlabeladmissionAditionalInfo",
        "text": "Action Note",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxadmissionAdditionalInfoHeading.add(CopylabelPsychAdmission0f1a44bd3862145, CopylabelPsychEmail0f5d2d55305f841, CopylabelPsychText040d3c4f6815b45, CopylabelPsyncAppNotification06e2df98f481447);
    var SegmentAditionalInfo = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "tmplSegAdmissionAditionalInfolabeRevoke": "Label",
            "tmplSegAdmissionAditionalInfolabeValueRevoke": "Label",
            "tmplSegAdmissionAditionalInfolabelActionNote": "Label",
            "tmplSegAdmissionAditionalInfolabelDate": "Label",
            "tmplSegAdmissionAditionalInfolabelStatus": "Label",
            "tmplSegAdmissionAditionalInfolabelUser": "Label"
        }, {
            "tmplSegAdmissionAditionalInfolabeRevoke": "Label",
            "tmplSegAdmissionAditionalInfolabeValueRevoke": "Label",
            "tmplSegAdmissionAditionalInfolabelActionNote": "Label",
            "tmplSegAdmissionAditionalInfolabelDate": "Label",
            "tmplSegAdmissionAditionalInfolabelStatus": "Label",
            "tmplSegAdmissionAditionalInfolabelUser": "Label"
        }],
        "groupCells": false,
        "id": "SegmentAditionalInfo",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer0b505c83adc6248,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0b505c83adc6248": "FlexContainer0b505c83adc6248",
            "tmplSegAdmissionAditionalInfolabeRevoke": "tmplSegAdmissionAditionalInfolabeRevoke",
            "tmplSegAdmissionAditionalInfolabeValueRevoke": "tmplSegAdmissionAditionalInfolabeValueRevoke",
            "tmplSegAdmissionAditionalInfolabelActionNote": "tmplSegAdmissionAditionalInfolabelActionNote",
            "tmplSegAdmissionAditionalInfolabelDate": "tmplSegAdmissionAditionalInfolabelDate",
            "tmplSegAdmissionAditionalInfolabelStatus": "tmplSegAdmissionAditionalInfolabelStatus",
            "tmplSegAdmissionAditionalInfolabelUser": "tmplSegAdmissionAditionalInfolabelUser",
            "tmplSegFlexContainerAdmissionSub2": "tmplSegFlexContainerAdmissionSub2",
            "tmplSegFlexContainersegAdmissionSub1": "tmplSegFlexContainersegAdmissionSub1"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContainerAdmissionShowAdditionalInfo.add(flxadmissionAdditionalInfoHeading, SegmentAditionalInfo);
    FlexContainerBodyAdmission.add(FlexContainerAdmissionSub1, FlexContainerAdmissionSub2, flexContainerAdmissionSub3, flexContainerAdmissionDetailsBlock, SegmentAdmissionDetails, flexContainerVitalSignalsBlock, flexContainerShowVitalSigns, flexContainerSepsisScreeingBlock, flexContainerSepsisScreeing, flexContainerAdditionalInfoBlock, flexContainerAdmissionShowAdditionalInfo);
    flxContainerAdmissiom.add(flxActionbarContainerAdmission, FlexContainerBodyAdmission);
    frmAdmission.add(flxContainerAdmissiom);
};

function frmAdmissionGlobals() {
    frmAdmission = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAdmission,
        "enabledForIdleTimeout": false,
        "id": "frmAdmission",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_6d7772887d824c9ba29e40e4b0a0445f,
        "skin": "sknfrmAdmission"
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
    frmAdmission.info = {
        "kuid": "6c615efc359e439e90d51933eeb167d0"
    };
};