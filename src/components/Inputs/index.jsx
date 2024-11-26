import { useState } from 'react';
import IconAlert from '../../assets/img/alert-circle.svg';
import IconFile from '../../assets/img/file-01-stroke-rounded.svg';
import './style.css';

function Inputs(props) {
    const [descricaoFile, setDescricaoFile] = useState('');

    function validaClassNameInput(disabled, error) {
        if(disabled & error || !disabled & error) {
            return 'div-input-component input-error';
        }
        
        if(disabled & !error) {
            return 'div-input-component input-disabled';
        }
        
        return 'div-input-component';
    }

    function validSpanMenssagem(error, message) {
        if(message) {
            return error ? <span><img src={IconAlert} alt="icone alert" /> {message}</span> : <span>{message}</span>;
        }
    }

    switch (props.type) {
        case 'text':
            return (
                <div className={validaClassNameInput(props.disabled, props.error)}>
                    <label htmlFor={props.labelForInputNameId}>{props.label}</label>
                    <input 
                        type="text" 
                        name={props.labelForInputNameId} 
                        id={props.labelForInputNameId}
                        placeholder={props.placeholder ? props.placeholder : ''}
                        disabled={props.disabled ? true : false}
                    />
                    {validSpanMenssagem(props.error, props.message)}
                </div> 
            );

        case 'date':
            return (
                <div className={validaClassNameInput(props.disabled, props.error)}>
                    <label htmlFor={props.labelForInputNameId}>{props.label}</label>
                    <input 
                        type="date" 
                        name={props.labelForInputNameId} 
                        id={props.labelForInputNameId}
                        disabled={props.disabled ? true : false}
                    />
                    {validSpanMenssagem(props.error, props.message)}
                </div> 
            );

        case 'textarea':
            return (
                <div className='div-input-component'>
                    <label htmlFor={props.labelForInputNameId}>{props.label}</label>
                    <textarea 
                        name={props.labelForInputNameId} 
                        id={props.labelForInputNameId}
                        rows="4" 
                        cols="50"
                    ></textarea>
                </div>
            );

        case 'file': 
            return (
                <div className='div-input-component'>
                    <span className='input-file-label'>{props.label}</span>
                    <label htmlFor={props.labelForInputNameId} className='input-file-content'></label>
                    <input 
                        type="file" 
                        name={props.labelForInputNameId} 
                        id={props.labelForInputNameId} 
                        className='input-file'
                        onChange={(event) => setDescricaoFile(event.target.files[0].name)} 
                    />
                    
                    {descricaoFile === '' ? '' : <span className='input-file-descricao'><img src={IconFile} alt='file descriptio'/>{descricaoFile}</span>}
                </div>
            );

        case 'select':
            return (
                <div className='div-input-component'>
                    <label htmlFor={props.labelForInputNameId}>{props.label}</label>
                    <select 
                        name={props.labelForInputNameId}
                        id={props.labelForInputNameId}
                    >
                        {props.options.map((opt) => {
                            return(
                                <option key={opt.value} value={opt.value}>{opt.option}</option>
                            );
                        })}
                    </select>
                </div>
            );
    }
}

export default Inputs;