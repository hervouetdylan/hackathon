import React from "react"
import { useState, useMemo } from "react";
import Router from "./02.navigation/Router"
import UserContext from "./03.globals/04.Context/UserContext"

function App() {

  const initialUserContext = () =>
    JSON.parse(localStorage.getItem("userContext")) || null;
    const [userContext, setUserContext] = useState(initialUserContext);

    const userValue = useMemo(() => {
      return { userContext, setUserContext };
    }, [userContext]);

  return (
    <div className="test">
      <UserContext.Provider value={userValue}>
      <Router />
      </UserContext.Provider>
    </div>
  )
}

export default App
