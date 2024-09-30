import logo from "../../public/img/logo.png";

/* eslint-disable */
export const HeaderComponent = () => {
    const navigationEvents = ["Gincanas", "Palestras", "Exercusões", "Sarau", "Feira Cultural"];

    const handleItemClick = (event) => {
        console.log(event);
        console.log(window.location.href);
    };

    const handleLogoClick = () => {
        window.location.href = window.location.href;
    };

    return (
        <div className="flex flex-col md:flex-row w-full justify-evenly items-center h-20 bg-white z-20 relative">
            <img
                src={logo}
                width={"70px"}
                onClick={handleLogoClick}
                className="cursor-pointer"
            />
            <nav className="w-full md:w-auto">
                <ul className="flex flex-row gap-4 md:gap-10 justify-center md:justify-end items-center">
                    {navigationEvents.map((event, index) => (
                        <li
                            key={index}
                            className="cursor-pointer text-lg md:text-base text-white font-bold md:text-blue-600 hover:text-yellow-300 hover:font-semibold hover:border-b-2 hover:border-yellow-300 transition duration-300 uppercase"
                            onClick={() => handleItemClick(event)}
                        >
                            {event}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
