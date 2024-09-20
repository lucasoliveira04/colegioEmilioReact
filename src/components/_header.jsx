import { Link } from 'react-scroll';

export function HeaderComponent({ onEventoClick }) {
    const eventos = ["Gincanas", "Excursões", "Palestras", "Sarau", "Feira Cultural"];

    return (
        <header className="header text-white h-screen bg-cover bg-center" style={{ backgroundImage: "url('/public/img/fundo.jpg')" }}>
            <nav className="h-20 flex justify-around items-center bg-blue-900">
                <div>
                    <img src="/img/logo.png" className="logo h-full w-auto cursor-pointer" />
                </div>

                <div className="flex">
                    <ul className="flex gap-4">
                        {eventos.map((evento, index) => (
                            <li key={index} className="cursor-pointer hover:text-gray-400">
                                <Link
                                    to="card"
                                    smooth={true}
                                    duration={500}
                                    onClick={() => onEventoClick(evento)}
                                >
                                    {evento}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}