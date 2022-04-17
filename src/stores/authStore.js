import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token2", token);
    console.log(token);
  };

  unSetUser = () => {
    localStorage.removeItem("token2");
    this.user = null;
  };

  signup = async (user, navigate, setIsCorrect) => {
    try {
      console.log(
        "🚀 ~ file: authStore.js ~ line 13 ~ AuthStore ~ signup= ~ user",
        user
      );
      await instance.post("/api/users/", user, { mode: "cors" });
      await this.signin(user, navigate, setIsCorrect);
    } catch (error) {
      setIsCorrect(false);

      console.log(error);
    }
  };

  signin = async (user, navigate, setIsCorrect) => {
    try {
      const res = await instance.post("/api/jwt/create/", user);
      this.setUser(res.data.access);
      const res2 = await instance.get("/api/users/me/");
      console.log(res2.data);
      this.user = res2.data;
      await navigate("/home");
    } catch (error) {
      setIsCorrect(false);
      console.log(error);
    }
  };

  checkForToken = async () => {
    const token = localStorage.getItem("token2");

    if (token) {
      try {
        // console.log(token);
        this.setUser(token);
        const res2 = await instance.get("/api/users/me/");
        this.user = res2.data;
        // console.log(res2.data);
      } catch (error) {
        // console.log(error);
        this.unSetUser();
      }
    } else this.unSetUser();
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
