import { useState } from "react";

export const SectionComponent = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">{title}</h1>
            
            <div className="mt-12">
                <ButtonCarousel />
            </div>
        </div>
    );
};

const ButtonCarousel = () => {
    const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
    const [startIndex, setStartIndex] = useState(0);
    const visibleButtons = 3; 


    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % buttons.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + buttons.length) % buttons.length);
    };

    const getVisibleButtons = () => {
        const visible = [];
        for (let i = 0; i < visibleButtons; i++) {
            visible.push(buttons[(startIndex + i) % buttons.length]);
        }
        return visible;
    };

    return (
        <div className="flex items-center mb-4">
            <button 
                className="text-yellow-700 font-bold py-2 px-4"
                onClick={handlePrev}
            >
                &lt; 
            </button>

            <div className={`flex transition-transform duration-300 ease-in-out gap-14`}>
                {getVisibleButtons().map((buttonTitle, index) => (
                    <button
                        key={index}
                        className="bg-white-400 text-blue-600 font-bold py-2 px-4 rounded-xl transition-all shadow-xl hover:bg-yellow-500 hover:text-white"
                        onClick={() => console.log(`Clicked ${buttonTitle}`)} 
                    >
                        {buttonTitle}
                    </button>
                ))}
            </div>

            <button 
                className="text-yellow-700 font-bold py-2 px-4"
                onClick={handleNext}
            >
                &gt; 
            </button>
        </div>
    );
};
