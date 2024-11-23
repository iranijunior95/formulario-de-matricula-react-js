import { NavLink } from 'react-router';
import ArrowLeft02 from '../../assets/img/arrow-left-02.svg';
import SubtituloH3 from '../../components/SubtituloH3';
import GroupInput from '../../components/GroupInput';
import './style.css';

function Formulario() {
    return (
        <div className='formulario'>
            <section className='formulario-header'>
                <NavLink to="/" className='formulario-link-voltar'>
                    <img src={ArrowLeft02} alt="arrow left" /> Voltar
                </NavLink>

                <div className='formulario-titulos'>
                    <h1>Formulário de matrícula</h1>
                    <h2>Preencha os dados abaixo para matricular seu filho na escola de educação infantil Estrelas do Amanhã.</h2>
                </div>
            </section>

            <section className='formulario-info-crianca'>
                <SubtituloH3>Informações da criança</SubtituloH3>

                <div className='fomulario-group-form'>
                    <label htmlFor="nomeCompleto">Nome completo</label>
                    <GroupInput
                        nameInput="nomeCompleto" 
                        inputType="text"
                    />
                </div>
                
                <div className='fomulario-group-form'>
                    <label htmlFor="dataNascimento">Data de nascimento</label>
                    <GroupInput
                        nameInput="dataNascimento" 
                        inputType="text"
                    />
                </div>

                <div className='fomulario-group-form'>
                    <label htmlFor="sexo">Sexo</label>
                    <select name="sexo" id="sexo">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>

                <div className='fomulario-group-form'>
                    <label htmlFor="infoMedica">Informações médicas</label>
                    <textarea name="infoMedicas" id="infoMedicas" rows="4" cols="50"></textarea>
                </div>

                <div className='fomulario-group-form'>
                    <span className='span-input-file'>Certidão de nascimento</span>
                    <label htmlFor="certidaoNascimento" className='label-input-file'></label>
                    <input type="file" name="certidaoNascimento" id="certidaoNascimento" className='input-file' />
                </div>
            </section>

            <section className='formulario-endereco-residencial'>
                <SubtituloH3>Endereço residencial</SubtituloH3>
            </section>
            
        </div>
    );
}

export default Formulario;