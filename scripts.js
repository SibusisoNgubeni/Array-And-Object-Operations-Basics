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


 /*this function creates a new array with the province names converted to lowercase using the map method
 because the default 'sort' behavior is case-sensitive (i.e., uppercase letters come before lowercase letters).
 */
 const sortedProvinces =  provinces.map((province) => 
    province.toLowerCase()).sort();

 console.log(sortedProvinces);
  
 

 