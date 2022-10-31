import { RESTDataSource } from "apollo-datasource-rest";

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getUsers(urlParams: any = {}) {
    return this.get("", urlParams);
  }
}

const instancie = new UsersApi();
console.log("UsersApi", instancie.getUsers());
