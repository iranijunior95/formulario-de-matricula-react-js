import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { normalizeCepNumber, normalizePhoneNumber }  from '../../Mask/index.js';
import CardsTurnos from '../../components/CardsTurnos/index.jsx';
import CardsEsportes from '../../components/CardsEsportes/index.jsx';
import ArrowLeft02 from '../../assets/img/arrow-left-02.svg';
import SubtituloH3 from '../../components/SubtituloH3';
import IconAlert from '../../assets/img/alert-circle.svg';
import './style.css';

function Formulario() {
    //Meu Schema de regras para validação do formulario
    const schema = yup.object().shape({
        nome: yup.string()
        .required('O campo nome não pode ser vazio...'),

        dataNascimento: yup.string()
        .required('O campo data de nascimento não pode ser vazio...'),

        certidaoNascimento: yup.mixed()
        .test('arquivoVazio', 'O campo certidão de nascimento não pode ser vazio...', arquivo => { return !arquivo ? true : arquivo[0] }),

        cep: yup.string()
        .required('O campo cep não pode ser vazio...')
        .min(9, 'Tamanho do cep invalido...')
        .test('cepInvalido', 'O cep não foi localizado...', () => estadoCep),

        rua: yup.string()
        .required('O campo rua não pode ser vazio...'),

        numero: yup.number()
        .required('O campo numero não pode ser vazio...'),

        nomeResponsavel: yup.string()
        .required('O campo nome do responsavel não pode ser vazio...'),

        telefone: yup.string()
        .required('O campo telefone não pode ser vazio...')
        .min(15, 'Tamanho do telefone invalido...'),

        email: yup.string()
        .required('O campo email não pode ser vazio...')
        .email('Insira um e-mail valido...'),

        termosUso: yup.boolean()
        .oneOf([true], 'Preencha o campo termos de uso...')
    });

    const { register, handleSubmit, watch, setValue, getValues, setError ,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => console.log(data);

    const [ estadoCep, setEstadoCep ] = useState(false);
    const [ estadoTurno, setEstadoTurno ] = useState('manha');
    const [ estadoEsporte, setEstadoEsporte ] = useState('futebol');

    const cepValue = watch('cep');
    const telefoneValue = watch('telefone');
    const turnoValue = watch('turno');
    const esporteValue = watch('esporte');

    useEffect(() => {
        setValue('cep', normalizeCepNumber(cepValue));
        validarCepValidoApi();
    }, [cepValue]);

    useEffect(() => {
        setValue('telefone', normalizePhoneNumber(telefoneValue));
    }, [telefoneValue]);

    useEffect(() => {
        setEstadoTurno(getValues('turno'));
    }, [turnoValue]);

    useEffect(() => {
        setEstadoEsporte(getValues('esporte'));
    }, [esporteValue]);
  
    async function buscarCepApi(cep) {
        if(cep.length === 9) {
            const cleanCep = cep.replace('-', '');
        
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
                const dados = await response.json();
    
                return dados;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }

    async function validarCepValidoApi() {
        if(getValues('cep') === '') {
            setValue('cidade', '');
            setValue('estado', '');
            delete errors.cep;
        }

        if(getValues('cep').length > 0 && getValues('cep').length << 9) {
            setValue('cidade', '');
            setValue('estado', '');
        }

        if(!!getValues('cep') & getValues('cep').length === 9) {
            const apiCep = await buscarCepApi(getValues('cep'));
            if(apiCep.erro) {
                setEstadoCep(false);
                setValue('cidade', '');
                setValue('estado', '');
                setError('cep', { type: 'custom', message: 'O cep não foi localizado...' });
            }else {
                delete errors.cep;
                setEstadoCep(true);
                setValue('cidade', apiCep.localidade);
                setValue('estado', apiCep.uf);
            }
        }
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
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

                    {/** Input nome completo */}
                    <div className={errors.nome ? 'div-input-component input-error' : 'div-input-component'}>
                        <label htmlFor="nome">Nome completo</label>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            {...register('nome')}
                        />
                        {errors.nome && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.nome.message}</span>)}
                    </div>

                    {/** Input data de nascimento */}
                    <div className={errors.dataNascimento ? 'div-input-component input-error' : 'div-input-component'}>
                        <label htmlFor="nome">Data de nascimento</label>
                        <input 
                            type="date" 
                            name="dataNascimento" 
                            id="dataNascimento" 
                            {...register('dataNascimento')}
                        />
                        {errors.dataNascimento && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.dataNascimento.message}</span>)}
                    </div>

                    {/** Select sexo */}
                    <div className='div-input-component'>
                        <label htmlFor="sexo">Sexo</label>
                        <select 
                            name="sexo" 
                            id="sexo"
                            {...register('sexo')}
                        >
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </div>

                    {/** Textarea informações medicas */}
                    <div className='div-input-component'>
                        <label htmlFor="infoMedicas">Informações médicas</label>
                        <textarea 
                            name="infoMedicas" 
                            id="infoMedicas"
                            rows="4" 
                            cols="50"
                            {...register('infoMedicas')}
                        ></textarea>
                    </div>

                    {/** Input file certidão nascimento */}
                    <div className={errors.certidaoNascimento ? 'div-input-component input-error' : 'div-input-component'}>
                        <span className='input-file-label'>Certidão de nascimento</span>
                        <label htmlFor='certidaoNascimento' className='input-file-content'></label>
                        <input 
                            type="file" 
                            id="certidaoNascimento"
                            name="certidaoNascimento"
                            className='input-file'
                            {...register('certidaoNascimento')}
                        />
                        {errors.certidaoNascimento && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.certidaoNascimento.message}</span>)}
                    </div>
                </section>

                <section className='formulario-section'>
                    <SubtituloH3>Endereço residencial</SubtituloH3>

                    {/** Input cep */}
                    <div className={errors.cep ? 'div-input-component input-error' : 'div-input-component'}>
                        <label htmlFor="cep">Cep</label>
                        <input 
                            type="text" 
                            name="cep" 
                            id="cep"
                            maxLength="9"
                            {...register('cep')}
                        />
                        {errors.cep && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.cep.message}</span>)}
                    </div>

                    <div className='formulario-section-inline'>
                        {/** Input rua */}
                        <div className={errors.rua ? 'div-input-component input-error' : 'div-input-component'}>
                            <label htmlFor="rua">Rua</label>
                            <input 
                                type="text"
                                name="rua"
                                id="rua"
                                {...register('rua')} 
                            />
                            {errors.rua && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.rua.message}</span>)}
                        </div>

                        {/** Input numero */}
                        <div className={errors.numero ? 'div-input-component input-error' : 'div-input-component'}>
                            <label htmlFor="numero">Número</label>
                            <input 
                                type="number"
                                name="numero"
                                id="numero"
                                {...register('numero')} 
                            />
                        </div>
                    </div>

                    <div className='formulario-section-inline'>
                        {/** Input cidade */}
                        <div className='div-input-component input-disabled'>
                            <label htmlFor="cidade">Cidade</label>
                            <input 
                                type="text"
                                name="cidade"
                                id="cidade"
                                disabled
                                {...register('cidade')} 
                            />
                        </div>

                        {/** Input estado */}
                        <div className='div-input-component input-disabled'>
                            <label htmlFor="estado">Estado</label>
                            <input 
                                type="text"
                                name="estado"
                                id="estado"
                                disabled
                                {...register('estado')} 
                            />
                        </div>
                    </div>
                </section>
                
                <section className='formulario-section'>
                    <SubtituloH3>Informações do responsável</SubtituloH3>
                    
                    {/** Input nome responsavel */}
                    <div className={errors.nomeResponsavel ? 'div-input-component input-error' : 'div-input-component'}>
                        <label htmlFor="nomeResponsavel">Nome do responsável</label>
                        <input 
                            type="text" 
                            name="nomeResponsavel" 
                            id="nomeResponsavel" 
                            {...register('nomeResponsavel')}
                        />
                        {errors.nomeResponsavel && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.nomeResponsavel.message}</span>)}
                    </div>

                    {/** Input telefone */}
                    <div className={errors.telefone ? 'div-input-component input-error' : 'div-input-component'}>
                        <label htmlFor="telefone">Telefone</label>
                        <input 
                            type="text" 
                            name="telefone" 
                            id="telefone"
                            maxLength="15" 
                            {...register('telefone')}
                        />
                        {errors.telefone && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.telefone.message}</span>)}
                    </div>

                    {/** Input Email */}
                    <div className={errors.email ? 'div-input-component input-error' : 'div-input-component'}>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            {...register('email')}
                        />
                        {errors.email && (<span role="alert"><img src={IconAlert} alt="icone alert" /> {errors.email.message}</span>)}
                    </div>
                </section>

                <section className='formulario-section '>
                    <SubtituloH3>Opções de matrícula</SubtituloH3>
                    <div className='fomulario-group-form-cards'>
                        <label htmlFor="turno">Selecione o turno de estudo</label>
                        <CardsTurnos 
                            register={register}
                            estadoTurno={estadoTurno}
                        />
                    </div>

                    <div className='fomulario-group-form-cards'>
                        <label htmlFor="esporte">Em qual esporte você gostaria de inscrever seu filho?</label>
                        <CardsEsportes 
                            register={register}
                            estadoEsporte={estadoEsporte}
                        />
                    </div>
                </section>

                <section className='check-termos-servicos'>
                    <input 
                        type="checkbox" 
                        name="termosUso" 
                        id="termosUso"
                        {...register('termosUso')}
                    />
                    <div className='checkbox'></div>
                    <label htmlFor="termosUso">Declaro que li e concordo com os <span>Termos e Condições</span> e com a <span>Política de Privacidade</span> da escola Estrela do Amanhã.</label>
                </section>

                <section className='formulario-buttons'>
                    <button type="button" className='btn-default btn-salvar'>Salvar respostas</button>
                    <button 
                        type="button" 
                        className='btn-default btn-matricula'
                        onClick={() => handleSubmit(onSubmit)()}
                    >Fazer matrícula
                    </button>
                </section>
            </div>
        </form>
    );
}

export default Formulario;