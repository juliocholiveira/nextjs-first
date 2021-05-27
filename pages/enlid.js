import Link from "next/link";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useState } from "react";

function Enlid() {
  const [chave, setChave] = useState("");

  const salvar = () => {
    axios
      .post("/api/entry", {
        slug: chave,
      })
      .then(function (response) {
        console.log(response);
        setChave("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="xs">
      <h3>ENLID VIVAR NEI</h3>
      <h2>Informe sua matrícula para assinar o compromisso</h2>

      <TextField
        id="outlined-basic"
        label="Matrícula"
        variant="outlined"
        helperText="No formato F0000000. Com F e sem dígito."
        value={chave}
        onChange={(e) => setChave(e.target.value)}
      />

      <br />
      <br />
      <br />

      <Button variant="contained" color="primary" onClick={() => salvar()}>
        Assinar Compromisso
      </Button>
    </Container>
  );
}

export default Enlid;
