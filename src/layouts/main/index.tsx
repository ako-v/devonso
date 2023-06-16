import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Header from "@/layouts/header";
import Sidebar from "@/layouts/sidebar";

const Main = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-start w-full mb-1">
        <Sidebar />
        <Paper sx={{ bgcolor: "background.default" }} className="w-full h-[calc(100vh-52px)] overflow-y-auto overflow-x-clip">
          <Suspense fallback={<>...Loading</>}>
            <Outlet />
          </Suspense>
        </Paper>
      </div>
    </>
  );
};

export default Main;
