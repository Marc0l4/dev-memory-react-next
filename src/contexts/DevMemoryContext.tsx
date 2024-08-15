import { GridItemType } from "@/types/GridItemType";
import { createContext, ReactNode, useEffect, useState } from "react";
import { items } from "@/data/items";

type ContextType = {
    resetAndCreateGrid: () => void;
    handleItemClick: (id: number) => void;
    play: boolean;
    setPlay: (newPlay: boolean) => void;
    timeElapsed: number;
    setTimeElapsed: (newTimeElapsed: number) => void;
    moveCount: number;
    setMoveCount: (newMoveCount: number) => void;
    shownCount: number;
    setShownCount: (newShownCount: number) => void;
    gridItems: GridItemType[]
    setGridItems: (newGridItems: GridItemType[]) => void;
}
export const DevMemoryContext = createContext<ContextType | null>(null);

export const DevMemoryProvider = ({ children }: { children: ReactNode }) => {
    const [play, setPlay] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() => resetAndCreateGrid(), []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (play) setTimeElapsed(timeElapsed + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [play, timeElapsed]);

    useEffect(() => {
        if (shownCount === 2) {
            let opened = gridItems.filter(item => item.shown === true);
            if (opened.length === 2) {

                if (opened[0].item === opened[1].item) {
                    let tmpGrid = [...gridItems];
                    for (let i in tmpGrid) {
                        if (tmpGrid[i].shown) {
                            tmpGrid[i].permanentShown = true;
                            tmpGrid[i].shown = false;
                        }
                    }
                    setGridItems(tmpGrid);
                    setShownCount(0);
                } else {
                    setTimeout(() => {
                        let tmpGrid = [...gridItems];
                        for (let i in tmpGrid) {
                            tmpGrid[i].shown = false;
                        }
                        setGridItems(tmpGrid);
                        setShownCount(0);
                    }, 1000);
                }

                setMoveCount(moveCount => moveCount + 1);
            }
        }
    }, [shownCount, gridItems]);

    useEffect(() => {
        if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
            setPlay(false);
        }
    }, [moveCount, gridItems]);

    const handleItemClick = (id: number) => {
        if (play && id !== null && shownCount < 2) {
            let tmpGrid = [...gridItems];

            if (tmpGrid[id].permanentShown === false && tmpGrid[id].shown === false) {
                tmpGrid[id].shown = true;
                setShownCount(shownCount + 1);
            }

            setGridItems(tmpGrid);
        }
    }

    const resetAndCreateGrid = () => {
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        let tmpGrid: GridItemType[] = []
        for (let i = 0; i < (items.length * 2); i++) tmpGrid.push({ item: null, shown: false, permanentShown: false });

        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tmpGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmpGrid[pos].item = i;
            }
        }

        setGridItems(tmpGrid);

        setPlay(true);
    }

    return (
        <DevMemoryContext.Provider value={{
            resetAndCreateGrid, handleItemClick,
            play, setPlay,
            timeElapsed, setTimeElapsed,
            moveCount, setMoveCount,
            shownCount, setShownCount,
            gridItems, setGridItems
        }}>
            {children}
        </DevMemoryContext.Provider>
    );
}