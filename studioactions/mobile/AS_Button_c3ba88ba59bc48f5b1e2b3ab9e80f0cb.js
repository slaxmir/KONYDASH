function AS_Button_c3ba88ba59bc48f5b1e2b3ab9e80f0cb(eventobject) {
    function SHOW_ALERT_ide_onClick_ef6ebaa760244b32b978731c2dc3f63f_True() {}

    function SHOW_ALERT_ide_onClick_e13e02983e7e4d5bbac429cec847c653_True() {}
    if ((frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFFirstName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFLastName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingHospital.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingGroup.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxPatienETA.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientDiagnosisAdmitForm.TBChiefComplaint.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormTemparature.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBP.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormDiastolic.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormPulse.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormO2Level.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormWeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormHeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBodyMass.text == tbTempAdmitPage)) {
        setDisableSubmitButton.call(this);

        function SHOW_ALERT_ide_onClick_e13e02983e7e4d5bbac429cec847c653_Callback() {
            SHOW_ALERT_ide_onClick_e13e02983e7e4d5bbac429cec847c653_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Error",
            "yesLabel": "OK",
            "message": "Please fill all the mandatory feilds",
            "alertHandler": SHOW_ALERT_ide_onClick_e13e02983e7e4d5bbac429cec847c653_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    } else {
        resetAdmitForm.call(this);

        function SHOW_ALERT_ide_onClick_ef6ebaa760244b32b978731c2dc3f63f_Callback() {
            SHOW_ALERT_ide_onClick_ef6ebaa760244b32b978731c2dc3f63f_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Success",
            "yesLabel": "OK",
            "message": "Submitted Successfully",
            "alertHandler": SHOW_ALERT_ide_onClick_ef6ebaa760244b32b978731c2dc3f63f_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}