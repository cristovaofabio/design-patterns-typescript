import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseModuleA } from './module-a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Francisco', age: 36 });
myDatabaseClassic.add({ name: 'Josefa', age: 51 });
myDatabaseClassic.add({ name: 'Emanuel', age: 47 });

myDatabaseClassic.showUsers();

console.log(myDatabaseClassic === myDatabaseModuleA);