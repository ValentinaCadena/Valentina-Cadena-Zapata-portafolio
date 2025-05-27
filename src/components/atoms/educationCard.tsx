interface EducationCardProps {
    title: string;
    leftText: string;
    rightText: string;
};

const EducationCard = ({ title, leftText, rightText }: EducationCardProps) => {
    return (
        <div className=" w-full h-auto text-[#2b2b2b] space-y-5 text-center">
            <h1 className="font-semibold text-lg">{title}</h1>
            <div className="flex gap-x-6">
                {leftText}<span className="bg-violet-500 text-white text-xs p-1">{rightText}</span>
            </div>
        </div>
    );
};

export default EducationCard;