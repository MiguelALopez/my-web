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
    <div
      className={`fixed z-50 w-full transition-shadow ${scroll && 'shadow-nav-dark'}`}>
      <div className="sticky  top-0 bg-black">
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
      </div>
    </div>
  );
}

export default Header;
