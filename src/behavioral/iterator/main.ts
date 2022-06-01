import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E');

const [a, b] = dataStructure;
console.log('Stolen', a, b);
dataStructure.resetIterator();

for (const data of dataStructure) {
    console.log(data);
}

console.log('New iterator bellow');
dataStructure.changeIterator(new MyReverseIterator(dataStructure))

for (const data of dataStructure) {
    console.log(data);
}