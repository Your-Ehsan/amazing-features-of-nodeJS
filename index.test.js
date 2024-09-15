// Importing the 'assert' module from Node.js, which is used to perform assertions in tests
// It helps in verifying that a particular condition or expression is true
import assert from "node:assert";

// Importing 'describe' and 'it' from the Node.js testing module
// 'describe' is used to group related tests together, and 'it' is used to define individual test cases
import { describe, it } from "node:test";

// Importing the 'IsAdult' function from the 'index.ts' file
// This is the function being tested in the unit test
import { IsAdult } from "./index.ts";

// Describing a test suite for the 'IsAdult' function
// The test suite is given the name '#isAdult', which will show in test reports
describe("#isAdult", () => {
  // Defining a test case within the suite using 'it'
  // The test case checks if a user is an adult (in this case, someone aged 29)
  it("Check if user is adult or not", () => {
    // Asserting that the 'IsAdult' function returns true when passed the age 29
    // If the function returns false, the test will fail
    assert(IsAdult(29));
  });
});
