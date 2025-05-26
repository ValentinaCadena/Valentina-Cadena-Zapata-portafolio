import { Icon } from "@iconify/react/dist/iconify.js";

interface KnowledgeBoxProps {
    title: string;
    text: string;
    icon?: string;
    iconColor: string;
    redirecText?: string;
};

const KnowledgeBox = ({ title, text, icon, iconColor, redirecText }: KnowledgeBoxProps) => {
    return (
        <div className="bg-white w-full flex flex-col items-center text-center p-8 gap-2">
            {icon && (<Icon icon={icon} color={iconColor} width={68} height={68}></Icon>)}
            <h1 className="text-[#2B2B2B] font-semibold">{title}</h1>
            <p className="text-[#767676] text-sm mb-4">{text}</p>
            <a className="text-purple-400 hover:text-purple-500 text-xs" href="http://mercadolibre.com" target="_blank">{redirecText}</a>
        </div>
    )
};

export default KnowledgeBox;