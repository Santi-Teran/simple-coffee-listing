'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";

const Card = ({ filterByAvailable }) => {

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    if (data) {
      if (filterByAvailable === "All Products") {
        setFilteredData(data);
      } else if (filterByAvailable === "Available Now") {
        setFilteredData(data.filter((item) => item.available === true));
      }
    }
  }, [data, filterByAvailable]);

  if (isLoading) return <Loader />;
  if (!data) return <ErrorHandler />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-fit mx-auto py-10">
      {filteredData.map((item) => (
        <div key={item.id}>
          {item.popular ? (
            <div>
              <span className="relative top-8 left-2 bg-yellow text-black text-xs px-4 py-1 rounded-2xl">Popular</span>
              <Image src={item.image} alt="Coffe" width={300} height={0} className="rounded-xl"/>
            </div>
          ) : (
            <div>
              <span className="relative top-8 left-2 px-4 py-1 rounded-2xl"></span>
              <Image src={item.image} alt="Coffe" width={300} height={0} className="rounded-xl"/>
            </div>
          )}
          <div className="flex justify-between mt-4">
            <h2>{item.name}</h2>
            <p className="text-sm text-blackk bg-green py-1 px-2 rounded">{item.price}</p>
          </div>
          <div>
            {item.rating ? (
              <div className="flex justify-between py-2">
                <div className="flex gap-x-1 items-center">
                  <Image src="/Star_fill.svg" alt="Star" width={20} height={0}/>
                  <p>{item.rating}</p>
                  <p className="text-gray text-sm">({item.votes} votes)</p>
                </div>
                {!item.available && (
                  <p className="text-red text-sm">Sold Out</p>
                )}
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="flex gap-x-1">
                  <Image src="/Star.svg" alt="Star" width={20} height={0}/>
                  <p>{item.rating}</p>
                  <p className="text-gray">No ratings</p>
                </div>
                {!item.available && (
                  <p className="text-red text-sm">Sold Out</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
