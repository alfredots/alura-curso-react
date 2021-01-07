import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  const aoEnviar = (dados) => {
    console.log(dados);
  };

  const validarCPF = (cpf) => {
    if (cpf.length != 11) {
      return { valido: false, texto: "CPF deve ter 11 digitos." };
    } else {
      return { valido: true, texto: "" };
    }
  };

  return (
    <Container component="article" maxWidth="md">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} />
    </Container>
  );
}

export default App;
