'use client';
import { FaAngular, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import './skills.scss';
import { RiNextjsFill } from 'react-icons/ri';

export function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isVisible;
}

export default function Skills() {

  const skills = [
    {name: 'HTML5', icon: FaHtml5, years: 8, level: 'Advanced'},
    {name: 'CSS3', icon: FaCss3Alt, years: 8, level: 'Advanced'},
    {name: 'Javascript', icon: IoLogoJavascript, years: 8, level: 'Advanced'},
    {name: 'Typescript', icon: BiLogoTypescript, years: 6, level: 'Advanced'},
    {name: 'Angular', icon: FaAngular, years: 6, level: 'Advanced'},
    {name: 'React', icon: FaReact, years: 1, level: 'Intermediate'},
    {name: 'NextJS', icon: RiNextjsFill, years: 1, level: 'Basic'},
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const style = (years: number) => ({
    ['--p']: `${isVisible ? years * 10 : 10}`,
    ['--v']: `${isVisible ? 'running' : 'initial'}`,
  }) as React.CSSProperties;
  return (
    <div id={'skills'} className="bg-white py-24 text-zinc-900">
      <div className={'container'}>
        <div className="section-title">
          <h2 className="text-4xl font-bold mb-2.5 relative z-10 pb-2.5 text-zinc-950">MY SKILLS</h2>
          <p className="text-gray-600 mb-8">A SENIOR FRONT-END & FULLSTACK BASED IN COLOMBIA</p>
        </div>
        <div className={'flex flex-row flex-wrap justify-center lg:justify-between lg:px-28 mt-20 gap-8'}>
          {skills.map((skill, index) => (
            <div key={index} className={'flex flex-col justify-center items-center min-w-24'}>
              <div ref={ref} className={'skill-box'} style={style(skill.years)}>
                <svg className="svg-circle" viewBox="0 0 40 40">
                  <g stroke="none" strokeWidth="2" fill="none" fillRule="evenodd">
                    <circle className="circle" stroke="#111827"
                            strokeDasharray={isVisible ? `${skill.years * 10} ${100 - skill.years * 10}` : '0 100'}
                            strokeLinecap="round"
                            cx="20" cy="20" r="15.91549430918954"></circle>
                  </g>
                </svg>
                <div className={'skill flex justify-center items-center size-16'}>
                  <skill.icon className={'size-8'}/>
                  <div className={'years flex flex-col justify-center items-center'}>
                    <h1>{skill.years}</h1>
                    <p>{skill.years > 1 ? 'Years' : 'Year'}</p>
                  </div>
                </div>
              </div>
              <p className={'text-center font-semibold'}>{skill.name}</p>
              <p className={'text-center text-zinc-500 text-xs'}>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
