import React from "react";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
} from "./styles";
function App() {
  return (
    <Container>
        <Image alt="logo-people" src={People}/>
        <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name"/>
       
        <InputLabel>Age</InputLabel>
        <Input placeholder="Age"/>

        <Button>Submit<img alt="logo-arrow" src={Arrow}/> </Button>


        </ContainerItems>
      
    </Container>
  );
}

export default App;
