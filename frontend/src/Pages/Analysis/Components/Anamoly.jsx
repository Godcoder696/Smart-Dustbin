import React from "react";
import AnamolyChart from "./AnamolyChart";

function Anamoly() {
  return (
    <>
      <div className="w-[77%] flex flex-col space-y-2 py-2">
        <div className="text-2xl">Anamoly</div>
        <hr className="h-[2px] bg-[#00000060]" />
        <AnamolyChart />
      </div>
    </>
  );
}

export default Anamoly;
