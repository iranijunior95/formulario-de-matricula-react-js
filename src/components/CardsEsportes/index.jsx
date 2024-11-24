import Futebol from '../../assets/img/football.svg';
import Basquete from '../../assets/img/basketball-02.svg';
import Natacao from '../../assets/img/swimming.svg';
import Yoga from '../../assets/img/yoga-02.svg';
import Volley from '../../assets/img/volleyball.svg';
import Boxe from '../../assets/img/boxing-glove-01.svg';
import { useState } from 'react';
import './style.css';

function CardsEsportes() {
    const [esportes, setEsportes] = useState('futebol');

    return (
        <div className='radio-cards-esportes'>
            <div className='card-esportes-content'>
                <input 
                    type="radio" 
                    name="esporte" 
                    id="futebol" 
                    value="futebol" 
                    checked={esportes === 'futebol'}
                    onChange={(event) => setEsportes(event.target.value)}
                />

                <div className='card-esporte'>
                    <div className='radio-esporte'></div>
                    <img src={Futebol} alt="futebol" />
                    <span>Futebol</span>
                </div>
            </div>

            <div className='card-esportes-content'>
                <input 
                    type="radio" 
                    name="esporte" 
                    id="basquete" 
                    value="basquete"
                    checked={esportes === 'basquete'}
                    onChange={(event) => setEsportes(event.target.value)} 
                />

                <div className='card-esporte'>
                    <div className='radio-esporte'></div>
                    <img src={Basquete} alt="Basquete" />
                    <span>Basquete</span>
                </div>
            </div>

            <div className='card-esportes-content'>
                <input 
                    type="radio" 
                    name="esporte" 
                    id="natacao" 
                    value="natacao"
                    checked={esportes === 'natacao'}
                    onChange={(event) => setEsportes(event.target.value)} 
                />

                <div className='card-esporte'>
                    <div className='radio-esporte'></div>
                    <img src={Natacao} alt="Natação" />
                    <span>Natação</span>
                </div>
            </div>

            <div className='card-esportes-content'>
                <input 
                    type="radio" 
                    name="esporte" 
                    id="yoga" 
                    value="yoga"
                    checked={esportes === 'yoga'}
                    onChange={(event) => setEsportes(event.target.value)} 
                />

                <div className='card-esporte'>
                    <div className='radio-esporte'></div>
                    <img src={Yoga} alt="Yoga" />
                    <span>Yoga</span>
                </div>
            </div>

            <div className='card-esportes-content'>
                <input 
                    type="radio" 
                    name="esporte" 
                    id="volley" 
                    value="volley" 
                    checked={esportes === 'volley'}
                    onChange={(event) => setEsportes(event.target.value)}
                />

                <div className='card-esporte'>
                    <div className='radio-esporte'></div>
                    <img src={Volley} alt="Volley" />
                    <span>Volley</span>
                </div>
            </div>

            <div className='card-esportes-content'>
                <input 
                    type="radio" 
                    name="esporte" 
                    id="boxe" 
                    value="boxe"
                    checked={esportes === 'boxe'} 
                    onChange={(event) => setEsportes(event.target.value)}
                />

                <div className='card-esporte'>
                    <div className='radio-esporte'></div>
                    <img src={Boxe} alt="boxe" />
                    <span>Boxe</span>
                </div>
            </div>
        </div>
    );
}

export default CardsEsportes;