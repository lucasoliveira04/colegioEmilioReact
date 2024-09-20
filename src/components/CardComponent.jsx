export function CardComponent({ selectedEvento, onEventoClick }) {
    const eventos = ["Palestras", "Gincanas", "Excursões", "Sarau", "Feira Cultural"];

    return (
        <div className="container-main min-h-screen flex flex-col items-center">
            <div id="card" className="combined-container bg-white border-3 border-yellow-500 w-full md:w-3/4 lg:w-1/2 my-5 p-5 box-border">
                <div className="flex justify-center w-full container-eventos mb-5">
                    <ul className="flex flex-wrap gap-3 md:gap-5">
                        {eventos.map((evento, index) => (
                            <li key={index}>
                                <button
                                    className={`cursor-pointer px-3 md:px-4 py-2 rounded-lg shadow ${selectedEvento === evento ? 'bg-pink-600 font-semibold text-white' : 'bg-pink-400'}`}
                                    onClick={() => onEventoClick(evento)}
                                >
                                    {evento}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="section-container flex flex-col md:flex-row items-center p-2 border-t-2 border-yellow-500 gap-5 h-auto md:h-96">
                    <div className="box-image w-full md:w-2/5 h-40 md:h-full bg-black ml-0 md:ml-4"></div>
                    <div className="border-b-black">
                        Descrição do evento {selectedEvento}
                    </div>
                </div>
            </div>
        </div>
    );
}