import { TextInput, Card } from "flowbite-react";

import { Makanan, Minuman } from "../Data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";

import { FormatRupiah } from "@arismun/format-rupiah";
// import "swiper/css/freemode";

const Home = () => {
  return (
    <>
      <main className="p-7 md:p-14 lg:p-28">
        <div className="">
          <TextInput className="rounded-xl" placeholder="Makanan" />
        </div>

        <div className="mt-5 md:mt-10">
          <h1 className="text-start">Makanan</h1>
          <hr className="border-black" />
        </div>
        <div className="mt-3">
          <Swiper
            modules={[FreeMode, Navigation, Pagination, Scrollbar]}
            spaceBetween={30}
            slidesPerView={2}
            freeMode={true}
            // navigation
            // pagination={{ clickable: true }}
          >
            {Makanan.map((item) => (
              <>
                <SwiperSlide className=" md:!w-[400px]">
                  <Card
                    href="/detail"
                    className="w-full"
                    imgAlt="Gambar UMKM"
                    // imgSrc={item.image}
                    renderImage={() => {
                      return (
                        <div className="flex justify-center items-center relative w-full">
                          <img
                            className="h-[150px] w-[400px] sm:h-[300px] sm:w-[400] object-cover"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      );
                    }}
                  >
                    <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="max-sm:truncate font-normal text-gray-700 dark:text-gray-400">
                      {item.deskripsi}
                    </p>
                    <FormatRupiah value={item.harga} />
                  </Card>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>

        <div className="mt-5 md:mt-10">
          <h1 className="text-start">Minuman</h1>
          <hr className="border-black" />
        </div>
        <div className="mt-3">
          <Swiper
            modules={[FreeMode, Navigation, Pagination, Scrollbar]}
            spaceBetween={30}
            slidesPerView={2}
            freeMode={true}
            // navigation
            // pagination={{ clickable: true }}
          >
            {Minuman.map((item) => (
              <>
                <SwiperSlide className=" md:!w-[400px]">
                  <Card
                    href="/detail"
                    className=" w-full"
                    imgAlt="Gambar UMKM"
                    // imgSrc={item.image}
                    renderImage={() => {
                      return (
                        <div className="flex justify-center items-center relative w-full">
                          <img
                            className="h-[150px] w-[400px] sm:h-[300px] sm:w-[400] object-cover"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      );
                    }}
                  >
                    <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="max-sm:truncate font-normal text-gray-700 dark:text-gray-400">
                      {item.deskripsi}
                    </p>
                    <FormatRupiah value={item.harga} />
                  </Card>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>

        <div className="mt-5 md:mt-10">
          <h1 className="text-start">Minuman</h1>
          <hr className="border-black" />
        </div>
        <div className="mt-3">
          <Swiper
            modules={[FreeMode, Navigation, Pagination, Scrollbar]}
            spaceBetween={30}
            slidesPerView={2}
            freeMode={true}
            // navigation
            // pagination={{ clickable: true }}
          >
            {Minuman.map((item) => (
              <>
                <SwiperSlide className=" md:!w-[400px]">
                  <Card
                    href="/detail"
                    className=" w-full"
                    imgAlt="Gambar UMKM"
                    // imgSrc={item.image}
                    renderImage={() => {
                      return (
                        <div className="flex justify-center items-center relative w-full">
                          <img
                            className="h-[150px] w-[400px] sm:h-[300px] sm:w-[400] object-cover"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      );
                    }}
                  >
                    <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="max-sm:truncate font-normal text-gray-700 dark:text-gray-400">
                      {item.deskripsi}
                    </p>
                    <FormatRupiah value={item.harga} />
                  </Card>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default Home;
