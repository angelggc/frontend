import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Container } from "../components/container";
import { Data } from "../data/data-context";
import { useContext, useState } from "react";
import {
  FormAddEditProject,
  FormProject,
} from "../components/form-add-edit-project";

export function Edit() {
  const dataController = useContext(Data);
  const { id } = useParams();
  const nav = useNavigate();
  const [project] = useState(dataController.getProjectById(id as string));
  function onSubmit(data: FormProject) {
    dataController.edit({ ...data, id: id as string });
    nav("/");
  }
  return (
    <>
      <Header>
        <div className="flex gap-3">
          <Link to="/">
            <button
              type="button"
              className="text-xs opacity-60 flex items-center gap-2"
            >
              <i className="fa-solid fa-arrow-left text-xl"></i> <p>Back</p>
            </button>
          </Link>
          <p className="font-black opacity-80">Edit project</p>
        </div>
      </Header>
      <Container>
        <section className="flex justify-center mt-4">
          <FormAddEditProject
            onSubmit={onSubmit}
            initialValues={{
              name: project.name,
              description: project.description,
              assigned: project.assigned,
              manager: project.manager,
              status: project.status,
            }}
          />
        </section>
      </Container>
    </>
  );
}
