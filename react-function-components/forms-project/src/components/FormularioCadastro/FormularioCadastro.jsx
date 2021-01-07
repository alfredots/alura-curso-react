import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome);
      }}
    >
      <TextField
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => setNome(event.target.value)}
      />

      <TextField
        value={sobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => setSobrenome(event.target.value)}
      />

      <TextField
        value={cpf}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => setCpf(event.target.value)}
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="Promoções" defaultChecked />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" defaultChecked />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
