import { HeaderComponent } from "./components/header/header";
import bodyImg from "./public/img/background.png";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderComponent />

            <div className="flex-grow h-[calc(100vh-80px)] relative z-0">
                <img
                    src={bodyImg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default App;
