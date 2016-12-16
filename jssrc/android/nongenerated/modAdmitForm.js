function showPatientMandatoryFeilds() {
    frmAdmitForm.btnPatientMandatory.text = "Mandatory";
    frmAdmitForm.btnPatientMandatory.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnPatientPreferred.skin = "sknbtnFeilds";
    frmAdmitForm.btnPatientPreferred.text = "Preferred";
    frmAdmitForm.btnPatientAll.skin = "sknbtnFeilds";
    frmAdmitForm.btnPatientAll.text = "All";
    frmAdmitForm.flexContainerPatientInfo.isVisible = false;
    frmAdmitForm.flexContainerAdmittingPreferences.isVisible = false;
    frmAdmitForm.flexContainerBedAssignAlert.isVisible = false;
    frmAdmitForm.flexContainerInfectiousDiseaseQuestionnaire.isVisible = false;
    frmAdmitForm.flexContainerSepsisScreening.isVisible = false;
    frmAdmitForm.flexContainerVitalSigns.isVisible = false;
    frmAdmitForm.flexContainerPatientDiagnosis.isVisible = false;
    frmAdmitForm.flexContainerPatientStatus.isVisible = false;
    frmAdmitForm.TFSSN.isVisible = false;
    frmAdmitForm.flxContainerPatientInfoAdmitForm.isVisible = true;
    frmAdmitForm.flxContainerAdmittingPreferencesAdmitForm.isVisible = true;
    //hide
    frmAdmitForm.ListBoxSelectPhysicialAdmitForm.isVisible = false;
    frmAdmitForm.lblRequestDocToDoc.isVisible = false;
    frmAdmitForm.ListBoxRequestDocToDocAdmitForm.isVisible = false;
    frmAdmitForm.flxContainerBedAssignAlertAdmitForm.isVisible = false;
    frmAdmitForm.flxContainerPatientDiagnosisAdmitForm.isVisible = true;
    frmAdmitForm.tbAdditionalinfo.isVisible = false;
    frmAdmitForm.flxContainerInfectiousDiceaseQuestionareAdmitForm.isVisible = true;
    frmAdmitForm.flxContainerSepsisScreeingAdmitForm.isVisible = true;
    frmAdmitForm.flxContainerVitalSignsAdmitForm.isVisible = true;
    frmAdmitForm.TBAdmitFormBodyMass.isVisible = true;
    frmAdmitForm.flxContainerPatientStatusAdmitForm.isVisible = false;
    //hide
    frmAdmitForm.TFSSN.isVisible = false;
    frmAdmitForm.tfEmail.isVisible = false;
    frmAdmitForm.txtpatientCellPhone.isVisible = false;
    setSegmentSepsisScreeingSIRSData();
}

function showPatientPreferredFeilds() {
    frmAdmitForm.btnPatientPreferred.text = "Preferred";
    frmAdmitForm.btnPatientPreferred.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnPatientMandatory.skin = "sknbtnFeilds";
    frmAdmitForm.btnPatientMandatory.text = "*Mandatory";
    frmAdmitForm.btnPatientAll.skin = "sknbtnFeilds";
    frmAdmitForm.btnPatientAll.text = "All";
    frmAdmitForm.flexContainerPatientInfo.isVisible = false;
    frmAdmitForm.flexContainerAdmittingPreferences.isVisible = false;
    frmAdmitForm.flexContainerBedAssignAlert.isVisible = false;
    frmAdmitForm.flexContainerInfectiousDiseaseQuestionnaire.isVisible = false;
    frmAdmitForm.flexContainerSepsisScreening.isVisible = false;
    frmAdmitForm.flexContainerVitalSigns.isVisible = false;
    frmAdmitForm.flexContainerPatientDiagnosis.isVisible = false;
    frmAdmitForm.flexContainerPatientStatus.isVisible = false;
    frmAdmitForm.TFSSN.isVisible = false;
    frmAdmitForm.flxContainerPatientInfoAdmitForm.isVisible = true;
    frmAdmitForm.flxContainerAdmittingPreferencesAdmitForm.isVisible = true;
    //hide
    frmAdmitForm.ListBoxSelectPhysicialAdmitForm.isVisible = false;
    frmAdmitForm.lblRequestDocToDoc.isVisible = false;
    frmAdmitForm.ListBoxRequestDocToDocAdmitForm.isVisible = false;
    frmAdmitForm.flxContainerBedAssignAlertAdmitForm.isVisible = false;
    frmAdmitForm.flxContainerPatientDiagnosisAdmitForm.isVisible = true;
    frmAdmitForm.tbAdditionalinfo.isVisible = false;
    frmAdmitForm.flxContainerInfectiousDiceaseQuestionareAdmitForm.isVisible = true;
    frmAdmitForm.flxContainerSepsisScreeingAdmitForm.isVisible = true;
    frmAdmitForm.flxContainerVitalSignsAdmitForm.isVisible = true;
    frmAdmitForm.TBAdmitFormBodyMass.isVisible = true;
    frmAdmitForm.flxContainerPatientStatusAdmitForm.isVisible = false;
    frmAdmitForm.TFSSN.isVisible = true;
    frmAdmitForm.tfEmail.isVisible = true;
    frmAdmitForm.txtpatientCellPhone.isVisible = true;
}

function showPatientAllFeilds() {
    setDataSegmentPatientStatusCodeStatus();
    frmAdmitForm.btnPatientAll.text = "All";
    frmAdmitForm.btnPatientAll.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnPatientMandatory.skin = "sknbtnFeilds";
    frmAdmitForm.btnPatientMandatory.text = "Mandatory";
    frmAdmitForm.btnPatientPreferred.skin = "sknbtnFeilds";
    frmAdmitForm.btnPatientPreferred.text = "Preferred";
    frmAdmitForm.flexContainerPatientInfo.isVisible = true;
    frmAdmitForm.flexContainerAdmittingPreferences.isVisible = true;
    frmAdmitForm.flexContainerBedAssignAlert.isVisible = true;
    frmAdmitForm.flexContainerInfectiousDiseaseQuestionnaire.isVisible = true;
    frmAdmitForm.flexContainerSepsisScreening.isVisible = true;
    frmAdmitForm.flexContainerVitalSigns.isVisible = true;
    frmAdmitForm.flexContainerPatientDiagnosis.isVisible = true;
    frmAdmitForm.flexContainerPatientStatus.isVisible = true;
    frmAdmitForm.flxContainerPatientInfoAdmitForm.isVisible = true;
    frmAdmitForm.imgCollapseArrowAdmitFormPatientStatus.src = "activeicon.png";
    frmAdmitForm.flexContainerPatientInfo.skin = "sknAdmissionDetailsDynamicWhitebg";
    frmAdmitForm.flxContainerAdmittingPreferencesAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitFormAdmitingPreferences.src = "arrow.png";
    frmAdmitForm.flexContainerAdmittingPreferences.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.flxContainerBedAssignAlertAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitPageBedAssignAlert.src = "arrow.png";
    frmAdmitForm.flexContainerBedAssignAlert.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.flxContainerPatientDiagnosisAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitformPatientDiagnosis.src = "arrow.png";
    frmAdmitForm.flexContainerPatientDiagnosis.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.flxContainerInfectiousDiceaseQuestionareAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitFormInfectiousDiseaseQuestionarrie.src = "arrow.png";
    frmAdmitForm.flexContainerInfectiousDiseaseQuestionnaire.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.flxContainerSepsisScreeingAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitFormSepsisScreeing.src = "arrow.png";
    frmAdmitForm.flexContainerSepsisScreening.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.flxContainerVitalSignsAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitformVitalSigns.src = "arrow.png";
    frmAdmitForm.flexContainerVitalSigns.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.flxContainerPatientStatusAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitFormPatientStatus.src = "arrow.png";
    frmAdmitForm.flexContainerPatientStatus.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.TFSSN.isVisible = true;
    frmAdmitForm.ListBoxSelectPhysicialAdmitForm.isVisible = true;
    frmAdmitForm.lblRequestDocToDoc.isVisible = true;
    frmAdmitForm.ListBoxRequestDocToDocAdmitForm.isVisible = true;
    frmAdmitForm.tbAdditionalinfo.isVisible = true;
    frmAdmitForm.TFSSN.isVisible = true;
    frmAdmitForm.tfEmail.isVisible = true;
    frmAdmitForm.txtpatientCellPhone.isVisible = true;
}

function showDiagnosticsAll() {
    frmAdmitForm.btnDiagnosticsall.text = "All";
    frmAdmitForm.btnDiagnosticsall.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnDiagnosticsMandatory.skin = "sknbtnFeilds";
    frmAdmitForm.btnDiagnosticsMandatory.text = "Mandatory";
    frmAdmitForm.btnDiagnosticsPreferred.skin = "sknbtnFeilds";
    frmAdmitForm.btnDiagnosticsPreferred.text = "Preferred";
    setDataModeofTansport();
    setDataSetmentComorbidity();
    setDataSetmentAllergies();
    frmAdmitForm.flxContainerdiagnosticsAll.isVisible = true;
    frmAdmitForm.FlexContainerNoFeilds.isVisible = false;
    frmAdmitForm.FlexContainerMedicalHistoryAdmitForm.isVisible = true;
    frmAdmitForm.imgCollapseArrowAdmiitFormMedicalHistory.src = "activeicon.png";
    frmAdmitForm.flexContainerMedicalHistory.skin = "sknAdmissionDetailsDynamicWhitebg";
    frmAdmitForm.FlexContainerModeOfTransportAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitformModeOfTransport.src = "arrow.png";
    frmAdmitForm.flexContainerModeOfTransport.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.FlexContainerPrimaryCareProviderAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmiitFormPrimaryCareProvider.src = "arrow.png";
    frmAdmitForm.flexContainerPrimaryCareProvider.skin = "sknAdmissionDetailsDynamic";
}

function showDiagnosticsNoFeilds() {
    frmAdmitForm.flxContainerdiagnosticsAll.isVisible = false;
    frmAdmitForm.FlexContainerNoFeilds.isVisible = true;
}

function showDiagnosticsMandatory() {
    frmAdmitForm.btnDiagnosticsMandatory.text = "Mandatory";
    frmAdmitForm.btnDiagnosticsMandatory.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnDiagnosticsPreferred.skin = "sknbtnFeilds";
    frmAdmitForm.btnDiagnosticsPreferred.text = "Preferred";
    frmAdmitForm.btnDiagnosticsall.skin = "sknbtnFeilds";
    frmAdmitForm.btnDiagnosticsall.text = "All";
    frmAdmitForm.flxContainerdiagnosticsAll.isVisible = false;
    frmAdmitForm.FlexContainerNoFeilds.isVisible = true;
}

function showDiagnosticsPreferred() {
    frmAdmitForm.btnDiagnosticsPreferred.text = "Preferred";
    frmAdmitForm.btnDiagnosticsPreferred.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnDiagnosticsMandatory.skin = "sknbtnFeilds";
    frmAdmitForm.btnDiagnosticsMandatory.text = "Mandatory";
    frmAdmitForm.btnDiagnosticsall.skin = "sknbtnFeilds";
    frmAdmitForm.btnDiagnosticsall.text = "All";
    frmAdmitForm.flxContainerdiagnosticsAll.isVisible = false;
    frmAdmitForm.FlexContainerNoFeilds.isVisible = true;
}
//---------------------------------
function showClinicList() {
    //Visible
    frmAdmitForm.selectClinicAndFormTypeContainer.isVisible = true;
    frmAdmitForm.selectClinicList.isVisible = true;
    frmAdmitForm.imgArrowClinic.isVisible = true;
    //Hide
    frmAdmitForm.selectFormTypeList.isVisible = false;
    frmAdmitForm.imgArrowFormType.isVisible = false;
    frmAdmitForm.admitFormTabSection.isVisible = false;
}

function showFormTypeList() {
    //Visible
    frmAdmitForm.selectClinicAndFormTypeContainer.isVisible = true;
    frmAdmitForm.selectFormTypeList.isVisible = true;
    frmAdmitForm.imgArrowFormType.isVisible = true;
    //Hide
    frmAdmitForm.selectClinicList.isVisible = false;
    frmAdmitForm.imgArrowClinic.isVisible = false;
    frmAdmitForm.admitFormTabSection.isVisible = false;
}

function showadmitFrom() {
    //Visible
    frmAdmitForm.selectClinicAndFormTypeContainer.isVisible = false;
    //Hide
    frmAdmitForm.admitFormTabSection.isVisible = true;
}

function showRecommendationsMandatory() {
    frmAdmitForm.btnRecommendationsMandatory.text = "*Mandatory";
    frmAdmitForm.btnRecommendationsMandatory.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnRecommendationsPreferred.skin = "sknbtnFeilds";
    frmAdmitForm.btnRecommendationsPreferred.text = "Preferred";
    frmAdmitForm.btnRecommendationsall.skin = "sknbtnFeilds";
    frmAdmitForm.btnRecommendationsall.text = "All";
    frmAdmitForm.FlexContainerRecommendationNoFeilds.isVisible = true;
    frmAdmitForm.recommendationAll.isVisible = false;
}

function showRecommendationsPreferred() {
    frmAdmitForm.btnRecommendationsPreferred.text = "Preferred";
    frmAdmitForm.btnRecommendationsPreferred.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnRecommendationsMandatory.skin = "sknbtnFeilds";
    frmAdmitForm.btnRecommendationsMandatory.text = "*Mandatory";
    frmAdmitForm.btnRecommendationsall.skin = "sknbtnFeilds";
    frmAdmitForm.btnRecommendationsall.text = "All";
    frmAdmitForm.FlexContainerRecommendationNoFeilds.isVisible = true;
    frmAdmitForm.recommendationAll.isVisible = false;
}

function showRecommendationAll() {
    frmAdmitForm.btnRecommendationsall.text = "All";
    frmAdmitForm.btnRecommendationsall.skin = "sknbtnFeildsSelected";
    frmAdmitForm.btnRecommendationsMandatory.skin = "sknbtnFeilds";
    frmAdmitForm.btnRecommendationsMandatory.text = "*Mandatory";
    frmAdmitForm.btnRecommendationsPreferred.skin = "sknbtnFeilds";
    frmAdmitForm.btnRecommendationsPreferred.text = "Preferred";
    setDataMediationOrders();
    setDataPRNMeds();
    setDataImagingTestsXRays();
    setDataImaginTestsUS();
    setDataImagingTestsCT();
    setDataImagingTestsMRI();
    setDataImagingTestsEKG();
    setDataSpecialityConsults();
    setDataBloodTests1();
    setDataBloodTests2();
    setDataBloodTests3();
    frmAdmitForm.FlexContainerRecommendationNoFeilds.isVisible = false;
    frmAdmitForm.recommendationAll.isVisible = true;
    frmAdmitForm.FlexContainerMedicationOrdersAdmitForm.isVisible = true;
    frmAdmitForm.imgCollapseArrowAdmitFormMedicationOrders.src = "activeicon.png";
    frmAdmitForm.flexContainerMedicationOrders.skin = "sknAdmissionDetailsDynamicWhitebg";
    frmAdmitForm.FlexContainerTestsAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmitFormTests.src = "arrow.png";
    frmAdmitForm.FlexContaineTests.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.FlexContainerImagingAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmiitFormImaging.src = "arrow.png";
    frmAdmitForm.flexContainerImaging.skin = "sknAdmissionDetailsDynamic";
    frmAdmitForm.FlexContainerSpecialityConsultsAdmitForm.isVisible = false;
    frmAdmitForm.imgCollapseArrowAdmiitFormSpecialityConsults.src = "arrow.png";
    frmAdmitForm.flexContainerSpecialityConsults.skin = "sknAdmissionDetailsDynamic";
}

function showAdmitFormPatientInfo() {
    if (frmAdmitForm.flxContainerPatientInfoAdmitForm.isVisible) {
        frmAdmitForm.flxContainerPatientInfoAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormPatientStatus.src = "arrow.png";
        frmAdmitForm.flexContainerPatientInfo.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerPatientInfoAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormPatientStatus.src = "activeicon.png";
        frmAdmitForm.flexContainerPatientInfo.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormBedAssignAlert() {
    if (frmAdmitForm.flxContainerBedAssignAlertAdmitForm.isVisible) {
        frmAdmitForm.flxContainerBedAssignAlertAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitPageBedAssignAlert.src = "arrow.png";
        frmAdmitForm.flexContainerBedAssignAlert.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerBedAssignAlertAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitPageBedAssignAlert.src = "activeicon.png";
        frmAdmitForm.flexContainerBedAssignAlert.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormAdmittingPreferences() {
    if (frmAdmitForm.flxContainerAdmittingPreferencesAdmitForm.isVisible) {
        frmAdmitForm.flxContainerAdmittingPreferencesAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormAdmitingPreferences.src = "arrow.png";
        frmAdmitForm.flexContainerAdmittingPreferences.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerAdmittingPreferencesAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormAdmitingPreferences.src = "activeicon.png";
        frmAdmitForm.flexContainerAdmittingPreferences.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormVitalSigns() {
    if (frmAdmitForm.flxContainerVitalSignsAdmitForm.isVisible) {
        frmAdmitForm.flxContainerVitalSignsAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitformVitalSigns.src = "arrow.png";
        frmAdmitForm.flexContainerVitalSigns.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerVitalSignsAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitformVitalSigns.src = "activeicon.png";
        frmAdmitForm.flexContainerVitalSigns.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormPatientStatus() {
    if (frmAdmitForm.flxContainerPatientStatusAdmitForm.isVisible) {
        frmAdmitForm.flxContainerPatientStatusAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormPatientStatus.src = "arrow.png";
        frmAdmitForm.flexContainerPatientStatus.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerPatientStatusAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormPatientStatus.src = "activeicon.png";
        frmAdmitForm.flexContainerPatientStatus.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormSepsisScreening() {
    if (frmAdmitForm.flxContainerSepsisScreeingAdmitForm.isVisible) {
        frmAdmitForm.flxContainerSepsisScreeingAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormSepsisScreeing.src = "arrow.png";
        frmAdmitForm.flexContainerSepsisScreening.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerSepsisScreeingAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormSepsisScreeing.src = "activeicon.png";
        frmAdmitForm.flexContainerSepsisScreening.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormInfectiousDiseaseQuestionnaire() {
    if (frmAdmitForm.flxContainerInfectiousDiceaseQuestionareAdmitForm.isVisible) {
        frmAdmitForm.flxContainerInfectiousDiceaseQuestionareAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormInfectiousDiseaseQuestionarrie.src = "arrow.png";
        frmAdmitForm.flexContainerInfectiousDiseaseQuestionnaire.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerInfectiousDiceaseQuestionareAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormInfectiousDiseaseQuestionarrie.src = "activeicon.png";
        frmAdmitForm.flexContainerInfectiousDiseaseQuestionnaire.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormInfectiousPatientDiagnosis() {
    if (frmAdmitForm.flxContainerPatientDiagnosisAdmitForm.isVisible) {
        frmAdmitForm.flxContainerPatientDiagnosisAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitformPatientDiagnosis.src = "arrow.png";
        frmAdmitForm.flexContainerPatientDiagnosis.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.flxContainerPatientDiagnosisAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitformPatientDiagnosis.src = "activeicon.png";
        frmAdmitForm.flexContainerPatientDiagnosis.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormMedicaHistory() {
    if (frmAdmitForm.FlexContainerMedicalHistoryAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerMedicalHistoryAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmiitFormMedicalHistory.src = "arrow.png";
        frmAdmitForm.flexContainerMedicalHistory.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerMedicalHistoryAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmiitFormMedicalHistory.src = "activeicon.png";
        frmAdmitForm.flexContainerMedicalHistory.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormModeOfTransport() {
    if (frmAdmitForm.FlexContainerModeOfTransportAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerModeOfTransportAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitformModeOfTransport.src = "arrow.png";
        frmAdmitForm.flexContainerModeOfTransport.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerModeOfTransportAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitformModeOfTransport.src = "activeicon.png";
        frmAdmitForm.flexContainerModeOfTransport.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormPrimaryCareProvider() {
    if (frmAdmitForm.FlexContainerPrimaryCareProviderAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerPrimaryCareProviderAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmiitFormPrimaryCareProvider.src = "arrow.png";
        frmAdmitForm.flexContainerPrimaryCareProvider.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerPrimaryCareProviderAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmiitFormPrimaryCareProvider.src = "activeicon.png";
        frmAdmitForm.flexContainerPrimaryCareProvider.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormMedicationOrders() {
    if (frmAdmitForm.FlexContainerMedicationOrdersAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerMedicationOrdersAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormMedicationOrders.src = "arrow.png";
        frmAdmitForm.flexContainerMedicationOrders.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerMedicationOrdersAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormMedicationOrders.src = "activeicon.png";
        frmAdmitForm.flexContainerMedicationOrders.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormTests() {
    if (frmAdmitForm.FlexContainerTestsAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerTestsAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmitFormTests.src = "arrow.png";
        frmAdmitForm.FlexContaineTests.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerTestsAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmitFormTests.src = "activeicon.png";
        frmAdmitForm.FlexContaineTests.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormImaging() {
    if (frmAdmitForm.FlexContainerImagingAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerImagingAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmiitFormImaging.src = "arrow.png";
        frmAdmitForm.flexContainerImaging.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerImagingAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmiitFormImaging.src = "activeicon.png";
        frmAdmitForm.flexContainerImaging.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}

function showAdmitFormSpecialityConsults() {
    if (frmAdmitForm.FlexContainerSpecialityConsultsAdmitForm.isVisible) {
        frmAdmitForm.FlexContainerSpecialityConsultsAdmitForm.isVisible = false;
        frmAdmitForm.imgCollapseArrowAdmiitFormSpecialityConsults.src = "arrow.png";
        frmAdmitForm.flexContainerSpecialityConsults.skin = "sknAdmissionDetailsDynamic";
    } else {
        frmAdmitForm.FlexContainerSpecialityConsultsAdmitForm.isVisible = true;
        frmAdmitForm.imgCollapseArrowAdmiitFormSpecialityConsults.src = "activeicon.png";
        frmAdmitForm.flexContainerSpecialityConsults.skin = "sknAdmissionDetailsDynamicWhitebg";
    }
}
var segDataMediationOrders = [];

function setDataMediationOrders() {
    frmAdmitForm.segOtherMediations.widgetDataMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segDataMediationOrders = [{
        labelmediationOthers: {
            text: "Resume All Home Medications"
        }
    }];
    frmAdmitForm.segOtherMediations.setData(segDataMediationOrders);
}
var segDataPRNMeds = [];

function setDataPRNMeds() {
    frmAdmitForm.segmentPRNMeds.widgetDataMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segDataPRNMeds = [{
        labelmediationOthers: {
            text: "Albuterol 2.5 mg via Ben q6h prn sob"
        }
    }, {
        labelmediationOthers: {
            text: "Ambien 5 mg po qhs prn insomnia"
        }
    }, {
        labelmediationOthers: {
            text: "Ativan 1 mg po/iv q6h prn agitation"
        }
    }, {
        labelmediationOthers: {
            text: "Clonidine 0.1 mg po q 6h prn SBP >= 160"
        }
    }, {
        labelmediationOthers: {
            text: "Dilaudid 1 mg iv q4h prn pain scale 1-5"
        }
    }, {
        labelmediationOthers: {
            text: "Dilaudid 2 mg iv q4h prn pain scale 6-10"
        }
    }, {
        labelmediationOthers: {
            text: "Electrolyte replacement protocol"
        }
    }, {
        labelmediationOthers: {
            text: "Hydralazine 10 mg iv q 2h prn SBP >= 160"
        }
    }, {
        labelmediationOthers: {
            text: "Ibuprofen 400 mg po q 6h prn fever/pain"
        }
    }, {
        labelmediationOthers: {
            text: "Labetolol 10 mg iv q 2h prn SBP >= 160"
        }
    }, {
        labelmediationOthers: {
            text: "Maalox 30 cc q 6h prn indigestion"
        }
    }, {
        labelmediationOthers: {
            text: "Nicotine patch 21 mcg/hr q day"
        }
    }, {
        labelmediationOthers: {
            text: "Norco 10/325 po q 6h prn pain"
        }
    }, {
        labelmediationOthers: {
            text: "Phenergan 12.5 mg iv q 6hprn n/v"
        }
    }, {
        labelmediationOthers: {
            text: "Restoril 15 mg po qhs prn insomnia"
        }
    }, {
        labelmediationOthers: {
            text: "Tylenol 650 mg po q 6h prn fever/pain"
        }
    }, {
        labelmediationOthers: {
            text: "Zofran 4 mg iv q 4h prn n/v"
        }
    }];
    frmAdmitForm.segmentPRNMeds.setData(segDataPRNMeds);
}
var segImagingTestsXRays = [];

function setDataImagingTestsXRays() {
    frmAdmitForm.segmentImagingTestsXRays.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segImagingTestsXRays = [{
        labelmediationOthers: {
            text: "Chest X-Ray Portable"
        }
    }, {
        labelmediationOthers: {
            text: "KUB"
        }
    }, {
        labelmediationOthers: {
            text: "PA/Lateral"
        }
    }, {
        labelmediationOthers: {
            text: "Other"
        }
    }];
    frmAdmitForm.segmentImagingTestsXRays.setData(segImagingTestsXRays);
}
var segImaginTestsUS = [];

function setDataImaginTestsUS() {
    frmAdmitForm.segmentImaginTestsUS.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segImaginTestsUS = [{
        labelmediationOthers: {
            text: "Abdomen"
        }
    }, {
        labelmediationOthers: {
            text: "Doppler - Arterial"
        }
    }, {
        labelmediationOthers: {
            text: "Doppler - Venous"
        }
    }, {
        labelmediationOthers: {
            text: "Pelvis"
        }
    }, {
        labelmediationOthers: {
            text: "Renal"
        }
    }];
    frmAdmitForm.segmentImaginTestsUS.setData(segImaginTestsUS);
}
var segImagingTestsCT = [];

function setDataImagingTestsCT() {
    frmAdmitForm.segmentImagingTestsCT.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segImagingTestsCT = [{
        labelmediationOthers: {
            text: "Abdomen and Pelvis no contrast Stone Protocol"
        }
    }, {
        labelmediationOthers: {
            text: "Abdomen and Pelvis with and without contras"
        }
    }, {
        labelmediationOthers: {
            text: "Brain no contrast"
        }
    }, {
        labelmediationOthers: {
            text: "Brain with contrast"
        }
    }, {
        labelmediationOthers: {
            text: "Chest PE Protocol"
        }
    }, {
        labelmediationOthers: {
            text: "Chest with and without contrast"
        }
    }];
    frmAdmitForm.segmentImagingTestsCT.setData(segImagingTestsCT);
}
var segImagingTestsMRI = [];

function setDataImagingTestsMRI() {
    frmAdmitForm.segmentImagingTestsMRI.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segImagingTestsMRI = [{
        labelmediationOthers: {
            text: "MRA Neck"
        }
    }, {
        labelmediationOthers: {
            text: "MRCP"
        }
    }, {
        labelmediationOthers: {
            text: "MRI C Spine"
        }
    }, {
        labelmediationOthers: {
            text: "MRI L/S Spine"
        }
    }, {
        labelmediationOthers: {
            text: "MRI/MRA Brain"
        }
    }];
    frmAdmitForm.segmentImagingTestsMRI.setData(segImagingTestsMRI);
}
var segImagingTestsEKG = [];

function setDataImagingTestsEKG() {
    frmAdmitForm.segmentImagingTestsEKG.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segImagingTestsEKG = [{
        labelmediationOthers: {
            text: "EKG"
        }
    }];
    frmAdmitForm.segmentImagingTestsEKG.setData(segImagingTestsEKG);
}
var segSpecialityConsults = [];

function setDataSpecialityConsults() {
    frmAdmitForm.segmentSpecialityConsults.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segSpecialityConsults = [{
        labelmediationOthers: {
            text: "Cardiology"
        }
    }, {
        labelmediationOthers: {
            text: "Gen Surgery"
        }
    }, {
        labelmediationOthers: {
            text: "GI"
        }
    }, {
        labelmediationOthers: {
            text: "ID"
        }
    }, {
        labelmediationOthers: {
            text: "Nephrology"
        }
    }, {
        labelmediationOthers: {
            text: "Neurology"
        }
    }, {
        labelmediationOthers: {
            text: "Podiatry"
        }
    }, {
        labelmediationOthers: {
            text: "Pulmonology"
        }
    }];
    frmAdmitForm.segmentSpecialityConsults.setData(segSpecialityConsults);
}
var segBloodTests1 = [];

function setDataBloodTests1() {
    frmAdmitForm.segmentBloodTests1.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segBloodTests1 = [{
        labelmediationOthers: {
            text: "Blood CX"
        }
    }, {
        labelmediationOthers: {
            text: "BMP"
        }
    }, {
        labelmediationOthers: {
            text: "CBC"
        }
    }, {
        labelmediationOthers: {
            text: "CKMB"
        }
    }];
    frmAdmitForm.segmentBloodTests1.setData(segBloodTests1);
}
var segBloodTests2 = [];

function setDataBloodTests2() {
    frmAdmitForm.segmentBloodTests2.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segBloodTests2 = [{
        labelmediationOthers: {
            text: "CMP"
        }
    }, {
        labelmediationOthers: {
            text: "D Dimer"
        }
    }, {
        labelmediationOthers: {
            text: "FLP"
        }
    }, {
        labelmediationOthers: {
            text: "LFT"
        }
    }];
    frmAdmitForm.segmentBloodTests2.setData(segBloodTests2);
}
var segBloodTests3 = [];

function setDataBloodTests3() {
    frmAdmitForm.segmentBloodTests3.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segBloodTests3 = [{
        labelmediationOthers: {
            text: "PT"
        }
    }, {
        labelmediationOthers: {
            text: "PTT"
        }
    }, {
        labelmediationOthers: {
            text: "Trop"
        }
    }, {
        labelmediationOthers: {
            text: "TSH"
        }
    }];
    frmAdmitForm.segmentBloodTests3.setData(segBloodTests3);
}
var segModeOfTransport1 = [];
var segModeOfTransport2 = [];

function setDataModeofTansport() {
    frmAdmitForm.segmodeOfTransport1.widgetMap = {
        imageModeOfTransport: "imageModeOfTransport",
        labelModeOfTransport: "labelModeOfTransport"
    };
    frmAdmitForm.segmodeOfTransport2.widgetMap = {
        imageModeOfTransport: "imageModeOfTransport",
        labelModeOfTransport: "labelModeOfTransport"
    };
    segModeOfTransport1 = [{
        imageModeOfTransport: {
            src: "ambulanceinactive"
        },
        labelModeOfTransport: {
            text: "Ambulance"
        }
    }, {
        imageModeOfTransport: {
            src: "helicopterinactive"
        },
        labelModeOfTransport: {
            text: "Helicopter"
        }
    }, {
        imageModeOfTransport: {
            src: "vechicleinactive"
        },
        labelModeOfTransport: {
            text: "Personal Vehicle"
        }
    }];
    segModeOfTransport2 = [{
        imageModeOfTransport: {
            src: "requestinactive"
        },
        labelModeOfTransport: {
            text: "Request Transportation"
        }
    }, {
        imageModeOfTransport: {
            src: "teaminactive"
        },
        labelModeOfTransport: {
            text: "Specialty Team"
        }
    }, {
        imageModeOfTransport: {
            src: "unkowninactive"
        },
        labelModeOfTransport: {
            text: "Unknown"
        }
    }];
    frmAdmitForm.segmodeOfTransport1.setData(segModeOfTransport1);
    frmAdmitForm.segmodeOfTransport2.setData(segModeOfTransport2);
}

function tapToSelectSegOtherMediations() {
    var index = frmAdmitForm.segOtherMediations.selectedIndex[1];
    var rowObj = frmAdmitForm.segOtherMediations.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segOtherMediations.setDataAt(rowObj[0], index);
}

function tapToSelectSegmentPRNMeds() {
    var index = frmAdmitForm.segmentPRNMeds.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentPRNMeds.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentPRNMeds.setDataAt(rowObj[0], index);
}

function tapToSegmentImagingTestsXRays() {
    var index = frmAdmitForm.segmentImagingTestsXRays.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentImagingTestsXRays.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentImagingTestsXRays.setDataAt(rowObj[0], index);
}

function tapToSegmentImaginTestsUS() {
    var index = frmAdmitForm.segmentImaginTestsUS.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentImaginTestsUS.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentImaginTestsUS.setDataAt(rowObj[0], index);
}

function tapToSegmentImagingTestsCT() {
    var index = frmAdmitForm.segmentImagingTestsCT.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentImagingTestsCT.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentImagingTestsCT.setDataAt(rowObj[0], index);
}

function tapToSegmentImagingTestsMRI() {
    var index = frmAdmitForm.segmentImagingTestsMRI.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentImagingTestsMRI.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentImagingTestsMRI.setDataAt(rowObj[0], index);
}

function tapToSegmentImagingTestsEKG() {
    var index = frmAdmitForm.segmentImagingTestsEKG.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentImagingTestsEKG.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentImagingTestsEKG.setDataAt(rowObj[0], index);
}

function tapToSegmentSpecialityConsults() {
    var index = frmAdmitForm.segmentSpecialityConsults.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentSpecialityConsults.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentSpecialityConsults.setDataAt(rowObj[0], index);
}

function tapToSegmentBloodTests1() {
    var index = frmAdmitForm.segmentBloodTests1.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentBloodTests1.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentBloodTests1.setDataAt(rowObj[0], index);
}

function tapToSegmentBloodTests2() {
    var index = frmAdmitForm.segmentBloodTests2.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentBloodTests2.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentBloodTests2.setDataAt(rowObj[0], index);
}

function tapToSegmentBloodTests3() {
    var index = frmAdmitForm.segmentBloodTests3.selectedIndex[1];
    var rowObj = frmAdmitForm.segmentBloodTests3.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.segmentBloodTests3.setDataAt(rowObj[0], index);
}

function tapToSegmentModeOfTransport1() {
    var index = frmAdmitForm.segmodeOfTransport1.selectedIndex[1];
    var rowObj = frmAdmitForm.segmodeOfTransport1.selectedItems;
    var text = rowObj[0].labelModeOfTransport.text;
    var lblSkin = rowObj[0].labelModeOfTransport.skin;
    var imgSrc = rowObj[0].imageModeOfTransport.src;
    rowObj[0].labelModeOfTransport.text = text;
    if (imgSrc == "ambulanceinactive") {
        rowObj[0].imageModeOfTransport.src = "ambulanceactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrdersSelected";
    } else if (imgSrc == "ambulanceactive") {
        rowObj[0].imageModeOfTransport.src = "ambulanceinactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrders";
    } else if (imgSrc == "helicopterinactive") {
        rowObj[0].imageModeOfTransport.src = "helicopteractive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrdersSelected";
    } else if (imgSrc == "helicopteractive") {
        rowObj[0].imageModeOfTransport.src = "helicopterinactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrders";
    } else if (imgSrc == "vechicleinactive") {
        rowObj[0].imageModeOfTransport.src = "vechicleactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrdersSelected";
    } else if (imgSrc == "vechicleactive") {
        rowObj[0].imageModeOfTransport.src = "vechicleinactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrders";
    }
    frmAdmitForm.segmodeOfTransport1.setDataAt(rowObj[0], index);
}

function tapToSegmentModeOfTransport2() {
    var index = frmAdmitForm.segmodeOfTransport2.selectedIndex[1];
    var rowObj = frmAdmitForm.segmodeOfTransport2.selectedItems;
    var text = rowObj[0].labelModeOfTransport.text;
    var lblSkin = rowObj[0].labelModeOfTransport.skin;
    var imgSrc = rowObj[0].imageModeOfTransport.src;
    rowObj[0].labelModeOfTransport.text = text;
    if (imgSrc == "requestinactive") {
        rowObj[0].imageModeOfTransport.src = "requestactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrdersSelected";
    } else if (imgSrc == "requestactive") {
        rowObj[0].imageModeOfTransport.src = "requestinactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrders";
    } else if (imgSrc == "teaminactive") {
        rowObj[0].imageModeOfTransport.src = "teamactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrdersSelected";
    } else if (imgSrc == "teamactive") {
        rowObj[0].imageModeOfTransport.src = "teaminactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrders";
    } else if (imgSrc == "unkowninactive") {
        rowObj[0].imageModeOfTransport.src = "unkownactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrdersSelected";
    } else if (imgSrc == "unkownactive") {
        rowObj[0].imageModeOfTransport.src = "unkowninactive";
        rowObj[0].labelModeOfTransport.skin = "slLabelMediationOrders";
    }
    frmAdmitForm.segmodeOfTransport2.setDataAt(rowObj[0], index);
}

function tapToSelectUrineTestsCS() {
    var skin = frmAdmitForm.lblUrineTestsCS.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.lblUrineTestsCS.text = "C&S";
        frmAdmitForm.lblUrineTestsCS.skin = "slLabelMediationOrders";
    } else {
        frmAdmitForm.lblUrineTestsCS.text = "C&S";
        frmAdmitForm.lblUrineTestsCS.skin = "slLabelMediationOrdersSelected";
    }
}

function tapToSelectUrineTestsCA() {
    var skin = frmAdmitForm.lblUrineTestsCA.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.lblUrineTestsCA.text = "UA";
        frmAdmitForm.lblUrineTestsCA.skin = "slLabelMediationOrders";
    } else {
        frmAdmitForm.lblUrineTestsCA.text = "UA";
        frmAdmitForm.lblUrineTestsCA.skin = "slLabelMediationOrdersSelected";
    }
}
var SetmentComorbidityData = [];

function setDataSetmentComorbidity() {
    frmAdmitForm.SetmentComorbidity.setWidgetDataMap = {
        btnComorbidity1: "btnComorbidity1",
        btnComorbidity2: "btnComorbidity2",
        btnComorbidity3: "btnComorbidity3",
        btnComorbidity4: "btnComorbidity4",
        btnComorbidity5: "btnComorbidity5"
    };
    SetmentComorbidityData = [{
        btnComorbidity1: {
            text: "CAD",
            onClick: onClickComorbidity1
        },
        btnComorbidity2: {
            text: "CHF",
            onClick: onClickComorbidity2
        },
        btnComorbidity3: {
            text: "CKD",
            onClick: onClickComorbidity3
        },
        btnComorbidity4: {
            text: "DM",
            onClick: onClickComorbidity4
        },
        btnComorbidity5: {
            text: "HTN",
            onClick: onClickComorbidity5
        }
    }];
    frmAdmitForm.SetmentComorbidity.setData(SetmentComorbidityData);
}

function onClickComorbidity1() {
    var index = frmAdmitForm.SetmentComorbidity.selectedIndex[1];
    var rowObj = frmAdmitForm.SetmentComorbidity.selectedItems;
    var skin = rowObj[0].btnComorbidity1.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity1.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity1.skin = "sknComorbidity";
    }
    frmAdmitForm.SetmentComorbidity.setDataAt(rowObj[0], index);
}

function onClickComorbidity2() {
    var index = frmAdmitForm.SetmentComorbidity.selectedIndex[1];
    var rowObj = frmAdmitForm.SetmentComorbidity.selectedItems;
    var skin = rowObj[0].btnComorbidity2.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity2.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity2.skin = "sknComorbidity";
    }
    frmAdmitForm.SetmentComorbidity.setDataAt(rowObj[0], index);
}

function onClickComorbidity3() {
    var index = frmAdmitForm.SetmentComorbidity.selectedIndex[1];
    var rowObj = frmAdmitForm.SetmentComorbidity.selectedItems;
    var skin = rowObj[0].btnComorbidity3.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity3.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity3.skin = "sknComorbidity";
    }
    frmAdmitForm.SetmentComorbidity.setDataAt(rowObj[0], index);
}

function onClickComorbidity4() {
    var index = frmAdmitForm.SetmentComorbidity.selectedIndex[1];
    var rowObj = frmAdmitForm.SetmentComorbidity.selectedItems;
    var skin = rowObj[0].btnComorbidity4.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity4.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity4.skin = "sknComorbidity";
    }
    frmAdmitForm.SetmentComorbidity.setDataAt(rowObj[0], index);
}

function onClickComorbidity5() {
    var index = frmAdmitForm.SetmentComorbidity.selectedIndex[1];
    var rowObj = frmAdmitForm.SetmentComorbidity.selectedItems;
    var skin = rowObj[0].btnComorbidity5.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity5.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity5.skin = "sknComorbidity";
    }
    frmAdmitForm.SetmentComorbidity.setDataAt(rowObj[0], index);
}
var setmentAllergiesData = [];

function setDataSetmentAllergies() {
    frmAdmitForm.SegmentAllergies.setWidgetDataMap = {
        btnComorbidity1: "btnComorbidity1",
        btnComorbidity2: "btnComorbidity2",
        btnComorbidity3: "btnComorbidity3",
        btnComorbidity4: "btnComorbidity4",
        btnComorbidity5: "btnComorbidity5"
    };
    setmentAllergiesData = [{
        btnComorbidity1: {
            text: "Codeine",
            onClick: onClickAllergies1
        },
        btnComorbidity2: {
            text: "Iodine",
            onClick: onClickAllergies2
        },
        btnComorbidity3: {
            text: "PCN",
            onClick: onClickAllergies3
        },
        btnComorbidity4: {
            text: "Sulfa",
            onClick: onClickAllergies4
        },
        btnComorbidity5: {
            text: "HTN",
            onClick: onClickAllergies5
        }
    }];
    frmAdmitForm.SegmentAllergies.setData(setmentAllergiesData);
}

function onClickAllergies1() {
    var index = frmAdmitForm.SegmentAllergies.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentAllergies.selectedItems;
    var skin = rowObj[0].btnComorbidity1.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity1.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity1.skin = "sknComorbidity";
    }
    frmAdmitForm.SegmentAllergies.setDataAt(rowObj[0], index);
}

function onClickAllergies2() {
    var index = frmAdmitForm.SegmentAllergies.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentAllergies.selectedItems;
    var skin = rowObj[0].btnComorbidity2.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity2.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity2.skin = "sknComorbidity";
    }
    frmAdmitForm.SegmentAllergies.setDataAt(rowObj[0], index);
}

function onClickAllergies3() {
    var index = frmAdmitForm.SegmentAllergies.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentAllergies.selectedItems;
    var skin = rowObj[0].btnComorbidity3.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity3.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity3.skin = "sknComorbidity";
    }
    frmAdmitForm.SegmentAllergies.setDataAt(rowObj[0], index);
}

function onClickAllergies4() {
    var index = frmAdmitForm.SegmentAllergies.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentAllergies.selectedItems;
    var skin = rowObj[0].btnComorbidity4.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity4.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity4.skin = "sknComorbidity";
    }
    frmAdmitForm.SegmentAllergies.setDataAt(rowObj[0], index);
}

function onClickAllergies5() {
    var index = frmAdmitForm.SegmentAllergies.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentAllergies.selectedItems;
    var skin = rowObj[0].btnComorbidity5.skin;
    if (skin == "sknComorbidity") {
        rowObj[0].btnComorbidity5.skin = "sknComorbiditySelected";
    } else {
        rowObj[0].btnComorbidity5.skin = "sknComorbidity";
    }
    frmAdmitForm.SegmentAllergies.setDataAt(rowObj[0], index);
}
var segmentSepsisScreeingSIRSData = [];

function setSegmentSepsisScreeingSIRSData() {
    frmAdmitForm.SegmentSepsisScreeingSIRS.widgetMap = {
        labelmediationOthers: "labelmediationOthers"
    };
    segmentSepsisScreeingSIRSData = [{
        labelmediationOthers: {
            text: "HR => 90"
        },
        skin: "slLabelMediationOrders"
    }, {
        labelmediationOthers: {
            text: "RR => 20"
        },
        skin: "slLabelMediationOrders"
    }, {
        labelmediationOthers: {
            text: "Temperature < 96.8 or > 100.4"
        },
        skin: "slLabelMediationOrders"
    }, {
        labelmediationOthers: {
            text: "WBC => 12,000 or <= 4,000 or > 10% Bands"
        },
        skin: "slLabelMediationOrders"
    }, {
        labelmediationOthers: {
            text: "No SIRS Criteria"
        },
        skin: "slLabelMediationOrders"
    }, ];
    frmAdmitForm.SegmentSepsisScreeingSIRS.setData(segmentSepsisScreeingSIRSData);
}

function tapToSelectSegmentSepsisScreeingSIRS() {
    var index = frmAdmitForm.SegmentSepsisScreeingSIRS.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentSepsisScreeingSIRS.selectedItems;
    var text = rowObj[0].labelmediationOthers.text;
    var skin = rowObj[0].labelmediationOthers.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrders"
        };
    } else {
        rowObj[0].labelmediationOthers = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
    }
    frmAdmitForm.SegmentSepsisScreeingSIRS.setDataAt(rowObj[0], index);
}
var segmentPatientStatusCodeStatusData = [];

function setDataSegmentPatientStatusCodeStatus() {
    frmAdmitForm.SegmentPatientStatusCodeStatus.widgetMap = {
        FlexContainerPatientStatusCodeStatus1: "FlexContainerPatientStatusCodeStatus1",
        FlexContainerPatientStatusCodeStatus2: "FlexContainerPatientStatusCodeStatus2",
        FlexContainerPatientStatusCodeStatus3: "FlexContainerPatientStatusCodeStatus3",
        FlexContainerPatientStatusCodeStatus4: "FlexContainerPatientStatusCodeStatus4",
        ImagePatientCodeStatus1: "ImagePatientCodeStatus1",
        ImagePatientCodeStatus2: "ImagePatientCodeStatus2",
        ImagePatientCodeStatus3: "ImagePatientCodeStatus3",
        ImagePatientCodeStatus4: "ImagePatientCodeStatus4",
        LabelPatientCodeStatus1: "LabelPatientCodeStatus1",
        LabelPatientCodeStatus2: "LabelPatientCodeStatus2",
        LabelPatientCodeStatus3: "LabelPatientCodeStatus3",
        LabelPatientCodeStatus4: "LabelPatientCodeStatus4"
    };
    segmentPatientStatusCodeStatusData = [{
        FlexContainerPatientStatusCodeStatus1: {
            onClick: onClickPatientStatusCode1
        },
        FlexContainerPatientStatusCodeStatus2: {
            onClick: onClickPatientStatusCode2
        },
        FlexContainerPatientStatusCodeStatus3: {
            onClick: onClickPatientStatusCode3
        },
        FlexContainerPatientStatusCodeStatus4: {
            onClick: onClickPatientStatusCode4
        },
        ImagePatientCodeStatus1: {
            src: "cmfrtinactive"
        },
        ImagePatientCodeStatus2: {
            src: "dnrinactive"
        },
        ImagePatientCodeStatus3: {
            src: "fullcodeinactve"
        },
        ImagePatientCodeStatus4: {
            src: "halfcdeinactive"
        },
        LabelPatientCodeStatus1: {
            text: "Comfort Measures",
            skin: "slLabelMediationOrders"
        },
        LabelPatientCodeStatus2: {
            text: "DNR",
            skin: "slLabelMediationOrders"
        },
        LabelPatientCodeStatus3: {
            text: "Full Code",
            skin: "slLabelMediationOrders"
        },
        LabelPatientCodeStatus4: {
            text: "Half code",
            skin: "slLabelMediationOrders"
        }
    }];
    frmAdmitForm.SegmentPatientStatusCodeStatus.setData(segmentPatientStatusCodeStatusData);
}

function onClickPatientStatusCode1() {
    var index = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedItems;
    // var src = rowObj[0].ImagePatientCodeStatus1.src;
    var skin = rowObj[0].LabelPatientCodeStatus1.skin;
    var text = rowObj[0].LabelPatientCodeStatus1.text;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].LabelPatientCodeStatus1 = {
            text: text,
            skin: "slLabelMediationOrders"
        };
        rowObj[0].ImagePatientCodeStatus1.src = "cmfrtinactiv";
    } else {
        rowObj[0].LabelPatientCodeStatus1 = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
        rowObj[0].ImagePatientCodeStatus1.src = "cmfrtactive";
    }
    frmAdmitForm.SegmentPatientStatusCodeStatus.setDataAt(rowObj[0], index);
}

function onClickPatientStatusCode2() {
    var index = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedItems;
    var src = rowObj[0].ImagePatientCodeStatus2.src;
    var skin = rowObj[0].LabelPatientCodeStatus2.skin;
    var text = rowObj[0].LabelPatientCodeStatus2.text;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].LabelPatientCodeStatus2 = {
            text: text,
            skin: "slLabelMediationOrders"
        };
        rowObj[0].ImagePatientCodeStatus2.src = "dnrinactive";
    } else {
        rowObj[0].LabelPatientCodeStatus2 = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
        rowObj[0].ImagePatientCodeStatus2.src = "dnractive";
    }
    frmAdmitForm.SegmentPatientStatusCodeStatus.setDataAt(rowObj[0], index);
}

function onClickPatientStatusCode3() {
    var index = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedItems;
    var src = rowObj[0].ImagePatientCodeStatus3.src;
    var skin = rowObj[0].LabelPatientCodeStatus3.skin;
    var text = rowObj[0].LabelPatientCodeStatus3.text;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].LabelPatientCodeStatus3 = {
            text: text,
            skin: "slLabelMediationOrders"
        };
        rowObj[0].ImagePatientCodeStatus3.src = "fullcodeinactve";
    } else {
        rowObj[0].LabelPatientCodeStatus3 = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
        rowObj[0].ImagePatientCodeStatus3.src = "fullcodeactve";
    }
    frmAdmitForm.SegmentPatientStatusCodeStatus.setDataAt(rowObj[0], index);
}

function onClickPatientStatusCode4() {
    var index = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedIndex[1];
    var rowObj = frmAdmitForm.SegmentPatientStatusCodeStatus.selectedItems;
    var src = rowObj[0].ImagePatientCodeStatus4.src;
    var skin = rowObj[0].LabelPatientCodeStatus4.skin;
    var text = rowObj[0].LabelPatientCodeStatus4.text;
    if (skin == "slLabelMediationOrdersSelected") {
        rowObj[0].LabelPatientCodeStatus4 = {
            text: text,
            skin: "slLabelMediationOrders"
        };
        rowObj[0].ImagePatientCodeStatus4.src = "halfcdeinactive";
    } else {
        rowObj[0].LabelPatientCodeStatus4 = {
            text: text,
            skin: "slLabelMediationOrdersSelected"
        };
        rowObj[0].ImagePatientCodeStatus4.src = "halfcdeactive";
    }
    frmAdmitForm.SegmentPatientStatusCodeStatus.setDataAt(rowObj[0], index);
}

function setDisableSubmitButton() {
    frmAdmitForm.patientSubmit.skin = "sknAdmitFormSubmitDisable";
    frmAdmitForm.patientSubmit.text = "Submit";
    frmAdmitForm.DiagosticsSubmit.skin = "sknAdmitFormSubmitDisable";
    frmAdmitForm.DiagosticsSubmit.text = "Submit";
    frmAdmitForm.RecommendationSubmit.skin = "sknAdmitFormSubmitDisable";
    frmAdmitForm.RecommendationSubmit.text = "Submit";
}

function setErrorSubmitButton() {
    frmAdmitForm.patientSubmit.skin = "sknAdmitFormSubmitError";
    frmAdmitForm.patientSubmit.text = "Submit";
    frmAdmitForm.DiagosticsSubmit.skin = "sknAdmitFormSubmitError";
    frmAdmitForm.DiagosticsSubmit.text = "Submit";
    frmAdmitForm.RecommendationSubmit.skin = "sknAdmitFormSubmitError";
    frmAdmitForm.RecommendationSubmit.text = "Submit";
}

function setEnableSubmitButton() {
    frmAdmitForm.patientSubmit.skin = "sknAdmitFormSubmitEnable";
    frmAdmitForm.patientSubmit.text = "Submit";
    frmAdmitForm.DiagosticsSubmit.skin = "sknAdmitFormSubmitEnable";
    frmAdmitForm.DiagosticsSubmit.text = "Submit";
    frmAdmitForm.RecommendationSubmit.skin = "sknAdmitFormSubmitEnable";
    frmAdmitForm.RecommendationSubmit.text = "Submit";
}

function resetAdmitForm() {
    frmAdmitForm.TFFirstName.text = "";
    frmAdmitForm.TFLastName.text = "";
    frmAdmitForm.TBChiefComplaint.text = "";
    frmAdmitForm.TBAdmitFormTemparature.text = "";
    frmAdmitForm.TBAdmitFormBP.text = "";
    frmAdmitForm.TBAdmitFormDiastolic.text = "";
    frmAdmitForm.TBAdmitFormWeight.text = "";
    frmAdmitForm.TBAdmitFormHeight.text = "";
    frmAdmitForm.TBAdmitFormBodyMass.text = "";
    frmAdmitForm.TBAdmitFormPulse.text = "";
    frmAdmitForm.TBAdmitFormPulse.text = "";
    frmAdmitForm.LblAdmiFormMale.skin = "slLabelMediationOrders";
    frmAdmitForm.LblAdmitFormFemale.skin = "slLabelMediationOrders";
    frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin = "slLabelMediationOrders";
    frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin = "slLabelMediationOrders";
    frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin = "slLabelMediationOrders";
    frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin = "slLabelMediationOrders";
    frmAdmitForm.ListBoxAdmittingHospital.selectedKey = 0;
    frmAdmitForm.ListBoxAdmittingGroup.selectedKey = 0;
    frmAdmitForm.ListBoxPatienETA.selectedKey = 0;
    setSegmentSepsisScreeingSIRSData();
    setDisableSubmitButton();
}

function tapToSelectGenderMale() {
    var skin = frmAdmitForm.LblAdmiFormMale.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.LblAdmiFormMale.skin = "slLabelMediationOrders";
        frmAdmitForm.LblAdmitFormFemale.skin = "slLabelMediationOrdersSelected";
    } else {
        frmAdmitForm.LblAdmiFormMale.skin = "slLabelMediationOrdersSelected";
        frmAdmitForm.LblAdmitFormFemale.skin = "slLabelMediationOrders";
    }
}

function tapToSelectGenderFeMale() {
    var skin = frmAdmitForm.LblAdmitFormFemale.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.LblAdmitFormFemale.skin = "slLabelMediationOrders";
        frmAdmitForm.LblAdmiFormMale.skin = "slLabelMediationOrdersSelected";
    } else {
        frmAdmitForm.LblAdmitFormFemale.skin = "slLabelMediationOrdersSelected";
        frmAdmitForm.LblAdmiFormMale.skin = "slLabelMediationOrders";
    }
}

function tapToSelectInfectiousDiseaseQuestionnaireSuspectEbolaNO() {
    var skin = frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin = "slLabelMediationOrders";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin = "slLabelMediationOrdersSelected";
    } else {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin = "slLabelMediationOrdersSelected";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin = "slLabelMediationOrders";
    }
}

function tapToSelectInfectiousDiseaseQuestionnaireSuspectEbolaYes() {
    var skin = frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin = "slLabelMediationOrders";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin = "slLabelMediationOrdersSelected";
    } else {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin = "slLabelMediationOrdersSelected";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin = "slLabelMediationOrders";
    }
}

function tapToSelectInfectiousDiseaseQuestionnaireTravelledNo() {
    var skin = frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin = "slLabelMediationOrders";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin = "slLabelMediationOrdersSelected";
    } else {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin = "slLabelMediationOrdersSelected";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin = "slLabelMediationOrders";
    }
}

function tapToSelectInfectiousDiseaseQuestionnaireTravelledYes() {
    var skin = frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin;
    if (skin == "slLabelMediationOrdersSelected") {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin = "slLabelMediationOrders";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin = "slLabelMediationOrdersSelected";
    } else {
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin = "slLabelMediationOrdersSelected";
        frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin = "slLabelMediationOrders";
    }
}

function submitAdmitPatientForm() {
    //	alert(frmRegister.ListBoxAdmittingHospital.selectedKey);
    var curreentForm = kony.application.getCurrentForm();
    var temp = null;
    if ((frmAdmitForm.TFFirstName.text == temp) || (frmAdmitForm.TFLastName.text == temp) || (frmAdmitForm.TBChiefComplaint.text == temp) || (frmAdmitForm.TBAdmitFormTemparature.text == temp) || (frmAdmitForm.TBAdmitFormBP.text == temp) || (frmAdmitForm.TBAdmitFormDiastolic.text == temp) || (frmAdmitForm.TBAdmitFormPulse.text == temp) || (frmAdmitForm.TBAdmitFormO2Level.text == temp) || (frmAdmitForm.TBAdmitFormWeight.text == temp) || (frmAdmitForm.TBAdmitFormHeight.text == temp) || (frmAdmitForm.TBAdmitFormBodyMass.text == temp)) {
        alert("Please fill all the mandatory feilds");
        setDisableSubmitButton();
    } else if ((frmAdmitForm.TFFirstName.text != temp && frmAdmitForm.TFFirstName.text == "") || (frmAdmitForm.TFLastName.text != temp && frmAdmitForm.TFLastName.text == "") || (frmAdmitForm.TBChiefComplaint.text != temp && frmAdmitForm.TBChiefComplaint.text == "") || (frmAdmitForm.TBAdmitFormTemparature.text != temp && frmAdmitForm.TBAdmitFormTemparature.text == "") || (frmAdmitForm.TBAdmitFormBP.text != temp && frmAdmitForm.TBAdmitFormBP.text == "") || (frmAdmitForm.TBAdmitFormDiastolic.text != temp && frmAdmitForm.TBAdmitFormDiastolic.text == "") || (frmAdmitForm.TBAdmitFormPulse.text != temp && frmAdmitForm.TBAdmitFormPulse.text == "") || (frmAdmitForm.TBAdmitFormO2Level.text != temp && frmAdmitForm.TBAdmitFormO2Level.text == "") || (frmAdmitForm.TBAdmitFormWeight.text != temp && frmAdmitForm.TBAdmitFormWeight.text == "") || (frmAdmitForm.TBAdmitFormHeight.text != temp && frmAdmitForm.TBAdmitFormHeight.text == "") || (frmAdmitForm.TBAdmitFormBodyMass.text != temp && frmAdmitForm.TBAdmitFormBodyMass.text == "")) {
        //  alert("Please fill all the mandatory feilds");
        setDisableSubmitButton();
    } else if ((frmAdmitForm.LblAdmiFormMale.skin == "slLabelMediationOrders") && (frmAdmitForm.LblAdmitFormFemale.skin == "slLabelMediationOrders")) {
        alert("Please fill all the mandatory feilds");
        setDisableSubmitButton();
    } else if ((frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin == "slLabelMediationOrders") && (frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin == "slLabelMediationOrders")) {
        alert("Please fill all the mandatory feilds");
        setDisableSubmitButton();
    } else if ((frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin == "slLabelMediationOrders") && (frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin == "slLabelMediationOrders")) {
        alert("Please fill all the mandatory feilds");
        setDisableSubmitButton();
    } else if (curreentForm.ListBoxAdmittingHospital.selectedKey == 0) {
        alert("Please fill all the Admitting Hospital");
        setDisableSubmitButton();
    } else if (curreentForm.ListBoxAdmittingGroup.selectedKey == 0) {
        alert("Please fill all the Admitting Group");
        setDisableSubmitButton();
    } else if (curreentForm.ListBoxPatienETA.selectedKey == 0) {
        alert("Please fill all the Patient ETA");
        setDisableSubmitButton();
    } else if (!isSIRSDATASelected()) {
        alert("Please select the SIRS");
        setDisableSubmitButton();
    } else {
        alert("sumitted successfully");
        resetAdmitForm();
        // setEnableSubmitButton();
    }
    /** currentForm.ListBoxHospital.selectedKey == 0  **/
}

function isSIRSDATASelected() {
    var isSelected = false;
    for (var i = 0; i < frmAdmitForm.SegmentSepsisScreeingSIRS.data.length; i++) {
        alert(frmAdmitForm.SegmentSepsisScreeingSIRS.data[i].labelmediationOthers.skin);
        var skin = frmAdmitForm.SegmentSepsisScreeingSIRS.data[i].labelmediationOthers.skin;
        if (skin == "slLabelMediationOrdersSelected") {
            isSelected = true;
        }
        return isSelected;
    }
}

function CheckVAlidationAdmitPatientForm() {
    var curreentForm = kony.application.getCurrentForm();
    var temp = null;
    if ((frmAdmitForm.TFFirstName.text == temp) || (frmAdmitForm.TFLastName.text == temp) || (frmAdmitForm.TBChiefComplaint.text == temp) || (frmAdmitForm.TBAdmitFormTemparature.text == temp) || (frmAdmitForm.TBAdmitFormBP.text == temp) || (frmAdmitForm.TBAdmitFormDiastolic.text == temp) || (frmAdmitForm.TBAdmitFormPulse.text == temp) || (frmAdmitForm.TBAdmitFormO2Level.text == temp) || (frmAdmitForm.TBAdmitFormWeight.text == temp) || (frmAdmitForm.TBAdmitFormHeight.text == temp) || (frmAdmitForm.TBAdmitFormBodyMass.text == temp)) {
        setDisableSubmitButton();
    } else if ((frmAdmitForm.TFFirstName.text != temp && frmAdmitForm.TFFirstName.text == "") || (frmAdmitForm.TFLastName.text != temp && frmAdmitForm.TFLastName.text == "") || (frmAdmitForm.TBChiefComplaint.text != temp && frmAdmitForm.TBChiefComplaint.text == "") || (frmAdmitForm.TBAdmitFormTemparature.text != temp && frmAdmitForm.TBAdmitFormTemparature.text == "") || (frmAdmitForm.TBAdmitFormBP.text != temp && frmAdmitForm.TBAdmitFormBP.text == "") || (frmAdmitForm.TBAdmitFormDiastolic.text != temp && frmAdmitForm.TBAdmitFormDiastolic.text == "") || (frmAdmitForm.TBAdmitFormPulse.text != temp && frmAdmitForm.TBAdmitFormPulse.text == "") || (frmAdmitForm.TBAdmitFormO2Level.text != temp && frmAdmitForm.TBAdmitFormO2Level.text == "") || (frmAdmitForm.TBAdmitFormWeight.text != temp && frmAdmitForm.TBAdmitFormWeight.text == "") || (frmAdmitForm.TBAdmitFormHeight.text != temp && frmAdmitForm.TBAdmitFormHeight.text == "") || (frmAdmitForm.TBAdmitFormBodyMass.text != temp && frmAdmitForm.TBAdmitFormBodyMass.text == "")) {
        setDisableSubmitButton();
    } else if ((frmAdmitForm.LblAdmiFormMale.skin == "slLabelMediationOrders") && (frmAdmitForm.LblAdmitFormFemale.skin == "slLabelMediationOrders")) {
        setDisableSubmitButton();
    } else if ((frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaNO.skin == "slLabelMediationOrders") && (frmAdmitForm.LabelInfectiousDiseaseQuestionnaireSuspectEbolaYes.skin == "slLabelMediationOrders")) {
        setDisableSubmitButton();
    } else if ((frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledNo.skin == "slLabelMediationOrders") && (frmAdmitForm.LabelInfectiousDiseaseQuestionnaireTravelledYes.skin == "slLabelMediationOrders")) {
        setDisableSubmitButton();
    } else if (curreentForm.ListBoxAdmittingHospital.selectedKey === 0) {
        setDisableSubmitButton();
    } else if (curreentForm.ListBoxAdmittingGroup.selectedKey === 0) {
        setDisableSubmitButton();
    } else if (curreentForm.ListBoxPatienETA.selectedKey === 0) {
        setDisableSubmitButton();
    } else if (!isSIRSDATASelected()) {
        setDisableSubmitButton();
    } else {
        setEnableSubmitButton();
    }
}