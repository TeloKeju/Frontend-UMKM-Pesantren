import {
  Card,
  Table,
  Modal,
  Button,
  Label,
  TextInput,
  FileInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Admin = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if(!localStorage.getItem("login") || localStorage.getItem("login") == 'false'){
      navigate('/', { replace: true });
    }
  }, [])
  

  return (
    <>
      <main>
        <div className="p-5 flex flex-col gap-5">
          <Card>
            <div className="flex justify-between items-center">
              <h1 className=" font-bold">Makanan</h1>
              <Button
                className=" bg-gray-200 text-black"
                onClick={() => setOpenModal(true)}
              >
                Tambah Data UMKM
              </Button>
              <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => setOpenModal(false)}
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Tambah Data UMKM
                      <hr className="border-gray-200 mt-2x" />
                    </h3>
                          
                    

                    <div className="mt-6">
                      <hr className="border-gray-200 mb-2x" />
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>

            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>No</Table.HeadCell>
                  <Table.HeadCell>Nama</Table.HeadCell>
                  <Table.HeadCell>Kontak</Table.HeadCell>
                  <Table.HeadCell>harga</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      1
                    </Table.Cell>
                    <Table.Cell>Bakso Kontol</Table.Cell>
                    <Table.Cell>012345678912</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Card>

          <Card>
            <div className="flex justify-between items-center">
              <h1 className=" font-bold">Minuman</h1>
              <Button
                className=" bg-gray-200 text-black"
                onClick={() => setOpenModal(true)}
              >
                Tambah Data UMKM
              </Button>
              <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => setOpenModal(false)}
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Tambah Data UMKM
                      <hr className="border-gray-200 mt-2x" />
                    </h3>
                    <div className="mt-8 block">
                      <Label htmlFor="file-upload" value="Gambar UMKM" />
                    </div>
                    <FileInput id="file-upload" />
                    <div className="mt-3">
                      <div className=" block">
                        <Label htmlFor="title" value="Nama UMKM" />
                      </div>
                      <TextInput
                        id=""
                        placeholder="Masukkan Nama UMKM"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <div className="block">
                        <Label
                          htmlFor="deskripsi"
                          value="Masukkan Deskripsi UMKM"
                        />
                      </div>
                      <TextInput
                        id="deskripsi"
                        placeholder="Masukkan Deskripsi UMKM"
                        required
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="Kontak" />
                      <TextInput
                        id="kontak"
                        placeholder="Masukkan No HP"
                        required
                        shadow
                        addon="+62"
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="Harga" />
                      <TextInput
                        id="harga"
                        placeholder="Masukkan harga"
                        required
                        shadow
                        addon="Rp."
                      />
                    </div>

                    <div className="mt-6">
                      <hr className="border-gray-200 mb-2x" />
                      <Button className="mt-1 bg-gray-200 text-black">
                        Submit
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>

            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>No</Table.HeadCell>
                  <Table.HeadCell>Nama</Table.HeadCell>
                  <Table.HeadCell>Kontak</Table.HeadCell>
                  <Table.HeadCell>harga</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      1
                    </Table.Cell>
                    <Table.Cell>Bakso Kontol</Table.Cell>
                    <Table.Cell>012345678912</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Card>

          <Card>
            <div className="flex justify-between items-center">
              <h1 className=" font-bold">Jasa</h1>
              <Button
                className=" bg-gray-200 text-black"
                onClick={() => setOpenModal(true)}
              >
                Tambah Data UMKM
              </Button>
              <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => setOpenModal(false)}
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Tambah Data UMKM
                      <hr className="border-gray-200 mt-2x" />
                    </h3>
                    <div className="mt-8 block">
                      <Label htmlFor="file-upload" value="Gambar UMKM" />
                    </div>
                    <FileInput id="file-upload" />
                    <div className="mt-3">
                      <div className=" block">
                        <Label htmlFor="title" value="Nama UMKM" />
                      </div>
                      <TextInput
                        id=""
                        placeholder="Masukkan Nama UMKM"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <div className="block">
                        <Label
                          htmlFor="deskripsi"
                          value="Masukkan Deskripsi UMKM"
                        />
                      </div>
                      <TextInput
                        id="deskripsi"
                        placeholder="Masukkan Deskripsi UMKM"
                        required
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="Kontak" />
                      <TextInput
                        id="kontak"
                        placeholder="Masukkan No HP"
                        required
                        shadow
                        addon="+62"
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="Harga" />
                      <TextInput
                        id="harga"
                        placeholder="Masukkan harga"
                        required
                        shadow
                        addon="Rp."
                      />
                    </div>

                    <div className="mt-6">
                      <hr className="border-gray-200 mb-2x" />
                      <Button className="mt-1 bg-gray-200 text-black">
                        Submit
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>

            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>No</Table.HeadCell>
                  <Table.HeadCell>Nama</Table.HeadCell>
                  <Table.HeadCell>Kontak</Table.HeadCell>
                  <Table.HeadCell>harga</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <p>1</p>
                    </Table.Cell>
                    <Table.Cell>Bakso Kontol</Table.Cell>
                    <Table.Cell>012345678912</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Admin;
