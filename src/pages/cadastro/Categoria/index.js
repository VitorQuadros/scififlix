import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategoria] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(handlerInfos) {
    const { value, name } = handlerInfos.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = 'https://scififlix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategoria([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(handlerInfos) {
        handlerInfos.preventDefault();
        setCategoria([
          ...categorias, values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Titulo da Categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
          type="textarea"
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categorias) => (
          <li key={categorias.nome}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
