import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, GridColumn, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";

export default function FormEntregador() {

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
    const [ativo, setAtivo] = useState('');

    const estados = [
        { key: 'pe', value: 'pe', text: 'PE' },
        { key: 'ce', value: 'ce', text: 'CE' },
    ]

    /*state = {}
    handleChange = (e, { value }) => this.setState({ value })
    const { value } = this.state*/

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

        axios.post("http://localhost:8082/api/entregador", entregadorRequest)
            .then((response) => {
                console.log('Entregador cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir um entregador.')
            })
    }

    return (

        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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
                                    checked={ativo === 'sim'}
                                    onChange={() => setAtivo('sim')}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='nao'
                                    checked={ativo === 'nao'}
                                    onChange={() => setAtivo('nao')}
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
                                Voltar
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
