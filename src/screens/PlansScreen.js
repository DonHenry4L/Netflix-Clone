import React, { useEffect, useState } from "react";
import "../Css/PlansScreen.css";
import db from "../firebase";

function PlansScreen() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    db.collection("products");
  }, []);

  return <div className='plansScreen'></div>;
}

export default PlansScreen;
