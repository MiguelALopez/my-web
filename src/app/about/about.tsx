'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ELsX8V82Uyd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PiCopySimpleThin } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';

export default function About() {
  return (
    <div id="about" className="bg-[#eaedf2] py-16">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-4xl font-bold mb-2.5 relative z-10 pb-2.5 text-zinc-950">ABOUT ME</h2>
          <p className="text-gray-600 mb-8">A SENIOR FRONT-END & FULLSTACK BASED IN COLOMBIA</p>
        </div>
        <div className="flex flex-col lg:flex-row overflow-hidden">
          <div
            className="relative lg:w-1/3 overflow-hidden border-[14px] border-white rounded shadow-lg lg:max-w-[445px] lg:max-h-[472px]">
            <Image src="/profile_picture.jpg" alt="Profile" width={445} height={472}
                   className="w-full  h-full object-cover"/>
            <div className="absolute top-8 -left-2 space-y-2 p-2 bg-white">
              <a className="flex justify-center items-center bg-[#64748b] size-9"
                 href="https://www.linkedin.com/in/miguelalopezf/">
                <FaLinkedinIn size="20"/>
              </a>
              <a className="flex justify-center items-center bg-[#64748b] size-9"
                 href="https://github.com/MiguelALopez">
                <FaGithub size="20"/>
              </a>
            </div>
          </div>
          <div className="lg:w-2/3 p-8 lg:ml-16">
            <h3 className="text-3xl font-bold mb-2 text-zinc-950">I'M Miguel Lopez</h3>
            <p className="text-xl text-gray-600 mb-4">
              A Senior <span className="text-[#64748b]">Front-end & Fullstack</span> based in{' '}
              <span className="text-[#64748b]">Colombia</span>
            </p>
            <p className="text-gray-600 mb-4">
              I develop web pages
              I'm specialized in Angular, Typescript, HTML and CSS to create professional web pages using components
              design patterns. I'm also competent in some other libraries and frameworks like React, NextJS and NestJS.
              I'm Enthusiastic about AI exploring new technologies to enhance applications experience.
              <br/><br/>

              I was born in Colombia reason of my mother tongue is spanish but I'm also fluent in English in
              professional environments and learning Portuguese and French. Regarding my hobbies, I'm a digital nomad in
              Latin America, I enjoy photography, mountain climbing, and connecting with nature. A curious fact about me
              is that I traveled from Colombia to the end of the world in Ushuaia by car.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-bold text-zinc-950">Birthday</p>
                <p className="text-gray-600">22th Dec 1993</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">E-mail</p>
                <div className="flex flex-row items-center">
                  <a href="mailto:miguel123dr@gmail.com"><p className="text-gray-600">miguel123dr@gmail.com</p></a>
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
              <div>
                <p className="font-bold text-zinc-950">Age</p>
                <p className="text-gray-600">30 Yr</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">Phone</p>
                <p className="text-gray-600">820-885-3321</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">Residence</p>
                <p className="text-gray-600">Colombia</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">Skype</p>
                <p className="text-gray-600">skype.0404</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">Address</p>
                <p className="text-gray-600">Cali, Colombia</p>
              </div>
              <div>
                <p className="font-bold text-zinc-950">Freelance</p>
                <p className="text-gray-600">Available</p>
              </div>
            </div>
            <a target="_blank"
               href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9d6e0ef2-05fc-4d43-973c-83027291a0d2">
              <button className="bg-[#64748b] px-5 py-2.5 text-sm">DOWNLOAD CV</button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

function myFunction() {
  navigator.clipboard.writeText('miguel123dr@gmail.com');
}
