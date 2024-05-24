// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]




provinces.forEach((province, index) => {
    const name = names[index];
    console.log(` ${name} (${province})`);
 });
  
const upperCase = () => {
 const upperCaseProvinces = provinces.map((province) => 
  province.toUpperCase())
 console.log(upperCaseProvinces)
}
 upperCase();

 const lengths = names.map((name) => name.length)
 console.log(lengths);


 /**
  *For sortedProvinces
  *this function creates a new array with the province names converted to lowercase using the map method
   because the default 'sort' behavior is case-sensitive (i.e., uppercase letters come before lowercase letters).
 */
 const sortedProvinces =  provinces.map((province) => 
    province.toLowerCase()).sort();
 console.log(sortedProvinces);
  
 
 /**
  *For remainingProvinces
  *The filter method to create a new array, remainingProvinces, that contains only the provinces that do not contain 
  "Cape".
  *the toLowerCase() method is used to convert the province name to lowercase before searching, to make the search 
   case-insensitive because the 'includes()' method is case sensitive, This way, if there is lowerCase "cape" and 
   upperCase "Cape", they will be matched.
 */
const remainingProvinces =provinces.filter((province) => 
   !province.toLowerCase().includes("cape"));
console.log(remainingProvinces)
 


 const namesWithS = names.map((name) => ({ 
   name, 
   containsS: name.toLowerCase().includes('s'), 
   message: name.toLowerCase().includes('s') ? 'contains S' : 'does not contain S' 
 })).forEach((name) => console.log(`${name.name}: ${name.containsS} - ${name.message}`));
 
 
 const hasS = names.some((name) => {
   const containsS = name.toLowerCase().includes('s');
   console.log(`${name}: ${containsS} - ${containsS ? 'contains S' : 'does not contain S'}`);
   
 });

 names.reduce((acc, current, index) => {
   console.log(` ${current} (${provinces[index]})`);
   return acc; 
 }, {});
 
 
 
 function logProductNames(products) {
   return products.map(product => product.product);
 }
 

 function formatProducts(products) {
   return products.map(product => `${product.product}, price: ${product.price}`);
 }


 /**
 * For calculateTotalPrice 
 * Calculates the total price of products, filtering out those with no price,
 * converting price strings to numbers, and summing them.
 * Using filter() and map() to process the array 
 * The map method returns a copy of the original array approach avoids mutating 
   the original array and improves code readability.
 */

 function calculateTotalPrice(products) {
   return products
     .filter(product => product.price !== '')
     .map(product => ({ ...product, price: Number(product.price) }))
     .reduce((acc, current) => acc + current.price, 0);
 }
 

/**
 * For concatenateProductNames
 * Concatenates the names of all products into a single string.
 * Using reduce() to iterate through the products array,
 * accumulating the product names into a single string.
 */

  function concatenateProductNames(products) {
   return products.reduce((acc, current) => acc + current.product, "");
 }
 

 /**
 * For highestAndLowestPriced 
 * Using map() to extract prices into a new array
 * Math.max and Math.min Finds the highest and lowest prices in the products array.
 * 
 * Returning a string with both prices for easy display.
 */

 function highestAndLowestPriced(products) {
   const prices = products.map(product => product.price);
   const highest = Math.max(...prices);
   const lowest = Math.min(...prices);
   return `Highest: ${highest}. Lowest: ${lowest}.`;
 }
 

/**
 * For recreateProductsObject
 * Recreates the products object with a new structure.
 * the reduce() method groups products by name
 * the return Object.entries() and reduce()  statement transforms the object into the desired structure.
 */

function recreateProductsObject(products) {
   return Object.entries(products.reduce((acc, current) => {
     return {
       ...acc,
       [current.product]: current
     };
   }, {})).reduce((acc, [key, value]) => {
     return {
       ...acc,
       [key]: { name: value.product, cost: value.price }
     };
   }, {});
 }


const functions = [
   logProductNames,
   formatProducts,
   calculateTotalPrice,
   concatenateProductNames,
   highestAndLowestPriced,
   recreateProductsObject
 ];
 
 functions.forEach(functions => console.log(functions(products)));
  