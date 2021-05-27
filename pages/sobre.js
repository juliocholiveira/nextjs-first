import Link from "next/link";
import { Button } from "@material-ui/core";
import axios from "axios";

const salvar = () => {
  axios
    .post("/api/entry", {
      slug: "teste",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function Sobre() {
  return (
    <div>
      <h2>ENLID VIVAR NEI</h2>
      <Link href="/">
        <a>Voltar para a Home</a>
      </Link>
      <Button variant="contained" color="primary" onClick={() => salvar()}>
        Hello World
      </Button>
    </div>
  );
}

export default Sobre;
