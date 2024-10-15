import React from "react";
import { MdAutoGraph } from "react-icons/md";
import { PiWarningCircle } from "react-icons/pi";
import { TbCirclesRelation } from "react-icons/tb";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
function NavBar({ setTab }) {
  return (
    <>
      <div className="flex flex-col space-y-3 w-1/5 p-5 bg-gray-300">
        <button
          className="px-7 py-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center "
          onClick={() => {
            setTab(0);
          }}
        >
          <MdAutoGraph size={24} />
          <span className="ml-3">Predict</span>
        </button>
        <button
          className="px-7 py-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center "
          onClick={() => {
            setTab(1);
          }}
        >
          <PiWarningCircle size={24} />
          <span className="ml-3">Check Anamoly</span>
        </button>
        <button
          className="px-7 py-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center "
          onClick={() => {
            setTab(2);
          }}
        >
          <TbCirclesRelation size={24} />
          <span className="ml-3">Co-relation</span>
        </button>
        <button
          className="px-7 py-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center"
          onClick={() => {
            setTab(3);
          }}
        >
          <FaBalanceScaleLeft size={24} />
          <span className="ml-3">Size Suggestion</span>
        </button>
        <button
          className="px-7 py-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center"
          onClick={() => {
            setTab(4);
          }}
        >
          <IoIosTrendingUp size={24} />
          <span className="ml-3">Trends</span>
        </button>
      </div>
    </>
  );
}

export default NavBar;
