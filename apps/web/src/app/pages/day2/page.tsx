import React from 'react'

import Image from 'next/image';

import Jason from '../../../../public/assets/Jason.jpg'
import KuntoAji from '../../../../public/assets/Kunto Aji.jpg'
import SalPriadi from '../../../../public/assets/Sal Priadi.jpg'
import Fiersa from '../../../../public/assets/Fiersa.jpg'
import Nadin from '../../../../public/assets/Nadin Amiza.jpg'
import Danila from '../../../../public/assets/Danilla.jpg'

const Day2 = () => {
  return (
    <>
        {/* Content 2 */}
        <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-5xl font-serif sm:text-5xl">Line-up Day 2</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Kunto Aji"
                src={KuntoAji}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">KUNTO AJI</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Sal Priadi"
                src={SalPriadi}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">SAL PRIADI</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Nadin Amizah"
                src={Nadin}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">NADIN AMIZAH</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Fiersa Besari"
                src={Fiersa}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">FIERSA BESARI</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Danilla Riyadi"
                src={Danila}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">DANILLA RIYADI</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Hindia"
                src={Jason}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">JASON RANTI</h1>
                  </a>
                </div>
              </div>
            </article>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Day2;