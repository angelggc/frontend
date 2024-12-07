/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Item } from "../components/item";
import { useContext, useState } from "react";
import { Data } from "../data/data-context";
import { Table } from "../components/table";
import { TableItem } from "../components/table-item";
import { Container } from "../components/container";

export default function List() {
  const data = useContext(Data);
  const [projects] = useState(data.getList());

  return (
    <>
      <Header>
        <p className="font-black">My projects</p>
        <Link to="/add">
          <Button>
            <div className="flex items-center mx-2 gap-2">
              <span className="text-2xl">+</span>
              <span className="text-[12px]">Add project</span>
            </div>
          </Button>
        </Link>
      </Header>

      <div className="pt-5">
        <Container>
          <section className="mt-2">
            <div className="md:hidden">
              {projects.map((item, i) => (
                <Item item={item} key={i} />
              ))}
            </div>
            <div className="hidden md:block">
              <Table>
                {projects.map((item, i) => (
                  <TableItem item={item} key={i} />
                ))}
              </Table>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
