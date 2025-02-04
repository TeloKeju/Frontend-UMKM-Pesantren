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
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [umkm, setUmkm] = useState([]);
  const [umkm1, setUmkm1] = useState([]);

  const [image, setImage] = useState(null);
  const [nama, setNama] = useState("");
  const [description, setDescription] = useState("");
  const [kategori, setKategori] = useState(""); // Pastikan kategori bisa diubah
  const [map, setMap] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [facebook, setFacebook] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("login") || localStorage.getItem("login") === "false") {
      navigate("/", { replace: true });
    }

    let getData = async () => {
      return await axios.get("http://127.0.0.1:8000/api/umkm")
    }
    getData().then((data) => setUmkm(data.data))
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("namaUmkm", nama);
    formData.append("description", description);
    formData.append("category", kategori);
    formData.append("map", map);
    formData.append("whatsapp", whatsapp);
    formData.append("instagram", instagram);
    formData.append("tiktok", tiktok);
    formData.append("facebook", facebook);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/umkm", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload berhasil:", response.data);
      alert("Data berhasil ditambahkan!");
      setOpenModal(false);
    } catch (error) {
      console.error("Error upload:", error);
      alert("Gagal mengunggah data.");
    }
  };

  let editClick = async (id) => {    
    setOpenModal(true)
    await axios.get(`http://127.0.0.1:8000/api/umkm/${id}`).then((data) => {
      setNama(data.data.namaUmkm || "")
      setDescription(data.data.description || "")  
      setKategori(data.data.category || "")
      setMap(data.data.maps || "")  
      setWhatsapp(data.data.whatsapp || "")  
      setInstagram(data.data.instagram || "")  
      setTiktok(data.data.tiktok || "")  
      setFacebook(data.data.facebook || "")
    })
    
    
  }

  return (
    <>
      <main>
        <div className="p-5 flex flex-col gap-5">
          <Card>
            <div className="flex justify-between items-center">
              <h1 className=" font-bold">UMKM</h1>
              <Button className=" bg-gray-200 text-black" onClick={() => setOpenModal(true)}>
                Tambah Data UMKM
              </Button>

              <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Tambah Data UMKM
                      <hr className="border-gray-200 mt-2" />
                    </h3>

                    {/* Input Gambar */}
                    <div className="mt-3 block">
                      <Label htmlFor="file-upload" value="Gambar UMKM" />
                      <FileInput id="file-upload" onChange={(e) => setImage(e.target.files[0])} />
                    </div>

                    {/* Input Nama UMKM */}
                    <div className="mt-3">
                      <Label htmlFor="title" value="Nama UMKM" />
                      <TextInput id="title" placeholder="Masukkan Nama UMKM" onChange={(e) => setNama(e.target.value)} required />
                    </div>

                    {/* Input Deskripsi */}
                    <div className="mt-3">
                      <Label htmlFor="deskripsi" value="Masukkan Deskripsi UMKM" />
                      <TextInput id="deskripsi" placeholder="Masukkan Deskripsi UMKM" onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    {/* Radio Button Kategori */}
                    <div className="mt-3 block">
                      <fieldset>
                        <legend>Jenis UMKM</legend>
                        <div className="flex items-center gap-2">
                          <Radio id="makanan" name="kategori" value="Makanan" onChange={(e) => setKategori(e.target.value)} />
                          <Label htmlFor="makanan">Makanan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio id="minuman" name="kategori" value="Minuman" onChange={(e) => setKategori(e.target.value)} />
                          <Label htmlFor="minuman">Minuman</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio id="jasa" name="kategori" value="Jasa" onChange={(e) => setKategori(e.target.value)} />
                          <Label htmlFor="jasa">Jasa</Label>
                        </div>
                      </fieldset>
                    </div>

                    {/* Input Link Sosial Media */}
                    <div className="mt-3 block">
                      <Label value="MAP" />
                      <TextInput id="map" placeholder="Masukkan Link MAP" onChange={(e) => setMap(e.target.value)} />
                    </div>
                    <div className="mt-3 block">
                      <Label value="WhatsApp" />
                      <TextInput id="wa" placeholder="Masukkan Link WA" onChange={(e) => setWhatsapp(e.target.value)} />
                    </div>
                    <div className="mt-3 block">
                      <Label value="Instagram" />
                      <TextInput id="ig" placeholder="Masukkan Link IG" onChange={(e) => setInstagram(e.target.value)} />
                    </div>
                    <div className="mt-3 block">
                      <Label value="Tiktok" />
                      <TextInput id="tt" placeholder="Masukkan Link Tiktok" onChange={(e) => setTiktok(e.target.value)} />
                    </div>
                    <div className="mt-3 block">
                      <Label value="Facebook" />
                      <TextInput id="fb" placeholder="Masukkan Link Facebook" onChange={(e) => setFacebook(e.target.value)} />
                    </div>

                    {/* Tombol Submit */}
                    <div className="mt-6">
                      <hr className="border-gray-200 mb-2" />
                      <Button className="mt-1 bg-gray-200 text-black" onClick={handleSubmit}>
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
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                {umkm.map((data, index) => (
                  <Table.Row key={data.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell  className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {index + 1}
                        </Table.Cell>
                        <Table.Cell>{data.namaUmkm}</Table.Cell>
                        <Table.Cell>{data.maps}</Table.Cell>
                        <Table.Cell>{data.whatsapp}</Table.Cell>
                        <Table.Cell>{data.instagram}</Table.Cell>
                        <Table.Cell>{data.tiktok}</Table.Cell>
                        <Table.Cell>{data.facebook}</Table.Cell>
                        <Table.Cell>
                          <Button
                            className=" bg-gray-200 text-black"
                            onClick={() => {
                              editClick(data.id)
                            }}
                          >
                            Edit
                          </Button>

                          <Button
                            className=" bg-gray-200 text-black"
                            onClick={async () => {
                                await axios.delete(`http://127.0.0.1:8000/api/umkm?id=${data.id}`)
                            }}
                          >
                            Delete
                          </Button>


                                  />
                                </div>
                                </div>

                                <div className="mt-3 block">
                                  <Label className="" value="map" />
                                  <TextInput
                                    id="map"
                                    placeholder="Masukkan Link MAP jika ada"
                                    required
                                    shadow
                                    addon="Map"
                                    value={map}
                                    onChange={(e) => setMap(e.target.value)}
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
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
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
                                    value={instagram}
                                    onChange={(e) => setInstagram(e.target.value)}
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
                                    value={tiktok}
                                    onChange={(e) => setTiktok(e.target.value)}
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
                                    value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
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
                  ))}
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
