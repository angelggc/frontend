interface Project {
  id: string;
  name: string;
  description: string;
  manager: string;
  assigned: string;
  status: boolean;
  creationDate: Date;
}

interface ProjectLocalStorage {
  id: string;
  name: string;
  description: string;
  manager: string;
  assigned: string;
  status: boolean;
  creationDate: number;
}

interface User {
  id: string;
  name: string;
  img: string;
}

export interface GetListResponseModel {
  id: string;
  name: string;
  description: string;
  manager: User;
  assigned: User;
  status: boolean;
  creationDate: string;
}

interface SaveRequestModel extends Omit<Project, "id" | "creationDate"> {}
interface EditRequestModel extends Omit<Project, "creationDate"> {}

export class DataController {
  private static readonly STORAGE_KEY = "projectsData";

  private projects: Project[] = [];
  private users: User[] = [
    {
      id: "1",
      name: "Luis Fernández",
      img: "./media/perfil-1.jpeg",
    },
    {
      id: "2",
      name: "Laura Álvarez",
      img: "./media/perfil-2.jpg",
    },
  ];

  constructor() {
    const data = this.loadFromLocalStorage();
    if (data) {
      this.projects = data;
    } else {
      this.projects = [
        {
          id: "default1",
          name: "Default Project",
          description: "This is a default project",
          assigned: "1",
          manager: "2",
          status: true,
          creationDate: new Date(),
        },
      ];
      this.saveToLocalStorage();
    }
  }

  save(data: SaveRequestModel) {
    const newProject: Project = {
      ...data,
      id: crypto.randomUUID(),
      creationDate: new Date(),
    };
    this.projects.push(newProject);
    this.saveToLocalStorage();
  }

  edit(data: EditRequestModel) {
    const projectIndex = this.projects.findIndex((p) => p.id === data.id);
    if (!projectIndex) throw new Error();

    this.projects[projectIndex].name = data.name;
    this.projects[projectIndex].description = data.description;
    this.projects[projectIndex].manager = data.manager;
    this.projects[projectIndex].assigned = data.assigned;
    this.projects[projectIndex].status = data.status;

    this.saveToLocalStorage();
  }

  getList(): GetListResponseModel[] {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const response: GetListResponseModel[] = this.projects.map((project) => ({
      ...project,
      assigned: this.users.find((user) => user.id === project.assigned) as User,
      manager: this.users.find((user) => user.id === project.manager) as User,
      creationDate: new Intl.DateTimeFormat("es-ES", options).format(
        project.creationDate
      ),
    }));
    return response;
  }

  getUsers(): User[] {
    return this.users;
  }

  getProjectById(id: string): Project {
    const response = this.projects.find((p) => p.id === id);
    if (!response) throw new Error();
    return response;
  }

  deleteProject(id: string) {
    const projectIndex = this.projects.findIndex((p) => p.id === id);
    if (!projectIndex) throw new Error();

    this.projects = this.projects.filter((p) => p.id !== id);
    this.saveToLocalStorage();
  }

  private loadFromLocalStorage(): Project[] | null {
    const dataString = localStorage.getItem(DataController.STORAGE_KEY);
    if (dataString) {
      const projectParsed: Project[] = JSON.parse(dataString).map(
        (p: ProjectLocalStorage) => ({
          ...p,
          creationDate: new Date(p.creationDate),
        })
      );
      return projectParsed;
    }
    return null;
  }

  private saveToLocalStorage() {
    localStorage.setItem(
      DataController.STORAGE_KEY,
      JSON.stringify(
        this.projects.map((p) => ({
          ...p,
          creationDate: p.creationDate.getTime(),
        }))
      )
    );
  }
}
