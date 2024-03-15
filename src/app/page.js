'use client'
import { useState } from "react";
import Card from "@/components/Card";
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/Footer";

export default function Home() {

  const [filterByAvailable, setFilterByAvailable] = useState("All Products");

  const handleFilterChange = (filter) => {
    setFilterByAvailable(filter);
  };
  return (
    <div className="relative flex justify-center">
      <Image src='/bg-cafe.jpg' alt="Cafe" width={1920} height={1}/>
      <div className="bg-dark-gray text-white w-3/4 md:p-20 p-10 font-dm-sans absolute top-40 rounded-xl">
        <h2 className="flex justify-center md:text-4xl text-2xl p-2">Our Collection</h2>
        <p className="md:w-1/2 text-center md:text-base text-sm mx-auto text-gray p-2">Introducing our Coffe Collection, a selectoin of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly</p>
        <div className="flex justify-center gap-x-8 p-2">
          <button className={`py-2 px-4 rounded-lg ${filterByAvailable === "All Products" ? "bg-gray" : ""}`} onClick={() => handleFilterChange("All Products")}>All Products</button>
          <button className={`py-2 px-4 rounded-lg ${filterByAvailable === "Available Now" ? "bg-gray" : ""}`} onClick={() => handleFilterChange("Available Now")}>Available Now</button>
        </div>
        <Card filterByAvailable={filterByAvailable} />
      </div>
      <Footer />
    </div>
  );
}
