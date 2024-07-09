'use client';
import { FaGithub, FaLinkedinIn, FaRegFileAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useEffect, useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import './header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const sections: { name: string, redirect: string }[] = [
    {name: 'Home', redirect: '/#home'},
    {name: 'About', redirect: '/#about'},
    {name: 'Skills', redirect: '/#skills'},
    {name: 'Portfolio', redirect: '/#portfolio'},
  ];
  const icons: { icon: IconType, redirect: string }[] = [
    {icon: FaGithub, redirect: process.env.GITHUB_URL || ''},
    {icon: FaLinkedinIn, redirect: process.env.LINKEDIN_URL || ''},
    {icon: FaRegFileAlt, redirect: process.env.CV_URL || ''},
  ];

  const navDesktopClasses: string = 'flex sm:flex-row sm:static sm:w-auto sm:gap-0 sm:py-0 sm:pl-0 left-0';
  const navMobileClasses: string = 'flex-col absolute w-full gap-10 py-6 pl-3';
  const isOpenClasses: string = 'top-16 opacity-100';
  const isCloseClasses: string = '-top-full opacity-0 -z-10 sm:opacity-100 sm:z-auto';
  const Icon = isOpen ? MdClose : HiMiniBars3;

  return (
    <div
      className={`main-nav fixed z-50 w-full ${scroll && 'scrolled'}`}>
      <div className={'sticky  top-0'}>
        <nav className="container mx-auto py-5 flex flex-row justify-between px-5 z-100">
          <div className="flex items-center justify-between w-full gap-0 sm:gap-3">
            <div className="flex flex-row sm:hidden">
              <button type="button" aria-label="Menu" className="active:scale-95 transition-transform w-12
            rounded-full flex items-center justify-center">
                <Icon className="size-6" onClick={() => setIsOpen(!isOpen)}/>
              </button>
            </div>
            <div
              className={`nav-item ${isOpen ? isOpenClasses : isCloseClasses} ${navDesktopClasses} ${navMobileClasses}`}>
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
      </div>
    </div>
  );
}

export default Header;
