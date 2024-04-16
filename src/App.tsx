
import minhaFoto from "./assets/eu.jpg";
import gta from "./assets/projeto-gta.png";
import pokemon from "./assets/projeto-listagem-pokemon.png";
import warzone from "./assets/projeto-warzone.png";
import xMen from "./assets/projeto-x-men.png";
import './css/reset.css';
import './css/styles.css';
import './css/responsivo.css';



function App() {
  return (
    <div>
      <body>
          <header className='cabecalho'>
              <a href="#">
                  <h1 className='logo'>JC</h1>
              </a>
              <nav className='menu'>
                  <ul>
                    <li>
                      <a href="#projetos">Meus Projetos</a>
                    </li>
                  </ul>
              </nav>
          </header>

          <section className='home'>
              <div className='informacoes'>
                  <h1>Olá sou Jardeson Carvalho</h1>
                  <p>Um desenvolvedor frontend em formação apaixonado por tecnologia.</p>
                  <p>Estou sempre me desafiando com novos projetos e buscando feedback na comunidade de programação, além de compartilhar meus conhecimentos. 😁</p>

                  <ul className='redes-sociais'>
                    <li>
                      <a href="https://www.linkedin.com/in/jardeson-carvalho-18263b144/" title='Ir para o linkedin' target='_blank'>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://github.com/jardesonvc" title='Ir para o Github' target='_blank'>
                        <i className='fab fa-github'></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/carvalho_1292" title='Ir para o Instagram' target='_blank'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
              </div>
              <div className="container-foto">
                <div className="foto sombra-interna">
                  <img
                    src={minhaFoto} alt="foto do portfólio do Jardeson"/>
                </div>
              </div>
          </section>

          <section className='projetos' id='projetos'>
          <h2 className="titulo">Meus projetos</h2>
            
            <div className="container-projetos">
              <div className="projeto ativo">
                <a href="https://github.com/jardesonvc/projeto-gta-main" target="_blank">
                  <img
                    src={gta}
                    alt="Projeto Landing page GTA"/>
                  <h3>Projeto 1</h3>

                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto ativo">
                <a
                  href="https://github.com/jardesonvc/listagem-pokemon"
                  target="_blank">
                  <img
                    src={pokemon}
                    alt="Projeto listagem de pokemons"/>
                  <h3>Projeto 2</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto ativo">
                <a
                  href="https://github.com/jardesonvc/projeto-warzone"
                  target="_blank">
                  <img
                    src={warzone}
                    alt="Projeto Warzone"
                  />
                  <h3>Projeto 3</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto ativo">
                <a href="https://github.com/jardesonvc/x-men-szpc" target="_blank">
                  <img
                    src={xMen}
                    alt="Projeto seletor de personagens x-men"
                  />
                  <h3>Projeto 4</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto">
                <a href="#" target="_blank">
                  <img
                    src="https://via.placeholder.com/515X700"
                    alt="Projeto landing page Mario"
                  />
                  <h3>Projeto 5</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto">
                <a href="#" target="_blank">
                  <img
                    src="https://via.placeholder.com/515X700"
                    alt="Capa do projeto"
                  />
                  <h3>Projeto 6</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto">
                <a href="#" target="_blank">
                  <img
                    src="https://via.placeholder.com/515X700"
                    alt="Capa do projeto"
                  />
                  <h3>Projeto 7</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>

              <div className="projeto">
                <a href="#" target="_blank">
                  <img
                    src="https://via.placeholder.com/515X700"
                    alt="Capa do projeto"
                  />
                  <h3>Projeto 8</h3>
                  <div className="informacoes-projeto">
                    <p>Projeto feito usando HTML, CSS e JavaScript</p>
                    <p>🔗 Ver no GitHub Pages</p>
                  </div>
                </a>
              </div>
            </div>

            <button className="btn-mostrar-projetos">Mostrar mais</button>
          </section>
           
      </body>
    </div>
  );
}

export default App;
