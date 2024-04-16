import React from "react";
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
        <Image/>
        <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name"/>
       
        <InputLabel>Age</InputLabel>
        <Input placeholder="Age"/>

        <Button>register</Button>


        </ContainerItems>
      
    </Container>
  );
}

export default App;
