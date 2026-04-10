const productName = "headphone";
const productprice = 250;
const productisavailable = true;
const productType = "boat";
 
const andResult = (productName =="headphone")&& (productprice>100)&&(productisavailable)
console.log("results :",andResult)


const andResults = (productName =="headphone")|| (productprice>100)||(productisavailable)
console.log("results :",andResults)


const productsName = "";

if(!productsName){
    console.log("productName is not available")
}
if(productsName){
    console.log("productName is  available")
}