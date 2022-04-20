import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class CriteriaStore {
  criterias = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCriterias = async () => {
    try {
      const response = await instance.get("/criterias/");
      this.criterias = response.data;
    } catch (error) {
      console.log("criteriastore -> fetchcriterias -> error", error);
    }
  };

  createCriteria = async (newCriteria) => {
    try {
      const response = await instance.post("/criterias/", newCriteria);
      this.criterias.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const criteriaStore = new CriteriaStore();
criteriaStore.fetchCriterias();

export default criteriaStore;
