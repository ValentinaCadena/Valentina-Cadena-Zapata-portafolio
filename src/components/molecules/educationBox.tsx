import EducationCard from "../atoms/educationCard";

interface EducationBoxProps {
    title: string;
    leftText: string;
    rightText: string;
    rightTitle: string;
    rightDescription: string;
    className?: string;
}

const EducationBox = ({ className, title, leftText, rightText, rightTitle, rightDescription }: EducationBoxProps) => {
    return (
        <div className={`${className} flex p-2 space-x-2 sm:py-4 sm:space-x-4 md:p-4 lg:space-x-16 lg:p-12 xl:space-x-32`}>
            <div>
                <EducationCard title={title} leftText={leftText} rightText={rightText}></EducationCard>
            </div>
            <div className="text-start w-2/3 space-y-5">
                <h1 className="text-[#2b2b2b] text-base sm:text-lg">{rightTitle}</h1>
                <p className="text-[#767676]  sm:line-clamp-none text-sm sm:text-base">{rightDescription}</p>
            </div>
        </div>
    );
};

export default EducationBox;