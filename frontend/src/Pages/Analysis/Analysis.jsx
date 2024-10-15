import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Predict from "./Components/Predict";
import Anamoly from "./Components/Anamoly";
import Relation from "./Components/Relation";
import Suggestion from "./Components/Suggestion";
import Trends from "./Components/Trends";

function Analysis() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="flex h-screen w-screen space-y-3 space-x-3">
        <NavBar setTab={setTab} />
        {/* <hr className="bg-gray-500 h-[2px]" /> */}
        {tab == 0 ? (
          <Predict />
        ) : tab == 1 ? (
          <Anamoly />
        ) : tab == 2 ? (
          <Relation />
        ) : tab == 3 ? (
          <Suggestion />
        ) : (
          <Trends />
        )}
      </div>
    </>
  );
}

export default Analysis;
