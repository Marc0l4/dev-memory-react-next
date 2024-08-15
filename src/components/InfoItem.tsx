type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <div className="my-5">
            <div className="text-sm text-gray-500">{label}</div>
            <div className="text-4xl font-bold text-gray-900">{value}</div>
        </div>
    );
}