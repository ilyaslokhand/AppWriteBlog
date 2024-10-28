import Conf from "../Conf/Conf";
import { Account, Client, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;
  constructor() {
    this.Client.setEndpoint(Conf.appwriteUrl).setProject(
      Conf.appwriteProjectID
    );
    this.account = new Account(this.Client);
  }
  async CreateAccount({ email, password, name }) {
    try {
      const UserAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (UserAccount) {
        return this.login({ email, password });
      } else {
        return UserAccount;
      }
    } catch (error) {
      console.error("CreateAccount Error:", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async GetCurrentUser() {
    try {
      const user = await this.account.get(); // Throws error if session is invalid
      return user;
    } catch (error) {
      console.error("User not authenticated or missing scope:", error);
      return null; // Handle gracefully
    }
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout Error:", error);
      throw error;
    }
  }
}

const authservice = new AuthService();
export default authservice;
