import Link from "next/link";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 100,
    flex: 1,
  },
  media: {
    height: 100,
  },
});

function Compromissos() {
  const classes = useStyles();

  const [chaves, setChaves] = useState([
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0173728",
    "F0641677",
    "F0641677",
    "F0173728",
    "F0641677",
  ]);

  const [ativo, setAtivo] = useState(false);

  const carregarFuncis = () => {
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
    <Container
      maxWidth="xg"
      style={{ backgroundColor: "#002D4C", height: 1000 }}
    >
      <Grid item lg={12} style={{ paddingTop: 5 }}>
        {chaves.map((chave) => {
          if (ativo) {
            return (
              <img
                src={`images/avatar/${chave}g.jpg`}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  opacity: 1,
                  border: 2,
                  borderStyle: "solid",
                  borderColor: "#FAFF00",
                  margin: 3,
                }}
              />
            );
          } else {
            return (
              <img
                src={`images/avatar/${chave}g.jpg`}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  opacity: 0.3,
                  border: 2,
                  borderStyle: "solid",
                  borderColor: "#FAFF00",
                  margin: 3,
                }}
              />
            );
          }
        })}
      </Grid>
      <button onClick={() => setAtivo(!ativo)}>Ativo</button>
    </Container>
  );
}

export default Compromissos;
