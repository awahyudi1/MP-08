'use client'

import React from 'react'
import Image from 'next/image'

import Ticket1 from '../../../../public/assets/Ticket1.png'
import Ticket2 from '../../../../public/assets/Ticket2.png'

const Tickets = () => {
    return (
        <>
        {/* Ticket Day 1 */}
            <div className='m-5 sm:m-20'>
                <div className="overflow-auto rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-black">
                    <Image
                        alt=""
                        src={Ticket1}
                        className="h-full w-full object-cover md:h-full"
                    />

                    <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <p className="text-sm text-white font-semibold uppercase tracking-widest">Run with the pack</p>

                        <h2 className="mt-6 uppercase">
                            <span className="text-4xl font-black text-yellow-600 sm:text-5xl lg:text-6xl"> HALAMAN BELAKANG</span>
                            <br />
                            <span className="text-4xl text-white font-black sm:text-5xl lg:text-6xl"> DAY 01</span>
                            <span className="mt-2 block text-white text-sm">HARGA Rp.250.000,-</span>
                        </h2>

                        <a
                            className="mt-8 inline-block w-full bg-white py-4 text-sm font-bold uppercase tracking-widest text-blact"
                            href="#"
                        >
                            BUY TICKET
                        </a>

                        <p className="mt-8 text-xs font-medium uppercase text-white">
                            Offer valid until 13th Desember, 2024 *
                        </p>
                    </div>
                </div>
            </div>
        
        {/* Ticket Day 2 */}
            <div className='m-5 sm:m-20'>
                <div className="overflow-auto rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-yellow-600">
                    <Image
                        alt=""
                        src={Ticket2}
                        className="h-full w-full object-cover md:h-full"
                    />

                    <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

                        <h2 className="mt-6 uppercase">
                            <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> HALAMAN BELAKANG </span>
                            <br />
                            <span className="text-4xl text-white font-black sm:text-5xl lg:text-6xl"> DAY 02</span>

                            <span className="mt-2 block text-sm">Harga Rp.250.000,-</span>
                        </h2>

                        <a
                            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                            href="#"
                        >
                            BUY TICKET
                        </a>

                        <p className="mt-8 text-xs font-medium uppercase text-black">
                            Offer valid until 14th Desember, 2024 *
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tickets;