'use client';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { AiOutlineSwap } from 'react-icons/ai';
import { TbArrowBadgeUp } from 'react-icons/tb';
import { MdBlockFlipped } from 'react-icons/md';
import { useState } from 'react';
import { TbCash } from 'react-icons/tb';
import Image from 'next/image';
export default function Home() {
  const [active, setActive] = useState(false);
  const toggleDropdown = () => {
    setActive(!active);
  };
  const dropDownData = [
    {
      id: 1,
      title: 'View Shift Details',
      icon: <IoEyeOutline size={20} color="#000000" />,
    },
    {
      id: 2,
      title: 'Swap Shift',
      icon: <AiOutlineSwap size={20} color="#000000" />,
    },
    {
      id: 3,
      title: 'Offer Shift',
      icon: <TbArrowBadgeUp size={20} color="#000000" />,
    },
    {
      id: 4,
      title: 'Can’t make it',
      icon: <MdBlockFlipped size={20} color="#000000" />,
    },
  ];
  return (
    <main className="">
      <h1>hello Tailwind css </h1>
      {/* <header className="mx-auto w-full max-w-6xl  flex justify-between flex-col-reverse mt-4 sm:flex-row sm:items-center">
        <div className="relative  mt-4 md:w-1/3">
          <input
            type="text"
            placeholder="Search here"
            className="py-4 outline-0 px-10 pr-3 rounded-lg text-base w-full"
          />
          <CiSearch size={25} className="absolute top-4 left-3 " color='#AFB0AF' />
        </div>
        <nav>
          <ul className="flex  gap-3 items-center">
            <div>
              <li className="h-12 w-12  rounded-full flex items-center  justify-center bg-[#f6f6f6]">
                <CiSettings size={25} />
              </li>
            </div>
            <div>
              <li className="h-12 w-12 relative rounded-full flex items-center  justify-center bg-[#f6f6f6]">
                <IoIosNotificationsOutline size={25} />
                <div className="absolute h-2 w-2 bg-[#007AE5] top-[14px] left-6 rounded-full"></div>
              </li>
            </div>
              <div className='h-5 w-[1px] hidden bg-[#f6f6f6] lg:block'></div>
            <li>
              <div className="flex items-center gap-2">
                <Image
                  className="h-10 w-10 object-cover bg-transparent rounded-full"
                  src="/user.png"
                  alt=" user image"
                  height={40}
                  width={40}
                />
                <div>
                  <h1 className="text-base font-semibold sm:text-xl">
                    Satis KumarChaudhary
                  </h1>
                  <p className="font-normal text-[#878988] text-sm">
                    shift Technology admin
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <section className="mx-auto w-full max-w-6xl flex justify-between mt-7 p-5 rounded-lg bg-white">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className=" text-[#202422] text-2xl font-semibold">My Shifts</h3>
            <p className="font-normal text-sm text-[#2B2F2D]">
              Manage Your Shifts
            </p>
          </div>
          <div className="h-9 w-9 bg-[#F6F6F6] rounded-full flex items-center justify-center cursor-pointer">
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl ">
        <h2 className="mt-6 text-xl font-semibold ">Today&apos;s Shift</h2>
        <div className=" mt-4 py-5 px-6 rounded-lg bg-white flex justify-between flex-col lg:flex-row">
          <div>
            <div className="flex gap-3">
              <p className="text-sm font-medium text-[#202422]">8th jan,2023</p>
              <p className="text-[10px] text-[#65A30D] font-semibold rounded-3xl p-1 px-2 bg-[#ECFCCB]">
                OPEN
              </p>
            </div>
            <h3 className="font-semibold text-[#202422] text-xl my-3 mb-0">
              Repair & maintainance
            </h3>
            <p className="text-base text-[#6C6E6D] font-normal">
              Grand Hyatt melbounce
            </p>
          </div>
          <div className="flex items-start flex-col gap-2 lg:flex-row lg:w-1/2 lg:justify-between">
            <div className="mt-2">
              <div className="flex items-center gap-1 mb-2">
                <CiClock2 size={20} color="#878988" />
                <span className="text-sm font-normal text-[#878988]">
                  shift time
                </span>
              </div>
              <p className="text-base text-[#202422] font-medium">
                08:80 - 14:00
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1  mb-2">
                <TbCash size={20} color="#878988" />
                <span className="text-sm font-normal text-[#878988]">
                  Hourly Rate
                </span>
              </div>
              <p className="text-base text-[#202422] font-bold">
                $20<span className="font-normal">/hour</span>
              </p>
            </div>
            <div className="h-full w-[1px] hidden bg-[#EDEDED] lg:block "></div>
            <div className="flex items-start w-full flex-col lg:w-auto lg:items-center">
              <p className="text-sm text-[#84CC16] mb-[10px]">
                Shift starts in 10 mins
              </p>
              <div className="relative flex items-center gap-3 w-full ">
                <button className="bg-[#007AE5] w-full text-white text-base font-semibold py-4 px-6 rounded-lg cursor-pointer border-0 outline-none lg:px-11  ">
                  Start Shift
                </button>
                <div className="w-12 py-4  rounded-lg  bg-[#F6F6F6] flex items-center cursor-pointer justify-center ">
                  <BsThreeDotsVertical size={20} onClick={toggleDropdown} />
                </div>
                {active && (
                  <div
                    className="absolute   bg-white p-4 -right-3 top-[4.5rem] w-52 z-10 shadow-2xl
                      rounded-lg"
                  >
                    {dropDownData.map((item) => (
                      <div
                        key={item.id}
                        className=" flex items-center gap-1 pb-3 bottom-1 border-b mt-3 cursor-pointer last:border-b-0 last:pb-0"
                      >
                        {item.icon}
                        <p className="text-[#202422] text-xs font-medium">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                  )}  
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
