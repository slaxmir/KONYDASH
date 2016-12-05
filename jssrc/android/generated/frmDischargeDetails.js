function addWidgetsfrmDischargeDetails() {
    frmDischargeDetails.setDefaultUnit(kony.flex.DP);
    var FlexContainer02e9f2c9ed3a540 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer02e9f2c9ed3a540",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox057ed20ce9c2643",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer02e9f2c9ed3a540.setDefaultUnit(kony.flex.DP);
    var FlexContainer06f8caa5da05646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer06f8caa5da05646",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox04ca04769869444",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06f8caa5da05646.setDefaultUnit(kony.flex.DP);
    var imgMenuOpen = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "back_03.png",
        "top": "20%",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label061e1ab4e856744 = new kony.ui.Label({
        "id": "Label061e1ab4e856744",
        "isVisible": true,
        "left": "122dp",
        "skin": "CopyslLabel053744df40a2142",
        "text": "Admission",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer06f8caa5da05646.add(imgMenuOpen, Label061e1ab4e856744);
    var CopyFlexScrollContainer0b7ceed2b053542 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "contentOffset": {
            "y": "50dp"
        },
        "contentSize": {
            "height": "50dp"
        },
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "CopyFlexScrollContainer0b7ceed2b053542",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onScrolling": AS_FlexScrollContainer_c2941fa2ff3b41fd965dfb22193a6718,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "68dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexScrollContainer0b7ceed2b053542.setDefaultUnit(kony.flex.DP);
    var CopyButton0d56f14754ddc40 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "CopyButton0d56f14754ddc40",
        "isVisible": true,
        "left": "239dp",
        "skin": "CopyslButtonGlossBlue06cb370d4f97c43",
        "text": "Take Action",
        "top": "20dp",
        "width": "115dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel05cc3fb8c999f45 = new kony.ui.Label({
        "height": "25dp",
        "id": "CopyLabel05cc3fb8c999f45",
        "isVisible": true,
        "left": "9dp",
        "skin": "CopyslLabel0abb91b38760f4a",
        "text": "Current Status -",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "55dp",
        "width": "110dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel025394540eed344 = new kony.ui.Label({
        "id": "CopyLabel025394540eed344",
        "isVisible": true,
        "left": "118dp",
        "skin": "CopyslLabel03d99d6b047954e",
        "text": "Pending",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "59dp",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel082ca14095bb24a = new kony.ui.Label({
        "id": "CopyLabel082ca14095bb24a",
        "isVisible": true,
        "left": "197dp",
        "skin": "CopyslLabel061d647e2d25246",
        "text": "Doc to Doc -",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60dp",
        "width": "85dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0c1e633797fe746 = new kony.ui.Label({
        "id": "CopyLabel0c1e633797fe746",
        "isVisible": true,
        "left": "283dp",
        "skin": "CopyslLabel026abd1a991fa4e",
        "text": "Requested",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60dp",
        "width": "85dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyButton0e0fad8d4614646 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0d0ed5e1162294a",
        "height": "25dp",
        "id": "CopyButton0e0fad8d4614646",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslButtonGlossBlue027680beb3ae447",
        "text": "Referring Fecility info",
        "top": "85dp",
        "width": "130dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0683d9836d22b48 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0d0ed5e1162294a",
        "height": "25dp",
        "id": "CopyButton0683d9836d22b48",
        "isVisible": true,
        "left": "137dp",
        "skin": "CopyslButtonGlossBlue027680beb3ae447",
        "text": "Boarding Pass",
        "top": "85dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0506a21aac0674f = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0d0ed5e1162294a",
        "height": "25dp",
        "id": "CopyButton0506a21aac0674f",
        "isVisible": true,
        "left": "239dp",
        "skin": "CopyslButtonGlossBlue027680beb3ae447",
        "text": "MOT Form",
        "top": "85dp",
        "width": "80dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0a15a9f19062242 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "CopyButton0a15a9f19062242",
        "isVisible": true,
        "left": "340dp",
        "skin": "CopyslButtonGlossBlue073a36c15976847",
        "top": "85dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyListBox026e1739cbc4d4d = new kony.ui.ListBox({
        "height": "40dp",
        "id": "CopyListBox026e1739cbc4d4d",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Admission Details [Direct Admission]"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Admission Details [Direct Admission]"],
        "skin": "CopyslListBox0f7e860a9b4a04b",
        "top": "129dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [13, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopySegment0ea52e6f9b35844 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Label007babdc7a63143": "Admission Number",
            "Label0e9615ad5ce0a4c": "HCAfg7458976-5674"
        }, {
            "Label007babdc7a63143": "First Name",
            "Label0e9615ad5ce0a4c": "John"
        }, {
            "Label007babdc7a63143": "Last Name",
            "Label0e9615ad5ce0a4c": "smith"
        }, {
            "Label007babdc7a63143": "DOB",
            "Label0e9615ad5ce0a4c": "2013-05-04"
        }, {
            "Label007babdc7a63143": "Age",
            "Label0e9615ad5ce0a4c": "3 Year(s)3 Month(s)"
        }, {
            "Label007babdc7a63143": "Gender",
            "Label0e9615ad5ce0a4c": "Male"
        }, {
            "Label007babdc7a63143": "Patient ETA",
            "Label0e9615ad5ce0a4c": "Within 3 Hours"
        }, {
            "Label007babdc7a63143": "Additional info",
            "Label0e9615ad5ce0a4c": "Additional not specified"
        }, {
            "Label007babdc7a63143": " Condition ",
            "Label0e9615ad5ce0a4c": "Stable"
        }, {
            "Label007babdc7a63143": "Isolation Required",
            "Label0e9615ad5ce0a4c": "Yes"
        }],
        "groupCells": false,
        "height": "483dp",
        "id": "CopySegment0ea52e6f9b35844",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "top": "169dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0b21889ef4e094d": "FlexContainer0b21889ef4e094d",
            "Label007babdc7a63143": "Label007babdc7a63143",
            "Label0e9615ad5ce0a4c": "Label0e9615ad5ce0a4c"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 2, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyListBox0a71a100e294641 = new kony.ui.ListBox({
        "height": "45dp",
        "id": "CopyListBox0a71a100e294641",
        "isVisible": true,
        "left": "1dp",
        "masterData": [
            ["lb1", "Vital Signs"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Vital Signs"],
        "skin": "CopyslListBox07dfadd9e109749",
        "top": "660dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [38, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyListBox062168c9339fd4c = new kony.ui.ListBox({
        "height": "45dp",
        "id": "CopyListBox062168c9339fd4c",
        "isVisible": true,
        "left": "-1dp",
        "masterData": [
            ["lb1", "Sepsis Screening"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Sepsis Screening"],
        "skin": "CopyslListBox0e5032215fd674b",
        "top": "710dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [31, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyListBox0efc517d33b6240 = new kony.ui.ListBox({
        "height": "45dp",
        "id": "CopyListBox0efc517d33b6240",
        "isVisible": true,
        "left": "1dp",
        "masterData": [
            ["lb1", "Infectious Desease Questionere"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Infectious Desease Questionere"],
        "skin": "CopyslListBox06affcb41c21744",
        "top": "761dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [19, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyListBox02807291251bc4f = new kony.ui.ListBox({
        "height": "45dp",
        "id": "CopyListBox02807291251bc4f",
        "isVisible": true,
        "left": "-1dp",
        "masterData": [
            ["lb1", "Additional Information"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Additional Information"],
        "skin": "CopyslListBox0a4c260a0fd7c41",
        "top": "811dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [27, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyListBox08113c3bb681547 = new kony.ui.ListBox({
        "height": "45dp",
        "id": "CopyListBox08113c3bb681547",
        "isVisible": true,
        "left": "1dp",
        "masterData": [
            ["lb1", "Admission Notes"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Admission Notes"],
        "skin": "CopyslListBox04dac7c98cade4f",
        "top": "862dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [33, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyDataGrid0da8b6203cf264e = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "DATE",
            "columnHeaderType": "text",
            "columnID": "col1",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 15,
            "isColumnSortable": true
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "TIME",
            "columnHeaderType": "text",
            "columnID": "col2",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 15,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "STATUS",
            "columnHeaderType": "text",
            "columnID": "col3",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 20,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Revoke",
            "columnHeaderType": "text",
            "columnID": "col4",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 15,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "ACTION NOTE",
            "columnHeaderType": "text",
            "columnID": "col5",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 20,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "USER",
            "columnHeaderType": "text",
            "columnID": "col6",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 15,
            "isColumnSortable": false
        }, ],
        "data": [{
            "col1": "2016-08-26",
            "col2": "01:44 AM",
            "col3": "Pending",
            "col4": "",
            "col5": "[Admission Initiated]",
            "col6": "RC, Phani (Clinician)"
        }, {
            "col1": "2016-08-26",
            "col2": "01:45 AM",
            "col3": "Bed Unavailable",
            "col4": "",
            "col5": "HBC Notes abot bed status",
            "col6": "HBC, Phani (HBC)"
        }, {
            "col1": "2016-08-26",
            "col2": "01:45 AM",
            "col3": "Pending",
            "col4": "",
            "col5": "Revoking - [Status Revoked from BedUnAvilable and moved to Pending",
            "col6": "HBC, Phani (HBC)"
        }, {
            "col1": "2016-08-26",
            "col2": "01:45 AM",
            "col3": "Bed available",
            "col4": "",
            "col5": "HBC Notes abot bed status",
            "col6": "HBC, Phani (HBC)"
        }],
        "headerSkin": "CopyslDataGridHead0cc016a0b861544",
        "height": "479dp",
        "id": "CopyDataGrid0da8b6203cf264e",
        "isMultiSelect": false,
        "isVisible": true,
        "left": "0dp",
        "rowCount": 4,
        "rowFocusSkin": "slDataGridFocusedRow",
        "rowNormalSkin": "CopyslDataGridRow0b738f883b15840",
        "showColumnHeaders": true,
        "top": "923dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel09ebd580cbd8943 = new kony.ui.Label({
        "height": "105dp",
        "id": "CopyLabel09ebd580cbd8943",
        "isVisible": true,
        "left": "108dp",
        "skin": "CopyslLabel00e54d5d8fe9245",
        "text": "Pending",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "955dp",
        "width": "73dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0843e71ac3cea4a = new kony.ui.Label({
        "height": "85dp",
        "id": "CopyLabel0843e71ac3cea4a",
        "isVisible": true,
        "left": "108dp",
        "skin": "CopyslLabel05160d94ff11e49",
        "text": "Bed - UnAvailable ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1061dp",
        "width": "73dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel027be65d3dd514c = new kony.ui.Label({
        "height": "168dp",
        "id": "CopyLabel027be65d3dd514c",
        "isVisible": true,
        "left": "108dp",
        "skin": "CopyslLabel006ff00586ec344",
        "text": "Pending",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1148dp",
        "width": "73dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel058c9eb43f03f40 = new kony.ui.Label({
        "height": "85dp",
        "id": "CopyLabel058c9eb43f03f40",
        "isVisible": true,
        "left": "108dp",
        "skin": "CopyslLabel0944252cdd12942",
        "text": "Bed Available",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1315dp",
        "width": "73dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0b2e2b83b0cb244 = new kony.ui.Label({
        "height": "20dp",
        "id": "CopyLabel0b2e2b83b0cb244",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0dfb3f6bb664d4a",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22dp",
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel09b257fff56cb4e = new kony.ui.Label({
        "height": "20dp",
        "id": "CopyLabel09b257fff56cb4e",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel088e4df76a96f43",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22dp",
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexScrollContainer0b7ceed2b053542.add(CopyButton0d56f14754ddc40, CopyLabel05cc3fb8c999f45, CopyLabel025394540eed344, CopyLabel082ca14095bb24a, CopyLabel0c1e633797fe746, CopyButton0e0fad8d4614646, CopyButton0683d9836d22b48, CopyButton0506a21aac0674f, CopyButton0a15a9f19062242, CopyListBox026e1739cbc4d4d, CopySegment0ea52e6f9b35844, CopyListBox0a71a100e294641, CopyListBox062168c9339fd4c, CopyListBox0efc517d33b6240, CopyListBox02807291251bc4f, CopyListBox08113c3bb681547, CopyDataGrid0da8b6203cf264e, CopyLabel09ebd580cbd8943, CopyLabel0843e71ac3cea4a, CopyLabel027be65d3dd514c, CopyLabel058c9eb43f03f40, CopyLabel0b2e2b83b0cb244, CopyLabel09b257fff56cb4e);
    FlexContainer02e9f2c9ed3a540.add(FlexContainer06f8caa5da05646, CopyFlexScrollContainer0b7ceed2b053542);
    frmDischargeDetails.add(FlexContainer02e9f2c9ed3a540);
};

function frmDischargeDetailsGlobals() {
    frmDischargeDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDischargeDetails,
        "enabledForIdleTimeout": false,
        "id": "frmDischargeDetails",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm006a304f6f7ab43"
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
    frmDischargeDetails.info = {
        "kuid": "b92ad835e05f4385bede9bfdf7a80595"
    };
};