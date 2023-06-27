const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

const namesInfo = []
// pushes names items info namesInfo array
names.forEach((item) => namesInfo.push(item))

console.log(namesInfo)

const infoProvinceName = []

//use foreach() to log each name With a matching province
names.forEach((item, index)=>{
if (provinces[index]){
    infoProvinceName.push(`${item} (${provinces[index]})`)
}
})

console.log(infoProvinceName)

//use map() to turn all names to capital letters
const capitalProvinces = []

provinces.map((item) => {
    return capitalProvinces.push(item.toUpperCase())
})

console.log(capitalProvinces)


// create new array and set lenght of word
const lenghtOfName = []
const nameLengths = names.map(name => lenghtOfName.push(name.length));
console.log(lenghtOfName)

//sorts via the alphabet
const alphabeticalProvences = []

const sortedProvinces = provinces.sort()
alphabeticalProvences.push(sortedProvinces)
console.log(alphabeticalProvences)

//take out any with cape town
const noCape = []
const filterCape = provinces.filter(
    provinces =>!provinces.includes('Cape')
)
console.log(filterCape)

//create array with with map() to determin is 
const hasSCharacter = names.map(name => name.includes('S'));
console.log(hasSCharacter);

//use reduce to names and the provinces in to a different array
const provinceObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});
  console.log(provinceObject);


 // EXERCISE 2

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//Using forEach() to console.log() each product name to the console
console.log(products.forEach((item) => {
    console.log(item.product) 
}))

//Using filter() to filter out products that have a name longer than 5 characters
console.log( products.filter((item) => {
        const checkNameLength = item.product.length > 5 
        return checkNameLength;
        }
    )
)

/**
 * - Use both filter() and map() to convert all prices that are strings to numbers, and remove
 * all products from that array that do not have prices. 
 * - After this has been done, then use reduce() to calculate the combined price of all remaining 
 * products
 */
console.log(
    

) 



