'use client'

import Image from 'next/image'

import Hindia from '../../public/assets/Hindia.jpg'
import KuntoAji from '../../public/assets/Kunto Aji.jpg'
import SalPriadi from '../../public/assets/Sal Priadi.jpg'
import Pamungkas from '../../public/assets/Pamungkas.jpg'
import Nadin from '../../public/assets/Nadin Amiza.jpg'
import Raisa from '../../public/assets/Raisa.jpg'
import TalkShow from '../../public/assets/Talkshow.jpg'
import Food from '../../public/assets/Food.jpg'
import Fasion from '../../public/assets/Fasion.jpg'
import Seni from '../../public/assets/Seni.jpg'
import Picnic from '../../public/assets/Picnic.jpg'

export default function Home() {
  return (
    <>
      {/* Content 1 */}
      <div className="overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('../../public/assets/Background.png')]">

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center bg-gray-900/40 2xl:bg-transparent 2xl:from-gray-900/95 
          2xl:to-gray-900/25 ltr:2xl:bg-gradient-to-r rtl:2xl:bg-gradient-to-l">

          <div className="mx-auto max-w-8xl text-center">
            <h1 className="drop-shadow-md font-sans text-3xl font-extrabold text-yellow-600 sm:text-6xl 2xl:text-8xl ">
              HALAMAN BELAKANG <br />
              <strong className="font-serif drop-shadow-md text-xl font-bold text-white sm:block">
                Intimate Music Show With Green </strong>
            </h1>

            <p className="font-serif mt-4 text-white sm:text-xl/relaxed">
              Bogor, 13 - 14 Desember 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif text-white sm:text-4xl">
              Come Together ...
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <div className="overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('../../public/assets/Konser.jpg')]">
                <div className="mt-11 mb-60 text-center">
                  <a
                    href="/pages/tickets"
                    className="inline-block rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    BUY TICKETS
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:py-16">
              <article className="space-y-6 text-white">
                <p className="font-serif">
                  We can't wait to welcome you like-minded people, music lovers, passionate performers, families, artists,
                  musicians, creators, rebels, and refugees of a changing festival landscape to All Together Now.
                </p>
              </article>
            </div>

          </div>
        </div>
      </section>

      {/* Content 3 */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-5xl font-serif sm:text-5xl">Line-up</p>
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
          </div>
          <div className="mt-10 mx-auto max-w-lg text-center">
            <p className="font-serif">Plus many more to be announced for across 18 stages</p>
          </div>
        </div>
      </section>

      {/* Content 4 */}
      <div className="overflow-hidden py-20 bg-cover bg-center bg-no-repeat bg-[url('../../public/assets/Background2.jpg')]">
        <div className="mx-auto max-w-lg text-center text-white ">
          <h2 className="text-3xl font-serif sm:text-5xl">Experience...</h2>

          <p className="mt-4 font-serif">
            In addition to 18+ stages of music, spoken word, comedy, theatre...
          </p>
        </div>
      </div>

      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a href="#" className="block">
              <Image
                alt=""
                src={TalkShow}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-serif text-white sm:text-3xl">Talk Show</h3>

              <p className="mt-2 max-w-sm font-serif text-gray-400">
                Our beautiful oasis of wellness is located on the Lawns of Tranquility oevrlooking the lake,
                featuring Yoga sessions, Sauna treatments, Hot Tubs, Sound bath experiences and more. 
              </p>
            </a>

            <a href="#" className="block">
              <Image
                alt=""
                src={Picnic}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-serif text-white sm:text-3xl">Picnic</h3>

              <p className="mt-2 max-w-sm font-serif text-gray-400">
                The renowned Greencrafts Village is an ATN must-do experience where you can take part in many
                gorgeous rutal, sustainable, craft making activities to make beautiful, ethical and parctical items to take
                home and treasure.
              </p>
            </a>

            
            <a href="#" className="block">
              <Image
                alt=""
                src={Seni}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-serif text-white sm:text-3xl">Show Art</h3>

              <p className="mt-2 max-w-sm font-serif text-gray-400">
                Kids Together is the perfect hang out for all the family, with a schedule jam packed full of activities
                across the weekend, from music in the Disco Shed, the Actual Reality Arcades life-sized interactive game zone,
                crafits and face-painting and more.
              </p>
            </a>

            <a href="#" className="block">
              <Image
                alt=""
                src={Food}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-serif text-white sm:text-3xl">Food & Feasts</h3>

              <p className="mt-2 max-w-sm font-serif text-gray-400">
                Having great food is also a festival essential and you will be spoiled for choice at ATN24.
                From sit dwon dinner experiences, artisanal food traders, to bespoke cockatails, foodies won't be
                disappointed.
              </p>
            </a>

            <a href="#" className="block">
              <Image
                alt=""
                src={Fasion}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-serif text-white sm:text-3xl">Faison</h3>

              <p className="mt-2 max-w-sm font-serif text-gray-400">
                Seanchoiche hosts its own intimate stage across three days og the festival. It is a spase for people
                from all corners of life to come and listen and engage with spoken stories, ranging from personal
                anecdotes, monologues, fictional narratives, to poertry pieces and anything in between.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}