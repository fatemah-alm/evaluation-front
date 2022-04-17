import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class SemesterStore {
  semesters = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchSemesters = async () => {
    try {
      const response = await instance.get("/semesters/");
      this.semesters = response.data;
    } catch (error) {
      console.log("semesterstore -> fetchsemesters -> error", error);
    }
  };
}

const semesterStore = new SemesterStore();
semesterStore.fetchSemesters();

export default semesterStore;
