import { IconType } from 'react-icons';
import {
  FaAngular, FaCss3Alt, FaHtml5, FaPython, FaRegEye, FaRegEyeSlash, FaUnity, FaWordpressSimple
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiCsharp, SiDjango } from 'react-icons/si';
import Image from 'next/image';
import { NextTooltip } from '@/app/components/next-tooltip';
import './portfolio.scss';

export interface portfolio {
  name: string
  key: string
  image: string
  visible: boolean
  technologies: technology[]
  description: string
}

export interface technology {
  name: string
  icon: IconType
}

export function Portfolio() {
  const portfolio: portfolio[] = [
    {
      name: 'Playtherapy',
      key: 'playtherapy',
      image: '/playtherapy.jpeg',
      visible: true,
      technologies: [
        {name: 'Unity', icon: FaUnity},
        {name: 'C#', icon: SiCsharp},
        {name: 'Django', icon: SiDjango},
        {name: 'Python', icon: FaPython},
      ],
      description: 'Web admin system and Game developed in Unity with C# and Unity.'
    },
    {
      name: 'Alert Logic',
      key: 'alert-logic',
      image: '/alert-logic-logo.jpg',
      visible: false,
      technologies: [
        {name: 'Angular', icon: FaAngular},
        {name: 'Javascript', icon: IoLogoJavascript},
        {name: 'Typescript', icon: BiLogoTypescript},
        {name: 'HTML5', icon: FaHtml5},
        {name: 'CSS3', icon: FaCss3Alt},
      ],
      description: 'Developer at Alert Logic with Angular, Javascript and Typescript.'
    },
    {
      name: 'Perficient',
      key: 'perficient',
      image: '/perficient_1200x900_red.jpg',
      visible: false,
      technologies: [
        {name: 'Angular', icon: FaAngular},
        {name: 'Javascript', icon: IoLogoJavascript},
        {name: 'Typescript', icon: BiLogoTypescript},
        {name: 'HTML5', icon: FaHtml5},
        {name: 'CSS3', icon: FaCss3Alt},
      ],
      description: 'Front End Team Lead at Perficient with Angular, Javascript and Typescript.'
    },
    {
      name: 'Nomadas del Aire',
      key: 'nomadas-del-aire',
      image: '/nomadas.jpeg',
      visible: true,
      technologies: [
        {name: 'Wordpress', icon: FaWordpressSimple},
        {name: 'Javascript', icon: IoLogoJavascript},
        {name: 'HTML5', icon: FaHtml5},
        {name: 'CSS3', icon: FaCss3Alt},
      ],
      description: 'Personal web page to show my travel project with Wordpress and Javascript.'
    }
  ];
  return (
    <div id={'portfolio'} className={'portfolio bg-white py-24 text-zinc-900'}>
      <div className={'container'}>
        <div className="section-title">
          <h2 className="text-4xl font-bold mb-2.5 relative z-10 pb-2.5 text-zinc-950">MY RECENT WORK</h2>
          <p className="text-gray-600 mb-8">A SENIOR FRONT-END & FULLSTACK BASED IN COLOMBIA</p>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
          {portfolio.map((project) => (
            <a key={project.key} href={`#${project.key}`}>
              <div className={'portfolio-card bg-zinc-500 rounded-lg overflow-hidden aspect-square'}>
                <Image className={'card-img'}
                       src={project.image}
                       alt={project.name}
                       width={400}
                       height={400}/>
                <div className={'card-description p-10 flex flex-col justify-center items-center'}>
                  <div className={'absolute top-5 left-5'}
                       data-tooltip-id="rt-tooltip"
                       data-tooltip-content={project.visible ? 'Open' : 'Private'}
                       data-tooltip-place="right">
                    {project.visible ? <FaRegEye/> : <FaRegEyeSlash/>}
                  </div>
                  <h2 className={'mb-4 text-2xl font-semibold'}>{project.name}</h2>
                  <p className={'text-base font-medium w-full line-clamp-3 text-center'}>{project.description}</p>
                  <div className={'technologies absolute flex flex-row flex-wrap gap-3 mt-20  bottom-10'}>
                    {project.technologies.map((technology) => (
                      <technology.icon
                        key={technology.name}
                        className={'text-3xl'}
                        data-tooltip-id="rt-tooltip"
                        data-tooltip-content={technology.name}
                        data-tooltip-place="bottom"
                        data-tooltip-offset={5}/>
                    ))}
                    <NextTooltip tooltipId={'rt-tooltip'} className={'!px-1.5 !py-1 !text-xs'}/>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
