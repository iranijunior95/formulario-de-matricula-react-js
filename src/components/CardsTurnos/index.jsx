import Cloud02 from '../../assets/img/sun-cloud-02.svg';
import Sun02 from '../../assets/img/sun-02.svg';
import { useState } from 'react';
import './style.css';

function CardsTurnos() {
    const [radio, setRadio] = useState('manha');

    return (
        <div className='cards-radios'>
            <div className='card-turno-content'>
                <input 
                    type="radio" 
                    name="turno" 
                    id="manha"
                    value="manha"
                    checked={radio === 'manha'}
                    onChange={(event) => setRadio(event.target.value)} 
                />

                <div className='card-turno'>
                    <div className='radio-turno'></div>
                    <img src={Cloud02} alt="cloud 02" />
                    <span>Manhã</span>
                </div>
            </div>

            <div className='card-turno-content'>
                <input 
                    type="radio" 
                    name="turno" 
                    id="tarde"
                    value="tarde"
                    checked={radio === 'tarde'}
                    onChange={(event) => setRadio(event.target.value)} 
                />

                <div className='card-turno'>
                    <div className='radio-turno'></div>
                    <img src={Sun02} alt="sun 02" />
                    <span>Tarde</span>
                </div>
            </div>
        </div>
    );
}

export default CardsTurnos;