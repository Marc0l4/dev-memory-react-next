import { items } from "@/data/items";
import { GridItemType } from "@/types/GridItemType";

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`
                    h-28 rounded-3xl flex justify-center items-center cursor-pointer
                    ${item.permanentShown || item.shown ? 'bg-indigo-600' : 'bg-gray-200'}
                `}
        >
            {item.permanentShown === false && item.shown === false &&
                <img src='/assets/svgs/b7.svg' className={`
                        w-10 h-10 
                        ${item.permanentShown || item.shown ? 'opacity-0' : 'opacity-10'}
                    `}
                />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <img src={items[item.item].icon} className="w-10 h-10" />
            }
        </div>
    );
}