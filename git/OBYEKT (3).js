///////////////////////////////////////////////   1

let student={
    name:"Nihat",
    age:"20",
    course:3,
    faculty:"Applied Mathematics and Cybernetics",
}
console.log(student)

///////////////////////////////////////////////   2

let user={ 
    name:"Nihat",
    srname:"Qasımzad",
};
let p={};
for(key in user){
    p[key]=user[key];
}

console.log(p)

///////////////////////////////////////////////   3

let number={
    1:"bir",
    2:"iki",
    3:"uc",
    4:"dord",
    5:"bes",
    6:"alti",
    7:"yeddi",
    8:"sekkiz",
    9:"doqquz",
    10:"on",
}
console.log(number[1])

///////////////////////////////////////////////   4
let ad
let soyad
let person={
    name1:"Nihat",
    surname:"Qasımzadə",
}
function getfullname(ad,soyad){
    return ad+" "+soyad;}
console.log(getfullname(person.name1,person.surname))
///////////////////////////////////////////////   5

let sinif={
    adi:"Nihat",
    soyadi:"Qasımzad",
    bali:449
}
for (key in sinif){
    console.log("key:",key, "value:", sinif[key])
}

///////////////////////////////////////////////   6

let ev={
    qiymeti: 65000,
    otaqli: 3,
    temir: "temirli"
}
function f(key){
    if (ev[key]){
        return true
    }
    else {
        return false;
    }
}
console.log(f("qiymeti"))



///////////////////////////////////////////////   7
let mark = {
    Nihat: 8,
    a: 7,
    b: 6,
    c: 9,
    d: 6
}
let sum = 0;
for (key in mark) {
    sum = sum + mark[key];
}
console.log(sum)



