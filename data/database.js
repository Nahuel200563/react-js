import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import artItems from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyAG-7zUeaud_-tc8tZcUuK9LUj0YWsoCCY",
  authDomain: "reactjsx-nahuel.firebaseapp.com",
  projectId: "reactjsx-nahuel",
  storageBucket: "reactjsx-nahuel.firebasestorage.app",
  messagingSenderId: "239000844939",
  appId: "1:239000844939:web:26916b3f93f3d36429f28e",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function getAsyncData() {
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef);
  const documentsData = productsSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return documentsData;
}

export async function getAsyncItemById(itemID) {
  const docRef = doc(db, "products", itemID);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  return docData;
}

export async function getAsyncItemsByCategory(catID) {
  const productosCollectionRef = collection(db, "products");
  const q = query(productosCollectionRef, where("category", "==", catID));
  const productsSnapshot = await getDocs(q);
  const documentsData = productsSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  console.log(documentsData);
  console.log(productsSnapshot);
  return documentsData;
}

export async function createDocument() {
  const docRef = await addDoc(collection(db, "products"), {
    title: "Acuarelas Premium 24 Colores",
    price: 4500,
    stock: 10,
    img: "../src/assets/acuarelas.jpg",
    category: "materiales",
    description:
      "Paleta de acuarelas vibrantes con 24 colores para proyectos artísticos.",
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function exportProductsToDB() {
  for (let item of artItems) {
    delete item.id;
    const docId = await addDoc(collection(db, "products"), item);
    console.log("documento creado", docId);
  }
}

export async function createBuyOrder(orderData) {
  const newOrderDocument = await addDoc(collection(db, "orders"), orderData);
  return newOrderDocument.id;
}
