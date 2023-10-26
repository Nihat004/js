let num = 5
let squared = num * num
let cube = num * num * num

console.log("sq",squared)
console.log("cube",cube)



/////////////////////////////////////

const V = 60     //km/saat
const S = 180    //km
let T            //saat 
T=S/V
console.log(T*60) //deqiqe

////////////////////////////////////

const num1 = 6
const num2 = 7
const num3 = 4
let big


if(num1 >= num2 && num1 >= num3) {
    big = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    big = num2;
}
else {
    big = num3;
}
console.log("big is" + big );

//////////////////////////////////////

const number = 9
if(num%2==1) {
    console.log("tek")
}
else if(num%2==0) {
    console.log("cut")
}

//////////////////////////////////////

let day=3

if(day==1) {
    console.log("riyaziyyat")
}
else if(day==2) {
    console.log("Azerbaycan dili")
}
else if(day==3) {
    console.log("rus dili")
}
else if(day==4) {
    console.log("idman")
}
else if(day==5) {
    console.log("ders yoxdur")
}
else if(day==6) {
    console.log("ders yoxdur")
}
else if(day==7) {
    console.log("ders yoxdur")
}

///////////////////////////////////////

let numb=13

let a=numb%10
let b=numb-a
let c = ""
let d = ""
if(a==1) {
    c="bir"
}
if(a==2) {
    c="iki"
}
if(a==3) {
    c="uc"   
}
if(a==4) {
    c="dord"
}
if(a==5) {
    c="bes"
}
if(a==6) {
    c="alti"
}
if(a==7) {
    c="yeddi"
}
if(a==8) {
    c="sekkiz"
}
if(a==9) {
    c="doqquz"
}

if(b==10) {
    d="on"
}
if(b==20) {
    d="iyirmi"
}
if(b==30) {
    d=="otuz"
}
if(b==40) {
    d=="qirx"   
}
if(b==50) {
    d="elli"
}
if(b==60) {
    d="altmis"
}
if(b==70) {
    d="yetmis"
}
if(b==80) {
    d="seksen"
}
if(b==90) {
    d="doxsan"
}

console.log(c + d)

////////////////////////////////////

let x = 39
if(x>10 && x<100) {
    console.log("ikireqemli")
}
else if(x<10) {
    console.log("tekreqemli")
}
else {
    console.log("ucreqemli")
}

