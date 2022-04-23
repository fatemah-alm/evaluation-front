import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class JudgeStore {
  judges = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchJudges = async () => {
    try {
      const response = await instance.get("/judges/");
      this.judges = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //   fetchSemesterDetails = async (id) => {
  //     try {
  //       const response = await instance.get(`/semesters/${id}`);
  //       this.semesters = response.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  createJudge = async (newJudge) => {
    try {
      const response = await instance.post("/judges/", newJudge);
      this.judges.push(response.data);
      this.fetchJudges();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const judgeStore = new JudgeStore();
judgeStore.fetchJudges();

export default judgeStore;
