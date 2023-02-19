function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }
  let topProduct = "";
  let maxProfit = -Infinity;
  for (let i = 0; i < productProfitArray.length; i++) {
    let profit = productProfitArray[i].profit;
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = productProfitArray[i].product;
    }
  }
  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }
  let bottomProduct = "";
  let minProfit = Infinity;
  for (let i = 0; i < productProfitArray.length; i++) {
    let profit = productProfitArray[i].profit;
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = productProfitArray[i].product;
    }
  }
  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }
  let zeroProfitProduct = "";
  let minDiff = Infinity;
  for (let i = 0; i < productProfitArray.length; i++) {
    let profit = productProfitArray[i].profit;
    let diff = Math.abs(profit - 0);
    if (diff < minDiff || (diff === minDiff && profit > 0)) {
      minDiff = diff;
      zeroProfitProduct = productProfitArray[i].product;
    }
  }
  return zeroProfitProduct;
}

//Test Code Modified for preference
const productProfitArray = [
  { product: 'Laptops', profit: 100 },
  { product: 'Phones', profit: -50 },
  { product: 'Bags', profit: 10 },
  { product: 'PowerBanks', profit: 75 },
  { product: 'Accesories', profit: -25 }
];

console.log(topProduct(productProfitArray)); // output: Laptops
console.log(bottomProduct(productProfitArray)); // output: Phones
console.log(zeroProfitProduct(productProfitArray)); // output: Bags
