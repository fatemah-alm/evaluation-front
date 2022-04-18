import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import semesterStore from "./semesterStore";

class ProjectStore {
  projects = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchProjects = async () => {
    try {
      const response = await instance.get("/projects/");
      this.projects = response.data;
    } catch (error) {
      console.log("Projecttore -> fetchProject -> error", error);
    }
  };

  addProject = async (newProject) => {
    try {
      console.log(newProject, "NEWW");
      const response = await instance.post("/projects/", newProject);
      this.projects.push(response.data);
      await semesterStore.fetchSemesters();
    } catch (error) {
      console.log(error);
    }
  };
}

const projectStore = new ProjectStore();
projectStore.fetchProjects();

export default projectStore;
