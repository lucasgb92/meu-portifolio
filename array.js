var arr = [8,9,1,2,3,4]

console.log(arr[0])
//----------------------------

let car = []
car[0] = 'gol'
car[1] = 'golf'
car[2] = 'polo'

var soma = 0 
for (var pos = 0 ; pos < arr.length ; pos++){
    soma += arr[pos]
    console.log("pos : " +soma)
    

}

var media = soma/arr.length

console.log('A media eh:' + media)

console.log("arr inverso : " + arr.reverse());

console.log(arr.join('|'));

let ret = arr.shift()

console.log('retirado :' + ret);

console.log(arr)

arr.push(199);
console.log(arr);

arr.pop()
console.log(arr)
