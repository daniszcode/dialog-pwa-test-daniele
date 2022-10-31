import { useQuery } from "@apollo/client";
import { Grid, ListItemText, Table } from "@mui/material";
import { GET_USER } from "../../helpers";
import { CardImage, CardUser, Container } from "./styles";

export const CardHome = () => {
  const { data, loading } = useQuery(GET_USER);
  if (loading) {
    return <p> carregando...</p>;
  }
  console.log(data);
  return (
    <Container>
      <Grid container spacing={1}>
        {data.list.map(
          ({ _id, name, picture, age, eyeColor, company, email }: any) => (
            <CardUser>
              <CardImage className="img--req" src={picture} alt={name} />
              <Table className="option--req" key={_id}>
                <ListItemText>name: {name}</ListItemText>
                <ListItemText>age: {age}</ListItemText>
                <ListItemText>eyeColor: {eyeColor}</ListItemText>
                <ListItemText>company: {company}</ListItemText>
                <ListItemText>email: {email}</ListItemText>
              </Table>

              <div className="container-icons"></div>
            </CardUser>
          )
        )}
      </Grid>
    </Container>
  );
};
