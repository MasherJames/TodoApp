import React, { useState } from "react";
import AppRoutes from "./routes";
import { AppContext } from "./contex";

const App = () => {
  const [current, setCurrentUser] = useState("");

  const context = { current, setCurrentUser };
  return (
    <AppContext.Provider value={{ context }}>
      <AppRoutes />
    </AppContext.Provider>
  );
};

export default App;
