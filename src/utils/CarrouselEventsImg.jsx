import { useState } from "react";

export function CarrouselEventsImg() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://via.placeholder.com/300x200?text=Imagem+1",
        "https://via.placeholder.com/300x200?text=Imagem+2",
        "https://via.placeholder.com/300x200?text=Imagem+3"
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-full">
            <div className="overflow-hidden h-full">
                <img
                    src={images[currentIndex]}
                    alt={`Imagem ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-lg"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg"
            >
                &gt;
            </button>
        </div>
    );
}
