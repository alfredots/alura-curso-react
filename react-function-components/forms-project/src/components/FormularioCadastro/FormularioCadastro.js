import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormularioCadastro = ({ aoEnviar, validarCPF }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(false);
  const [errors, setErrors] = useState({
    cpf: { valido: true, texto: "" },
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
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
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErrors({
            cpf: ehValido,
          });
        }}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        onChange={(event) => setCpf(event.target.value)}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name="Promoções"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            name="Novidades"
            onChange={(event) => setNovidades(event.target.checked)}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
