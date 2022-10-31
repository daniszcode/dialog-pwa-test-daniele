import fetch from "node-fetch";
import config from "../../../config";
const _API_URL = "http://localhost:3000/users";

const userLoader = (): any => {
  return config;
};

export const list = async (
  _: any,
  __: any,
  { getUsers }: any
): Promise<String> => {
  const list = await getUsers();
  return list.json();
};

const userFetch = async () => {
  const response = await fetch(_API_URL)
    .then((response) => response.json())
    .then((item) => item);
  userLoader();
  return response;
};

let data: any[] = [];

export const user = (_: any, name: any) =>
  userFetch().then((item) => {
    const _name = name;
    item.forEach(
      ({
        name,
        _id,
        index,
        picture,
        age,
        eyeColor,
        company,
        email,
        phone,
      }: any) => {
        if (name === _name.name) {
          data.push({
            name,
            _id,
            index,
            picture,
            age,
            eyeColor,
            company,
            email,
            phone,
          });
        } else {
          false;
        }
      }
    );

    userLoader();

    return data[0];
  });
