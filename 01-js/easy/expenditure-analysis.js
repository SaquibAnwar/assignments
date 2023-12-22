/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoriesAndPricesMap = new Map();
  for(let i = 0; i < transactions.length; i++){
    if(!categoriesAndPricesMap.has(transactions[i]["category"]))
    {
      categoriesAndPricesMap.set(transactions[i]["category"], transactions[i]["price"]);
    }
    else
    {
      categoriesAndPricesMap.set(transactions[i]["category"], categoriesAndPricesMap.get(transactions[i]["category"]) +  transactions[i]["price"]);
    }
  }

  let categoriesAndPrices = [];
  for(let [key, value] of categoriesAndPricesMap){
    categoriesAndPrices.push({category: key, totalSpent: value});
  }

  return categoriesAndPrices;
}

module.exports = calculateTotalSpentByCategory;
