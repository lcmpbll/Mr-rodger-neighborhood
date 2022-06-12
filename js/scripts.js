
	//business logic
	
function beepBoop(countTo){
		let array= [];
	
	for(index = 0; index <= countTo; index +=1){
			
			let x = [index].toString();
			if (x.includes("3")) {
				array.push("Won't you be my neighbor?");
			// } else if (x.includes("2")) {
			// 	array.push("Boop!");
			
			}else {
				array.push([index])
			}
			console.log(array);
			return array;
			
			// for (let index = 0; index < array.length; index ++) {
			
				// let arrayFirstSlice = array.slice(0, index -1)
				// let arrayLastSlice = array.slice(index +1, array.length);
				// arrayNeighbor.push(arrayFirstSlice.join(",") + "Won't you be my neighbor" + arrayLastSlice.join(""));
				
		}
	}
			// if (array2.includes(arrayNeighbor)) {
			// 	let arrayFirstSlice = arrayNeighbor.slice(0, index -1);
			// 	let arrayLastSlice = arrayNeighbor.slice(index +1, arrayNeighbor.length);
			// 	arrayBoop.push(arrayFirstSlice.join(",") + "Boop!" + arrayLastSlice.join(""));
			// }
			// if (array1.includes(arrayBoop)) {
			// 	let arrayFirstSlice = arrayBoop.slice(0, index -1);
			// 	let arrayLastSlice = arrayBoop.slice(index +1, arrayBoop.length);
			// 	finalArray.push(arrayFirstSlice.join(",") + "Beep!" + arrayLastSlice.join(""));
			// }
		



			
			
	
 
	//UI logic
$(document).ready(function(){
	$("#formOne").submit(function(event){
		event.preventDefault();
		$("#results").show();
		const countTo = parseInt($("#countingTo").val());
		const results = beepBoop(countTo);
		$("#results").append(results+"<br>");
	});
});






