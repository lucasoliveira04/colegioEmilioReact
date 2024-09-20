import { useState, useEffect } from "react";
import "../public/css/style.css";
import { HeaderComponent } from "./components/_header";
import { CardComponent } from "./components/CardComponent.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";

function App() {
    const [selectedEvento, setSelectedEvento] = useState("Palestra");

    const handleEventoClick = (evento) => {
        setSelectedEvento(evento);
        const card = document.getElementById("card");
        if (card) {
            card.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollPosition / documentHeight) * 100;

            if (scrollPercentage < 50) {
                document.body.classList.add('scroll-start');
                document.body.classList.remove('scroll-end');
            } else {
                document.body.classList.add('scroll-end');
                document.body.classList.remove('scroll-start');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <HeaderComponent onEventoClick={handleEventoClick} />
            <CardComponent selectedEvento={selectedEvento} onEventoClick={handleEventoClick} />
            <FooterComponent />
        </div>
    );
}

export default App;