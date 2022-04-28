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
      // await this.fetchCriterias();
      console.log(this.criterias);
    } catch (error) {
      console.log(error);
    }
  };

  selectCriteria = async (criteriaId, nextSelcted) => {
    try {
      const foundCriteria = this.criterias.find(
        (criteria) => JSON.stringify(criteria.id) === JSON.stringify(criteriaId)
      );
      foundCriteria.isSelected = nextSelcted;
    } catch (error) {
      console.log(error);
    }
  };

  updateCriteria = async (criteriaId, newCriteria) => {
    try {
      await instance.put(`/criterias/${criteriaId}`, newCriteria);
      await this.fetchCriterias();
    } catch (error) {
      console.log(error);
    }
  };
}

const criteriaStore = new CriteriaStore();
criteriaStore.fetchCriterias();

export default criteriaStore;
