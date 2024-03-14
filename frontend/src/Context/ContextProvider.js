const { useState, useContext } = require("react");
const { createContext } = require("react");

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data,setData] = useState([]);

  return (
    <Context.Provider
      value={{
        data,
        setData
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
