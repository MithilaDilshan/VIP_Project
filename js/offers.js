function readMore(name){
	confirm("Do you want to read more! ");
}

function priceList(name){
	if(name == "list1"){
		document.getElementById("para1").innerHTML="<del>Rs.600.00</del><br>Rs.500.00";
	}else if(name == "list2"){
		document.getElementById("para2").innerHTML="<del>Rs.250.00</del><br>Rs.200.00";
	}else if(name == "list3"){
		document.getElementById("para3").innerHTML="<del>Rs.500.00</del><br>Rs.410.00";
	}else if(name == "list4"){
		document.getElementById("para4").innerHTML="<del>Rs.350.00</del><br>Rs.300.00";
	}else if(name == "list5"){
		document.getElementById("para5").innerHTML="<del>Rs.1250.00</del><br>Rs.1100.00";
	}else{
		document.getElementById("para6").innerHTML="<del>Rs.800.00</del><br>Rs.700.00";
	}
}