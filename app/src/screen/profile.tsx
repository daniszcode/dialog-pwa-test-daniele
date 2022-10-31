import { useQuery } from "@apollo/client";
import { List } from "../components/Cards/interface";
import { Container } from "../components/Cards/styles";
import { GET_USER } from "../helpers/GET_USER";

export const ProfileScreen = () => {
  const { data } = useQuery<{ user: List[] }>(GET_USER);
  console.log(data);

  return (
    <Container>
      <h1>profile</h1>
      {/* <Grid container spacing={1}>
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
                  <Table className="option--req--friends" key={_id}>
                    <ListItemText>name: {name}</ListItemText>
                    <ListItemText>age: {age}</ListItemText>
                    <ListItemText>eyeColor: {eyeColor}</ListItemText>
                    <ListItemText>company: {company}</ListItemText>
                    <ListItemText>email: {email}</ListItemText>
                  </Table>
                </ListItemText>
              </Table>
            </CardUser>
          )
        )}
      </Grid> */}
    </Container>
  );
};
