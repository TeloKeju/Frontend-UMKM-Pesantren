import {
  Card,
  Label,
  FileInput,
  TextInput,
  Radio,
  Button,
  Table,
} from "flowbite-react";

import { useNavigate } from "react-router-dom";

import { FormatRupiah } from "@arismun/format-rupiah";

const Menu = () => {
  let navigate = useNavigate();

  return (
    <>
      <main className="p-3 my-10 sm:mx-32 lg:mx-60">
        <Card>
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Daftar Menu</h1>
            <Button
              className=" bg-gray-200 text-black"
              onClick={() => navigate("/admin/menu/add")}
            >
              Tambah Data Menu
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Menu</Table.HeadCell>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Harga</Table.HeadCell>
                <Table.HeadCell>Kategori</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    1.
                  </Table.Cell>
                  <Table.Cell>Bakso Kontol</Table.Cell>
                  <Table.Cell>
                    <img
                      className=""
                      src="https://placehold.co/100x100"
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <FormatRupiah value={15000} />
                  </Table.Cell>
                  <Table.Cell>Makanan</Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-row justify-center items-center gap-3">
                      <Button
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => navigate("/admin/menu/update")}
                      >
                        Update Menu
                      </Button>
                      <Button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        // onClick={() => navigate("/admin/update")}
                      >
                        Delete Menu
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Menu;
