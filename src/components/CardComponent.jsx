export function CardComponent({ selectedEvento, onEventoClick }) {
    const eventos = ["Aquario SP", "Bertioga", "Tamar"];

    return (
        <div className="container-main min-h-screen flex flex-col items-center pt-5">
            <h3 className={"text-white font-bold text-6xl"}>Excursões</h3>
            <div id="card" className="combined-container bg-yellow-100 border-3 border-yellow-500 w-full md:w-3/4 lg:w-1/2 my-5 p-5 box-border">
                <div className="flex justify-center w-full container-eventos mb-5">
                    <ul className="flex flex-wrap gap-3 md:gap-5">
                        {eventos.map((evento, index) => (
                            <li key={index}>
                                <button
                                    className={`cursor-pointer px-3 md:px-4 py-2 rounded-lg shadow ${selectedEvento === evento ? 'bg-white-600 font-semibold text-blue-400' : 'bg-white-400 text-blue-400 font-semibold'}`}
                                    onClick={() => onEventoClick(evento)}
                                >
                                    {evento}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="section-container flex flex-col md:flex-row items-center p-2 border-t-2 border-yellow-500 gap-5 h-auto md:h-96">
                    <div className="box-image">
                        <img src="/img/fotobertioga.jpg" alt="Bertioga" height={"100px"} />
                    </div>
                    <div className="text-content">
                        No Dia Mundial dos Oceanos, celebramos a beleza e a importância dos nossos mares!
                        Nossos alunos tiveram a oportunidade incrível de explorar Bertioga e aprender mais sobre os oceanos e sua importância para a sociedade.
                        Durante o passeio, mergulhamos no conhecimento sobre a biodiversidade marinha, a conservação ambiental e a relevância dos oceanos para a vida no planeta. Foi uma experiência enriquecedora que conectou teoria e prática, despertando ainda mais a curiosidade e o respeito pelos nossos recursos naturais.
                        Que possamos todos refletir sobre a importância de proteger e preservar nossos oceanos, garantindo um futuro sustentável para as próximas gerações." {selectedEvento}
                    </div>
                </div>
            </div>
        </div>
    );
}