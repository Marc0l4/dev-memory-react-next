'use client'

import { GridArea } from "@/components/GridArea";
import { Info } from "@/components/Info";
import { DevMemoryProvider } from "@/contexts/DevMemoryContext";

const Page = () => {
  return (
    <div className="text-black w-full max-w-3xl m-auto flex flex-col py-12
      md:flex-row">
      <DevMemoryProvider>
        <Info />
        <GridArea />
      </DevMemoryProvider>
    </div>
  );
}

export default Page;