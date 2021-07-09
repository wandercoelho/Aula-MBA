import React, { useState } from "react";
import {
  IonRow,
  IonInput,
  IonCol,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  useIonToast,
} from "@ionic/react";
import "./Calculo.css";

interface CalculoProps {}

const Calculo: React.FC<CalculoProps> = () => {
  //Passei o useState para setar os campos de Input.
  const [gasolina, setGasolina] = useState<number>(0);
  const [alcool, setAlcool] = useState<number>(0);
  
  //Utilizei o método Toast para informar para o usuário qual combustível ele deve usar.
  const [present] = useIonToast();
  
  //função que irá renderizar o método com a lógica de programação.
  function BtCalcular() {
    var resultadoPreco = alcool / gasolina;
    if (resultadoPreco >= 0.73) {
      present("Utilize Gasolina", 3000);
    } else {
      present("Utilize Álcool", 3000);
    }
  }

  return (
    <IonContent>
      <IonRow>
        <IonCol>
          <IonLabel className="textInput" position="floating">
            Valor Gasolina
          </IonLabel>
          <IonItem className="textInput">
            <IonInput
              placeholder="Valor Gasolina"
              value={gasolina}
              onIonChange={(e) => setGasolina(Number(e.detail.value!))}
            />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonLabel className="textInput" position="floating">
            Digite valor Álcool
          </IonLabel>
          <IonItem className="textInput">
            <IonInput
              placeholder="Valor Álcool"
              value={alcool}
              onIonChange={(e) => setAlcool(Number(e.detail.value!))}
            />
          </IonItem>
        </IonCol>
      </IonRow>

      <div className="button">
        <IonButton
          className="buttonText"
          shape="round"
          fill="solid"
          color="tertiary"
          onClick={BtCalcular}
        >
          Calcular
        </IonButton>
      </div>
    </IonContent>
  );
};

export default Calculo;
