import { useQuery } from "@apollo/client";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import {
  CardImage,
  CardUser,
  Container,
  Table,
} from "../components/Cards/styles";
import { GET_USER } from "../helpers/GET_USER";
import { User } from "./interface";

export const ProfileScreen = () => {
  const { data } = useQuery<{ user: User[] }>(GET_USER);
  console.log(data?.user);
  return (
    <Container>
      <Grid container spacing={1}>
        {data?.user?.map(
          ({
            _id,
            name,
            picture,
            age,
            eyeColor,
            company,
            email,
            friends,
          }: any) => (
            <CardUser key={name}>
              <CardImage className="img--req" src={picture} alt={name} />
              <Table className="option--req" key={_id}>
                <ListItemText>name: {name}</ListItemText>
                <ListItemText>age: {age}</ListItemText>
                <ListItemText>eyeColor: {eyeColor}</ListItemText>
                <ListItemText>company: {company}</ListItemText>
                <ListItemText>email: {email}</ListItemText>
                <ListItemText>
                  friends
                  <Table className="option--req--friends" key={_id}>
                    <ListItemText>name: {friends.name}</ListItemText>
                    <ListItemText>age: {friends.age}</ListItemText>
                    <ListItemText>eyeColor: {friends.eyeColor}</ListItemText>
                    <ListItemText>company: {friends.company}</ListItemText>
                    <ListItemText>email: {friends.email}</ListItemText>
                  </Table>
                </ListItemText>
              </Table>
            </CardUser>
          )
        )}
      </Grid>
    </Container>
  );
};

//*pegar o Id com o component pai
