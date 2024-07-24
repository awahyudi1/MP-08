import React from 'react'
import { Header } from '@/components/Header';

const Dashboard = () => {
    return (
        <>

            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8">
                <div className="h-full rounded-lg bg-gray-200">

                    <div className="flex h-screen flex-col justify-between border-e bg-white">
                        <div className="px-4 py-6">
                        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="size-10 rounded-full object-cover"
                                />

                                <div>
                                    <p className="text-xs">
                                        <strong className="block font-medium">Budi Doremi</strong>

                                        <span> budi@example.com </span>
                                    </p>
                                    <p className="text-xs">250 point</p>
                                </div>
                            </a>

                            <ul className="mt-6 space-y-1">
                                <li>
                                    <a
                                        href="/dashboard/profile"
                                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                                    >
                                        Profile
                                    </a>
                                </li>

                                <li>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="text-sm font-medium">Transaction </span>

                                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <ul className="mt-2 space-y-1 px-4">
                                            <li>
                                                <a
                                                    href="/dashboard/alltransaction"
                                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                >
                                                    All Transaction
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#"
                                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                >
                                                    Succes
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#"
                                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                >
                                                    Fail
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>

                                <li>
                                    <a
                                        href="/dasboard/reviews"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
            </div>
        </>
    )
}

export default Dashboard;