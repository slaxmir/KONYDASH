function showSupportGeneral() {
    var pForm = kony.application.getCurrentForm();
    pForm.flxScreolGeneralFeedBack.isVisible = true;
    pForm.CopyflxScreollReportAnIssue.isVisible = false;
}

function showSupportReportAnIssue() {
    var pForm = kony.application.getCurrentForm();
    pForm.CopyflxScreollReportAnIssue.isVisible = true;
    pForm.flxScreolGeneralFeedBack.isVisible = false;
}