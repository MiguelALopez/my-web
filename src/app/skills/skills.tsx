'use client';
import { FaAngular, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import './skills.scss';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';

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
    {name: 'Angular', icon: FaAngular, years: 6,},
    {name: 'Javascript', icon: IoLogoJavascript, years: 6,},
    {name: 'Typescript', icon: BiLogoTypescript, years: 6,},
    {name: 'HTML5', icon: FaHtml5, years: 6,},
    {name: 'CSS3', icon: FaCss3Alt, years: 6,},
    {name: 'React', icon: FaReact, years: 1,},
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const style = (years: number) => ({
    ['--p']: `${isVisible ? years * 10 : 0}%`
  }) as React.CSSProperties;
  return (
    <div id={'skills'} className="bg-white py-24 text-zinc-900">
      <div className={'container'}>
        <div className="section-title">
          <h2 className="text-4xl font-bold mb-2.5 relative z-10 pb-2.5 text-zinc-950">MY SKILLS</h2>
          <p className="text-gray-600 mb-8">A SENIOR FRONT-END & FULLSTACK BASED IN COLOMBIA</p>
        </div>
        <div className={'flex flex-row justify-between px-40 mt-20'}>
          {skills.map((skill, index) => (
            <div key={index} className={'flex flex-col justify-center items-center'}>
              <div ref={ref} className={'skill-box'} style={style(skill.years)}>
                <div className={'skill flex justify-center items-center size-16'}>
                  <skill.icon className={'size-8'}/>
                  <div className={'years flex flex-col justify-center items-center'}>
                    <h1 className={'text-xl font-bold'}>{skill.years}</h1>
                    <p>{skill.years > 1 ? 'Years' : 'Year'}</p>
                  </div>
                </div>
              </div>
              <p className={'text-center'}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
