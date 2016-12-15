function generateCaptchRegistration(){
	var txtRandom = "";
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(var i=0; i<5;i++){
		txtRandom += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }
   frmRegister.LabelCaptchaRegistration.text = txtRandom;
}

function resetRegisterForm(){
  frmRegister.TextFieldRegFirstName.text = "";
  frmRegister.TextFieldRegLastName.text = "";
  frmRegister.TextFieldRegEmailId.text = "";
  frmRegister.TextFieldRegUserName.text = "";
  frmRegister.TextFieldRegCaptcha.text = "";
  frmRegister.ImageCheckboxRegister.src = "uncheck";
  frmRegister.RadioButtonGroupRegWork.selectedKeys =  ["0"];
  
}

function checkBoxRegister(){
    var imagesrc = frmRegister.ImageCheckboxRegister.src;
    if(imagesrc == "uncheck"){
      	frmRegister.ImageCheckboxRegister.src = "checked";
    }else{
		frmRegister.ImageCheckboxRegister.src = "uncheck";
	}
  
}

function submitRegistrationForm(){
  var currentForm = kony.application.getCurrentForm();
  var temp = null;
  
  if((currentForm.TextFieldRegFirstName.text == temp) ||
    	(currentForm.TextFieldRegLastName.text == temp)||
    	(currentForm.TextFieldRegEmailId.text == temp)||
    	(currentForm.TextFieldRegUserName.text == temp) ||
    	(currentForm.TextFieldRegCaptcha.text == temp)){
    alert("Please fille all the feilds");
  }if((currentForm.TextFieldRegFirstName.text != temp && currentForm.TextFieldRegFirstName.text == "") ||
    	(currentForm.TextFieldRegLastName.text != temp && currentForm.TextFieldRegLastName.text == "")||
    	(currentForm.TextFieldRegEmailId.text != temp && currentForm.TextFieldRegEmailId.text == "")||
    	(currentForm.TextFieldRegUserName.text != temp && currentForm.TextFieldRegUserName.text == "") ||
    	(currentForm.TextFieldRegCaptcha.text != temp && currentForm.TextFieldRegCaptcha.text == "")){
    alert("Please fille all the feilds");
  }else if (currentForm.ImageCheckboxRegister.src != "checked"){
    alert("Please tick the check box");
  }else if ((currentForm.TextFieldRegCaptcha.text != currentForm.LabelCaptchaRegistration.text )){
	alert("Captcha is not valid");
  }else{
    resetRegisterForm();
    alert("Submitted successfully");
  }
}