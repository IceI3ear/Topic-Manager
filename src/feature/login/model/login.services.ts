export default class LoginServices {
  private static instance: LoginServices;

  static getInstance(): LoginServices {
    if (!LoginServices.instance) {
      LoginServices.instance = new LoginServices();
    }
    return LoginServices.instance;
  }
}
