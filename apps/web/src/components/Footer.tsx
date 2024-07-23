'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";

import Image from "next/image";

import JasaRaharja from "../../public/assets/Jasa Raharja.png"
import PLN from "../../public/assets/PLN.png"
import Haus from "../../public/assets/Haus.png"
import Gojek from "../../public/assets/Gojek.png"
import Uniqlo from "../../public/assets/Uniqlo.png"
import BCA from "../../public/assets/BCA.png"
import TransTv from "../../public/assets/Trans TV.png"
import Oktavian from "../../public/users/Oktavian.jpeg"
import Bagas from "../../public/users/Bagas.jpeg"
import Herdian from "../../public/users/Herdian.jpeg"
import Ameliana from "../../public/users/Ameliana.jpeg"
import Azmi from "../../public/users/Azmi.jpeg"

export const Footer = () => {
  return <>

  {/* Commentar */}
    <section className="bg-yellow-600">

      <div className="mx-auto px-4 py-8 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-18">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">

          <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl p-2 font-serif tracking-tight text-gray-900 sm:text-4xl">
              Rivew...
            </h2>

            <input type="text" className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm" placeholder="User Name" />
            <input type="text" className="w-full rounded-lg border-gray-200 p-2 pe-12 my-2 text-sm shadow-sm" placeholder="Email/Telphone" />
            <input type="text" className="w-full rounded-lg border-gray-200 p-2 pe-12 pb-20 text-sm shadow-sm" placeholder="Comentar" />

            <button className="justify-start my-2 px-4 py-1 bg-black text-white rounded-full"> SUBMIT </button>

          </div>

          <div className="xl:px-8 lg:col-span-2 ">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper">

              <SwiperSlide>
                <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                  <div className="md:flex items-center gap-4">
                    <Image
                      alt=""
                      src={Oktavian}
                      className="size-16 rounded-full object-cover"
                    />

                    <div className="pt-4 sm:pt-0">
                      <h3 className="text-lg font-medium text-white">Oktavian</h3>
                      <p className="text-sm text-white">oktavian@example.com</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                      <div className="block h-full rounded-lg border border-gray-700 p-4">
                        <strong className="font-medium text-white">Halaman Belakang 2024</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          Anjir line up nya keren semua..😍 iri banget sama halaman belakang..😭😭
                        </p>
                      </div>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
              <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                  <div className="md:flex items-center gap-4">
                    <Image
                      alt=""
                      src={Bagas}
                      className="size-16 rounded-full object-cover"
                    />

                    <div className="pt-4 sm:pt-0">
                      <h3 className="text-lg font-medium text-white">Bagas Yanuar</h3>
                      <p className="text-sm text-white">bagasyanuar@example.com</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                      <div className="block h-full rounded-lg border border-gray-700 p-4">
                        <strong className="font-medium text-white">Halaman Belakang 2024</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          🔥🔥🔥🔥🔥 Terbaik
                        </p>
                      </div>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
              <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                  <div className="md:flex items-center gap-4">
                    <Image
                      alt=""
                      src={Herdian}
                      className="size-16 rounded-full object-cover"
                    />

                    <div className="pt-4 sm:pt-0">
                      <h3 className="text-lg font-medium text-white">Herdian</h3>
                      <p className="text-sm text-white">herdian@example.com</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                      <div className="block h-full rounded-lg border border-gray-700 p-4">
                        <strong className="font-medium text-white">Halaman Belakang 2024</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          Menyalaaa 🔥 ga sia-sia guehhh
                        </p>
                      </div>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
              <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                  <div className="md:flex items-center gap-4">
                    <Image
                      alt=""
                      src={Ameliana}
                      className="size-16 rounded-full object-cover"
                    />

                    <div className="pt-4 sm:pt-0">
                      <h3 className="text-lg font-medium text-white">Ameliana</h3>
                      <h3 className="text-sm font-medium text-white">ameliana@example.com</h3>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                      <div className="block h-full rounded-lg border border-gray-700 p-4">
                        <strong className="font-medium text-white">Halaman Belakang 2024</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          Finally yang ditunggu-tunggu di bogor sampe merinding liat postingan inii😍😭❤️
                        </p>
                      </div>
                  </div>
                </article>
              </SwiperSlide>

              <SwiperSlide>
              <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                  <div className="md:flex items-center gap-4">
                    <Image
                      alt=""
                      src={Azmi}
                      className="size-16 rounded-full object-cover"
                    />

                    <div className="pt-4 sm:pt-0">
                      <h3 className="text-lg font-medium text-white">Azmi</h3>
                      <h3 className="text-sm font-medium text-white">azmi@example.com</h3>

                      
                      
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                      <div className="block h-full rounded-lg border border-gray-700 p-4">
                        <strong className="font-medium text-white">Halaman Belakang 2024</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          Ga sabarrrrr ketemu mas sal sama mba nadi amizah 😭😭😭
                        </p>
                      </div>
                  </div>
                </article>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

  {/* Judul */}
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-yellow-600">
          <p className="text-2xl font-bold sm:text-5xl">HALAMAN BELAKANG</p>
        </div>
        <p className="text-sm text-center text-white font-serif sm:text-2xl">Intimate Music Show With Green</p>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white font-serif">
          Our Partners:
        </p>

  {/* Sponsor */}
        <ul className="mt-12 flex justify-center gap-3 md:gap-8">
          <li>
            <Image src={JasaRaharja} height={50} alt="Logo Jasa Raharja" />
          </li>

          <li>
            <Image src={PLN} height={50} alt="Logo PLN" />
          </li>

          <li>
            <Image src={Haus} height={50} alt="Logo Haus" />
          </li>

          <li>
            <Image src={Gojek} height={50} alt="Logo Gojek" />
          </li>

          <li>
            <Image src={Uniqlo} height={50} alt="Logo Uniqlo" />
          </li>

          <li>
            <Image src={BCA} height={50} alt="Logo BCA" />
          </li>

          <li>
            <Image src={TransTv} height={50} alt="Logo Trans TV" />
          </li>
        </ul>

{/* Navigator */}
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className="text-white transition hover:text-gray-700/75" href="#"> Home </a>
          </li>

          <li>
            <a className="text-white transition hover:text-gray-700/75" href="#"> Tickets </a>
          </li>

          <li>
            <a className="text-white transition hover:text-gray-700/75" href="#"> Day 1 </a>
          </li>

          <li>
            <a className="text-white transition hover:text-gray-700/75" href="#"> Day 2 </a>
          </li>
        </ul>


      </div>
    </footer>
  </>;
};
