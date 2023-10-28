// Q1 : compare two JSON have the same properties without order

let obj1 = {
    name: "Person 1",
    age: 5
}
let obj2 = {
    age:5,
    namr: "Person 1"
}
var objectA = JSON.stringify(obj1);
var objectB = JSON.stringify(obj2);
console.log( objectA === objectB, "Q1 comparison value of two JSON") //return false since order is not same in the object

//Q2 : Using rest countries API , display all the country flag in the console
//to fetch the data from API we use XMLHTTPRequest method

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.send();
xhr.onload = function() {
    var countries = JSON.parse(xhr.response);
    for (var i = 0; i < countries.length; i++){
        console.log("FlagName:", countries[i].flag , "FlagImage:", countries[i].flags.png)
    }
}
//Q3 : Using same rest countries API , display country names, regions, sub-region and populations

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function() {
    var data = JSON.parse(request.response);
    for (var i = 0; i < data.length; i++){
        console.log("CountryName", data[i].name.common, "Regions", data[i].region, "Sub-Regions", data[i].subregion, "Populations", data[i].area)
    }
}

//Q4 simple programs todo for variables

//  1.Declare four variables without assigning values and print them in console
var a, b, c, d;
console.log(a, b, c, d, "Declared four variables without assigning values")

//  2.How to get value of the variable myvar as output
var myVar = 10;
console.log(myVar, "How to get value of the variable myvar as output");

//  3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstName = "kuzhali";
var maritalStatus = "married";
var country = "India";
var age = 26;
console.log(firstName,maritalStatus,country,age, "Declare variables to store your first name, last name, marital status, country and age in multiple lines")

//  4.Declare variables to store your first name, last name, marital status, country and age in a single line
var personDetails = { firstName: "Kuzhali", lastName: "Kumaraguru", maritalStatus: "married", country: "India", age: 26 }
console.log(personDetails, "Declare variables to store your first name, last name, marital status, country and age in a single line");

//  5.Declare variables and assign string, boolean, undefined and null data types
var aa, bb, cc, dd;
aa = "kuzhali"; //string
bb = true; //boolean
console.log(cc, "/undefined");
dd = null;
console.log(aa, bb, cc, dd, "Declare variables and assign string, boolean, undefined and null data types");

//  6.Convert the string to integer
// parseInt() , plus sign(+)
console.log(parseInt("234"), +("78"), "Convert the string to integer");

//  7.Write 6 statement which provide truthy & falsey values.
var val1 = 10;
var val2 = 30;
console.log(val1 == val2 , val1 === val2, val1 <= val2, val1 != val2, val1 >= val2, val1 > val2, "Write 6 statement which provide truthy & falsey values")