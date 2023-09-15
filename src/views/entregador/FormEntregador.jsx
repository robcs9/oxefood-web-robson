import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, GridColumn, Icon } from 'semantic-ui-react';
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
                                    onChange={e => e.setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => e.setCpf(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='RG'
                                    value={rg}
                                    onChange={e => e.setRg(e.target.value)}
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
                                        onChange={e => e.setDataNascimento(e.target.value)}
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
                                        onChange={e => e.setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => e.setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    required
                                    label='QTD Entregas Realizadas'
                                    width={6}>
                                    value={qtdEntregas}
                                    onChange={e => e.setQtdEntregas(e.target.value)}
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorFrete}
                                    onChange={e => e.setValorFrete(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    value={rua}
                                    onChange={e => e.setRua(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input fluid label='Número'
                                    value={numero}
                                    onChange={e => e.setNumero(e.target.value)}
                                >

                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    value={bairro}
                                    onChange={e => e.setBairro(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    value={cidade}
                                    onChange={e => e.setCidade(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    value={cep}
                                    onChange={e => e.setCep(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                {/*<Form.Select>
                                    <Form.Select.option>test</Form.Select.option>
    </Form.Select>*/}
                                <select
                                    name="UF"
                                    fluid
                                    label='UF'
                                    value={estado}
                                    onChange={e => e.setEstado(e.target.value)}
                                >
                                    <option value="PE">PE</option>
                                    <option value="RJ">RJ</option>
                                    <option value="DF">DF</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                fluid
                                label='Complemento'>
                                </Form.Input>
                            </Form.Group>
                            <label name="Ativo">
                                <strong>Ativo: </strong>
                                <Form.Group>
                                    <Form.Radio label='Sim'>
                                    </Form.Radio>
                                    <Form.Radio label='Não'>
                                    </Form.Radio>
                                </Form.Group>
                            </label>

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
