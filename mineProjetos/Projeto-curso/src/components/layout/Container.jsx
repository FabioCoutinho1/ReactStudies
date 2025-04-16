import React from "react";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  );
};

export default Container;
