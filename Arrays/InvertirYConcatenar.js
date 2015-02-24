var arr1 = ["a", "b", "c"];
var arr2 = ["x", "y", "z"];

////////////con foreach
var invertirYConcatenarArrays = function(arr1, arr2){
	var tempArray = [];
	invertirArray(arr1).forEach(function(value, index){
		tempArray.push(value);
	})
	invertirArray(arr2).forEach(function(value, index){
		tempArray.push(value);
	})
	return tempArray;
}

var invertirArray = function(arr){
	var temp = 1;
	var tempArray = [];

	arr.forEach(function(value, index){
		tempArray.push(arr[arr.length - temp]);
		temp++;
	});
	return tempArray;
}

invertirYConcatenarArrays(arr1, arr2);

/////////////con for
var arr1 = ["a", "b", "c"];
var arr2 = ["x", "y", "z"];

var invertirYConcatenarArraysFor = function(arr1, arr2){
	var tempArray = [];
	for (var i = 0; i < invertirArrayFor(arr1).length; i++) {
		tempArray.push(invertirArrayFor(arr1)[i]);
	};
	for (var i = 0; i < invertirArrayFor(arr2).length; i++) {
		tempArray.push(invertirArrayFor(arr2)[i]);
	};
	return tempArray;
}

var invertirArrayFor = function(arr){
	var temp = 1;
	var tempArray = [];
	for (var i = 0; i < arr.length; i++) {
		tempArray.push(arr[arr.length - temp])
		temp++;
	};
	return tempArray;
}

invertirYConcatenarArraysFor(arr1, arr2);
