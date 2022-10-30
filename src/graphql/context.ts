import fetch from "node-fetch";

const API_URL = "http://localhost:3000/users";

export const context = () => {
  return {
    getUsers: (path = "/") => {
      const url = `${API_URL}${path}`;
      return fetch(url);
    },
  };
};
