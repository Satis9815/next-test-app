
"use client"; 
import { CiSearch } from 'react-icons/ci';
import { IoIosNotifications } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';
export default function Home() {

  const [active, setActive] = useState(false);
  const toggleDropdown = () => {
    setActive(!active);
  };
  return (
    <main className="min-h-screen p-2">
      <header className="mx-auto w-full max-w-7xl flex justify-between mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="p-3 outline-0 px-10 rounded-lg text-lg"
          />
          <CiSearch size={20} className="absolute top-4 left-3" />
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <IoIosNotifications size={25} />
            </li>
            <li>
              <CiSettings size={25} />
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <img
                  className="h-10 w-10 object-cover"
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                  alt=" "
                />
                <div>
                  <h1 className="text-xl font-semibold">
                    Satis KumarChaudhary
                  </h1>
                  <p className="font-light text-sm">shift Technology admin</p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <section className="mx-auto w-full max-w-7xl flex justify-between mt-8 p-3 rounded-lg bg-white">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className="font-bold text-2xl">My Shifts</h3>
            <p className="font-light text-sm">Manage Your Shifts</p>
          </div>
          <div className="h-9 w-9 bg-slate-300 rounded-full flex items-center justify-center cursor-pointer">
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl ">
        <h2 className="mt-3 text-2xl font-bold ">Today&apos;s Shift</h2>
        <div className=" mt-3 p-3 rounded-lg bg-white flex justify-between">
          <div className="">
            <div className="flex space-x-2">
              <p className="text-sm font-medium">8th jan,2023</p>
              <p className="text-[10px] text-green-300 rounded-3xl p-1 px-2 bg-yellow-200 ">
                OPEN
              </p>
            </div>
            <h3 className="font-bold text-2xl my-2">Repair & maintainance</h3>
            <p className="text-lg font-light">Grand Hyatt melbounce</p>
          </div>
          <div className="flex items-center space-x-9 ">
            <div className="">
              <div className="flex items-center space-x-2 mb-2">
                <CiClock2 size={20} />
                <span className="text-sm">shift time</span>
              </div>
              <p className="text-lg font-medium">08:80 - 14:00</p>
            </div>
            <div className="">
              <div className="flex items-center space-x-2 mb-2">
                <CiClock2 /> <span>Hourly Rate</span>
              </div>
              <p className="text-lg font-medium">
                $20<span className="font-light">/hour</span>
              </p>
            </div>
            <div className="h-full w-[1px] bg-gray-500"></div>
            <div className="flex items-center flex-col">
              <p className="text-sm text-green-400 mb-2">
                Shift starts in 10 mins
              </p>
              <div className="relative flex items-center gap-3">
                <button className="bg-blue-700 text-white font-semibold py-4 px-9 rounded-lg cursor-pointer border-0 outline-none">
                  Start Shift
                </button>
                <div className="h-9 w-9 rounded-lg bg-gray-300 flex items-center cursor-pointer justify-center">
                  <BsThreeDotsVertical size={20} onClick={toggleDropdown} />
                </div>
                {
                  active && (
                    <div className="absolute bg-white p-4 right-0 top-14">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className=" flex items-center gap-1 pb-3 bottom-1 border-b mt-3 last:border-b-0 last:pb-0"
                      >
                        <IoEyeOutline size={20} />
                        <p>View shift Details</p>
                      </div>
                    ))}
                  </div>
                  )
                }
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
