import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import {
  mensagemErro,
  notifyError,
  notifySuccess,
} from "../../views/util/Util";

export default function FormProduto() {
  const { state } = useLocation();
  const [idProduto, setIdProduto] = useState();
  const [titulo, setTitulo] = useState();
  const [codigoProduto, setCodigoProduto] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoEntregaMin, setTempoEntregaMin] = useState();
  const [tempoEntregaMax, setTempoEntregaMax] = useState();
  const [listaCategoria, setListaCategoria] = useState();
  const [idCategoria, setIdCategoria] = useState();

  const ENDERECO_API = "http://localhost:8082";

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8082/api/produto/" + state.id)
        .then((response) => {
          setIdProduto(response.data.id);
          setTitulo(response.data.titulo);
          setCodigoProduto(response.data.codigoProduto);
          setDescricao(response.data.descricao);
          setValorUnitario(response.data.valorUnitario);
          setTempoEntregaMin(response.data.tempoEntregaMin);
          setTempoEntregaMax(response.data.tempoEntregaMax);
          setIdCategoria(response.data.idCategoria);
        });
    }

    axios.get(ENDERECO_API + "/api/categoriaproduto").then((response) => {
      const dropDownCategorias = response.data.map((c) => ({
        text: c.descricao,
        value: c.id,
      }));
      setListaCategoria(dropDownCategorias);
    });
  }, [state]);

  function salvar() {
    let produtoRequest = {
      idCategoria: idCategoria,
      titulo: titulo,
      codigoProduto: codigoProduto,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoEntregaMin: tempoEntregaMin,
      tempoEntregaMax: tempoEntregaMax,
    };

    if (idProduto != null) {
      //Alteração:
      axios
        .put("http://localhost:8082/api/produto/" + idProduto, produtoRequest)
        .then((response) => {
          notifySuccess("Produto alterado com sucesso.");
        })
        .catch((error) => {
          notifyError(error.response.data.errors[0].defaultMessage);
        });
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8082/api/produto", produtoRequest)
        .then((response) => {
          notifySuccess("Produto cadastrado com sucesso.");
        })
        .catch((error) => {
          notifyError(error.response.data.errors[0].defaultMessage);
        });
    }
  }

  return (
    <div>
      <MenuSistema />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          {idProduto === undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Produto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro
            </h2>
          )}
          {idProduto !== undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Produto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Alteração
            </h2>
          )}

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Título"
                  maxLength="100"
                  placeholder="Informe o título do produto"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label="Código do Produto"
                  placeholder="Informe o código do produto"
                  value={codigoProduto}
                  onChange={(e) => setCodigoProduto(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.Select
                required
                fluid
                tabIndex="3"
                placeholder="Selecione"
                label="Categoria"
                options={listaCategoria}
                value={idCategoria}
                onChange={(e, { value }) => {
                  setIdCategoria(value);
                }}
              />

              <div>
                <Form.TextArea
                  fluid
                  label="Descrição"
                  placeholder="Informe a descrição do produto"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                ></Form.TextArea>
              </div>

              <Form.Group>
                <Form.Input
                  fluid
                  required
                  label="Valor Unitário"
                  width={6}
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de Entrega Mínimo em Minutos"
                  width={6}
                  placeholder="30"
                  value={tempoEntregaMin}
                  onChange={(e) => setTempoEntregaMin(e.target.value)}
                ></Form.Input>
                <Form.Input
                  fluid
                  label="Tempo de Entrega Máximo em Minutos"
                  width={6}
                  placeholder="40"
                  value={tempoEntregaMax}
                  onChange={(e) => setTempoEntregaMax(e.target.value)}
                ></Form.Input>
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                type="button"
                inverted
                circular
                icon
                labelPosition="left"
                color="orange"
              >
                <Icon name="reply" />
                <Link to={"/list-produto"}>Voltar</Link>
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
