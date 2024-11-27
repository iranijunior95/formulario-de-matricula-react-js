import { NavLink } from 'react-router';
import { useState } from 'react';
import ArrowLeft02 from '../../assets/img/arrow-left-02.svg';
import SubtituloH3 from '../../components/SubtituloH3';
import CardsTurnos from '../../components/CardsTurnos';
import CardsEsportes from '../../components/CardsEsportes';
import Inputs from '../../components/Inputs';
import './style.css';

function Formulario() {
    const [listaDados, setListaDados] = useState([]);

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [infoMedica, setInfoMedica] = useState('');
    const [certidao, setCertidao] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [turno, setTurno] = useState('manha');
    const [esporte, setEsporte] = useState('futebol');
    const [termos, setTermos] = useState(false);

    function addDadosLista() {
        setListaDados([...listaDados, {
            nome,
            data,
            sexo,
            infoMedica,
            certidao,
            cep,
            rua,
            numero,
            cidade,
            estado,
            responsavel,
            telefone,
            email,
            turno,
            esporte,
            termos
        }]);        
    }

    async function buscarCep() {
        if(!cep.trim()) {
            return;
        }

        const cleanCep = cep.replace('-', '');
        
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
            const dados = await response.json();

            if(dados.erro) {
                return;
            }

            setCidade(dados.localidade);
            setEstado(dados.uf);
        } catch (error) {
            console.log('erro: '+error);
        }
    }

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
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />

                <Inputs
                    labelForInputNameId="dataNascimento"
                    label="Data de nascimento" 
                    type="date"
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                />

                <Inputs
                    labelForInputNameId="sexo"
                    label="Sexo" 
                    type="select"
                    value={sexo}
                    onChange={(event) => setSexo(event.target.value)}
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
                    value={infoMedica}
                    onChange={(event) => setInfoMedica(event.target.value)}
                />

                <Inputs
                    labelForInputNameId="certidaoNascimento"
                    label="Certidão de nascimento" 
                    type="file"
                    recebeCaminhoDocumento={(valor) => setCertidao(valor)}
                />  
            </section>

            <section className='formulario-section'>
                <SubtituloH3>Endereço residencial</SubtituloH3>

                <Inputs
                    labelForInputNameId="cep"
                    label="CEP" 
                    type="text"
                    placeholder="Digite o cep da sua região..."
                    formato="cep"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    onBlur={() => buscarCep()}
                />

                <div className='formulario-section-inline'>
                    <Inputs
                        labelForInputNameId="rua"
                        label="Rua" 
                        type="text"
                        placeholder="Digite o nome da sua rua..."
                        value={rua}
                        onChange={(event) => setRua(event.target.value)}
                    />

                    <Inputs
                        labelForInputNameId="numero"
                        label="Número" 
                        type="text"
                        value={numero}
                        onChange={(event) => setNumero(event.target.value)}
                    />
                </div>

                <div className='formulario-section-inline'>
                    <Inputs
                        labelForInputNameId="cidade"
                        label="Cidade" 
                        type="text"
                        disabled
                        value={cidade}
                    />

                    <Inputs
                        labelForInputNameId="estado"
                        label="Estado" 
                        type="text"
                        disabled
                        value={estado}
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
                    value={responsavel}
                    onChange={(event) => setResponsavel(event.target.value)}
                />

                <Inputs
                    labelForInputNameId="telefone"
                    label="Telefone" 
                    type="text"
                    placeholder="(00) 00000-0000"
                    formato="telefone"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                />

                <Inputs
                    labelForInputNameId="email"
                    label="E-mail" 
                    type="text"
                    placeholder="Digite o seu email..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </section>

            <section className='formulario-section '>
                <SubtituloH3>Opções de matrícula</SubtituloH3>
                <div className='fomulario-group-form-cards'>
                    <label htmlFor="turno">Selecione o turno de estudo</label>
                    <CardsTurnos 
                        recebeTurno={(turno) => setTurno(turno)}
                    />
                </div>

                <div className='fomulario-group-form-cards'>
                    <label htmlFor="esporte">Em qual esporte você gostaria de inscrever seu filho?</label>
                    <CardsEsportes 
                        recebeEsporte={(esporte) => setEsporte(esporte)}
                    />
                </div>
            </section>

            <section className='check-termos-servicos'>
                <input 
                    type="checkbox" 
                    name="termosUso" 
                    id="termosUso"
                    checked={termos}
                    onChange={() => setTermos(!termos)} 
                />
                <div className='checkbox'></div>
                <label htmlFor="termosUso">Declaro que li e concordo com os <span>Termos e Condições</span> e com a <span>Política de Privacidade</span> da escola Estrela do Amanhã.</label>
            </section>

            <section className='formulario-buttons'>
                <button type="button" className='btn-default btn-salvar'>Salvar respostas</button>
                <button 
                    type="button" 
                    className='btn-default btn-matricula'
                    onClick={() => addDadosLista()}
                >Fazer matrícula
                </button>
            </section>
        </div>
    );
}

export default Formulario;