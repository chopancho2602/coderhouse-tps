var Auto1 = {
	año : 1991,
	DNI : 36566999,
	marca : "Renault",
	acelerar : function(){
		console.log(this.velMax * 2);
		return this.velMax * 2;
	}

};

Auto1.velMax = 160;

var Auto2 = {
	año : 1993,
	DNI : 36123456,
	marca : "Fiat",
	acelerar : function(){
		console.log(this.velMax * 2);
		return this.velMax * 2;
	}

};

Auto2.velMax = 180;

var Auto3 = {
	año : 2014,
	DNI : 25890453,
	marca : "BMW",
	acelerar : function(){
		console.log(this.velMax * 2);
		return this.velMax * 2;
	}

};

Auto3.velMax = 200;

var Auto4 = {
	año : 2007,
	DNI : 23000123,
	marca : "Audi",
	acelerar : function(){
		console.log(this.velMax * 2);
		return this.velMax * 2;
	}

};

Auto4.velMax = 210;

Auto1.acelerar();
Auto2.acelerar();
Auto3.acelerar();
Auto4.acelerar();


var Persona1 = {
	nombre : "Jose",
	DNI: 36566991,
}
var Persona2 = {
	nombre : "Tito",
	DNI: 36123456,
}
var Persona3 = {
	nombre : "Carlo",
	DNI: 25890453,
}
var Persona4 = {
	nombre : "Juan",
	DNI: 23000123,
}

var arrayAutos = [];
arrayAutos.push(Auto1);
arrayAutos.push(Auto2);
arrayAutos.push(Auto3);
arrayAutos.push(Auto4);

var arrayPersonas = [];
arrayPersonas.push(Persona1);
arrayPersonas.push(Persona2);
arrayPersonas.push(Persona3);
arrayPersonas.push(Persona4);

var matchearAutos = function matchearAutos(array1, array2){
	array1.forEach(function(value1, index1){
 		array2.forEach(function(value2, index2){
 			if(array1[index1].DNI === array2[index2].DNI){
 				console.log(array1[index1].nombre + " tiene un coche " + array2[index2].marca);
 			}
 		});
	});
}

matchearAutos(arrayPersonas, arrayAutos);

var matchDNI = function matchDNI(DNI, array1, array2){
	array1.forEach(function(value1, index1){
		if(array1[index1].DNI === DNI){
			console.log("Se encontro persona con DNI " + DNI);
	 	}
	 });

	 array2.forEach(function(value2, index2){
		if(array2[index2].DNI === DNI){
			console.log("El dueño del conche " + array2[index2].marca + " tiene DNI " + DNI);
		}else console.log("No se encontro dueño de coche con DNI");
	});
}
matchDNI(23000123, arrayPersonas, arrayAutos);