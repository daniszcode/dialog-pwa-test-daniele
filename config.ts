const prod = {
  API_URL: "http://localhost:3000",
};

const staging = {
  API_URL: "staging: http://localhost:3000",
};
const config = process.env.NODE_ENV == "development" ? staging : prod;
export default config;
