import React from "react";
import { Route, Routes } from "react-router-dom";
import  AuthPage  from "./components/AuthPage/AuthPage.jsx";

const App = () => {
  return (
    <Routes>
      {/* <div className="App"> */}

      {/* <Route exact path="/">
            {!isLoggedIn ? (
              <Redirect to="/account" />
            ) : (
              <Redirect to="/email/inbox" />
            )}
          </Route> */}

      <Route exact path="/account" element={<AuthPage />} />
      {/* {!isLoggedIn ? <AuthPage /> : <Redirect to="/email/inbox" />} */}
      {/* <AuthPage/> */}
      {/* </Route> */}

      {/* <Route path="/email">
          
            {isLoggedIn ? <EmailPage /> : <Redirect to="/account" />}
          </Route> */}

      {/* </div> */}
    </Routes>
  );
};

export default App;
