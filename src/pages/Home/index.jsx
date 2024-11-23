import { NavLink } from 'react-router';
import Frame01 from '../../assets/img/frame-home-01.svg';
import Frame02 from '../../assets/img/frame-home-02.svg';
import './style.css';

function Home() {
    return (
        <div className='home'>
            <section className='home-header'>
                <div className='header-cabecalho'>
                    <img src={Frame01} alt="frame-01" />
                    <span>Estrelas do Amanhã</span>
                </div>
                
                <h1>Porque cada momento de <span>aprendizado</span> conta</h1>
                <h2>Inscreva seu filho em nossa escola e veja-o florescer em um ambiente acolhedor, seguro e estimulante.</h2>
            </section>

            <picture className='home-main-img'>
                <img src={Frame02} alt="frame-02" />
            </picture>

            <NavLink to="/formulario" className="btn-default">Acessar Formulário</NavLink>
        </div>
    );
}

export default Home;