const hospital = {
    doctors : 38,
    patients : 44
};

let doctors = hospital.doctors;
let patients = hospital.patients;

console.log(doctors);
console.log(patients);

//--------------------------------

const hospitalss = {
    doctorss : 38,
    patientss : 44
};

let {doctorss, patientss} = hospitalss;

console.log(doctorss)
console.log(patientss)

//--------------------------------------

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
var [colour1, colour2, colour3] = colors;
console.log(colour1);
console.log(colour2);
console.log(colour3);

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
var [colour1, ,colour3, ,colour5] = colors;
console.log(colour1);
console.log(colour3);
console.log(colour5);

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
var [colour1, colour2, ...colors] = colors;
console.log(colour1);
console.log(colour2);
console.log(...colors);

var x, y;  
  
[x=50, y=70] = [100];  
console.log(x); // 100  
console.log(y); // 70

var x = 100, y = 200;  
[x, y] = [y, x];  
console.log(x); // 200  
console.log(y); // 100 




