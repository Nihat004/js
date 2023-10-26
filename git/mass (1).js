//1 Ededlerden ibaret massiv yaradin ve onun uzunlugunu 2 defe azaldin.

const arr = [4, 9, 3, 10, 7, 2, 17, 5, 7, 77]
const result = arr.length / 2
console.log(result)

//2 massivin elementlerinin cemi.

const a = [4, 9, 3, 10, 7, 2, 17, 5, 7, 77]
let sum = 0
for (i = 0; i < a.length; i++) {
    sum += a[i]
}
console.log(sum)

//3 massivin en boyuk ve en kicik elementleri

const mass = [85, 9, 3, 10, 7, 2, 147, 5, 7, 77]
let max = mass[0]
let min = mass[0]
for (i = 0; i < mass.length; i++) {
    if (mass[i] > max) {    //max=Math.max(...mass)
        max = mass[i]
    }
    if (mass[i] < min) {    //min=Math.min(...mass)
        min = mass[i]
    }
}
console.log("max:", max, "min:", min)

//4 massivin elementlerin tek ve cut olmaqla ayirib massivlere daxil et

const massiv = [4, 9, 3, 10, 7, 2, 17, 5, 7, 77]
let massiv1 = []
let massiv2 = []


for (i = 0; i < massiv.length; i++) {
    if (massiv[i] % 2 != 0) {
        massiv1[massiv1.length] = massiv[i]    //massiv1.push(massiv[i])
    }
    else {
        massiv2[massiv2.length] = massiv[i]    //massiv2.push(massiv[i])
    }
}
console.log(massiv1, massiv2)

//5 massiv elementlerini min.den max.a ve max.dan min.e duz

const massiv3 = [4, 9, 3, 10, 7, 2, 17, 5, 7, 77]
let artan = [...massiv3]
let azalan = [...massiv3]

function niq(key) {
    for (i = 0; i < key.length; i++) {
        for (j = 0; j < key.length - 1 - i; j++) {
            if (key[j] > key[j + 1]) {
                let temp = key[j]
                key[j] = key[j + 1]
                key[j + 1] = temp
            }
        }
    }
    return key
}
console.log(niq(artan))


function nig(key) {
    for (i = 0; i < key.length; i++) {
        for (j = 0; j < key.length - 1 - i; j++) {
            if (key[j] < key[j + 1]) {
                let temp = key[j]
                key[j] = key[j + 1]
                key[j + 1] = temp
            }
        }
    }
    return key
}
console.log(nig(azalan))




///6) Massivden false deyimli (undefined,false,null ve s.) kimi elementleri silib yeni massiv qaytaran funksiya yazin.///
const massiv4 = [777, 77, 87, undefined, false, null, 13, 9]
const massiv5 = []
for (i = 0; i < massiv4.length; i++) {
    if (massiv4[i]) {
        massiv5.push(massiv4[i])
    }
}

console.log(massiv5)

///7) Massivde yerlesen elementleri reverse eden funskiya yazin.///
const str = [33, 77, 9, 4, 64]

console.log(str.reverse())