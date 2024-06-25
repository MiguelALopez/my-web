'use client';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PiCopySimpleThin } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';
import './about.scss';
import { toast } from 'react-toastify';
import { IoCode } from 'react-icons/io5';
import { FiCamera } from 'react-icons/fi';
import { LuMountain } from 'react-icons/lu';
import { BiLeaf } from 'react-icons/bi';
import { MdOutlineLuggage } from 'react-icons/md';

export default function About() {
  return (
    <div id="about" className="bg-[#eaedf2] py-24">
      <div className="container">
        <div className="section-title">
          <h2 className="text-4xl font-bold mb-2.5 relative z-10 pb-2.5 text-zinc-950">ABOUT ME</h2>
          <p className="text-gray-600 mb-8">A SENIOR FRONT-END & FULLSTACK BASED IN COLOMBIA</p>
        </div>
        <div className="flex flex-col lg:flex-row overflow-hidden items-center">
          <div className="relative px-3.5 lg:w-5/12 overflow-hidden my-3.5 -mx-3.5 w-full">
            <div className={'border-[14px] border-white rounded shadow-lg'}>
              <Image src="/profile_picture.jpg" alt="Profile" width={445} height={472}
                     className="w-full  h-full object-cover"/>
              <div className="absolute top-8 left-5 space-y-2 p-2 bg-white">
                <a className="flex justify-center items-center bg-[#64748b] size-9"
                   target="_blank"
                   href={process.env.NEXT_PUBLIC_LINKEDIN}>
                  <FaLinkedinIn size="20"/>
                </a>
                <a className="flex justify-center items-center bg-[#64748b] size-9"
                   target="_blank"
                   href={process.env.NEXT_PUBLIC_GITHUB}>
                  <FaGithub size="20"/>
                </a>
              </div>
            </div>
          </div>
          <div className="about-me lg:w-7/12 px-3.5 my-3.5">
            <div className={'lg:pl-10 font-normal'}>
              <h3 className="text-3xl font-bold mb-2 text-zinc-950">I'M Miguel Lopez</h3>
              <p className="text-lg text-gray-600 mb-4">
                A Senior <span className="text-[#64748b] font-medium">Front-end & Fullstack</span> based in{' '}
                <span className="text-[#64748b] font-medium">Colombia</span>
              </p>
              <p className="text-gray-600 mb-4 text-[15px]">
                I design and develop services for customers of all sizes, specializing in creating stylish, modern
                websites, web services and online stores. My passion is to design digital user experiences through the
                bold interface and meaningful interactions. Check out my Portfolio
              </p>
              <div className={'flex flex-col md:flex-row text-[14px] -mx-4'}>
                <div className={'basis-1/2 px-4'}>
                  <div className={'about-item'}>
                    <label className={'text-zinc-900 font-medium basis-5/12'}>Birthday</label>
                    <p className={'basis-7/12 text-zinc-500'}>22th Dec 1993</p>
                  </div>
                  <div className={'about-item'}>
                    <label className={'text-zinc-900 font-medium basis-5/12'}>Residence</label>
                    <p className={'basis-7/12 text-zinc-500'}>Colombia</p>
                  </div>
                </div>
                <div className={'basis-1/2 px-4'}>
                  <div className={'about-item'}>
                    <label className={'text-zinc-900 font-medium basis-5/12'}>Time zone</label>
                    <p className={'basis-7/12 text-zinc-500'}>GTM-5</p>
                  </div>
                  <div className={'about-item'}>
                    <label className={'text-zinc-900 font-medium basis-5/12'}>Email</label>
                    <a href="mailto:miguel123dr@gmail.com">
                      <p
                        className={'basis-7/12 text-zinc-500'}>miguel123dr@gmail.com</p>
                    </a>
                    <a className="cursor-pointer"
                       data-tooltip-id="rt-email"
                       data-tooltip-content="Copy"
                       data-tooltip-place="right"
                       data-tooltip-offset={-5}
                       onClick={() => myFunction()}>
                      <PiCopySimpleThin
                        className="mx-2.5"
                        color="#64748b" size="23"/>
                    </a>
                    <Tooltip id="rt-email" noArrow={true} className="!px-1.5 !py-1 !text-xs"/>
                  </div>
                </div>
              </div>
              <div className={'flex flex-row flex-wrap xl:flex-nowrap text-zinc-900 gap-3 mt-5 font-medium'}>
                <div className={'flex flex-row items-center bg-zinc-300 rounded-full px-3 py-1.5'}>
                  <IoCode/>
                  <p className={'ml-2'}>Coding</p>
                </div>
                <div className={'flex flex-row items-center bg-zinc-300 rounded-full px-3 py-1.5'}>
                  <FiCamera/>
                  <p className={'ml-2'}>Photography</p>
                </div>
                <div className={'flex flex-row items-center bg-zinc-300 rounded-full px-3 py-1.5'}>
                  <LuMountain/>
                  <p className={'ml-2'}>Hiking</p>
                </div>
                <div className={'flex flex-row items-center bg-zinc-300 rounded-full px-3 py-1.5'}>
                  <BiLeaf/>
                  <p className={'ml-2'}>Nature</p>
                </div>
                <div className={'flex flex-row items-center bg-zinc-300 rounded-full px-3 py-1.5'}>
                  <MdOutlineLuggage/>
                  <p className={'ml-2'}>Travel</p>
                </div>
              </div>
              <a className={'mt-10 block'} target="_blank"
                 href={process.env.CV_URL || ''}>
                <button className="bg-[#64748b] px-5 py-2.5 text-sm">DOWNLOAD CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function myFunction() {
  toast('Copied to clipboard!');
  navigator.clipboard.writeText('miguel123dr@gmail.com');
}
