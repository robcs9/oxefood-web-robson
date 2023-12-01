import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, GridColumn, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';

export default function FormEntregador() {

    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [rg, setRg] = useState('');
    const [qtdEntregas, setQtdEntregas] = useState('');
    const [valorFrete, setValorFrete] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [complemento, setComplemento] = useState('');
    const [ativo, setAtivo] = useState();

    const estados = [
        { key: 'pe', value: 'pe', text: 'PE' },
        { key: 'ce', value: 'ce', text: 'CE' },
        { key: 'pa', value: 'pa', text: 'PA' },
        { key: 'al', value: 'al', text: 'AL' },
        { key: 'se', value: 'se', text: 'SE' },
        { key: 'pi', value: 'pi', text: 'PI' },
        { key: 'ba', value: 'ba', text: 'BA' },
        { key: 'ma', value: 'ma', text: 'MA' },
        { key: 'to', value: 'to', text: 'TO' },
        { key: 'ap', value: 'ap', text: 'AP' },
        { key: 'pa', value: 'pa', text: 'PA' },
        { key: 'ro', value: 'ro', text: 'RO' },
        { key: 'am', value: 'am', text: 'AM' },
        { key: 'ac', value: 'ac', text: 'AC' },
        { key: 'ro', value: 'ro', text: 'RO' },
        { key: 'mg', value: 'mg', text: 'MG' },
        { key: 'go', value: 'go', text: 'GO' },
        { key: 'mt', value: 'mt', text: 'MT' },
        { key: 'es', value: 'es', text: 'ES' },
        { key: 'rj', value: 'rj', text: 'RJ' },
        { key: 'sp', value: 'sp', text: 'SP' },
        { key: 'ms', value: 'ms', text: 'MS' },
        { key: 'pr', value: 'pr', text: 'PR' },
        { key: 'rs', value: 'rs', text: 'RS' },
        { key: 'sc', value: 'sc', text: 'SC' },

    ]

    useEffect(() => {

        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setRg(response.data.rg)
                    setQtdEntregas(response.data.qtdEntregas)
                    setValorFrete(response.data.valorFrete)
                    setRua(response.data.rua)
                    setNumero(response.data.numero)
                    setBairro(response.data.bairro)
                    setCidade(response.data.cidade)
                    setCep(response.data.cep)
                    setEstado(response.data.estado)
                    setComplemento(response.data.complemento)
                    setAtivo(response.data.ativo)
                })
        }
    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        return dataParam
    }

    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            rg: rg,
            qtdEntregas: qtdEntregas,
            valorFrete: valorFrete,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            estado: estado,
            complemento: complemento,
            ativo: ativo
        }

        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8082/api/entregador/" + idEntregador, entregadorRequest)
                .then((response) => { notifySuccess('Entregador alterado com sucesso.') })
                .catch((error) => { notifyError(error.response.data.errors[0].defaultMessage)  })
        } else { //Cadastro:
            axios.post("http://localhost:8082/api/entregador", entregadorRequest)
                .then((response) => { notifySuccess('Entregador cadastrado com sucesso.') })
                .catch((error) => { notifyError(error.response.data.errors[0].defaultMessage) })
        }
    }

    return (

        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idEntregador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idEntregador !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100" placeholder="Informe o título do produto"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='RG'
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                >

                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    required
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregas}
                                    onChange={e => setQtdEntregas(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={6}
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input fluid label='Número'
                                    width={6}
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                >

                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={6}
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={6}
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={estados}
                                    placeholder='UF'
                                    value={estado}
                                    onChange={e => setEstado(e.target.value)}
                                >

                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={16}
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo</label>
                                <Form.Radio
                                    label='Sim'
                                    value='sim'
                                    checked={ativo == true}
                                    onChange={() => setAtivo(true)}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='nao'
                                    checked={ativo == false}
                                    onChange={() => setAtivo(false)}
                                />
                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-entregador'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div >
        </div >

    );

}
