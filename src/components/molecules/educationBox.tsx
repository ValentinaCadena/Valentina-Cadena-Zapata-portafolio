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
        <div className={`${className} flex space-x-32 p-12`}>
            <div>
                <EducationCard title={title} leftText={leftText} rightText={rightText}></EducationCard>
            </div>
            <div className="text-start w-2/3 space-y-5">
                <h1 className="text-[#2b2b2b] text-lg">{rightTitle}</h1>
                <p className="text-[#767676]">{rightDescription}</p>
            </div>
        </div>
    );
};

export default EducationBox;