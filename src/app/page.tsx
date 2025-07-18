"use client"
import Hero from "./components/hero";
import Waves from "./components/waves";

export default function Home() {
  return (

    <>
      <Hero />
      <div className="mt-[90vh]">
        <Waves />
      </div>

    </>
  );
}
