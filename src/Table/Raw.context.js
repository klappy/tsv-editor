import React, {useState} from 'react';

// File context
export const RawContext = React.createContext();

export function RawContextProvider({children}) {
  const [raw, setRaw] = useState(false);

  const toggleRaw = () => {
    setRaw(!raw)
  };

  const value = {
    raw,
    toggleRaw,
  };

  return (
    <RawContext.Provider value={value}>
      {children}
    </RawContext.Provider>
  );
};
