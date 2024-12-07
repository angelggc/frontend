import { useContext, useState } from "react";
import { Data } from "../data/data-context";
import { Button } from "./button";
import { Label } from "./label";

export interface FormProject {
  name: string;
  description: string;
  manager: string;
  assigned: string;
  status: boolean;
}

interface FormAddEditProjectProps {
  onSubmit: (data: FormProject) => void;
  initialValues?: FormProject;
}

export function FormAddEditProject({
  onSubmit,
  initialValues,
}: FormAddEditProjectProps) {
  const data = useContext(Data);
  const [users] = useState(data.getUsers());

  const [inputName, setInputName] = useState<string>(initialValues?.name ?? "");
  const [inputDescription, setInputDescription] = useState<string>(
    initialValues?.description ?? ""
  );
  const [inputManager, setInputManager] = useState<string>(
    initialValues?.manager ?? ""
  );
  const [inputAssigned, setInputAssigned] = useState<string>(
    initialValues?.assigned ?? ""
  );
  const [inputStatus, setInputStatus] = useState(
    initialValues ? initialValues.status : true
  );

  function internalSubmit() {
    if (inputName === "") {
      return;
    }
    if (inputDescription === "") {
      return;
    }
    if (inputManager === "") {
      return;
    }
    if (inputAssigned === "") {
      return;
    }

    onSubmit({
      name: inputName,
      description: inputDescription,
      assigned: inputAssigned,
      manager: inputManager,
      status: inputStatus,
    });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        internalSubmit();
      }}
      className="px-3 py-7 flex flex-col gap-3 bg-white shadow-md"
    >
      <div>
        <Label htmlFor="name">Project name</Label>
        <input
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
          type="text"
          id="name"
          className="w-full border-2 rounded h-9"
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <input
          onChange={(e) => setInputDescription(e.target.value)}
          value={inputDescription}
          type="text"
          id="description"
          className="w-full border-2 rounded h-9"
        />
      </div>
      <div>
        <Label htmlFor="manager">Project manager</Label>
        <select
          onChange={(e) => setInputManager(e.target.value)}
          value={inputManager}
          id="manager"
          className="w-full border-2 rounded h-9 bg-white"
        >
          <option value="" disabled className="bg-slate-100">
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="assigned">Assigned to</Label>
        <select
          onChange={(e) => setInputAssigned(e.target.value)}
          value={inputAssigned}
          id="assigned"
          className="w-full border-2 rounded h-9 bg-white"
        >
          <option value="" disabled className="bg-slate-100">
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <select
          onChange={(e) => setInputStatus(Boolean(e.target.value))}
          value={inputStatus ? "true" : "false"}
          id="status"
          className="w-full border-2 rounded h-9 bg-white"
        >
          <option value="true" className="text-[#595959]">
            Enabled
          </option>
          <option value="false" className="text-[#595959]">
            Disabled
          </option>
        </select>
      </div>
      <div>
        <Button type="submit">
          <p className="text-sm p-3">
            {initialValues ? "Save Changes" : "Create project"}
          </p>
        </Button>
      </div>
    </form>
  );
}
