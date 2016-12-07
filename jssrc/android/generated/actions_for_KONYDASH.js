//actions.js file 
function a(eventObject) {
    return AS_Label_d06b5d10406e4206ad38e4c06d979596(eventObject);
}

function AS_Label_d06b5d10406e4206ad38e4c06d979596(eventObject) {
    return getDashBoardShowAndHideRow.call(this, eventObject);
}

function ActionInitSetDataManageAlertsDirectAdmission() {
    return AS_NamedActions_11b6d54803234f5593c17f17d8ede9f7();
}

function AS_NamedActions_11b6d54803234f5593c17f17d8ede9f7() {
    return setDataSetmentManageAlertsDirectAdmission.call(this);
}

function ActionInitSetDataManageAlertsEDReferral() {
    return AS__3a8895e4588a4fb0a96388157af9cccc();
}

function AS__3a8895e4588a4fb0a96388157af9cccc() {
    return setDataSetmentManageAlertsEDReferral.call(this);
}

function ActionInitSetDataManageAlertsPsychAdmission() {
    return AS__af5a550807234e29a4df7a342c0ec16a();
}

function AS__af5a550807234e29a4df7a342c0ec16a() {
    return setDataSetmentManageAlertsPsychAdmission.call(this);
}

function action_clinicTab() {
    return AS_NamedActions_1352f25abbd14c909e7ab7b40b4ef99f();
}

function AS_NamedActions_1352f25abbd14c909e7ab7b40b4ef99f() {
    return showClinicList.call(this);
}

function action_dismissPopupReferringFacility(eventObject) {
    return AS__a131499a2f264fdc8d2a48c7518f4f67(eventObject);
}

function AS__a131499a2f264fdc8d2a48c7518f4f67(eventObject) {
    popupReferringFacility.dismiss()
}

function action_dismissPopupTakeAction(eventObject) {
    return AS_Label_d06b5d10406e4206ad38e4c06d979596(eventObject);
}

function AS_Label_d06b5d10406e4206ad38e4c06d979596(eventObject) {
    popupTakeaction.dismiss()
}

function action_FormTypeTab() {
    return AS_NamedActions_4fad31864dc34c84a154802c95fab512();
}

function AS_NamedActions_4fad31864dc34c84a154802c95fab512() {
    return showFormTypeList.call(this);
}

function action_menuAniationSwipeLeft(eventobject, x, y) {
    return AS_FlexContainer_7461fba0633b4b6ca31c4e9345f37521(eventobject, x, y);
}

function AS_FlexContainer_7461fba0633b4b6ca31c4e9345f37521(eventobject, x, y) {
    return closeMenu.call(this);
}

function action_navigateTo_frmAdmission(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_537e457f44164d389476c222380f49f1(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_537e457f44164d389476c222380f49f1(eventobject, sectionNumber, rowNumber) {
    frmAdmission.show();
}

function action_navigateTo_frmAdmitForm() {
    return AS_NamedActions_92351225a2bc411e97fed2807a916c90();
}

function AS_NamedActions_92351225a2bc411e97fed2807a916c90() {
    frmAdmitForm.show();
    AS_NamedActions_59f90898340d4953be384a35208868b0();
}

function action_navigateTo_frmDashBoard() {
    return AS_NamedActions_631da807ab464002a5587d29b7ed9efd();
}

function AS_NamedActions_631da807ab464002a5587d29b7ed9efd() {
    frmDashBoard.show();
    AS_Segment_42e20e0f588b4ffaafce0428d554aad0(null, null, null);
}

function action_navigateTo_frmDisChargeNotification() {
    return AS_NamedActions_8aeef5f1228c4fb589c9b21add4109cd();
}

function AS_NamedActions_8aeef5f1228c4fb589c9b21add4109cd() {
    frmDischargeNotiifcattions.show();
    AS_NamedActions_59f90898340d4953be384a35208868b0();
}

function action_navigateTo_frmEditProfile() {
    return AS_NamedActions_05d3c02a2c394dc9aedbef399f38818a();
}

function AS_NamedActions_05d3c02a2c394dc9aedbef399f38818a() {
    frmEditProfile.show();
    AS_NamedActions_59f90898340d4953be384a35208868b0();
}

function action_navigateTo_frmForgotPassword() {
    return AS_NamedActions_61196736f19c49d1991454a4788d3363();
}

function AS_NamedActions_61196736f19c49d1991454a4788d3363() {
    frmForgetPassword.show();
}

function action_navigateTo_frmLogin() {
    return AS_NamedActions_3c74bd01e75c4bfe95dc0f5eb28edd07();
}

function AS_NamedActions_3c74bd01e75c4bfe95dc0f5eb28edd07() {
    frmLogin.show();
}

function action_navigateTo_frmManageAlerts() {
    return AS_NamedActions_ae9476a8164c45e09f2c52d480b93779();
}

function AS_NamedActions_ae9476a8164c45e09f2c52d480b93779() {
    frmConfigurationAlerts.show();
    AS_NamedActions_59f90898340d4953be384a35208868b0();
}

function action_navigateTo_frmRegister() {
    return AS_NamedActions_e9ff66d128fe44c280f00a79a3a057c0();
}

function AS_NamedActions_e9ff66d128fe44c280f00a79a3a057c0() {
    frmRegister.show();
}

function action_navigateTo_frmSupport() {
    return AS_NamedActions_2ad466e34ded4873ac916d6af07a054a();
}

function AS_NamedActions_2ad466e34ded4873ac916d6af07a054a() {
    frmSupport.show();
    AS_NamedActions_59f90898340d4953be384a35208868b0();
}

function action_onSelectClinic() {
    return AS_NamedActions_1b4bb0b105db410faed8ac7e165ed7ff();
}

function AS_NamedActions_1b4bb0b105db410faed8ac7e165ed7ff() {
    return showFormTypeList.call(this);
}

function action_onSelectFormType() {
    return AS_NamedActions_96dba70c43c645a7a93754c6f2c04519();
}

function AS_NamedActions_96dba70c43c645a7a93754c6f2c04519() {
    return showadmitFrom.call(this);
}

function action_OpenMenu() {
    return AS_NamedActions_59f90898340d4953be384a35208868b0();
}

function AS_NamedActions_59f90898340d4953be384a35208868b0() {
    return hamburger.call(this);
}

function action_popup_ReferringFacility() {
    return AS_NamedActions_7b404dbb005749549e452e4d6ce70498();
}

function AS_NamedActions_7b404dbb005749549e452e4d6ce70498() {
    popupReferringFacility.show()
}

function action_popup_takeaction() {
    return AS_NamedActions_526b9726d9f646619dec541686cd7b4f();
}

function AS_NamedActions_526b9726d9f646619dec541686cd7b4f() {
    popupTakeaction.show()
}

function action_setDashboardData(eventObject) {
    return AS_NamedActions_39f4aa24a2004cdeb65ac547cbe7ceee(eventObject);
}

function AS_NamedActions_39f4aa24a2004cdeb65ac547cbe7ceee(eventObject) {
    return setDashBoardData.call(this);
}

function action_showAdditionalInfo_RowAction() {
    return AS_NamedActions_24a63fa9438d48a6bbc11a45997962c6();
}

function AS_NamedActions_24a63fa9438d48a6bbc11a45997962c6() {}

function action_showAddtionalinfo(eventobject) {
    return AS_FlexContainer_89fb95a2fd804ba0acb7ea58f4ddef6b(eventobject);
}

function AS_FlexContainer_89fb95a2fd804ba0acb7ea58f4ddef6b(eventobject) {
    return showAddtionalinfo.call(this);
}

function action_showAdmissionDetails(eventobject, x, y) {
    return AS_FlexContainer_68503974481a415db5ecd3e31fe5f652(eventobject, x, y);
}

function AS_FlexContainer_68503974481a415db5ecd3e31fe5f652(eventobject, x, y) {
    return showAdmissionDetails.call(this);
}

function action_showAdmitFormAdmitingPreferences() {
    return AS_NamedActions_a9f6edee3bfa48828a6a358068400672();
}

function AS_NamedActions_a9f6edee3bfa48828a6a358068400672() {
    return showAdmitFormAdmittingPreferences.call(this);
}

function action_showAdmitFormBedAssignAlert() {
    return AS_NamedActions_538c0551c725445cb34599759af920f1();
}

function AS_NamedActions_538c0551c725445cb34599759af920f1() {
    return showAdmitFormBedAssignAlert.call(this);
}

function action_showAdmitFormImaging() {
    return AS_NamedActions_d5ab48750bc44382859c8adac883e95c();
}

function AS_NamedActions_d5ab48750bc44382859c8adac883e95c() {
    return showAdmitFormImaging.call(this);
}

function action_showAdmitFormInfectiousDieseaseQuestionries() {
    return AS_NamedActions_3517a8ee729842769c095c8668e88353();
}

function AS_NamedActions_3517a8ee729842769c095c8668e88353() {
    return showAdmitFormInfectiousDiseaseQuestionnaire.call(this);
}

function action_showAdmitFormMedicalHistory() {
    return AS_NamedActions_133a1a770f3e4dcbb9284e6122566f39();
}

function AS_NamedActions_133a1a770f3e4dcbb9284e6122566f39() {
    return showAdmitFormMedicationOrders.call(this);
}

function action_showAdmitformMedicationOrders() {
    return AS_NamedActions_d256045992a84e089f04f20ed1f3e15d();
}

function AS_NamedActions_d256045992a84e089f04f20ed1f3e15d() {
    return showAdmitFormMedicationOrders.call(this);
}

function action_showAdmitFormModeOfTransport() {
    return AS_NamedActions_3669fa437d63467385e3dac43b321d13();
}

function AS_NamedActions_3669fa437d63467385e3dac43b321d13() {
    return showAdmitFormModeOfTransport.call(this);
}

function action_showAdmitFormPatientDiagnosis() {
    return AS_NamedActions_d2dc0f6b70824b2d9f5642e525a43317();
}

function AS_NamedActions_d2dc0f6b70824b2d9f5642e525a43317() {
    return showAdmitFormInfectiousPatientDiagnosis.call(this);
}

function action_showAdmitFormPatientInfo() {
    return AS_NamedActions_13ba87fe395740aea317e3a6fe90d233();
}

function AS_NamedActions_13ba87fe395740aea317e3a6fe90d233() {
    return showAdmitFormPatientInfo.call(this);
}

function action_showAdmitFormPatientStatus() {
    return AS_NamedActions_8d0e1c801eb84f4a8b88961a6f470fb6();
}

function AS_NamedActions_8d0e1c801eb84f4a8b88961a6f470fb6() {
    return showAdmitFormPatientStatus.call(this);
}

function action_showAdmitFormPramaryCareProvider() {
    return AS_NamedActions_7d02766afc544cd8b3a4d4dc26f97795();
}

function AS_NamedActions_7d02766afc544cd8b3a4d4dc26f97795() {
    return showAdmitFormPrimaryCareProvider.call(this);
}

function action_showAdmitFormSepsisScreening() {
    return AS_NamedActions_c0851c46d4304418bb300c7a97d1abc3();
}

function AS_NamedActions_c0851c46d4304418bb300c7a97d1abc3() {
    return showAdmitFormSepsisScreening.call(this);
}

function action_showAdmitFormSpecialityConsults(eventobject, x, y) {
    return AS_FlexContainer_c84915d7e9774bad8c054996b66182a0(eventobject, x, y);
}

function AS_FlexContainer_c84915d7e9774bad8c054996b66182a0(eventobject, x, y) {
    return showAdmitFormSpecialityConsults.call(this);
}

function action_showAdmitFormTests() {
    return AS_NamedActions_e08328f0fedc4f92836454ffa750ffc8();
}

function AS_NamedActions_e08328f0fedc4f92836454ffa750ffc8() {
    return showAdmitFormTests.call(this);
}

function action_showAdmitFormVitalSigns() {
    return AS_NamedActions_ce830ea07f2b4479a29c460e4393818e();
}

function AS_NamedActions_ce830ea07f2b4479a29c460e4393818e() {
    return showAdmitFormVitalSigns.call(this);
}

function action_showDashBoardDEtailsnew(eventObject) {
    return AS_Image_1a2fc12870dc409b9b39cc431d02aea1(eventObject);
}

function AS_Image_1a2fc12870dc409b9b39cc431d02aea1(eventObject) {
    return getDashBoardShowAndHideRow.call(this, eventObject);
}

function action_showDiagnosticsAll() {
    return AS_NamedActions_c650ed97c0f5429f9b7d64f3be30c2be();
}

function AS_NamedActions_c650ed97c0f5429f9b7d64f3be30c2be() {
    showDiagnosticsAll.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function action_showDiagnosticsMandatory() {
    return AS_NamedActions_0cd65a6aaa874377936d28fca98abaf2();
}

function AS_NamedActions_0cd65a6aaa874377936d28fca98abaf2() {
    return showDiagnosticsMandatory.call(this);
}

function action_showDiagnosticsPreferred() {
    return AS__6477c23e4b024f879273f3fda0e8698f();
}

function AS__6477c23e4b024f879273f3fda0e8698f() {
    return showDiagnosticsPreferred.call(this);
}

function action_showPatientAllFeilds() {
    return AS_NamedActions_deb97a05f6be4f88b44ebb4958662026();
}

function AS_NamedActions_deb97a05f6be4f88b44ebb4958662026() {
    return showPatientAllFeilds.call(this);
}

function action_showPatientMandatoryFeilds() {
    return AS_NamedActions_13f36a91edd14b358667a0fc935daedd();
}

function AS_NamedActions_13f36a91edd14b358667a0fc935daedd() {
    showPatientMandatoryFeilds.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function action_showPatientPreferredFeilds() {
    return AS_NamedActions_e8648570061a438f81bd3b5e552c1d9d();
}

function AS_NamedActions_e8648570061a438f81bd3b5e552c1d9d() {
    return showPatientPreferredFeilds.call(this);
}

function action_showRecommandationAll(eventobject) {
    return AS_Button_bd9074a1ed624bea82d3877a955634eb(eventobject);
}

function AS_Button_bd9074a1ed624bea82d3877a955634eb(eventobject) {
    showRecommendationAll.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function action_showRecommandationMandatory(eventobject) {
    return AS__6de8822e217f4e1a87614b09e72157ba(eventobject);
}

function AS__6de8822e217f4e1a87614b09e72157ba(eventobject) {
    return showRecommendationsMandatory.call(this);
}

function action_showRecommendationPreferred(eventobject) {
    return AS__795d08d7df7740c7a925a1c1385da303(eventobject);
}

function AS__795d08d7df7740c7a925a1c1385da303(eventobject) {
    return showRecommendationsPreferred.call(this);
}

function action_showSepsisScreening(eventobject) {
    return AS_FlexContainer_8283c08a069849b982e85d166112e4a3(eventobject);
}

function AS_FlexContainer_8283c08a069849b982e85d166112e4a3(eventobject) {
    return showshowSepsisScreening.call(this);
}

function action_showVitalSigns(eventobject) {
    return AS_FlexContainer_811d40bcf159457fbf7a153d2bb9ee6a(eventobject);
}

function AS_FlexContainer_811d40bcf159457fbf7a153d2bb9ee6a(eventobject) {
    return showshowVitalSigns.call(this);
}

function Action_Show_Support_GeneralTab() {
    return AS_NamedActions_a0d02896e7db44e392bc031c6bc3eda5();
}

function AS_NamedActions_a0d02896e7db44e392bc031c6bc3eda5() {
    return showSupportGeneral.call(this);
}

function Action_Show_Support_ReportTab() {
    return AS__c8791980ac0e41c3947b02e7c39d7326();
}

function AS__c8791980ac0e41c3947b02e7c39d7326() {
    return showSupportReportAnIssue.call(this);
}

function action_tapToSelectBloodTests1() {
    return AS__a893da236ebe49049e84d804dab3b27b();
}

function AS__a893da236ebe49049e84d804dab3b27b() {
    return tapToSegmentBloodTests1.call(this);
}

function action_tapToSelectBloodTests2() {
    return AS__97f02b238cef4196bb4415d13f286c08();
}

function AS__97f02b238cef4196bb4415d13f286c08() {
    return tapToSegmentBloodTests2.call(this);
}

function action_tapToSelectBloodTests3() {
    return AS__ace80bd712154a80945ce30169b88c5c();
}

function AS__ace80bd712154a80945ce30169b88c5c() {
    return tapToSegmentBloodTests3.call(this);
}

function action_tapToSelectImagingTestsCT() {
    return AS__2e0665e9d89944e8bea87c67562fe35c();
}

function AS__2e0665e9d89944e8bea87c67562fe35c() {
    return tapToSegmentImagingTestsCT.call(this);
}

function action_tapToSelectImagingTestsEKG() {
    return AS__490469733ab24dd0873283df8bbd7755();
}

function AS__490469733ab24dd0873283df8bbd7755() {
    return tapToSegmentImagingTestsEKG.call(this);
}

function action_tapToSelectImagingTestsMRI() {
    return AS__ab68fcbd80b043d084df39cb1b3dfe12();
}

function AS__ab68fcbd80b043d084df39cb1b3dfe12() {
    return tapToSegmentImagingTestsMRI.call(this);
}

function action_tapToSelectImagingTestsXRays() {
    return AS__2fee923db57e40dd822642b011c9e53b();
}

function AS__2fee923db57e40dd822642b011c9e53b() {
    return tapToSegmentImagingTestsXRays.call(this);
}

function action_tapToSelectImaginTestsUS() {
    return AS__f552ff361bbd40638e6b9423f92c08ae();
}

function AS__f552ff361bbd40638e6b9423f92c08ae() {
    return tapToSegmentImaginTestsUS.call(this);
}

function action_tapToSelectModeOfTransport1() {
    return AS__b0690075fe954ae6ad72e2fff3cb0ca8();
}

function AS__b0690075fe954ae6ad72e2fff3cb0ca8() {
    return tapToSegmentModeOfTransport1.call(this);
}

function action_tapToSelectModeOfTransport2() {
    return AS__6bee695c7dec487a9b04af7d35968c54();
}

function AS__6bee695c7dec487a9b04af7d35968c54() {
    return tapToSegmentModeOfTransport2.call(this);
}

function action_tapToSelectOtherMediations() {
    return AS_NamedActions_1bb2f3bf16b241628f94fee5b4ab9391();
}

function AS_NamedActions_1bb2f3bf16b241628f94fee5b4ab9391() {
    return tapToSelectSegOtherMediations.call(this);
}

function action_tapToSelectPRNMeds() {
    return AS__5fe8882bb1fd46e4ad96044f8e24e5a8();
}

function AS__5fe8882bb1fd46e4ad96044f8e24e5a8() {
    return tapToSelectSegmentPRNMeds.call(this);
}

function action_tapToSelectSpecialityConsults() {
    return AS__c0ff320afed7478e9f583eaeb0a0ea3c();
}

function AS__c0ff320afed7478e9f583eaeb0a0ea3c() {
    return tapToSegmentSpecialityConsults.call(this);
}

function action_tapToSelectUrineTestsCA() {
    return AS__eb076c1b4ca841ee901c63b3ad35a9b4();
}

function AS__eb076c1b4ca841ee901c63b3ad35a9b4() {
    return tapToSelectUrineTestsCA.call(this);
}

function action_tapToSelectUrineTestsCS() {
    return AS__91271a58263a4b61b985af875cbaea8a();
}

function AS__91271a58263a4b61b985af875cbaea8a() {
    return tapToSelectUrineTestsCS.call(this);
}

function Action_TapToSelect_SegmentSepsisScreeingSIRS() {
    return AS__5b397197fec94fb5821098fc2c584f80();
}

function AS__5b397197fec94fb5821098fc2c584f80() {
    tapToSelectSegmentSepsisScreeingSIRS.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function Action_validation_Admitform_Mandatory(eventobject, changedtext) {
    return AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(eventobject, changedtext);
}

function AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(eventobject, changedtext) {
    if ((frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFFirstName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientInfoAdmitForm.TFLastName.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingHospital.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxAdmittingGroup.selectedKey == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerAdmittingPreferencesAdmitForm.ListBoxPatienETA.selectedKeyValue == listboxdefaultkey) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerPatientDiagnosisAdmitForm.TBChiefComplaint.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormTemparature.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBP.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormDiastolic.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormPulse.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormO2Level.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormWeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormHeight.text == tbTempAdmitPage) || (frmAdmitForm.flxContainer1.flxBodyContainer.flexAdmitFormContainer.admitFormTabSection.TestpatientTab.patientMandatorySection.flxContainerVitalSignsAdmitForm.TBAdmitFormBodyMass.text == tbTempAdmitPage)) {
        setDisableSubmitButton.call(this);
    } else {
        setEnableSubmitButton.call(this);
    }
}

function AS_Button_1690e2e3b85347399e26c117c7f58d61(eventobject) {
    return AS_Button_1690e2e3b85347399e26c117c7f58d61(eventobject);
}

function AS_Button_1690e2e3b85347399e26c117c7f58d61(eventobject) {
    frmDashBoard.show();
}

function AS_Button_6309f4c9f9464a7aacbbcff75474b536(eventobject) {}

function AS_Button_63358be63ae44655825b9225467739cf(eventobject) {
    return showSupportGeneral.call(this);
}

function AS_Button_a5bb6f7d80b54441b2a21d52540f0f15(eventobject) {
    return showSupportReportAnIssue.call(this);
}

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

function AS_FlexContainer_024973cfb1894aca8e13c231afbc7865(eventobject) {
    frmAdmitForm.show();
}

function AS_FlexContainer_049a8ef7b4184e5b8de1135d984de911(eventobject) {
    return showAdmissionDetails2.call(this);
}

function AS_FlexContainer_080986b9968e45fcb2159bbf3a85d7a8(eventobject, x, y) {
    frmSupport.show();
}

function AS_FlexContainer_31aed1aebcce407aa79234c9717c94b5(eventobject) {
    frmEditProfile.show();
}

function AS_FlexContainer_55d8c0c11dda4aaea7ecc2e215f4eaf8(eventobject) {
    frmConfigurationAlerts.show();
}

function AS_FlexContainer_5eb1ab1bd9d547e39aae5f750d529ee2(eventobject, x, y) {
    frmDashBoard.show();
}

function AS_FlexContainer_60953fccc51441189ad64e5bae080ca2(eventobject) {
    frmSupport.show();
}

function AS_FlexContainer_62305675ffe0424593c0a48686643474(eventobject) {
    frmDischargeNotiifcattions.show();
}

function AS_FlexContainer_7d6ac45fb7e64ec7b6814961b7ad245b(eventobject, x, y) {
    frmEditProfile.show();
}

function AS_FlexContainer_81ae9b1cd5954d059dd679e59941a81f(eventobject) {
    return showAdmissionDetails2.call(this);
}

function AS_FlexContainer_8c8a73728365425898257e41f378c40f(eventobject) {
    frmAdmitForm.show();
}

function AS_FlexContainer_921cf4ed49b04535a7c76182b4f4b195(eventobject) {
    frmEditProfile.show();
}

function AS_FlexContainer_99422c28060d41a1af3ddaf6ae7fefef(eventobject, x, y) {
    frmConfigurationAlerts.show();
}

function AS_FlexContainer_9986e9e381eb4e1f925b80d6f5a8f45d(eventobject, x, y) {
    frmAdmitForm.show();
}

function AS_FlexContainer_action_select_clinic(eventobject, x, y) {
    return AS_FlexContainer_627d5a4635d74ac6b25de8bcbc9914fa(eventobject, x, y);
}

function AS_FlexContainer_627d5a4635d74ac6b25de8bcbc9914fa(eventobject, x, y) {
    return showClinicList.call(this);
}

function AS_FlexContainer_action_select_formType(eventobject, x, y) {
    return AS_FlexContainer_d197f2480f534774aaf67307793bb7b7(eventobject, x, y);
}

function AS_FlexContainer_d197f2480f534774aaf67307793bb7b7(eventobject, x, y) {
    return onClickSelectFormType.call(this);
}

function AS_FlexContainer_cbc88e48a3cc4f27a0b5377d7f9d2845(eventobject, x, y) {}

function AS_FlexContainer_d595c8f1dd744ea3acf1ae4f3847832a(eventobject) {
    frmDashBoard.show();
}

function AS_FlexContainer_e353ac3bb82a4188ab052efc5df59bb7(eventobject, x, y) {
    frmDischargeNotiifcattions.show();
}

function AS_FlexContainer_OnClick_Show_aditionalinfo(eventobject) {
    return AS_FlexContainer_9c5883a3adbd46c389fb90aed2856773(eventobject);
}

function AS_FlexContainer_9c5883a3adbd46c389fb90aed2856773(eventobject) {
    return showAditionalInfo.call(this);
}

function AS_FlexContainer_OnTouch_ShowAdmissionDetails(eventobject, x, y) {
    return AS_FlexContainer_d4289e604dfe4e1680b08aee38494b32(eventobject, x, y);
}

function AS_FlexContainer_d4289e604dfe4e1680b08aee38494b32(eventobject, x, y) {
    return showAdmissionDetails.call(this);
}

function AS_FlexContainer_showAditionalInfo(eventobject, x, y) {
    return AS_FlexContainer_68bf99f9a2784394bf4479863a60874e(eventobject, x, y);
}

function AS_FlexContainer_68bf99f9a2784394bf4479863a60874e(eventobject, x, y) {
    return showAditionalInfo.call(this);
}

function AS_FlexContainer_showAdmissionDetails2(eventobject, x, y) {
    return AS_FlexContainer_891431ecffbc452386695dcff95c1a64(eventobject, x, y);
}

function AS_FlexContainer_891431ecffbc452386695dcff95c1a64(eventobject, x, y) {
    return showAdmissionDetails2.call(this);
}

function AS_Form_c855ba4daa83417dae6275bf29b24715(eventobject) {
    return loadDashboard.call(this);
}

function AS_Form_Init_ShowAdmissionDetails(eventobject) {
    return AS_Form_7b02b282ee454740abece1e01cb5a37a(eventobject);
}

function AS_Form_7b02b282ee454740abece1e01cb5a37a(eventobject) {}

function AS_Image_07dc63fc506c47e68a61a0342336a248(eventobject, x, y) {
    return hamburger.call(this);
}

function AS_Image_135f77598bff44f1a4ae72051a36ceb6(eventobject, x, y) {
    return hamburger.call(this);
}

function AS_Image_993d122915ec4a00969b85f1d7e472a3(eventobject, x, y) {
    frmDashBoard.show();
}

function AS_Image_afbfe30c46e244ca8347b35c4f730a59(eventobject, x, y) {
    frmDashBoard.show();
}

function AS_Image_b8e76c6d5a8b411b8ddf2ad2f2616d56(eventobject, x, y) {
    return hamburger.call(this);
}

function AS_Image_bf3d0d614a314ed59c2edf991a82e40a(eventobject, x, y) {
    frmDashBoard.show();
}

function AS_Image_c18db5bb98264c638894dae9241f3a7f(eventobject, x, y) {
    return openMenu.call(this);
}

function AS_Image_c226a76a10924ed3afae8cbb637a8ddd(eventobject, x, y) {
    frmDashBoard.show();
}

function AS_Image_f693e9791388471283171e8401c19cea(eventobject, x, y) {
    return hamburger.call(this);
}

function AS_Image_onClick_ShowAdmissionDetails_AditionalInfo(eventobject, x, y) {
    return AS_Image_9d1bf6dfb3b148f1a8192e6f59e6eec2(eventobject, x, y);
}

function AS_Image_9d1bf6dfb3b148f1a8192e6f59e6eec2(eventobject, x, y) {
    return showAditionalInfo.call(this);
}

function AS_Image_OnTouch_ShowAdmissionDetails(eventobject, x, y) {
    return AS_Image_4c8f7523432947eba67b8087d4f4356c(eventobject, x, y);
}

function AS_Image_4c8f7523432947eba67b8087d4f4356c(eventobject, x, y) {
    return showAdmissionDetails.call(this);
}

function AS_Image_segment_showAditionalInfoRowDetails(eventobject, x, y) {
    return AS_Image_c232e524395940a8a73e1dc1430ae281(eventobject, x, y);
}

function AS_Image_c232e524395940a8a73e1dc1430ae281(eventobject, x, y) {
    return showAditionalInfoRowDetails.call(this);
}

function AS_Image_Touch_Email_alerts(eventobject, x, y) {
    return AS_Image_eedbb9fbdbc24cf59e8098c4990f69bf(eventobject, x, y);
}

function AS_Image_eedbb9fbdbc24cf59e8098c4990f69bf(eventobject, x, y) {
    return onTouchEmailAlerts.call(this);
}

function AS_Image_Touch_Notification_alerts(eventobject, x, y) {
    return AS_Image_610b9926e73b41c69ca61ee8a1bdacf2(eventobject, x, y);
}

function AS_Image_610b9926e73b41c69ca61ee8a1bdacf2(eventobject, x, y) {
    return onTouchNotificationAlerts.call(this);
}

function AS_Image_Touch_Text_alerts(eventobject, x, y) {
    return AS_Image_39bd0dd404a641ed9b10ad5a69ee8603(eventobject, x, y);
}

function AS_Image_39bd0dd404a641ed9b10ad5a69ee8603(eventobject, x, y) {
    return onTouchTextAlerts.call(this);
}

function AS_Label_2d2b38ea30bc4f928977703820b9ecbd(eventobject, x, y) {
    frmRegister.show();
}

function AS_Label_b1bbe7f7b3df4309bcd05404c686abe3(eventobject, x, y) {
    frmForgetPassword.show();
}

function AS_Label_fd03141f2f974b758b09f851cff2a5c1(eventobject, x, y) {
    popupTakeaction.show()
}

function AS_Label_OnTouchStart_SelectGenderFeMale(eventobject, x, y) {
    return AS_Label_6251f3853c3d4bebb3b0fff75e713d81(eventobject, x, y);
}

function AS_Label_6251f3853c3d4bebb3b0fff75e713d81(eventobject, x, y) {
    tapToSelectGenderFeMale.call(this);
    AS__6de8822e217f4e1a87614b09e72157ba(null);
}

function AS_Label_OnTouchStart_SelectGenderMale(eventobject, x, y) {
    return AS_Label_acdd31124b7b440783b623fd5c2ef0b0(eventobject, x, y);
}

function AS_Label_acdd31124b7b440783b623fd5c2ef0b0(eventobject, x, y) {
    tapToSelectGenderMale.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function AS_Label_OnTouchStart_Select_AdmitFormSuspectEbolaNO(eventobject, x, y) {
    return AS__0577968ac2964d3da988556b5dcf0bee(eventobject, x, y);
}

function AS__0577968ac2964d3da988556b5dcf0bee(eventobject, x, y) {
    tapToSelectInfectiousDiseaseQuestionnaireSuspectEbolaNO.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function AS_Label_OnTouchStart_Select_AdmitFormSuspectEbolaYes(eventobject, x, y) {
    return AS__f50604f9c95b417089b25351103d9244(eventobject, x, y);
}

function AS__f50604f9c95b417089b25351103d9244(eventobject, x, y) {
    tapToSelectInfectiousDiseaseQuestionnaireSuspectEbolaYes.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function AS_Label_OnTouchStart_Select_AdmitFormTravelledNO(eventobject, x, y) {
    return AS__80ae979ceaab4c07862076f7a0c061fa(eventobject, x, y);
}

function AS__80ae979ceaab4c07862076f7a0c061fa(eventobject, x, y) {
    tapToSelectInfectiousDiseaseQuestionnaireTravelledNo.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function AS_Label_OnTouchStart_Select_AdmitFormTravelledYes(eventobject, x, y) {
    return AS__e69cc64b83e54ec29e1a445c59c1abc6(eventobject, x, y);
}

function AS__e69cc64b83e54ec29e1a445c59c1abc6(eventobject, x, y) {
    tapToSelectInfectiousDiseaseQuestionnaireTravelledYes.call(this);
    AS_TextField_a511e27cdb9b40fdbe41098c1a435a26(null, null);
}

function AS_ListBox_action_onSelectItem(eventobject) {
    return AS_ListBox_9345a658d386424baa49f10cd05e8cbf(eventobject);
}

function AS_ListBox_9345a658d386424baa49f10cd05e8cbf(eventobject) {
    return showadmitFrom.call(this);
}

function AS_Segment_c264e622df944d8aaa0a69a38290adbe(eventobject, sectionNumber, rowNumber) {
    undefined.show();
}

function AS_Segment_Rowclick_admission_aditionalInfo_(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_0e35d914dec6467eb87b095b84d6373a(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_0e35d914dec6467eb87b095b84d6373a(eventobject, sectionNumber, rowNumber) {
    return showAditionalInfoRowDetails.call(this);
}

function AS_TabPane_95c60463e6fd42ceb3d98d38796ebcec(eventobject, currentindex, isexpanded) {
    return showadmitFrom.call(this);
}

function navigate_login_to_dashbaord(eventobject, x, y) {
    return AS_Button_0c4edb318b9c47e0ae5e4c0a73429d93(eventobject, x, y);
}

function AS_Button_0c4edb318b9c47e0ae5e4c0a73429d93(eventobject, x, y) {
    frmDashBoard.show();
}

function onClick_signIn(eventobject) {
    return AS_Button_d7fc02cd4fed4d7787cc597dcb3a01ff(eventobject);
}

function AS_Button_d7fc02cd4fed4d7787cc597dcb3a01ff(eventobject) {
    frmDashBoard.show();
}

function onTouchHamburgerAdmission(eventobject, x, y) {
    return AS_Image_3a3ed25d57a341029f1d783058727c84(eventobject, x, y);
}

function AS_Image_3a3ed25d57a341029f1d783058727c84(eventobject, x, y) {
    frmDashBoard.show();
}

function seg_Onrowclick_navigateto_admission(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_42e20e0f588b4ffaafce0428d554aad0(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_42e20e0f588b4ffaafce0428d554aad0(eventobject, sectionNumber, rowNumber) {
    undefined.show();
}

function setAdmissionata(eventobject) {
    return AS_Form_6d7772887d824c9ba29e40e4b0a0445f(eventobject);
}

function AS_Form_6d7772887d824c9ba29e40e4b0a0445f(eventobject) {
    return setSegDataAditionalInfo.call(this);
}