function readMore(name){
	confirm("Do you want to read more! ");
}

function priceList(name){
	if(name == "list1"){
		document.getElementById("para1").innerHTML="Rs.600.00";
	}else if(name == "list2"){
		document.getElementById("para2").innerHTML="Rs.400.00";
	}else if(name == "list3"){
		document.getElementById("para3").innerHTML="Rs.500.00";
	}else if(name == "list4"){
		document.getElementById("para4").innerHTML="Rs.800.00";
	}else if(name == "list5"){
		document.getElementById("para5").innerHTML="Rs.1200.00";
	}else{
		document.getElementById("para6").innerHTML="Rs.4500.00";
	}
}