
	//business logic
	
	function beepBoop(countTo){
		let array= [];
		let array1 = [1];
		let array2 = [2];
		let array3 = [3];
		let arrayNeighbor = []
		let arrayBoop = []
		let finalArray = [];
		for(index = 0; index <= countTo; index +=1){
			array.push(index);
			}
			for (let index = 0; index < array.length; index ++) {
				if (array3.includes(array)) {
					let arrayFirstSlice = array.slice(0, index -1)
					let arrayLastSlice = array.slice(index +1, array.length);
						arrayNeighbor.push(arrayFirstSlice.join(",") + "Won't you be my neighbor" + arrayLastSlice.join(""));
				
			}
			if (array2.includes(arrayNeighbor)) {
				let arrayFirstSlice = arrayNeighbor.slice(0, index -1);
				let arrayLastSlice = arrayNeighbor.slice(index +1, arrayNeighbor.length);
				arrayBoop.push(arrayFirstSlice.join(",") + "Boop!" + arrayLastSlice.join(""));
			}
			if (array1.includes(arrayBoop)) {
				let arrayFirstSlice = arrayBoop.slice(0, index -1);
				let arrayLastSlice = arrayBoop.slice(index +1, arrayBoop.length);
				finalArray.push(arrayFirstSlice.join(",") + "Beep!" + arrayLastSlice.join(""));
			}
			return finalArray;

			}

			
			
	}
 
	//UI logic
$(document).ready(function(){
	$("#formOne").submit(function(event){
		event.preventDefault;
		$("#results").show();
		const countTo = parseInt($("#countingTo").val());
		const results = beepBoop(countTo);
		$("#results").append(results+"<br>");
	});
});






