function showSupportGeneral(){
  frmSupport.generalFeedbackTabContaine.isVisible = true;
  frmSupport.reportIssueTabContainer.isVisible = false; 
}

function showSupportReportAnIssue(){
  frmSupport.generalFeedbackTabContaine.isVisible = false;
  frmSupport.reportIssueTabContainer.isVisible = true; 
}

function resetSupportReportIssueForm(){
  frmSupport.reportSelectModuleListBox.selectedKeys = ["0"];
  frmSupport.TextAreaReportIssue.text = "";
  
  frmSupport.reportBowserList.selectedKeys = ["0"];
  frmSupport.TextAreaReportExperience.text = "";
  frmSupport.TextAreaReportSteps.text = "";
}


function resetSupportGeneralForm(){
  
  frmSupport.GeneralSelectModuleListBox.selectedKeys = ["0"];
  frmSupport.TextAreaGeneralFeedBack.text = ""; 
}

