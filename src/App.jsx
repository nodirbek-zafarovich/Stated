import React, { useEffect, useState } from "react";
import { BASE_URL } from "./constants/baseUrl";
import axios from "axios";
import Mode from "./Mode";
import { CgSearch } from "react-icons/cg";

const App = () => {
  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}`).then(function (response) {
      setData(response.data);
    });
  }, []);
  
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
 

  return (
    <div>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } transition-colors duration-500`}
      >
        <div className=" shadow-lg  flex py-3  items-center  ">
          <div className=" flex items-center gap-[1100px] ">
            <h1 className="text-xl font-bold mx-[140px]">
              Where in the world?
            </h1>
            <Mode isDarkMode={isDarkMode} handleToggle={handleToggle} />
          </div>
        </div>
        <div className="container mx-auto mt-[50px] flex gap-[800px] items-center">
          <form className="flex  items-center w-[600px] shadow-md h-[40px] gap-2 rounded-lg border border-gray-200 p-[14px] leading-[140%] hover:border-[#EA7C69] ">
            <CgSearch className="h-5 w-5 text-[#ABBBC2]" />
            <input
              type="search"
              id="default-search"
              className={ `first-letter:first-line:rounded-lg bg-transparent w-[600px]  font-normal text-[#ABBBC2] placeholder-[#6B7280] outline-none   ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              } transition-colors duration-500`}
              placeholder="Search for a country"
            />
          </form>
          <div className="">
            <select
              name="Filter by region"
              className={`border border-gray-400 rounded-xl ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              } transition-colors duration-500`}
            >
              <option value="All Region">All Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europa">Europa</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4  container mx-auto ">
          {data.map((country) => {
            return (
              <div
                className="shadow-lg w-[300px] text-center  flex justify-center items-center mt-[20px] "
                key={country.cca3}
              >
                <div className=" border border-gray-500 rounded-xl">
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    className="items-center w-[300px] h-[200px] rounded-t-xl"
                  />
                  <div className="mt-[20px] mb-[20px]">
                    <h3 className=" font-bold mb-[10px]">
                      {country.name.common}
                    </h3>
                    <p>Population:{country.population}</p>
                    <p>Region:{country.region}</p>
                    <p>Capital:{country.capital}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
