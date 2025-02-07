// import artItems from "./data";

// function getAsyncData() {
//   console.log("Solicitando datos");
//   const promiseData = new Promise((resolve, reject) => {
//     const errorFatal = false;

//     setTimeout(() => {
//       if (errorFatal) reject("Algo salió mal!!!!");
//       console.log("Promesa Terminada");
//       resolve(artItems);
//     }, 500);
//   });

//   console.log("Promesa generada.");

//   return promiseData;
// }

// export function getAsyncItemById(itemID) {
//   console.log("Solitando producto id....", itemID);

//   const promiseData = new Promise((resolve) => {
//     setTimeout(() => {
//       const requestedProduct = artItems.find(
//         (item) => item.id === Number(itemID)
//       );
//       resolve(requestedProduct);
//     }, 500);
//   });

//   console.log("Promesa generada.");

//   return promiseData;
// }

// export function getAsyncItemsByCategory(catID) {
//   console.log("Solitando productos para... ", catID);

//   const promiseData = new Promise((resolve) => {
//     setTimeout(() => {
//       const requestedProduct = artItems.filter(
//         (item) => item.category?.toLowerCase() === catID?.toLowerCase()
//       );
//       resolve(requestedProduct);
//     }, 500);
//   });

//   console.log("Promesa generada.");

//   return promiseData;
// }

// export default getAsyncData;
// // const respuesta = getAsyncData();
// // console.log(respuesta);
