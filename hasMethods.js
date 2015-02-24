var input1 = ["func1", "func2", "func3"];
var input2 = "func1";

var miObj = {
	func1 : function (param){},
	func2 : function (param){},
	func3 : 1
}

var hasMethods = function checkMethod(input, object){
	temp = 0;
	if(Object.prototype.toString.call(input) === "[object Array]"){
		input.forEach(function(value,index){
		if(typeof object[value] === "function") temp++;
	});
	} 
	else if (Object.prototype.toString.call(input) === "[object String]"){
		if(typeof object[input] === "function") return console.log("Posee la funcion");
	}

	if(temp == input.length) return console.log("Posee todas las funciones");
	else console.log("No posee todas las funciones");
}

hasMethods(input1, miObj);

hasMethods(input2, miObj);
