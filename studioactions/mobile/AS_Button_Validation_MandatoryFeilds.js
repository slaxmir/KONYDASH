function AS_Button_Validation_MandatoryFeilds(eventobject) {
    return AS_Button_2d8730b20ada430e8123dab92eb2265d(eventobject);
}

function AS_Button_2d8730b20ada430e8123dab92eb2265d(eventobject) {
    function SHOW_ALERT__33538ece039647ab85b6eaa25d35d452_True() {}

    function SHOW_ALERT__2fda2713c5fe40b19d30dbc075014a2c_True() {}
    if ((frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFFirstName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFLastName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingHospital.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingGroup.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxPatienETA.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientDiagnosisAdmitForm.TBChiefComplaint.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormTemparature.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBP.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormDiastolic.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormPulse.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormO2Level.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormWeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormHeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBodyMass.text == tbTempAdmitPage)) {
        setDisableSubmitButton.call(this);

        function SHOW_ALERT__2fda2713c5fe40b19d30dbc075014a2c_Callback() {
            SHOW_ALERT__2fda2713c5fe40b19d30dbc075014a2c_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Error",
            "yesLabel": "OK",
            "message": "Please fill all the mandatory feilds",
            "alertHandler": SHOW_ALERT__2fda2713c5fe40b19d30dbc075014a2c_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    } else {
        resetAdmitForm.call(this);

        function SHOW_ALERT__33538ece039647ab85b6eaa25d35d452_Callback() {
            SHOW_ALERT__33538ece039647ab85b6eaa25d35d452_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Success",
            "yesLabel": "OK",
            "message": "Submitted Successfully",
            "alertHandler": SHOW_ALERT__33538ece039647ab85b6eaa25d35d452_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}