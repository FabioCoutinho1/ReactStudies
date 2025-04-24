import React from "react";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <main className=" p-4">
      <Outlet />
    </main>
  );
};

export default Container;
