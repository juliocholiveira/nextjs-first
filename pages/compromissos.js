import Link from "next/link";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useEffect, useState } from "react";

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
    "F0268471",
    "F0379362",
    "F0427901",
    "F0432032",
    "F0641677",
    "F0721041",
    "F0772449",
    "F0886150",
    "F1022534",
    "F1247089",
    "F1658250",
    "F1692438",
    "F1692513",
    "F1728943",
    "F1766731",
    "F1946289",
    "F2229029",
    "F2247769",
    "F2350057",
    "F2419435",
    "F2454055",
    "F2455356",
    "F2523209",
    "F2638412",
    "F2661379",
    "F2737037",
    "F2843539",
    "F2844512",
    "F2894729",
    "F2910709",
    "F2912097",
    "F2912958",
    "F2965172",
    "F3152292",
    "F3154959",
    "F3288683",
    "F3418659",
    "F3796988",
    "F3799271",
    "F3878271",
    "F4148869",
    "F4352800",
    "F4619921",
    "F4712595",
    "F4712673",
    "F4889079",
    "F5011939",
    "F5113459",
    "F5270270",
    "F5310021",
    "F5409058",
    "F5529058",
    "F5830139",
    "F5955019",
    "F6002444",
    "F6065884",
    "F6066444",
    "F6067587",
    "F6069498",
    "F6206667",
    "F6259687",
    "F6307715",
    "F6323976",
    "F6334068",
    "F6365794",
    "F6630929",
    "F6642269",
    "F6750939",
    "F6780537",
    "F6790968",
    "F6805405",
    "F6809306",
    "F6829001",
    "F6844388",
    "F7023294",
    "F7034738",
    "F7119898",
    "F8029537",
    "F8175317",
    "F8324299",
    "F8467279",
    "F8513401",
    "F8541438",
    "F8598409",
    "F8699155",
    "F8699245",
    "F8699306",
    "F8712355",
    "F8766022",
    "F8907647",
    "F8963288",
    "F9032224",
    "F9138919",
    "F9172199",
    "F9208178",
    "F9208179",
    "F9329358",
    "F9342420",
    "F9342758",
    "F9514618",
    "F9539617",
    "F9787123",
    "F9817859",
    "F9914639",
  ]);

  const [funcis, setFuncis] = useState([]);

  const [ativo, setAtivo] = useState(false);

  const carregarFuncis = () => {
    axios
      .get("/api/entries")
      .then(function (response) {
        console.log(response.data.entriesData);
        setFuncis(response.data.entriesData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const salvar = (chave) => {
    axios
      .post("/api/entry", {
        slug: chave,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      carregarFuncis();
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: "#002D4C", height: 1000 }}
    >
      <Grid item lg={12} style={{ paddingTop: 5 }}>
        {chaves.map((chave) => {
          const found = funcis.find((element) => element.slug == chave);

          if (found) {
            return (
              <img
                key={chave}
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
                key={chave}
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
                onDoubleClick={() => salvar(chave)}
              />
            );
          }
        })}
      </Grid>
    </Container>
  );
}

export default Compromissos;
