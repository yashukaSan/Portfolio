import Comp1 from './sections/Hero'
import Comp2 from './sections/Skills'
import Comp3 from "./sections/Experience";
import Comp4 from './sections/Projects'
import Comp5 from './sections/Education'
import Comp6 from "./sections/Activities";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid gap-12 bg-black text-blue-200" >
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Comp4 />
        <Comp5 />
        <Comp6 />
      </section>
    </>
  );
}
