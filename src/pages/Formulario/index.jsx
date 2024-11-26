import { NavLink } from 'react-router';
import ArrowLeft02 from '../../assets/img/arrow-left-02.svg';
import SubtituloH3 from '../../components/SubtituloH3';
import CardsTurnos from '../../components/CardsTurnos';
import CardsEsportes from '../../components/CardsEsportes';
import Inputs from '../../components/Inputs';
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

            <section className='formulario-section'>
                <SubtituloH3>Informações da criança</SubtituloH3>

                <Inputs
                    labelForInputNameId="nome"
                    label="Nome completo" 
                    type="text"
                    placeholder="Digíte o nome completo"
                />

                <Inputs
                    labelForInputNameId="dataNascimento"
                    label="Data de nascimento" 
                    type="date"
                />

                <Inputs
                    labelForInputNameId="sexo"
                    label="Sexo" 
                    type="select"
                    options={[
                        {
                            value: 'masculino',
                            option: 'Masculino'
                        },
                        {
                            value: 'feminino',
                            option: 'Feminino'
                        }
                    ]}
                />

                <Inputs
                    labelForInputNameId="infoMedica"
                    label="Informações médicas" 
                    type="textarea"
                />

                <Inputs
                    labelForInputNameId="certidaoNascimento"
                    label="Certidão de nascimento" 
                    type="file"
                />  
            </section>

            <section className='formulario-section'>
                <SubtituloH3>Endereço residencial</SubtituloH3>

                <Inputs
                    labelForInputNameId="cep"
                    label="CEP" 
                    type="text"
                    placeholder="Digite o cep da sua região..."
                />

                <div className='formulario-section-inline'>
                    <Inputs
                        labelForInputNameId="rua"
                        label="Rua" 
                        type="text"
                        placeholder="Digite o nome da sua rua..."
                    />

                    <Inputs
                        labelForInputNameId="numero"
                        label="Número" 
                        type="text"
                    />
                </div>

                <div className='formulario-section-inline'>
                    <Inputs
                        labelForInputNameId="cidade"
                        label="Cidade" 
                        type="text"
                        disabled
                    />

                    <Inputs
                        labelForInputNameId="estado"
                        label="Estado" 
                        type="text"
                        disabled
                    />
                </div>
            </section>
            
            <section className='formulario-section'>
                <SubtituloH3>Informações do responsável</SubtituloH3>

                <Inputs
                    labelForInputNameId="nomeResponsavel"
                    label="Nome do responsável" 
                    type="text"
                    placeholder="Digite o nome do responsável..."
                    message="Principal responsável legal e contato de emergência"
                />

                <Inputs
                    labelForInputNameId="telefone"
                    label="Telefone" 
                    type="text"
                    placeholder="(00) 00000-0000"
                />

                <Inputs
                    labelForInputNameId="email"
                    label="E-mail" 
                    type="text"
                    placeholder="Digite o seu email..."
                />
            </section>

            <section className='formulario-section '>
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