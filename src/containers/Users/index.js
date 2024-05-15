import React, { useState, useEffect } from "react";

import axios from "axios";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import {
  Container,
  H1,
  Image,
  ContainerItems,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);


 useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users");

      setUsers(newUser);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id === userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-people" src={Avatar} />
      <ContainerItems>
        <H1>Users!</H1>

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

        <Button>
        <img alt="logo-arrow" src={Arrow} />
          Previous
          
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default Users;
