import { Card, Carousel } from "flowbite-react";

const Detail = () => {
  const Sosmed = [
    {
      id: 1,
      img: "/whatsapp.png",
      nama: "Nama Sosial Media",
      link: "",
    },
    {
      id: 2,
      img: "/location.png",
      nama: "Nama Sosial Media",
      link: "",
    },
    {
      id: 3,
      img: "/facebook.png",
      nama: "Nama Sosial Media",
      link: "",
    },
    {
      id: 4,
      img: "/instagram.png",
      nama: "Nama Sosial Media",
      link: "",
    },
    {
      id: 5,
      img: "/tiktok.png",
      nama: "Nama Sosial Media",
      link: "",
    },
  ];

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-full">
        <Carousel className="" indicators="false">
          <div className="relative flex justify-center items-center">
            <img
              className="w-full"
              src="https://placehold.co/100x100"
              alt="foto makanan"
            />
          </div>
          <div className="relative flex justify-center items-center">
            <img
              className="w-full"
              src="https://placehold.co/100x100"
              alt="foto makanan"
            />
          </div>
          <div className="relative flex justify-center items-center">
            <img
              className="w-full"
              src="https://placehold.co/100x100"
              alt="foto makanan"
            />
          </div>
        </Carousel>
      </div>

      <main className="p-7 md:p-14 lg:p-28">
        <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
          Judul UMKM
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          eveniet explicabo saepe rem aliquam animi ex, culpa in quod illo minus
        </p>

        <div className="mt-5 mx-12">
          <p>Lokasi dan Sosial Media</p>
          {Sosmed.map((item) => (
            <>
              <a
                key={item.id}
                href={item.link}
                className="rounded-3xl mt-2 flex justify-start p-2 bg-gray-200 border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex justify-start text-black">
                  <img src={item.img} className="h-7" alt="" />
                  <p className="ms-2">{item.nama}</p>
                </div>
              </a>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default Detail;
