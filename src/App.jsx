import "../public/css/style.css";
import { CarrouselEventsImg } from "./utils/CarrouselEventsImg";
import { DescriptionEvents, HeaderEvents } from "./utils/HeaderEvents";

function App() {
  const repetedtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet sapien, vel interdum orci. Praesent cursus nulla non diam efficitur, sit amet tincidunt turpis facilisis. Cras ac orci fringilla, finibus odio in, efficitur nisi. Curabitur nec metus non quam suscipit interdum. Ut aliquet enim at fermentum pharetra. Fusce scelerisque orci quis libero vehicula, nec dictum urna laoreet. '.repeat(2);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="container-nav-eventos">
        <a href="#" onClick={() => scrollToSection('nosso-mar')}>Nosso Mar</a>
        <a href="#" onClick={() => scrollToSection('sarau')}>Sarau</a>
        <a href="#" onClick={() => scrollToSection('feira-de-ciencias')}>Feira de Ciências</a>
      </div>
      <br /> <br />
      <div className="grid-container">
        <div id="nosso-mar" className="title fullscreen">
          <HeaderEvents title={"Nosso Mar"} />
        </div>
        <div className="description fullscreen">
          <DescriptionEvents text={repetedtext} />
        </div>
        <div className="photos fullscreen">
          <CarrouselEventsImg />
        </div>

        <br /> <br /> <br /> <br />
        <div id="sarau" className="title fullscreen reverse">
          <HeaderEvents title={"Sarau"} />
        </div>
        <div className="photos fullscreen reverse">
          <CarrouselEventsImg />
        </div>
        <div className="description fullscreen reverse">
          <DescriptionEvents text={repetedtext} />
        </div>
        
        <br /> <br /> <br /> <br />
        <div id="feira-de-ciencias" className="title fullscreen">
          <HeaderEvents title={"Feira de Ciências"} />
        </div>
        <div className="description fullscreen">
          <DescriptionEvents text={repetedtext} />
        </div>
        <div className="photos fullscreen">
          <CarrouselEventsImg />
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2024 Colégio Emilio. Todos os direitos reservados.</p>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
