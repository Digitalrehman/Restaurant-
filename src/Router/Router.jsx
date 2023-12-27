// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Page from "../Components/Page/Page";
import Items from "../Components/Page/Items";
import Famous_item from "../Components/Page/Famous_item";
import Service from "../Components/Page/service";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Famous_item" element={<Famous_item />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </>
  );
};

export default Router;
