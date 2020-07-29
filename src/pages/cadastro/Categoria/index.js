import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';



function CadastroCategoria(){
  
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }

    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategoria] = useState([]);

    function setValue(chave, valor){
      setValues({
        ...values,
      [chave]: valor,
      });
    }

     function handleChange(handlerInfos) {
        const { value, name } = handlerInfos.target;
        setValue(name, value)
    }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(handlerInfos){
          handlerInfos.preventDefault();
          setCategoria([
            ...categorias, values
          ]);

          setValues(valoresIniciais);
        }}>


         <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
         />

          <div>
            <label>
              Descrição:
              <textarea
              value={values.descricao}
              name="descricao"
              onChange={handleChange} />
            </label>
          </div>

          <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.color}
          onChange={handleChange}
         />
        <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categorias) => {
            return (
              <li key={categorias}>
                {categorias.nome}
              </li>
            );
          })}
        </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;