import { useContext } from "react";
import { Button } from "./Button";
import { InfoArea } from "./InfoArea";
import { DevMemoryContext } from "@/contexts/DevMemoryContext";

export const Info = () => {
    const memory = useContext(DevMemoryContext);

    if (!memory) return false;

    return (
        <div className="flex flex-col w-auto items-center
            md:mb-14">
            <a href="" className="block">
                <img src="/assets/devmemory_logo.png" className="w-52" />
            </a>

            <InfoArea />

            <Button icon={'/assets/svgs/restart.svg'} label="Reiniciar" onClick={memory.resetAndCreateGrid} />
        </div>
    );
}