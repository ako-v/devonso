import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "@/components/PrivateRoute";
import Main from "@/layouts/main";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import { browserRoutes } from "@/constants/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={browserRoutes.home} element={<PrivateRoute />}>
          <Route path={browserRoutes.home} element={<Main />}>
            <Route path={browserRoutes.home} element={<Dashboard />} />
          </Route>
        </Route>
        <Route path={browserRoutes.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
