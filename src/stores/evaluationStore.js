import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class EvaluationStore {
  evaluation = [];
  showNav = true;
  constructor() {
    makeAutoObservable(this);
  }

  showNavBar = (value) => {
    this.showNav = value;
  };

  fetchEvaluation = async () => {
    try {
      const response = await instance.get("/evaluation/");
      this.evaluation = response.data;
    } catch (error) {
      console.log("Evaluationstore -> fetchEvaluations -> error", error);
    }
  };

  createEvaluation = async (project) => {
    try {
      const response = await instance.post("/evaluation/", project);
      this.evaluation.push(response.data);
      this.fetchEvaluation();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const evaluationStore = new EvaluationStore();
evaluationStore.fetchEvaluation();

export default evaluationStore;
