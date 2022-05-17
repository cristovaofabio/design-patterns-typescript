import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Fabio', age: 26 });
myDatabaseClassic.add({ name: 'Maria', age: 31 });
myDatabaseClassic.add({ name: 'João', age: 17 });

export { myDatabaseClassic };
//db1.showUsers();