function Action_Support_Validation_GeneralForm() {
    return AS__adede5e9b0c24636a23ecb673f000d7d();
}

function AS__adede5e9b0c24636a23ecb673f000d7d() {
    function SHOW_ALERT__1d775b3d84214f8c8723ba924cb9c174_True() {}

    function SHOW_ALERT__7543d82a313f470e876af8a9580017e9_True() {}
    if ((frmSupport.flxContainer1.flxBodyContainer.generalFeedbackTabContaine.CopyreportIssueContent08a542d7470a24e.CopyreportTabContentRow02b9bb39e060f43.GeneralSelectModuleListBox.selectedKey == listboxdefaultkey) || (frmSupport.flxContainer1.flxBodyContainer.generalFeedbackTabContaine.CopyreportIssueContent08a542d7470a24e.CopyreportTabContentRow0bc2c9c68d8484e.TextAreaGeneralFeedBack.text == tbTempAdmitPage)) {
        function SHOW_ALERT__7543d82a313f470e876af8a9580017e9_Callback() {
            SHOW_ALERT__7543d82a313f470e876af8a9580017e9_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Error",
            "yesLabel": "OK",
            "message": "Please fill all the mandatory feilds",
            "alertHandler": SHOW_ALERT__7543d82a313f470e876af8a9580017e9_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    } else {
        resetSupportGeneralForm.call(this);

        function SHOW_ALERT__1d775b3d84214f8c8723ba924cb9c174_Callback() {
            SHOW_ALERT__1d775b3d84214f8c8723ba924cb9c174_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Success",
            "yesLabel": "OK",
            "message": "Submitted Successfully",
            "alertHandler": SHOW_ALERT__1d775b3d84214f8c8723ba924cb9c174_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}