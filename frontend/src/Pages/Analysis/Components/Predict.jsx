import React from "react";
import PredictChart from "./PredictChart";

function Predict() {
  return (
    <>
      <div className="w-[77%] flex flex-col space-y-2 py-2">
        <div className="text-2xl">Predict</div>
        <hr className="h-[2px] bg-[#00000060]" />
        <PredictChart />
      </div>
    </>
  );
}

export default Predict;
