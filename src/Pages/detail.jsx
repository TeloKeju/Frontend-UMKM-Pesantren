import { Card, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    async function fetchData() {
      return await axios.get(`http://127.0.0.1:8000/api/umkm/${id}`);
    }

    fetchData().then((res) => {
      setData(res.data);
    })
    
    
    
  }, []);

  console.log(data);

  const Sosmed = [
    {
      id: 1,
      img: "/whatsapp.png",
      nama: "Whatsapp",
      link: data.whatsapp,
    },
    {
      id: 2,
      img: "/location.png",
      nama: "Maps",
      link: data.maps,
    },
    {
      id: 3,
      img: "/facebook.png",
      nama: "Facebook",
      link:data.facebook ,
    },
    {
      id: 4,
      img: "/instagram.png",
      nama: "instagram",
      link: data.instagram,
    },
    {
      id: 5,
      img: "/tiktok.png",
      nama: "tiktok",
      link: data.tiktok,
    },
  ];

  
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-full">
        <Carousel className="" indicators="false">
          <div className="relative flex justify-center items-center">
            <img
              className="w-full"
              src={`http://127.0.0.1:8000/${data.image}`}
              alt="foto makanan"
            />
          </div>
        </Carousel>
      </div>

      <main className="p-7 md:p-14 lg:p-28">
        <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
          {data.namaUmkm}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>

        <div className="mt-5 mx-12">
          <p>Lokasi dan Sosial Media</p>
          {Sosmed.map((item) => (
            item.link ? ( // Cek apakah link tidak null
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
            ) : null // Jika link null, maka return null (tidak tampilkan apa-apa)
            ))}
        </div>
      </main>
    </>
  );
};

export default Detail;
