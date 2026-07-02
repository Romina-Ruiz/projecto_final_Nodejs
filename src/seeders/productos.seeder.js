import db from "../config/firebase.js";

import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const productsSeeders = [
  {
    title: "Remera Santorini",
    description: "Remera cuello bote, rayas azules y blancas.",
    price: 40.0000,
    stock: 10,
  },
  {
    title: "Pantalon India",
    description: "Pantalon babucha de jean",
    price: 60.0000,
    stock: 8,
  },
  {
    title: "Saco Italia",
    description: "Saco de breemer oversize.",
    price: 80.0000,
    stock: 12,
  },
  {
    title: "Sweeter Paris",
    description: "Sweeter oversize con cuello alto.",
    price: 90.000,
    stock: 15,
  },
  {
    title: "Remera Portugal",
    description: "Remera manga larga negra.",
    price: 30.000,
    stock: 20,
  },
];

const createProducts = async () => {
  for (const product of productsSeeders) {
    try {
      const ref = await addDoc(productsCollection, product);
      console.log("Added product with id:", ref.id);
    } catch (err) {
      console.error("Error adding product:", err);
    }
  }
};

createProducts();


