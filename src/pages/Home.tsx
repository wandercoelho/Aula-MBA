import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Calculo from "./Calculo";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Home </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer />
        <Calculo />
      </IonContent>
    </IonPage>
  );
};

export default Home;
