import FetchData from "@/components/FetchData";
import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/learnUseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Hello Next Js </p>
        <LearnLink/>
        {/* <LearnUseRouter/> */}
        {/* <FetchData/> */}
      </div>
    </main>
  );
}
