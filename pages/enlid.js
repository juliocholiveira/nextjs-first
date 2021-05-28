import Link from "next/link";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

function Enlid() {
  const [chave, setChave] = useState("");
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(false);

  const salvar = () => {
    setErro(null);
    setSucesso(false);

    if (!chave) {
      setErro("Favor informar a sua matrícula!");
      return;
    }

    axios
      .post("/api/entry", {
        slug: chave,
      })
      .then(function (response) {
        console.log(response);
        setChave("");
        setSucesso(true);
      })
      .catch(function (error) {
        console.log(error);
        setErro("Você já assinou esse compromisso.");
      });
  };

  return (
    <Container maxWidth="xs">
      <Grid item xs={12} style={{ textAlign: "center", paddingTop: 50 }}>
        <img src="images/ENLID.jpeg" style={{ width: 300 }}></img>

        <h2>Informe sua matrícula para assinar o compromisso</h2>

        <TextField
          id="outlined-basic"
          label="Matrícula (F0000000)"
          variant="outlined"
          helperText="No formato F0000000. Com F e sem dígito."
          value={chave}
          onChange={(e) => setChave(e.target.value.toUpperCase())}
        />

        <br />
        <br />
        <br />

        {sucesso ? (
          <>
            <Alert severity="success">Agradecemos pelo seu compromisso!</Alert>
            <br />
          </>
        ) : (
          ""
        )}

        {erro ? (
          <>
            <Alert severity="error">{erro}</Alert>
            <br />
          </>
        ) : (
          ""
        )}

        <Button variant="contained" color="primary" onClick={() => salvar()}>
          Assinar Compromisso
        </Button>
      </Grid>
    </Container>
  );
}

export default Enlid;
