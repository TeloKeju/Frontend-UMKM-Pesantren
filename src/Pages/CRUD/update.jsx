import {
  Card,
  Label,
  FileInput,
  TextInput,
  Radio,
  Button,
} from "flowbite-react";

const Update = () => {
  return (
    <>
      <main className="p-5 my-10 sm:mx-32 lg:mx-60">
        <Card>
          <div className="text-start">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Update Data UMKM
              <hr className="border-gray-200 mt-2" />
            </h3>

            {/* Input Gambar */}
            <div className="mt-3 block">
              <Label htmlFor="file-upload" value="Gambar UMKM" />
              <FileInput
                id="file-upload"
                //   onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            {/* Input Nama UMKM */}
            <div className="mt-3">
              <Label htmlFor="title" value="Nama UMKM" />
              <TextInput
                id="title"
                placeholder="Masukkan Nama UMKM"
                //   onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>

            {/* Input Deskripsi */}
            <div className="mt-3">
              <Label htmlFor="deskripsi" value="Masukkan Deskripsi UMKM" />
              <TextInput
                id="deskripsi"
                placeholder="Masukkan Deskripsi UMKM"
                //   onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Radio Button Kategori */}
            <div className="mt-3 block">
              <fieldset>
                <legend>Jenis UMKM</legend>
                <div className="flex items-center gap-2">
                  <Radio
                    id="makanan"
                    name="kategori"
                    value="Makanan"
                    //   onChange={(e) => setKategori(e.target.value)}
                  />
                  <Label htmlFor="makanan">Makanan</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="minuman"
                    name="kategori"
                    value="Minuman"
                    //   onChange={(e) => setKategori(e.target.value)}
                  />
                  <Label htmlFor="minuman">Minuman</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="jasa"
                    name="kategori"
                    value="Jasa"
                    //   onChange={(e) => setKategori(e.target.value)}
                  />
                  <Label htmlFor="jasa">Jasa</Label>
                </div>
              </fieldset>
            </div>

            {/* Input Link Sosial Media */}
            <div className="mt-3 block">
              <Label value="MAP" />
              <TextInput
                id="map"
                placeholder="Masukkan Link MAP"
                //   onChange={(e) => setMap(e.target.value)}
              />
            </div>
            <div className="mt-3 block">
              <Label value="WhatsApp" />
              <TextInput
                id="wa"
                placeholder="Masukkan Link WA"
                //   onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <div className="mt-3 block">
              <Label value="Instagram" />
              <TextInput
                id="ig"
                placeholder="Masukkan Link IG"
                //   onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
            <div className="mt-3 block">
              <Label value="Tiktok" />
              <TextInput
                id="tt"
                placeholder="Masukkan Link Tiktok"
                //   onChange={(e) => setTiktok(e.target.value)}
              />
            </div>
            <div className="mt-3 block">
              <Label value="Facebook" />
              <TextInput
                id="fb"
                placeholder="Masukkan Link Facebook"
                //   onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            {/* Tombol Submit */}
            <div className="mt-6">
              <hr className="border-gray-200 mb-2" />
              <Button
                className="mt-1 bg-gray-200 text-black"
                //   onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Update;
