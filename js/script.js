/*   ------------------------------------------VIP POWER :- Kasun(leader),Thamali,Sahan,Mithila,Nuwan ----------------------------------- */
//form validation goes here
function checkPassword(){
	
	if(document.getElementById("pwd").value != document.getElementById("rpwd").value){
		
		alert("Passwords mismatched!");
		return false;
	}
	else{
		
		alert("You have successfully create VIP Account");
		return true;
	}
}
//reset password
function resetPassword(){
	
	if(document.getElementById("pwd").value != document.getElementById("rpwd").value){
		
		alert("Passwords mismatched!");
		return false;
	}
	else{
		
		alert("You have successfully Reset Password");
		return true;
	}
}
/*form submit button*/
function enableButton(){
	
	if(document.getElementById("check").checked && document.getElementById("check0").checked){
		document.getElementById("btn").disabled = false;
	}
	else{
		document.getElementById("btn").disabled = true;
	}
}
/*payment check buttons*/

// -------Payment Handling -----------

/*Enable or Disable checkboxes*/
function sure(){
	
	if(document.getElementById("check0").checked){
		document.getElementById("check").disabled = false;
		document.getElementById("check1").disabled = false;
		document.getElementById("check2").disabled = false;
		document.getElementById("btn").disabled = true;
	}
	else{
		document.getElementById("check").disabled = true;
		document.getElementById("check1").disabled = true;
		document.getElementById("check2").disabled = true;
		document.getElementById("btn").disabled = true;
	}
	
}

//if one check box cheked, others are disabled; button enable when checked and disable once unchecked
function disableCheckboxes(type){
	if(type == "check"){
		if(document.getElementById("check").checked){
			document.getElementById("check1").disabled = true;
			document.getElementById("check2").disabled = true;
			document.getElementById("btn").disabled = false;
		}
		else{
			document.getElementById("check1").disabled = false;
			document.getElementById("check2").disabled = false;
			document.getElementById("btn").disabled = true;
		}	
	}
	else if(type == "check1"){
		if(document.getElementById("check1").checked){
			document.getElementById("check").disabled = true;
			document.getElementById("check2").disabled = true;
			document.getElementById("btn").disabled = false;
		}
		else{
			document.getElementById("check").disabled = false;
			document.getElementById("check2").disabled = false;
			document.getElementById("btn").disabled = true;
		}
	}
	else{
		if(document.getElementById("check2").checked){
			document.getElementById("check").disabled = true;
			document.getElementById("check1").disabled = true;
			document.getElementById("btn").disabled = false;
		}
		else{
			document.getElementById("check").disabled = false;
			document.getElementById("check1").disabled = false;
			document.getElementById("btn").disabled = true;
		}
	}
	
}
//unexpected selection of two or three checks
function error(){
	if(document.getElementById("check").checked && document.getElementById("check1").checked){
		alert("You cannot select two or more");
		document.getElementById("btn").disabled = true;
	}
	else if(document.getElementById("check").checked && document.getElementById("check2").checked){
		alert("You cannot select two or more");
		document.getElementById("btn").disabled = true;
	}
	else if(document.getElementById("check1").checked && document.getElementById("check2").checked){
		alert("You cannot select two or more");
		document.getElementById("btn").disabled = true;
	}
	else if(document.getElementById("check").checked && document.getElementById("check1").checked && document.getElementById("check2").checked){
		alert("You cannot select two or more");
		document.getElementById("btn").disabled = true;
	}
	else{
		document.getElementById("btn").disabled = false;
	}
}

/*delivery page goes here*/

//enable checkboxes
function enableHomeCourier(){
	if(document.getElementById("check0").checked){
		document.getElementById("check").disabled = false;
		document.getElementById("check1").disabled = false;
		
		
	}
	else{
		document.getElementById("check").disabled = true;
		document.getElementById("check1").disabled = true;

	}
	
}
//mandatory buttons checking 
function delivery(){
	
	if(document.getElementById("check0").checked && document.getElementById("check").checked || document.getElementById("check1").checked) {
		document.getElementById("btn").disabled = false;
	}
	else{
		document.getElementById("btn").disabled = true;
	}
}
//select one of checkbox not both
function disableDelivery(deliverType){
	if(deliverType == "check"){
		if(document.getElementById("check").checked){
			document.getElementById("check1").disabled = true;
		}
		else{
		document.getElementById("check1").disabled = false;
		}
	}
	else{
		if(document.getElementById("check1").checked){
			document.getElementById("check").disabled = true;
		}
		else{
			document.getElementById("check").disabled = false;
		}
	}
	
}
