import "@ionic/react";
import "./ExploreContainer.css";

interface ExploreProps {}

const ExplorerContainer: React.FC<ExploreProps> = () => {
  return (
    <div className="container">
      <div className="title">
        <p>
          <strong> Gasolina X Álcool </strong>
        </p>
        <h3> Veja o cálculo da melhor opção: </h3>
      </div>
      <div className="subtitle">
        <p>
          Álcool x gasolina, qual usar? Essa dúvida vem de muito tempo, desde o
          fim dos anos 70, mais exatamente, quando o derivado de petróleo, em
          plena crise, encontrou um rival de peso saído dos canaviais, hoje
          chamado etanol.
        </p>
        <p>Mas, qual deles é realmente vantajoso?</p>
        <h6>Digite os Valores abaixo:</h6>
      </div>
    </div>
  );
};

export default ExplorerContainer;
