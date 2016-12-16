function Action_Support_Validation_ReportIssue() {
    return AS_NamedActions_ccb683f3d7784682a28138c1ab3124b6();
}

function AS_NamedActions_ccb683f3d7784682a28138c1ab3124b6() {
    function SHOW_ALERT__9642b6e4567445f0b5e1c6f517e7a17f_True() {}

    function SHOW_ALERT__8014d983ff724583b4aa271a44cc2f75_True() {}
    if ((frmSupport.flxContainer1.flxBodyContainer.reportIssueTabContainer.reportIssueContent.reportTabContentRow1.reportSelectModuleListBox.selectedKey == listboxdefaultkey) || (frmSupport.flxContainer1.flxBodyContainer.reportIssueTabContainer.reportIssueContent.reportTabContentRow3.TextAreaReportIssue.text == tbTempAdmitPage)) {
        function SHOW_ALERT__8014d983ff724583b4aa271a44cc2f75_Callback() {
            SHOW_ALERT__8014d983ff724583b4aa271a44cc2f75_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Error",
            "yesLabel": "OK",
            "message": "Please fill all the mandatory feilds",
            "alertHandler": SHOW_ALERT__8014d983ff724583b4aa271a44cc2f75_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    } else {
        resetSupportReportIssueForm.call(this);

        function SHOW_ALERT__9642b6e4567445f0b5e1c6f517e7a17f_Callback() {
            SHOW_ALERT__9642b6e4567445f0b5e1c6f517e7a17f_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Success",
            "yesLabel": "OK",
            "message": "Submitted Successfully",
            "alertHandler": SHOW_ALERT__9642b6e4567445f0b5e1c6f517e7a17f_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}