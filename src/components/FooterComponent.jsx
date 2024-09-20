export function FooterComponent() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p>&copy; 2024 Colégio Emilio. Todos os direitos reservados.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
                    <a href="#" className="hover:text-gray-400">Contatos</a>
                </div>
            </div>
        </footer>
    );
}