const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2022-01-01");
console.table(matchers);


const regex2 = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)
/*
[
  [
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ],
  [
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ]
]
*/