import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom"

import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
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
  const [users, setUsers] = useState([]);
const navigate = useNavigate()

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    
    setUsers([...users, newUser]);
   navigate("/users")
  }

  return (
    <Container>
      <Image alt="logo-people" src={People} />
      <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button to="/users" onClick={addNewUser}>
          Submit <img alt="logo-arrow" src={Arrow} />{" "}
        </Button>

        
      </ContainerItems>
    </Container>
  );
}

export default App;
