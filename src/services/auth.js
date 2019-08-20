import { api } from "../config";
import { storage } from "./../config/storage";
import * as Keychain from 'react-native-keychain';

const TOKEN_KEY = "access_token";

export const auth = {
  isAuthenticated: async () => {
    let token = await storage.get(TOKEN_KEY);
    return token !== null;
  },

  getToken: async () => await storage.get(TOKEN_KEY),

  setToken: async token => await storage.store(TOKEN_KEY, token),

  logout: async () => await storage.remove(TOKEN_KEY),

  authenticate: async (email, password) => {
    try {
      const body = {
          email,
          password
      };

      const response = await api.post("/token", body);
      console.log(response)
      // seta o token no storage do dispositivo
      if (response.status == 200) {
        await Keychain.setGenericPassword(email, password);
        await storage.store(TOKEN_KEY, response.data.token);
      }
     
      return response;
    } catch (error) {
      return error;
    }
  }
};