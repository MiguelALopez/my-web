import {
  FaAngular,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJenkins,
  FaLinux,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiJavascript, SiNgrx, SiTypescript, SiVercel } from 'react-icons/si';
import './slider.scss';
import { AiOutlineOpenAI } from 'react-icons/ai';
import { BiLogoPostgresql } from 'react-icons/bi';

export default function Slider() {
  const techLogos = [
    FaAngular,
    FaReact,
    RiNextjsFill,
    FaHtml5,
    FaCss3Alt,
    SiJavascript,
    SiTypescript,
    FaNodeJs,
    SiNgrx
  ];

  const toolLogos = [
    FaGithub,
    FaGitAlt,
    FaJenkins,
    AiOutlineOpenAI,
    FaLinux,
    BiLogoPostgresql,
    SiVercel
  ];
  const defIconClass: string = 'mx-3 w-10 h-10';
  const mdIconClass: string = 'md:mx-8 md:w-14 md:h-14';
  const lgIconClass: string = 'lg:mx-16 lg:w-24 lg:h-24';

  return <div className="logos flex flex-row mt-20 overflow-hidden w-11/12 lg:w-4/5 opacity-15">
    <div className="slider flex flex-row">
      {techLogos.map((Logo, index) =>
        (<Logo className={`${defIconClass} ${mdIconClass} ${lgIconClass}`} key={index}/>))}
    </div>
    <div className="slider flex flex-row">
      {techLogos.map((Logo, index) =>
        (<Logo className={`${defIconClass} ${mdIconClass} ${lgIconClass}`} key={index}/>))}
    </div>
  </div>;
}
