import { useQuery } from "@apollo/client";
import {
  Button,
  Container,
  Grid,
  ListItemText,
  Table,
  Typography,
} from "@mui/material";
import React from "react";
import { GET_LIST } from "../../helpers/GET_LIST";
import { List } from "./interface";
import { CardImage, CardUser, Header, Input } from "./styles";

export const CardHome = () => {
  const { data } = useQuery<{ list: List[] }>(GET_LIST);
  const [value, setValue] = React.useState("");

  const usersfiltrados = data?.list.filter((item: any) =>
    item.name.toLowerCase().startsWith(value.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Typography variant="h3"> MySocial</Typography>
        <Input
          type="text"
          id="input"
          onChange={(e) => setValue(e.target.value.toLowerCase())}
          defaultValue="search"
        />
      </Header>
      <Grid container spacing={1}>
        {usersfiltrados?.map(
          ({ _id, name, picture, age, eyeColor, company, email }: any) => (
            <CardUser key={name}>
              <CardImage className="img--req" src={picture} alt={name} />
              <Table className="option--req" key={_id}>
                <ListItemText>name: {name}</ListItemText>
                <ListItemText>age: {age}</ListItemText>
                <ListItemText>eyeColor: {eyeColor}</ListItemText>
                <ListItemText>company: {company}</ListItemText>
                <ListItemText>email: {email}</ListItemText>
                <Button variant="text"> View Profile</Button>
              </Table>
            </CardUser>
          )
        )}
      </Grid>
    </Container>
  );
};
