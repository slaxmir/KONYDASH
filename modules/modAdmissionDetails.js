function showAdmissionDetails(){
 
  if(frmAdmission.SegmentAdmissionDetails.isVisible){
     frmAdmission.SegmentAdmissionDetails.isVisible = false; 
    frmAdmission.imgCollapseArrowAdmissionDetails.src = "arrow.png";
    frmAdmission.flexContainerAdmissionDetailsBlock.skin = "sknAdmissionDetailsDynamic";
  }else{
     frmAdmission.SegmentAdmissionDetails.isVisible = true; 
      frmAdmission.imgCollapseArrowAdmissionDetails.src = "activeicon.png";
    frmAdmission.flexContainerAdmissionDetailsBlock.skin = "sknAdmissionDetailsDynamicWhitebg";
  } 
}
function showshowVitalSigns(){
   var pForm = kony.application.getCurrentForm();
  if(frmAdmission.flexContainerShowVitalSigns.isVisible){
    frmAdmission.flexContainerShowVitalSigns.isVisible = false; 
     frmAdmission.imgCollapseArrowVitalSignals.src = "arrow.png";
     frmAdmission.flexContainerVitalSignalsBlock.skin = "sknAdmissionDetailsDynamic";
  }else{
     frmAdmission.flexContainerShowVitalSigns.isVisible = true; 
     frmAdmission.imgCollapseArrowVitalSignals.src = "activeicon.png";
     frmAdmission.flexContainerVitalSignalsBlock.skin = "sknAdmissionDetailsDynamicWhitebg";
  } 
} 
function showshowSepsisScreening(){
   var pForm = kony.application.getCurrentForm();
  if(frmAdmission.flexContainerSepsisScreeing.isVisible){
     frmAdmission.flexContainerSepsisScreeing.isVisible = false; 
     frmAdmission.imgCollapseArrowSepsisScreening.src = "arrow.png";
     frmAdmission.flexContainerSepsisScreeingBlock.skin = "sknAdmissionDetailsDynamic";
  }else{
     frmAdmission.flexContainerSepsisScreeing.isVisible = true; 
     frmAdmission.imgCollapseArrowSepsisScreening.src = "activeicon.png";
     frmAdmission.flexContainerSepsisScreeingBlock.skin = "sknAdmissionDetailsDynamicWhitebg";
  } 
}
function showAddtionalinfo(){
   var pForm = kony.application.getCurrentForm();
  if(frmAdmission.flexContainerAdmissionShowAdditionalInfo.isVisible){
     frmAdmission.flexContainerAdmissionShowAdditionalInfo.isVisible = false; 
     frmAdmission.imgCollapseArrowAdditonalInfo.src = "arrow.png";
     frmAdmission.flexContainerAdditionalInfoBlock.skin = "sknAdmissionDetailsDynamic";
  }else{
    frmAdmission.flexContainerAdmissionShowAdditionalInfo.isVisible = true; 
    frmAdmission.imgCollapseArrowAdditonalInfo.src = "activeicon.png";
    frmAdmission.flexContainerAdditionalInfoBlock.skin = "sknAdmissionDetailsDynamicWhitebg";
  } 
}


function admissionDetailsInit(){
  
   frmAdmission.SegmentAdmissionDetails.isVisible = true; 
      frmAdmission.imgCollapseArrowAdmissionDetails.src = "activeicon.png";
    frmAdmission.flexContainerAdmissionDetailsBlock.skin = "sknAdmissionDetailsDynamicWhitebg";
 
  
   frmAdmission.flexContainerShowVitalSigns.isVisible = false; 
   frmAdmission.imgCollapseArrowVitalSignals.src = "arrow.png";
   frmAdmission.flexContainerVitalSignalsBlock.skin = "sknAdmissionDetailsDynamic";

   frmAdmission.flexContainerSepsisScreeing.isVisible = false; 
   frmAdmission.imgCollapseArrowSepsisScreening.src = "arrow.png";
   frmAdmission.flexContainerSepsisScreeingBlock.skin = "sknAdmissionDetailsDynamic";

   frmAdmission.flexContainerAdmissionShowAdditionalInfo.isVisible = false; 
   frmAdmission.imgCollapseArrowAdditonalInfo.src = "arrow.png";
   frmAdmission.flexContainerAdditionalInfoBlock.skin = "sknAdmissionDetailsDynamic";
 
  
}


function showAditionalInfoRowDetails(){
   var pForm = kony.application.getCurrentForm();
 
  /*if(pForm.tmplSegFlexContainerAdmissionSub2.isVisible){
     pForm.tmplSegFlexContainerAdmissionSub2.isVisible = false; 
     pForm.tmplSegAdmissionAditionalInfoCollapseArrow.src = "collapseclose.png";
    }else{
     pForm.tmplSegFlexContainerAdmissionSub2.isVisible = true; 
     pForm.tmplSegAdmissionAditionalInfoCollapseArrow.src = "collapseopenicon.png";
    } */
}
/**function showAdmissionDetailsInit(){
   var pForm = kony.application.getCurrentForm();
  if(!pForm.tmplSegFlexContainerAdmissionSub2.isVisible){
     pForm.tmplSegFlexContainerAdmissionSub2.isVisible = true; 
  }else{
     pForm.tmplSegFlexContainerAdmissionSub2.isVisible = false; 
  } 
}*/

function setSegDataAditionalInfo(){
  
  admissionDetailsInit();

  frmAdmission.SegmentAditionalInfo.widgetDataMap = {
  	tmplSegAdmissionAditionalInfolabelDate:"tmplSegAdmissionAditionalInfolabelDate",    
	tmplSegAdmissionAditionalInfolabelUser:"tmplSegAdmissionAditionalInfolabelUser",
	tmplSegAdmissionAditionalInfolabelStatus:"tmplSegAdmissionAditionalInfolabelStatus",
	tmplSegAdmissionAditionalInfolabelActionNote:"tmplSegAdmissionAditionalInfolabelActionNote",
	tmplSegAdmissionAditionalInfolabeValueRevoke:"tmplSegAdmissionAditionalInfolabeValueRevoke",
	tmplSegAdmissionAditionalInfolabeRevoke:"tmplSegAdmissionAditionalInfolabeRevoke"
  };
  frmAdmission.SegmentAditionalInfo.setData([
    {tmplSegAdmissionAditionalInfolabelDate:"2016-11-2  04:28PM",    
	tmplSegAdmissionAditionalInfolabelUser:"Phani",
	tmplSegAdmissionAditionalInfolabelStatus:"Pending",
	tmplSegAdmissionAditionalInfolabelActionNote:"PhanidraED",
	tmplSegAdmissionAditionalInfolabeValueRevoke:{text:"Revoke"},
	tmplSegAdmissionAditionalInfolabeRevoke:"Revoke"
 },
   {
    tmplSegAdmissionAditionalInfolabelDate:"2016-11-2  04:28PM",    
	tmplSegAdmissionAditionalInfolabelUser:"Phani",
	tmplSegAdmissionAditionalInfolabelStatus:"Pending",
	tmplSegAdmissionAditionalInfolabelActionNote:"PhanidraED",
	tmplSegAdmissionAditionalInfolabeValueRevoke:{text:"Revoke value"},
	tmplSegAdmissionAditionalInfolabeRevoke:"Revoke"
 
     
   },
   {
    tmplSegAdmissionAditionalInfolabelDate:"2016-11-2  04:28PM",    
	tmplSegAdmissionAditionalInfolabelUser:"Phani",
	tmplSegAdmissionAditionalInfolabelStatus:"Pending",
	tmplSegAdmissionAditionalInfolabelActionNote:"PhanidraED",
	tmplSegAdmissionAditionalInfolabeValueRevoke:{text:"Revoke value"},
	tmplSegAdmissionAditionalInfolabeRevoke:"Revoke"
 
   },
   {
    tmplSegAdmissionAditionalInfolabelDate:"2016-11-2  04:28PM",    
	tmplSegAdmissionAditionalInfolabelUser:"Phani",
	tmplSegAdmissionAditionalInfolabelStatus:"Pending",
	tmplSegAdmissionAditionalInfolabelActionNote:"PhanidraED",
	tmplSegAdmissionAditionalInfolabeValueRevoke:{text:"Revoke value"},
	tmplSegAdmissionAditionalInfolabeRevoke:"Revoke"
 
   },
   {
    tmplSegAdmissionAditionalInfolabelDate:"2016-11-2  04:28PM",    
	tmplSegAdmissionAditionalInfolabelUser:"Phani",
	tmplSegAdmissionAditionalInfolabelStatus:"Pending",
	tmplSegAdmissionAditionalInfolabelActionNote:"PhanidraED",
	tmplSegAdmissionAditionalInfolabeValueRevoke:{text:"Revoke value"},
	tmplSegAdmissionAditionalInfolabeRevoke:"Revoke"
 
   }
  ]);
  
}
function onClickshowAdditionalInfoRowAction(){
  //console.log("console.log");
//  stdout("stdout");
//  kony.print("in onClickshowAdditionalInfoRowAction");
	var obj = frmAdmission.SegmentAditionalInfo.selectedItems;
 // kony.print(obj);
  var obj1 = frmAdmission.SegmentAditionalInfo.selectedIndices;
 // kony.print(obj1);
   var obj2 = frmAdmission.SegmentAditionalInfo.selectedRowIndices;
 // kony.print(obj2);
   var obj3 = frmAdmission.SegmentAditionalInfo.selectedRowItems;
 // kony.print(obj3);
	if(obj[0].tmplSegAdmissionAditionalInfolabeRevoke.isVisible){
      obj[0].tmplSegAdmissionAditionalInfolabeRevoke={isVisible:false};
    //	obj[0].tmplSegAdmissionAditionalInfolabeRevoke.isVisible = false;
      //	obj[0].tmplSegAdmissionAditionalInfoCollapseArrow.src = "collapseclose.png";
	}else{
       obj[0].tmplSegAdmissionAditionalInfolabeRevoke={isVisible:true};
    //  obj[0].tmplSegAdmissionAditionalInfolabeRevoke.isVisible = true;
     // obj[0].tmplSegAdmissionAditionalInfoCollapseArrow.src = "collapseopenicon.png";
	}
   
  
}