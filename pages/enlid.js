import Link from "next/link";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
      <Grid item xs={12} style={{ textAlign: "center", paddingTop: 50 }}>
        <img src="images/ENLID.jpeg" style={{ width: 200 }}></img>

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
      </Grid>
    </Container>
  );
}

export default Enlid;
