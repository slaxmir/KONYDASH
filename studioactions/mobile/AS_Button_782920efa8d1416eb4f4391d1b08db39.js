function AS_Button_782920efa8d1416eb4f4391d1b08db39(eventobject) {
    function SHOW_ALERT_ide_onClick_f1d8c89d90194346b39bb3bf1908c205_True() {}

    function SHOW_ALERT_ide_onClick_23c420ec7ae249afa7e5a94e229482b1_True() {}
    if ((frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFFirstName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFLastName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingHospital.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingGroup.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxPatienETA.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientDiagnosisAdmitForm.TBChiefComplaint.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormTemparature.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBP.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormDiastolic.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormPulse.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormO2Level.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormWeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormHeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBodyMass.text == tbTempAdmitPage)) {
        setDisableSubmitButton.call(this);

        function SHOW_ALERT_ide_onClick_23c420ec7ae249afa7e5a94e229482b1_Callback() {
            SHOW_ALERT_ide_onClick_23c420ec7ae249afa7e5a94e229482b1_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Error",
            "yesLabel": "OK",
            "message": "Please fill all the mandatory feilds",
            "alertHandler": SHOW_ALERT_ide_onClick_23c420ec7ae249afa7e5a94e229482b1_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    } else {
        resetAdmitForm.call(this);

        function SHOW_ALERT_ide_onClick_f1d8c89d90194346b39bb3bf1908c205_Callback() {
            SHOW_ALERT_ide_onClick_f1d8c89d90194346b39bb3bf1908c205_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Success",
            "yesLabel": "OK",
            "message": "Submitted Successfully",
            "alertHandler": SHOW_ALERT_ide_onClick_f1d8c89d90194346b39bb3bf1908c205_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}