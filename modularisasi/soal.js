import { toLower, toUpper } from "./stringUtilis.js";
import { perkalian, pembagian } from "./mathUtilis.js";
import getUser from "./user.js";
import capitalize from "./utils/string.js";
import { sum, min } from "./utils/math.js";
import sayHello from "./utils/greet.js";

console.log(toLower("Fitra Maulana"));
console.log(toUpper("fitra maualana"));
console.log(perkalian(2, 4));
console.log(pembagian(8, 2));
console.log(getUser("fitra", 10));
console.log(sayHello("fitra"));
console.log(sum(1, 2));
console.log(min(8, 2));
console.log(capitalize("fitra"));
