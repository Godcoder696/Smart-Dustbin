const { useState, useContext } = require("react");
const { createContext } = require("react");

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data,setData] = useState([]);
  const [crntLocation, setCrntLocation]= useState("");
  const [selectedLocation,setSelectedLocation]= useState("");
  const [crntLat,setCrntLat]= useState(0);
  const [crntLng,setCrntLng]= useState(0);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        crntLocation,
        setCrntLocation,
        crntLat,
        setCrntLat,
        crntLng,
        setCrntLng,
        selectedLocation,
        setSelectedLocation
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const ContextState = () => {
  return useContext(Context);
};

export default ContextProvider;
