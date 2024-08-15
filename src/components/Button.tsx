type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onClick }: Props) => {
    return (
        <div onClick={onClick} className="mb-10 w-48 h-12 flex bg-indigo-600 rounded-lg cursor-pointer opacity-100 transition-all hover:opacity-80
            md:mb-0">
            {icon &&
                <div className="h-12 flex justify-center items-center border-r border-white/20 px-4">
                    <img src={icon} alt="" className="h-5" />
                </div>
            }
            <div className="h-12 text-white flex justify-center items-center flex-1 px-5">{label}</div>
        </div>
    );
}