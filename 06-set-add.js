const list = new Set() // set no admite elementos repetidos

list.add('Nico')

console.log(list);

let names = ['Oscar', 'Nico', 'Sofi', 'Matte', 'Ulises', 'Oscar', 'Sofi']

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]