// Importing necessary modules from Node.js
// `glob` is used for matching file patterns, and `readFile` is for reading file content asynchronously
import { glob, readFile } from "fs/promises";

// Importing DatabaseSync from SQLite to interact with a SQLite database synchronously
import { DatabaseSync } from "node:sqlite";

// Creating an in-memory SQLite database (temporary storage, cleared after the app exits)
const database = new DatabaseSync(":memory:");

// Creating a table named 'data' with two columns: 'key' (an integer primary key) and 'value' (a text column)
// STRICT mode is enabled, which enforces stronger type checking in the SQLite table
database.exec(`
    CREATE TABLE data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
`);

// Preparing an SQL insert statement to insert values into the 'data' table
// The placeholders (?) will be replaced with actual values when the query is run
const insert = database.prepare("INSERT INTO data (key, value) VALUES (?, ?)");

// Inserting a row with key 1 and value "hello" into the 'data' table
insert.run(1, "hello");

// Inserting a second row with key 2 and value "world!" into the 'data' table
insert.run(2, "world!");

// Preparing an SQL query to select all rows from the 'data' table, ordered by the 'key' column
const query = database.prepare("SELECT * FROM data ORDER BY key");

// Running the query and logging the result to the console
// This will print out the rows from the 'data' table, e.g., [{ key: 1, value: 'hello' }, { key: 2, value: 'world!' }]
console.log(query.all());

// Reading the content of a file named 'index.ts' asynchronously
// The result is a Buffer object that contains the file content in bytes
const file = readFile("./index.ts").then((e) => {
  console.log(e); // Logging the file content as a Buffer (raw byte data)
});

// Using the glob pattern to search for any files that match the "*.test.js" pattern (usually test files)
// The glob function returns an async iterator, so we use `.next()` to get the next match
const testFile = await glob("**/*.test.js").next();

// Logging both the content of 'index.ts' and the result of the glob search
console.log({ file, testFile });
/**
 * Example response:
 * {
 *   file: <Buffer 69 6d 70 6f 72 74 20 7b 20 67 6c 6f 62 2c 20 72 65 61 64 46 69 6c 65 20 7d 20 66 72 6f 6d 20 22 66 73 2f 70 72 6f 6d 69 73 65 73 22 3b 0d 0a 0d 0a 63 ... 444 more bytes>,
 *   testFile: { value: 'index.test.js', done: false }
 * }
 */

// Defining an interface 'User' that requires two properties: 'name' (string) and 'age' (number)
interface User {
  name: string;
  age: number;
}

// Creating a 'person' object of type 'User' with a name of "John Doe" and an age of 12
const person: User = {
  age: 12,
  name: "John Doe",
};

// Defining a function `IsAdult` that takes an age (number) and returns true if the age is 18 or older
export function IsAdult(age: number) {
  return age >= 18;
}

// Logging whether the person is an adult by passing their age to the `IsAdult` function
// Since 'person.age' is 12, this will return false and print { IsAdult: false }
console.log({ IsAdult: IsAdult(person.age) });

// Logging the value of an environment variable `SECRET_VALUE` (e.g., for sensitive information)
// If you have a `.env` file with a `SECRET_VALUE`, it will be printed; otherwise, it prints 'undefined'
console.log(process.env.SECRET_VALUE); // @your-ehsan (example output)
