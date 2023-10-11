import { useContext, useEffect } from "react";
import { Container } from "./styles";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import totalImage from "../../assets/total.svg";
import { AmoutContext } from "../../context/amountContext";
const Summary = () => {
  
  const { income, setIncome, outcome, setOutcome, total, setTotal } = useContext(AmoutContext);


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="entradas" />
        </header>
        <strong>R$ {income} </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="saidas" />
        </header>
        <strong>R$ {outcome} </strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="total" />
        </header>
        <strong>R$ {total} </strong>
      </div>
    </Container>
  );
};

export default Summary;
