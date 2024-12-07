import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import List from "./pages/list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Add } from "./pages/add";
import { Edit } from "./pages/edit";
import { DataContext } from "./data/data-context";
import { DeleteModal } from "./components/delete-modal";
import { DeleteContextProvider } from "./hooks/use-delete-modal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <DeleteContextProvider>
          <div className="bg-[#F0F2F5] h-screen">
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
            <DeleteModal />
          </div>
        </DeleteContextProvider>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);
