import { useRef, useState } from "react"; 
import { HeaderComponent } from "./components/header/header";
import { SectionComponent } from "./components/section/section";
import bodyImg from "./public/img/background.png";

function App() {
    const excursionTitles = ["Tamár", "Bertioga", "Aquário SP"]; 
    const [sectionTitle, setSectionTitle] = useState(excursionTitles[0]); 
    const sectionRef = useRef(null)

    const handleTitleChange = (newTitle) => {
        setSectionTitle(newTitle); 
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="min-h-screen flex flex-col">
            <HeaderComponent onTitleChange={handleTitleChange}/>

            <div className="flex-grow relative z-0 shadow-[0px_10px_15px_-3px_#1A4E73] h-full">
                <img
                    src={bodyImg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="m-40"></div>

            <div className="h-96" ref={sectionRef}>
                <SectionComponent title={sectionTitle}/> 
            </div>
        </div>
    );
}

export default App;
