var setmentManageAlertsDirectAdmisssionData = [];
var segmentManageAlertsEDReferralData = [];
var segmentManageAlertsPsychAdmissionData = [];



function setDataSetmentManageAlertsDirectAdmission(){
  frmConfigurationAlerts.SegmentDirectAdmission.setWidgetDataMap = {labelManageAlertsType:"labelManageAlertsType",
                                                      btnManageAlertsEmail:"btnManageAlertsEmail",
                                                      btnManageAlertText:"btnManageAlertText",
                                                      btnManageAlertNotification:"btnManageAlertNotification"};
  setmentManageAlertsDirectAdmisssionData = 
    				[
    						{
                              labelManageAlertsType:{text:"Bed Unavailable"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Bed Available Pending Discharges"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Physician Accept"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"SAC Auto Accept"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Physician Denied"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Bed Assigned"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Arrived"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },  
    						{
                              labelManageAlertsType:{text:"Patient Noshow"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Discharged"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Re-Direct to ED"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertDirectAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertDirectAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertDirectAdmissionNotification}
                            }   
  					];
	frmConfigurationAlerts.SegmentDirectAdmission.setData(setmentManageAlertsDirectAdmisssionData);
	
}
function onClickManageAlertDirectAdmissionEmail(){
  var index = frmConfigurationAlerts.SegmentDirectAdmission.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentDirectAdmission.selectedItems;
  var skin = rowObj[0].btnManageAlertsEmail.skin;
  if(skin == "sknBtnManageAlerts"){
    rowObj[0].btnManageAlertsEmail.skin = "sknBtnManageAlertsActive";
  }else{
    rowObj[0].btnManageAlertsEmail.skin = "sknBtnManageAlerts";
  }  
  frmConfigurationAlerts.SegmentDirectAdmission.setDataAt(rowObj[0],index);   
}
function onClickManageAlertDirectAdmissionText(){
  var index = frmConfigurationAlerts.SegmentDirectAdmission.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentDirectAdmission.selectedItems;
  var skin = rowObj[0].btnManageAlertText.skin;
  if(skin == "sknBtnManageAlertsText"){
    rowObj[0].btnManageAlertText.skin = "sknBtnManageAlertsTexActive";
  }else{
    rowObj[0].btnManageAlertText.skin = "sknBtnManageAlertsText";
  }  
  frmConfigurationAlerts.SegmentDirectAdmission.setDataAt(rowObj[0],index);   
}
function onClickManageAlertDirectAdmissionNotification(){
  var index = frmConfigurationAlerts.SegmentDirectAdmission.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentDirectAdmission.selectedItems;
  var skin = rowObj[0].btnManageAlertNotification.skin;
  if(skin == "sknBtnManageAlertsNotification"){
    rowObj[0].btnManageAlertNotification.skin = "sknBtnManageAlertsNotificationActive";
  }else{
    rowObj[0].btnManageAlertNotification.skin = "sknBtnManageAlertsNotification";
  }  
  frmConfigurationAlerts.SegmentDirectAdmission.setDataAt(rowObj[0],index);   
}



function setDataSetmentManageAlertsEDReferral(){
  frmConfigurationAlerts.SegmentEDReferral.setWidgetDataMap = {labelManageAlertsType:"labelManageAlertsType",
                                                      btnManageAlertsEmail:"btnManageAlertsEmail",
                                                      btnManageAlertText:"btnManageAlertText",
                                                      btnManageAlertNotification:"btnManageAlertNotification"};
  segmentManageAlertsEDReferralData = 
    				[
    						{
                              labelManageAlertsType:{text:"Bed Unavailable"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Bed Available Pending Discharges"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Physician Accept"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"SAC Auto Accept"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Physician Denied"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Bed Assigned"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Arrived"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Noshow"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Discharged"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Re-Direct to ED"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertEDReferralEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertEDReferralText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertEDReferralNotification}
                            }
  					];
	frmConfigurationAlerts.SegmentEDReferral.setData(segmentManageAlertsEDReferralData);
	
}

function onClickManageAlertEDReferralEmail(){
  var index = frmConfigurationAlerts.SegmentEDReferral.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentEDReferral.selectedItems;
  var skin = rowObj[0].btnManageAlertsEmail.skin;
  if(skin == "sknBtnManageAlerts"){
    rowObj[0].btnManageAlertsEmail.skin = "sknBtnManageAlertsActive";
  }else{
    rowObj[0].btnManageAlertsEmail.skin = "sknBtnManageAlerts";
  }  
  frmConfigurationAlerts.SegmentEDReferral.setDataAt(rowObj[0],index);   
}
function onClickManageAlertEDReferralNotification(){
  var index = frmConfigurationAlerts.SegmentEDReferral.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentEDReferral.selectedItems;
  var skin = rowObj[0].btnManageAlertNotification.skin;
  if(skin == "sknBtnManageAlertsNotification"){
    rowObj[0].btnManageAlertNotification.skin = "sknBtnManageAlertsNotificationActive";
  }else{
    rowObj[0].btnManageAlertNotification.skin = "sknBtnManageAlertsNotification";
  }  
  frmConfigurationAlerts.SegmentEDReferral.setDataAt(rowObj[0],index);   
}
function onClickManageAlertEDReferralText(){
  var index = frmConfigurationAlerts.SegmentEDReferral.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentEDReferral.selectedItems;
  var skin = rowObj[0].btnManageAlertText.skin;
  if(skin == "sknBtnManageAlertsText"){
    rowObj[0].btnManageAlertText.skin = "sknBtnManageAlertsTexActive";
  }else{
    rowObj[0].btnManageAlertText.skin = "sknBtnManageAlertsText";
  }  
  frmConfigurationAlerts.SegmentEDReferral.setDataAt(rowObj[0],index);   
}


function setDataSetmentManageAlertsPsychAdmission(){
  frmConfigurationAlerts.SegmentPsychAdmission.setWidgetDataMap = {labelManageAlertsType:"labelManageAlertsType",
                                                      btnManageAlertsEmail:"btnManageAlertsEmail",
                                                      btnManageAlertText:"btnManageAlertText",
                                                      btnManageAlertNotification:"btnManageAlertNotification"};
  segmentManageAlertsPsychAdmissionData = 
    				[
    						{
                              labelManageAlertsType:{text:"Bed Unavailable"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Bed Available Pending Discharges"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Physician Accept"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"SAC Auto Accept"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Physician Denied"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Bed Assigned"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Arrived"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Noshow"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Patient Discharged"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            },
    						{
                              labelManageAlertsType:{text:"Re-Direct to ED"},
                              btnManageAlertsEmail:{skin:"sknBtnManageAlerts",onClick:onClickManageAlertPsychAdmissionEmail},
                           	  btnManageAlertText:{skin:"sknBtnManageAlertsText",onClick:onClickManageAlertPsychAdmissionText},
                              btnManageAlertNotification:{skin:"sknBtnManageAlertsNotification",onClick:onClickManageAlertPsychAdmissionNotification}
                            }
  					];
	frmConfigurationAlerts.SegmentPsychAdmission.setData(segmentManageAlertsPsychAdmissionData);
	
}
function onClickManageAlertPsychAdmissionEmail(){
  var index = frmConfigurationAlerts.SegmentPsychAdmission.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentPsychAdmission.selectedItems;
  var skin = rowObj[0].btnManageAlertsEmail.skin;
  if(skin == "sknBtnManageAlerts"){
    rowObj[0].btnManageAlertsEmail.skin = "sknBtnManageAlertsActive";
  }else{
    rowObj[0].btnManageAlertsEmail.skin = "sknBtnManageAlerts";
  }  
  frmConfigurationAlerts.SegmentPsychAdmission.setDataAt(rowObj[0],index);   
}
function onClickManageAlertPsychAdmissionText(){
  var index = frmConfigurationAlerts.SegmentPsychAdmission.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentPsychAdmission.selectedItems;
  var skin = rowObj[0].btnManageAlertText.skin;
  if(skin == "sknBtnManageAlertsText"){
    rowObj[0].btnManageAlertText.skin = "sknBtnManageAlertsTexActive";
  }else{
    rowObj[0].btnManageAlertText.skin = "sknBtnManageAlertsText";
  }  
  frmConfigurationAlerts.SegmentPsychAdmission.setDataAt(rowObj[0],index);   
}
function onClickManageAlertPsychAdmissionNotification(){
  var index = frmConfigurationAlerts.SegmentPsychAdmission.selectedIndex[1];
  var rowObj = frmConfigurationAlerts.SegmentPsychAdmission.selectedItems;
  var skin = rowObj[0].btnManageAlertNotification.skin;
  if(skin == "sknBtnManageAlertsNotification"){
    rowObj[0].btnManageAlertNotification.skin = "sknBtnManageAlertsNotificationActive";
  }else{
    rowObj[0].btnManageAlertNotification.skin = "sknBtnManageAlertsNotification";
  }  
  frmConfigurationAlerts.SegmentPsychAdmission.setDataAt(rowObj[0],index);   
}