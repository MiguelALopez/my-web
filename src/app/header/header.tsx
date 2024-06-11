'use client';
import { FaGithub, FaLinkedinIn, FaRegFileAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const sections: { name: string, redirect: string }[] = [
    {name: 'Home', redirect: '#home'},
    {name: 'About', redirect: '#about'},
    {name: 'Portfolio', redirect: '#portfolio'},
  ];
  const icons: { icon: IconType, redirect: string }[] = [
    {icon: FaGithub, redirect: 'https://github.com/MiguelALopez'},
    {icon: FaLinkedinIn, redirect: 'https://www.linkedin.com/in/miguelalopezf/'},
    {
      icon: FaRegFileAlt,
      redirect: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9d6e0ef2-05fc-4d43-973c-83027291a0d2'
    },
  ];

  const navDesktopClasses: string = 'flex sm:flex-row sm:static transition-all sm:w-auto sm:gap-0 sm:py-0 sm:pl-0 bg-black left-0';
  const navMobileClasses: string = 'flex-col absolute w-full gap-10 py-6 pl-3';
  const isOpenClasses: string = 'top-24 opacity-100';
  const isCloseClasses: string = '-top-full opacity-0 -z-10 sm:opacity-100 sm:z-auto';
  const Icon = isOpen ? MdClose : HiMiniBars3;

  return (
    <div className="sticky z-50 top-0 bg-black">
      <nav className="container mx-auto py-5 flex flex-row justify-between px-5 z-100">
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <div className="flex flex-row sm:hidden">
            <button type="button" aria-label="Menu" className="active:scale-95 transition-transform w-12
            h-12 rounded-full flex items-center justify-center">
              <Icon className="size-6" onClick={() => setIsOpen(!isOpen)}/>
            </button>
          </div>
          <div
            className={`${isOpen ? isOpenClasses : isCloseClasses} ${navDesktopClasses} ${navMobileClasses}`}>
            {sections.map((section, i) => (
              <a key={i} href={section.redirect}>
                <span className="mx-5 text-md font-medium" key={i}>{section.name}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-end flex-1 z-20">
            {icons.map((Object, i) => (
              <a className="mx-3" target="_blank" key={i} href={Object.redirect}>
                <Object.icon size={25} key={i}/>
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/*<div className={`isolate w-[342px] grow ${isOpen ? 'block' : 'hidden'}`}>*/}
      {/*  <aside className="lg:grow lg:flex flex-col w-full pb-8 lg:pb-0 z-50 block">*/}
      {/*    <nav role="navigation" className="w-full pt-4 lg:h-auto grow pe-0 lg:pe-5 lg:py-6 md:pt-4 lg:pt-4">*/}
      {/*      <div className="items-center justify-center flex-1 w-full md:flex ">*/}
      {/*        <div className="container mx-auto px-5 my-8 flex flex-row justify-between">*/}
      {/*          <div*/}
      {/*            className={'flex flex-wrap items-center justify-start flex-1 sm:flex'}>*/}
      {/*            {sections.map((section, i) => (*/}
      {/*              <a key={i} href={section.redirect}>*/}
      {/*                <span className="mx-5 text-md font-medium">{section.name}</span>*/}
      {/*              </a>*/}
      {/*            ))}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </nav>*/}
      {/*  </aside>*/}
      {/*</div>*/}
    </div>
  );

  return (
    <div className="sticky z-50 top-0">
      <nav className="duration-300 backdrop-filter backdrop-blur lg:backdrop-blur backdrop-saturate-200
      transition-shadow bg-opacity-90 items-center w-full flex justify-between px-1.5 lg:pe-4 z-50">
        <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
          <div className="flex flex-row">
            <button type="button" aria-label="Menu" className="active:scale-95 transition-transform flex lg:hidden w-12
            h-12 rounded-full items-center justify-center">
              <HiMiniBars3 className="block sm:hidden size-6" onClick={() => setIsOpen(!isOpen)}/>
            </button>
          </div>
          <div className="items-center justify-center flex-1 w-full hidden  md:flex ">
            <div className="container mx-auto px-5 my-8 flex flex-row justify-between">
              <div
                className={`flex flex-wrap items-center justify-start flex-1 ${isOpen ? 'block' : 'hidden'} sm:flex`}>
                {sections.map((section, i) => (
                  <a key={i} href={section.redirect}>
                    <span className="mx-5 text-md font-medium">{section.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end flex-1">
            {icons.map((Object, i) => (
              <a className="mx-3" target="_blank" key={i} href={Object.redirect}>
                <Object.icon className="size-6"/>
              </a>
            ))}
          </div>
        </div>

        {/*<div className="container mx-auto px-5 my-8 flex flex-row justify-between">*/}
        {/*  <div className={`flex flex-wrap items-center justify-start flex-1 ${isOpen ? 'block' : 'hidden'} sm:flex`}>*/}
        {/*    {sections.map((section, i) => (*/}
        {/*      <a key={i} href={section.redirect}>*/}
        {/*        <span className="mx-5 text-md font-medium">{section.name}</span>*/}
        {/*      </a>*/}
        {/*    ))}*/}
        {/*  </div>*/}

        {/*  /!*<h1 className="flex flex-wrap items-center justify-center text-2xl font-bold flex-1">ML</h1>*!/*/}

        {/*  <div className="flex flex-wrap items-center justify-end flex-1">*/}
        {/*    {icons.map((Object, i) => (*/}
        {/*      <a className="mx-3" target="_blank" key={i} href={Object.redirect}>*/}
        {/*        <Object.icon size={25}/>*/}
        {/*      </a>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<FaBars className="block sm:hidden" size={35} onClick={() => setIsOpen(!isOpen)}/>*/}
      </nav>
      <div className={`isolate w-[342px] grow ${isOpen ? 'block' : 'hidden'}`}>
        <aside className="lg:grow lg:flex flex-col w-full pb-8 lg:pb-0 z-50 block">
          <nav role="navigation" className="w-full pt-4 lg:h-auto grow pe-0 lg:pe-5 lg:py-6 md:pt-4 lg:pt-4">
            <div className="items-center justify-center flex-1 w-full md:flex ">
              <div className="container mx-auto px-5 my-8 flex flex-row justify-between">
                <div
                  className={'flex flex-wrap items-center justify-start flex-1 sm:flex'}>
                  {sections.map((section, i) => (
                    <a key={i} href={section.redirect}>
                      <span className="mx-5 text-md font-medium">{section.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default Header;
