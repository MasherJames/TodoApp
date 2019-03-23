import React, { useState } from "react";
import AppRoutes from "./routes";
import { AppContext } from "./contex";

const App = () => {
  const [newUser, setNewUser] = useState("");

  const context = { newUser, setNewUser };
  return (
    <AppContext.Provider value={{ context }}>
      <AppRoutes />
    </AppContext.Provider>
  );
};

export default App;
