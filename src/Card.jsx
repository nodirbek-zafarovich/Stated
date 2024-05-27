import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { switcher } = useSelector((state) => state.mode);
  return (
    <div
      onClick={() => navigate(`/modal/${item.name}`)}
      className={`${
        switcher ? "bg-dark border-[--dark-bg] text-white " : "bg-white "
      }  flex flex-col justify-end duration-300 rounded-lg  boxer`}
    >
      <div className="mb-[20px] border-b border-[--dark-bg] shadow-md">
        <img
          className="w-full h-[250px]"
          src={item.flags.png}
          alt={item.name}
        />
      </div>

      <div className="px-4 pb-[40px] shadow-md">
        <p className="mb-3 font-bold text-[18px]">{item.name}</p>
        <p className="font-semibold">
          Population: <span className="font-light">{item.population}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-light">{item.region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-light">{item.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
