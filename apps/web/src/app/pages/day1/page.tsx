import React from 'react'

import Image from 'next/image';

import Hindia from '../../../../public/assets/Hindia.jpg'
import Isyana from '../../../../public/assets/Isyana.jpg'
import Iqbal from '../../../../public/assets/Iqbal.jpg'
import Pamungkas from '../../../../public/assets/Pamungkas.jpg'
import Feby from '../../../../public/assets/Feby.jpg'
import Raisa from '../../../../public/assets/Raisa.jpg'

const Day1 = () => {
  return (
    <>
    {/* Content 2 */}
    <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-5xl font-serif sm:text-5xl">Line-up Day 1</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Hindia"
                src={Hindia}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">HINDIA</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Raisa"
                src={Raisa}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">RAISA</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Pamungkas"
                src={Pamungkas}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">PAMUNGKAS</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Isyana"
                src={Isyana}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">ISYANA SARASVATI</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Iqbal Ramadhan"
                src={Iqbal}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">IQBAL RAMADHAN</h1>
                  </a>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <Image
                alt="Gambar Band Feby Putri"
                src={Feby}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h1 className="mt-0.5 text-3xl font-serif text-white">FEBY PUTRI</h1>
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

export default Day1;