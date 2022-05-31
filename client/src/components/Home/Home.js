import React from "react";
import Cards from "./Cards";
import Frm from "./Frm";

function Home() {
  const arr =[1,2,3,4,5,6,7,8]
  return (
    <main className="flex flex-col lg:flex-row-reverse w-screen m-6 justify-center items-center lg:items-start">
      <section className="w-2/6 flex justify-center">
        <div >
          <Frm />
        </div>
      </section>
      <section className="w-4/6 flex flex-wrap justify-center gap-6 ">
        {
          arr.map(item => <Cards />)
        }
      </section>
    </main>
  );
}

export default Home;
