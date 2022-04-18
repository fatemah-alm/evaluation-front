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

  fetchSemesterDetails = async (id) => {
    try {
      const response = await instance.get(`/semesters/${id}`);
      this.semesters = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createSemester = async (newSemester) => {
    try {
      const response = await instance.post("/semesters/", newSemester);
      this.semesters.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const semesterStore = new SemesterStore();
semesterStore.fetchSemesters();

export default semesterStore;
