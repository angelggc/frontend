import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { Container } from "../components/container";

import {
  FormAddEditProject,
  FormProject,
} from "../components/form-add-edit-project";
import { Data } from "../data/data-context";
import { useContext } from "react";

export function Add() {
  const nav = useNavigate();
  const dataController = useContext(Data);
  function onSubmit(data: FormProject) {
    dataController.save(data);
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
          <p className="font-black opacity-80">Add project</p>
        </div>
      </Header>
      <Container>
        <section className="mt-4 flex justify-center">
          <FormAddEditProject onSubmit={onSubmit} />
        </section>
      </Container>
    </>
  );
}
