import { NavLink } from 'react-router';
import ArrowLeft02 from '../../assets/img/arrow-left-02.svg';
import SubtituloH3 from '../../components/SubtituloH3';
import GroupInput from '../../components/GroupInput';
import CardsTurnos from '../../components/CardsTurnos';
import CardsEsportes from '../../components/CardsEsportes';
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

                <div className='fomulario-group-form'>
                    <label htmlFor="cep">CEP</label>
                    <GroupInput
                        nameInput="cep" 
                        inputType="text"
                    />
                </div>

                <div className='div-formulario-endereco'>
                    <div className='fomulario-group-form'>
                        <label htmlFor="rua">Rua</label>
                        <GroupInput
                            nameInput="rua" 
                            inputType="text"
                            disabled="disabled"
                        />
                    </div>

                    <div className='fomulario-group-form'>
                        <label htmlFor="cep">Número</label>
                        <GroupInput
                            nameInput="numero" 
                            inputType="text"
                        />
                    </div>
                </div>

                <div className='div-formulario-endereco'>
                    <div className='fomulario-group-form'>
                        <label htmlFor="cidade">Cidade</label>
                        <GroupInput
                            nameInput="cidade" 
                            inputType="text"
                            disabled="disabled"
                        />
                    </div>

                    <div className='fomulario-group-form'>
                        <label htmlFor="estado">Estado</label>
                        <GroupInput
                            nameInput="estado" 
                            inputType="text"
                            disabled="disabled"
                        />
                    </div>
                </div>
            </section>
            
            <section className='formulario-informacoes-responsavel'>
                <SubtituloH3>Informações do responsável</SubtituloH3>

                <div className='fomulario-group-form'>
                    <label htmlFor="nomeResponsavel">Nome do responsável</label>
                    <GroupInput
                        nameInput="nomeResponsavel" 
                        inputType="text"
                    />
                    <span className='span-info-formulario'>Principal responsável legal e contato de emergência</span>
                </div>

                <div className='fomulario-group-form'>
                    <label htmlFor="telefone">Telefone</label>
                    <GroupInput
                        nameInput="telefone" 
                        inputType="text"
                    />
                </div>

                <div className='fomulario-group-form'>
                    <label htmlFor="email">E-mail</label>
                    <GroupInput
                        nameInput="email" 
                        inputType="text"
                    />
                </div>
            </section>

            <section className='formulario-opcoes-matricula'>
                <SubtituloH3>Opções de matrícula</SubtituloH3>
                <div className='fomulario-group-form-cards'>
                    <label htmlFor="turno">Selecione o turno de estudo</label>
                    <CardsTurnos />
                </div>

                <div className='fomulario-group-form-cards'>
                    <label htmlFor="esporte">Em qual esporte você gostaria de inscrever seu filho?</label>
                    <CardsEsportes />
                </div>
            </section>

            <section className='check-termos-servicos'>
                <input type="checkbox" name="termosUso" id="termosUso" />
                <div className='checkbox'></div>
                <label htmlFor="termosUso">Declaro que li e concordo com os <span>Termos e Condições</span> e com a <span>Política de Privacidade</span> da escola Estrela do Amanhã.</label>
            </section>

            <section className='formulario-buttons'>
                <button type="button" className='btn-default btn-salvar'>Salvar respostas</button>
                <button type="button" className='btn-default btn-matricula'>Fazer matrícula</button>
            </section>
        </div>
    );
}

export default Formulario;