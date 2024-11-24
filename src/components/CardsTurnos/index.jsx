import Cloud02 from '../../assets/img/sun-cloud-02.svg';
import Sun02 from '../../assets/img/sun-02.svg';
import { useState } from 'react';
import './style.css';

function CardsTurnos() {
    const [radio, setRadio] = useState('manhã');

    return (
        <div className='cards-radios'>
            <div className={radio === 'manhã' ? 'cards check-div-radio' : 'cards'}>
                <input 
                    type="radio" 
                    id="manha" 
                    name="horario" 
                    value="manhã"
                    checked={radio === 'manhã'}
                    onChange={(event) => setRadio(event.target.value)}
                />

                <div className='div-radio'></div>
                <img src={Cloud02} alt="cloud 02" />
                <span>Manhã</span>
            </div>

            <div className={radio === 'tarde' ? 'cards check-div-radio' : 'cards'}>
                <input 
                    type="radio" 
                    id="tarde" 
                    name="horario" 
                    value="tarde"
                    checked={radio === 'tarde'}
                    onChange={(event) => setRadio(event.target.value)}
                />

                <div className='div-radio'></div>
                <img src={Sun02} alt="sun 02" />
                <span>Tarde</span>
            </div>
        </div>
    );
}

export default CardsTurnos;