import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import semesterStore from "./semesterStore";
class TeamStore {
  teams = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTeams = async () => {
    try {
      const response = await instance.get("/teams/");
      this.teams = response.data;
    } catch (error) {
      console.log("teamtore -> fetchteam -> error", error);
    }
  };

  addTeam = async (newTeam) => {
    try {
      const response = await instance.post("/teams/", newTeam);
      this.teams.push(response.data);
      await semesterStore.fetchSemesters();
    } catch (error) {
      console.log(error);
    }
  };
}

const teamStore = new TeamStore();
teamStore.fetchTeams();

export default teamStore;
