
	//business logic
	
function beepBoop(countTo){
		let array= [];
	for(index = 0; index <= countTo; index ++) {
			let x = index.toString();
			if (x.includes("3")) {
				array.push("Won't you be my neighbor?");
			} else if (x.includes("2")) {
		 	array.push("Boop!");
			} else if (x.includes("1")) {
			array.push("Beep!");	
			} else {
				array.push(index);
			}
		}
			return array;
	}
	//UI logic
$(document).ready(function(){
	$("#formOne").submit(function(event){
		event.preventDefault();
		$("#results").show();
		const countTo = parseInt($("#countingTo").val());
		const results = beepBoop(countTo);
		$("#results").text(results);
	});
});





