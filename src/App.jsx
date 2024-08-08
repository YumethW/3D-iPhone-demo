import React from "react";
import NavBar from "./componants/NavBar";
import Hero from "./componants/Hero";
import Highlights from "./componants/Highlights";
import Model from "./componants/Model";
import * as Sentry from "@sentry/react"

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
