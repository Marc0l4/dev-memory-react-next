import { DevMemoryContext } from "@/contexts/DevMemoryContext";
import { useContext } from "react";
import { GridItem } from "./GridItem";

export const GridArea = () => {
    const memory = useContext(DevMemoryContext);

    if (!memory) return false;

    return (
        <div className="flex-1 flex mx-5 justify-center
            md:justify-end md:mx-0">
            <div className="w-full max-w-md grid grid-cols-3 gap-3
                md:grid-cols-4">
                {memory.gridItems.map((item, id) => (
                    <GridItem
                        key={id}
                        item={item}
                        onClick={() => memory.handleItemClick(id)}
                    />
                ))}
            </div>
        </div>
    );
}