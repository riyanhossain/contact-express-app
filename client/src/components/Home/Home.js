import React from "react";
import Cards from "./Cards";
import Frm from "./Frm";

function Home() {
  return (
    <main className=" ">
      <section>
        <div className="container">
          <Frm />
        </div>
      </section>
      <section>
        <Cards />
      </section>
    </main>
  );
}

export default Home;
