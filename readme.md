# Challenge 3 week 2

Challenge en parejas.​Crea un modulo con funciones que repliquen, sin utilizar ninguno de los métodos ya existentes en el prototipo, los siguientes métodos de array:

-length,
-push,
-pop,
-unshift,
-shift,
-some,
-every,
-find,
-filter,
-map,
-findIndex,
-includes,
-indexOf,
-reduce,
-join

## Development of the challange:

-initial commit with : editorconfig, .gitignore, readme.md, package,json

-create configuration branch and install eslint, huskies, jest, connect with sonarcloud;

-create branch with JS files and complete first 3 ste of challanges;

-create other branch and complete other 3 step of the challange;

### Problems

-failing in getting the 100% of the coverage due tu issue with boolemian values;

CODE:

```javascript
export const functionSome = (array1) => {
  const matchFound = 45;
  let result;

  for (const i of array1) {
    if (i === matchFound) {
      result = true; //line 60
    }
  }

  result = false;
  return result;
};

export const functionEvery = (array1) => {
  const elementCondition = 10;

  for (const i of array1) {
    if (i > elementCondition) {
      return false; //line 73
    }
  }

  return true;
};
```

TEST:

| File           | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| -------------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files      | 95.23     | 50         | 100       | 95.12     |
| arrayprop.js   | 100       | 100        | 100       | 100       |
| main.js        | 95.12     | 50         | 100       | 95        | 60,73               |
| -------------- | --------- | ---------- | --------- | --------- | ------------------- |

Test Suites: 1 passed, 1 total
Tests: 7 passed, 7 total
Snapshots: 0 total
Time: 0.437 s, estimated 1 s
Ran all test suites.
