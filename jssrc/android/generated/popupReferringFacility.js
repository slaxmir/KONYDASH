function addWidgetspopupReferringFacility() {
    var popupReferringFacilityRow1 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [5, 1, 5, 1],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupReferringFacilityTitle = new kony.ui.Label({
        "id": "popupReferringFacilityTitle",
        "isVisible": true,
        "skin": "popupReferringFacilityTitleSkin",
        "text": "Referring Facility",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 93,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var popupReferringFacilityClose = new kony.ui.Image2({
        "id": "popupReferringFacilityClose",
        "isVisible": true,
        "skin": "slImage",
        "src": "popcloseicon.png"
    }, {
        "containerWeight": 7,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    popupReferringFacilityRow1.add(popupReferringFacilityTitle, popupReferringFacilityClose);
    var referringFacilityBorder = new kony.ui.Line({
        "id": "referringFacilityBorder",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 2
    }, {});
    var popupReferringFacilityRow2 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow2Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupReferringFacilityRow2Heading1 = new kony.ui.Label({
        "id": "popupReferringFacilityRow2Heading1",
        "isVisible": true,
        "skin": "popupReferringFacilityRow2Heading1Skin",
        "text": "Clinic Info",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 10, 1, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow2.add(popupReferringFacilityRow2Heading1);
    var popupReferringFacilityRow3 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow3",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringName = new kony.ui.Label({
        "id": "ReferringName",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Facility Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringNameValue = new kony.ui.Label({
        "id": "ReferringNameValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Test Cleveland Clinic - Cleveland",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow3.add(ReferringName, ReferringNameValue);
    var popupReferringFacilityRow4 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow4",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringPhone = new kony.ui.Label({
        "id": "ReferringPhone",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Phone",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringPhoneValue = new kony.ui.Label({
        "id": "ReferringPhoneValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "(777) 777-7777",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow4.add(ReferringPhone, ReferringPhoneValue);
    var popupReferringFacilityRow5 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow5",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFax = new kony.ui.Label({
        "id": "ReferringFax",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Fax\t",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFaxValue = new kony.ui.Label({
        "id": "ReferringFaxValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "(444) 444-4444",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow5.add(ReferringFax, ReferringFaxValue);
    var popupReferringFacilityRow6 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow6",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringEmail = new kony.ui.Label({
        "id": "ReferringEmail",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringEmailValue = new kony.ui.Label({
        "id": "ReferringEmailValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "qateam.sms@gmail.com",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow6.add(ReferringEmail, ReferringEmailValue);
    var popupReferringFacilityRow7 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow7",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityLocationCode = new kony.ui.Label({
        "id": "ReferringFacilityLocationCode",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Facility Location Code",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityLocationCodeValue = new kony.ui.Label({
        "id": "ReferringFacilityLocationCodeValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "8745683435",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow7.add(ReferringFacilityLocationCode, ReferringFacilityLocationCodeValue);
    var popupReferringFacilityClinicianInfo = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityClinicianInfo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow2Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupReferringFacilityRow2Heading2 = new kony.ui.Label({
        "id": "popupReferringFacilityRow2Heading2",
        "isVisible": true,
        "skin": "popupReferringFacilityRow2Heading1Skin",
        "text": "Clinician Info",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 10, 1, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityClinicianInfo.add(popupReferringFacilityRow2Heading2);
    var popupReferringFacilityRow8 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow8",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityClinician = new kony.ui.Label({
        "id": "ReferringFacilityClinician",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Clinician",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityClinicianValue = new kony.ui.Label({
        "id": "ReferringFacilityClinicianValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Rc, Phani",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow8.add(ReferringFacilityClinician, ReferringFacilityClinicianValue);
    var popupReferringFacilityRow9 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow9",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityCellPhone = new kony.ui.Label({
        "id": "ReferringFacilityCellPhone",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Cell Phone",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityCellPhoneValue = new kony.ui.Label({
        "id": "ReferringFacilityCellPhoneValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "(716) 392-9245",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow9.add(ReferringFacilityCellPhone, ReferringFacilityCellPhoneValue);
    var popupReferringFacilityRow10 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow10",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityClinicianEmail = new kony.ui.Label({
        "id": "ReferringFacilityClinicianEmail",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityClinicianEmailValue = new kony.ui.Label({
        "id": "ReferringFacilityClinicianEmailValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "phani.bsetty@gmail.com",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow10.add(ReferringFacilityClinicianEmail, ReferringFacilityClinicianEmailValue);
    var popupReferringFacilityContactPerson = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityContactPerson",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow2Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var popupReferringFacilityRow2Heading3 = new kony.ui.Label({
        "id": "popupReferringFacilityRow2Heading3",
        "isVisible": true,
        "skin": "popupReferringFacilityRow2Heading1Skin",
        "text": "Contact Person Info",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 10, 1, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityContactPerson.add(popupReferringFacilityRow2Heading3);
    var popupReferringFacilityRow11 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow11",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityContactPerson = new kony.ui.Label({
        "id": "ReferringFacilityContactPerson",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Contact Person\t",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityContactPersonValue = new kony.ui.Label({
        "id": "ReferringFacilityContactPersonValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "phani",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow11.add(ReferringFacilityContactPerson, ReferringFacilityContactPersonValue);
    var popupReferringFacilityRow12 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow12",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityContactPersonPhone = new kony.ui.Label({
        "id": "ReferringFacilityContactPersonPhone",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Phone",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityContactPersonPhoneValue = new kony.ui.Label({
        "id": "ReferringFacilityContactPersonPhoneValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "(452) 125-4521\t",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow12.add(ReferringFacilityContactPersonPhone, ReferringFacilityContactPersonPhoneValue);
    var popupReferringFacilityRow13 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "popupReferringFacilityRow13",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "popupReferringFacilityRow1Skin"
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var ReferringFacilityContactPersonEmail = new kony.ui.Label({
        "id": "ReferringFacilityContactPersonEmail",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var ReferringFacilityContactPersonEmailValue = new kony.ui.Label({
        "id": "ReferringFacilityContactPersonEmailValue",
        "isVisible": true,
        "skin": "ReferringNameSkin",
        "text": "qateam.sms@gmail.com",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    popupReferringFacilityRow13.add(ReferringFacilityContactPersonEmail, ReferringFacilityContactPersonEmailValue);
    popupReferringFacility.add(popupReferringFacilityRow1, referringFacilityBorder, popupReferringFacilityRow2, popupReferringFacilityRow3, popupReferringFacilityRow4, popupReferringFacilityRow5, popupReferringFacilityRow6, popupReferringFacilityRow7, popupReferringFacilityClinicianInfo, popupReferringFacilityRow8, popupReferringFacilityRow9, popupReferringFacilityRow10, popupReferringFacilityContactPerson, popupReferringFacilityRow11, popupReferringFacilityRow12, popupReferringFacilityRow13);
};

function popupReferringFacilityGlobals() {
    popupReferringFacility = new kony.ui.Popup({
        "addWidgets": addWidgetspopupReferringFacility,
        "id": "popupReferringFacility",
        "isModal": true,
        "skin": "popupReferringFacilitySkin",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN
    });
    popupReferringFacility.info = {
        "kuid": "174cfafd722f4424905c97a6493b857e"
    };
};