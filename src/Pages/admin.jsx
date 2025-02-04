import {
  Card,
  Table,
  Modal,
  Button,
  Label,
  FileInput,
  TextInput,
  Radio,
} from "flowbite-react";
import { useState } from "react";
import * as yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
const Admin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <main>
        <div className="p-5 flex flex-col gap-5">
          <Card>
            <div className="flex justify-between items-center">
              <h1 className=" font-bold">UMKM</h1>
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
                      <fieldset>
                        <legend>Jenis UMKM</legend>
                        <div className="flex items-center gap-2">
                          <Radio
                            id="makanan"
                            name="makanan"
                            value="Makanan"
                            defaultChecked
                          />
                          <Label htmlFor="makanan">Makanan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio id="minuman" name="minuman" value="Minuman" />
                          <Label htmlFor="minuman">Minuman</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio id="jasa" name="jasa" value="Jasa" />
                          <Label htmlFor="jasa">Jasa</Label>
                        </div>
                      </fieldset>
                    </div>

                    <div className="mt-3 block">
                      <Label className="" value="map" />
                      <TextInput
                        id="map"
                        placeholder="Masukkan Link MAP jika ada"
                        required
                        shadow
                        addon="Map"
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="wa" />
                      <TextInput
                        id="wa"
                        placeholder="Masukkan Link WA jika ada"
                        required
                        shadow
                        addon="WA"
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="ig" />
                      <TextInput
                        id="ig"
                        placeholder="Masukkan Link IG jika ada"
                        required
                        shadow
                        addon="IG"
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="tt" />
                      <TextInput
                        id="tt"
                        placeholder="Masukkan Link Tiktok jika ada"
                        required
                        shadow
                        addon="TT"
                      />
                    </div>
                    <div className="mt-3 block">
                      <Label className="" value="fb" />
                      <TextInput
                        id="fb"
                        placeholder="Masukkan Link Facebook jika ada"
                        required
                        shadow
                        addon="FB"
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
                  <Table.HeadCell>MAP</Table.HeadCell>
                  <Table.HeadCell>WA</Table.HeadCell>
                  <Table.HeadCell>IG</Table.HeadCell>
                  <Table.HeadCell>TT</Table.HeadCell>
                  <Table.HeadCell>FB</Table.HeadCell>
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
                    <Table.Cell>link map</Table.Cell>
                    <Table.Cell>link wa</Table.Cell>
                    <Table.Cell>link ig</Table.Cell>
                    <Table.Cell>link tt</Table.Cell>
                    <Table.Cell>link fb</Table.Cell>
                    <Table.Cell>
                      <Button
                        className=" bg-gray-200 text-black"
                        onClick={() => setOpenModal(true)}
                      >
                        Edit
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
                              Edit Data UMKM
                              <hr className="border-gray-200 mt-2x" />
                            </h3>
                            <div className="mt-8 block">
                              <Label
                                htmlFor="file-upload"
                                value="Gambar UMKM"
                              />
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
                              <fieldset>
                                <legend>Jenis UMKM</legend>
                                <div className="flex items-center gap-2">
                                  <Radio
                                    id="makanan"
                                    name="jenis"
                                    value="Makanan"
                                    defaultChecked
                                  />
                                  <Label htmlFor="makanan">Makanan</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Radio
                                    id="minuman"
                                    name="jenis"
                                    value="Minuman"
                                  />
                                  <Label htmlFor="minuman">Minuman</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Radio id="jasa" name="jenis" value="Jasa" />
                                  <Label htmlFor="jasa">Jasa</Label>
                                </div>
                              </fieldset>
                            </div>

                            <div className="mt-3 block">
                              <Label className="" value="map" />
                              <TextInput
                                id="map"
                                placeholder="Masukkan Link MAP jika ada"
                                required
                                shadow
                                addon="Map"
                              />
                            </div>
                            <div className="mt-3 block">
                              <Label className="" value="wa" />
                              <TextInput
                                id="wa"
                                placeholder="Masukkan Link WA jika ada"
                                required
                                shadow
                                addon="WA"
                              />
                            </div>
                            <div className="mt-3 block">
                              <Label className="" value="ig" />
                              <TextInput
                                id="ig"
                                placeholder="Masukkan Link IG jika ada"
                                required
                                shadow
                                addon="IG"
                              />
                            </div>
                            <div className="mt-3 block">
                              <Label className="" value="tt" />
                              <TextInput
                                id="tt"
                                placeholder="Masukkan Link Tiktok jika ada"
                                required
                                shadow
                                addon="TT"
                              />
                            </div>
                            <div className="mt-3 block">
                              <Label className="" value="fb" />
                              <TextInput
                                id="fb"
                                placeholder="Masukkan Link Facebook jika ada"
                                required
                                shadow
                                addon="FB"
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
