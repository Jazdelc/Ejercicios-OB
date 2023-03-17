import roles from "./roles";

export class User {
  username = '';
  email = '';
  password = '';
  role = roles.USER;

  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}