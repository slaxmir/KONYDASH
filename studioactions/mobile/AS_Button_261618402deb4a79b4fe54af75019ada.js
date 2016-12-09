function AS_Button_261618402deb4a79b4fe54af75019ada(eventobject) {
    function SHOW_ALERT_ide_onClick_d415aee909bd44c0bde943cbe76d49ab_True() {}

    function SHOW_ALERT_ide_onClick_e7249dc5eb6b4ab8b93d06bec2c9d385_True() {}
    if ((frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFFirstName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFLastName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingHospital.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingGroup.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxPatienETA.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientDiagnosisAdmitForm.TBChiefComplaint.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormTemparature.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBP.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormDiastolic.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormPulse.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormO2Level.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormWeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormHeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBodyMass.text == tbTempAdmitPage)) {
        setDisableSubmitButton.call(this);

        function SHOW_ALERT_ide_onClick_e7249dc5eb6b4ab8b93d06bec2c9d385_Callback() {
            SHOW_ALERT_ide_onClick_e7249dc5eb6b4ab8b93d06bec2c9d385_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Error",
            "yesLabel": "OK",
            "message": "Please fill all the mandatory feilds",
            "alertHandler": SHOW_ALERT_ide_onClick_e7249dc5eb6b4ab8b93d06bec2c9d385_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    } else {
        resetAdmitForm.call(this);

        function SHOW_ALERT_ide_onClick_d415aee909bd44c0bde943cbe76d49ab_Callback() {
            SHOW_ALERT_ide_onClick_d415aee909bd44c0bde943cbe76d49ab_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Success",
            "yesLabel": "OK",
            "message": "Submitted Successfully",
            "alertHandler": SHOW_ALERT_ide_onClick_d415aee909bd44c0bde943cbe76d49ab_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}