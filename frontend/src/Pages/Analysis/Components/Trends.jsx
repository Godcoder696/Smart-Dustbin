import React from "react";
import TrendsChart from "./TrendsChart";

function Trends() {
  return (
    <>
      <div className="w-[77%] flex flex-col space-y-2 py-2">
        <div className="text-2xl">Trends</div>
        <hr className="h-[2px] bg-[#00000060]" />
        <TrendsChart />
      </div>
    </>
  );
}

export default Trends;
