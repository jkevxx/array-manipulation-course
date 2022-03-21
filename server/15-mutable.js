// const products = [
//   { title: "Pizza", price: 121, id: "🍕" },
//   { title: "Burger", price: 121, id: "🍔" },
//   { title: "Hot cakes", price: 121, id: "🥞" },
// ];
// const myProducts = [];
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));
// const productIndex = products.findIndex(item => item.id === '🍔');
// if (productIndex !== -1) {
//   myProducts.push(products[productIndex]);
//   products.splice(productIndex, 1);
// }
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

// * delete element without modifying the original array
const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" }
];
const products2 = products.filter(p => p.id != "🍔");
console.log("Original: ", products);
console.log("products2: ", products2);



// Update
const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
// const update = {
//   id: "🥞",
//   changes: {
//     price: 200,
//     description: 'delicioso'
//   }
// }
// const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
// productsV2[productIndexV2] = {
//   ...productsV2[productIndexV2],
//   ...update.changes,
// };
// console.log(productsV2);

// * update or modify element without modifying the original array

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: 'delicioso'
  }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);

const products2Update = [...productsV2];
products2Update[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes,
};
console.log("original", productsV2);
console.log("update", products2Update);