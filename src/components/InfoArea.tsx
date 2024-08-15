import { formatTimeElapsed } from "@/helpers/formatTipeElapsed";
import { InfoItem } from "./InfoItem";
import { useContext } from "react";
import { DevMemoryContext } from "@/contexts/DevMemoryContext";

export const InfoArea = () => {
    const memory = useContext(DevMemoryContext);

    if (!memory) return false;

    return (
        <div className="w-full my-3 flex flex-row justify-around text-center per
        md:text-left md:flex-col">

            <InfoItem value={formatTimeElapsed(memory.timeElapsed)} label='Tempo' />
            <InfoItem value={memory.moveCount.toString()} label='Movimentos' />
        </div>
    );
}