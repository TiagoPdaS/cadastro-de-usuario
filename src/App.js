import React, { useState, useRef } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";
import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  //const users = [];
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    console.log(inputName.current.value);
    console.log(inputAge.current.value);
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function deleteUser(userId){
    const newUsers = users.filter((user) => user.id === userId);
    setUsers(newUsers);
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

        <Button onClick={addNewUser}>
          Submit
          <img alt="logo-arrow" src={Arrow} />{" "}
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
