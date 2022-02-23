import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Account/Login";
import Admin from "./components/Admin/Admin";
import { AccountRoute } from "./common/components/AccountRoute";
import Notifications from "./common/components/Notification";
import Home from "./components/Home/Home";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Orders from "./components/Orders/Orders";
import Result from "./components/Result/Results";
import TopMenu from "./components/TopMenu/TopMenu";
import Users from "./components/Users/Users";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App" id="wrapper">
        <Notifications />
        <LeftMenu />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopMenu />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Admin />} >
                  <Route element={<AccountRoute />} >
                    <Route path={`/users`} element={<Users />} />
                    <Route path={`/results`} element={<Result />} />
                    <Route path={`/orders`} element={<Orders />} />
                  </Route>
                  <Route path={`/`} element={<Home />} />
                </Route>
                <Route path={`/login`} element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router >
  );
};

export default App;
