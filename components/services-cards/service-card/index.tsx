import {ReactElement} from "react";

function ServiceCard({
                         text,
                         index,
                         display,
                         icon
                     }: { text: string, index: number, display: string, icon: ReactElement }) {
    return (
        <>
            <div style={{display: display}}
                 className="border-md slide p-4 ">
                <div className="w-full flex flex-row justify-between align-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="16" viewBox="0 0 122 16"
                             fill="none">
                            <rect x="1.96179" y="0.5" width="13.9678" height="15" fill="#FFAFAF" stroke="black"
                                  strokeWidth={index === 0 ? 2 : 1}/>
                            <rect x="27.4095" y="0.5" width="14.9678" height="15" fill="#FFE9AF" stroke="black"
                                  strokeWidth={index === 1 ? 2 : 1}/>
                            <rect x="53.3571" y="0.5" width="14.9678" height="15" fill="#DCFFAF" stroke="black"
                                  strokeWidth={index === 2 ? 2 : 1}/>
                            <rect x="80.3027" y="0.5" width="14.9678" height="15" fill="#AFECFF" stroke="black"
                                  strokeWidth={index === 3 ? 2 : 1}/>
                            <rect x="106.25" y="0.5" width="14.9678" height="15" fill="#D2AFFF" stroke="black"
                                  strokeWidth={index === 4 ? 2 : 1}/>
                        </svg>
                        <p className="body2 mt-4">{text}</p>
                    </div>
                    <div className="h-20 ">
                        {icon}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;