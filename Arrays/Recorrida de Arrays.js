var needed = ["a", "b", "c", "d"];

var have = [
	[1, "b", 3, "d"],
	["a", "b", "c", "d"],
	["Hola ", "Mundo!"]
];

have.forEach(function(value, index, array)
{
	var temp = 0;
	if(value.length == needed.length){
		/*for (var i = 0; i < value.length; i++) {
			if(value[i]===needed[i]) temp++;
			else break;
		};*/
		value.forEach(function(value, index, array){
			if(array[index] === needed[index]) temp++;
			else return undefined;
		});
		console.log("temp: " + temp);
		if(temp == value.length){
			temp = 0;
			console.log("El valor necesitado se encuenta en el lugar " + index);
			console.log("y equivale a [" + value + "]");
			return value;
		}
		else console.log("No existen esos elementos");

	}else{
		console.log("No existen esos elementos");
	}
});

///////////////////7
var input = [
	[1, 2, 3, 4],
	["Hola ", "Mundo"],
	["!", 5]
];
input.forEach(function(value, index, array){
	for (var i = 0; i < value.length; i++) {
		if(typeof value[i] === "string") console.log(value[i] + "(en array numero " + index + ")");
	};
});