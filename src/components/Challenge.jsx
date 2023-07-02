import React, { useEffect, useState } from "react";
import CubeImg from "../images/cube.png";
const Challenge = () => {
  const [data, setData] = useState([]);
  const [firstFiveItems, setFirstFiveItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setFirstFiveItems(data.slice(0, 5));
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="flex challenge justify-end  mt-28 basis-1/2">
          <img className="lorem w-9/12 h-80" src={CubeImg} alt="tablet image" />
        </div>
        <div className="flex challenge basis-1/2 flex-col flex-wrap content-around mt-12">
          <h2 className="font-bold text-2xl text-left pb-6">
            OUR <span className="text-cyan-500">CHALLENGES</span>
          </h2>
          {firstFiveItems.map((item, i) => {
            return (
              <div className="flex flex-col w-96" key={i}>
                <div className="flex h-12 bg-white  items-center drop-shadow-lg opacity-100 my-3 hover:bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300">
                  <span className="pl-3">{item.id}</span>
                  <p className="pl-3 truncate block">{item.title}</p>
                </div>
              </div>
            );
          })}

          <div className="flex justify-start mt-8">
            <button className="w-48 h-12 rounded-full text-white bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-sm font-bold">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge;
