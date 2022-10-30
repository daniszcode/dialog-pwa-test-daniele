import fetch from "node-fetch";

const list = async (_: any, __: any, { getUsers }: any): Promise<String> => {
  const list = await getUsers();

  return list.json();
};

const userFetch = async () => {
  const response = await fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((item) => item);

  return response;
};

let data: any[] = [];

export const userResolvers = {
  Query: {
    list,
    user: (_: any, name: any) =>
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

        return data[0];
      }),
  },
};
