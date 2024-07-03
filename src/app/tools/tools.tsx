'use client';
import { useRef, useState } from 'react';
import { useOnScreen } from '@/app/skills/skills';
import { PieChart } from 'react-minimal-pie-chart';
import './tools.scss';
import type { Data } from 'react-minimal-pie-chart/types/commonTypes';
import { Tooltip } from 'react-tooltip';

export default function Tools() {
  const [tooltip, setTooltip] = useState({x: 0, y: 0, isOpen: false, index: -1, type: ''});
  const [skillSelected, setSkillSelected] = useState(-1);

  //Data for bar chart
  const tools = [
    {name: 'Github', level: 9},
    {name: 'Unix shell', level: 6},
    {name: 'Jenkins', level: 4},
    {name: 'Vercel', level: 3},
    {name: 'Wordpress', level: 3},
    {name: 'Open AI', level: 5},
  ];

  //Data for pie chart
  const skills: Data<any> = [
    {id: 'front-end', title: 'Frontend', label: 'Frontend', value: 70, color: '#E38627'},
    {id: 'fullstack', title: 'Fullstack', label: 'Fullstack', value: 32, color: '#6A2135'},
  ];

  const frameworks: Data<any> = [
    {id: 'angular', title: 'Angular', value: 50, color: '#DE002D'},
    {id: 'react', title: 'React', value: 21, color: '#01D8FF'},
    {id: 'next', title: 'NextJS', value: 12, color: '#000000'},
    {id: 'nest', title: 'NestJS', value: 5, color: '#E11D4D'},
    {id: 'django', title: 'Django', value: 7, color: '#113E2E'},
    {id: 'wordpress', title: 'Wordpress', value: 5, color: '#1B769D'},
  ];

  const languages: Data<any> = [
    {id: 'html', title: 'HTML', label: 'HTML', value: 20, color: '#E34C26'},
    {id: 'css', title: 'CSS', label: 'CSS', value: 20, color: '#563E7C'},
    {id: 'js', title: 'Javascript', label: 'Javascript', value: 25, color: '#F1E05A'},
    {id: 'ts', title: 'Typescript', label: 'Typescript', value: 23, color: '#3279C7'},
    {id: 'py', title: 'Python', label: 'Python', value: 7, color: '#3572A6'},
    {id: 'php', title: 'PHP', label: 'PHP', value: 5, color: '#4E5D94'},
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isVisible: boolean = useOnScreen(ref);
  const style = (years: number) => ({
    ['--p']: `${isVisible ? years * 10 : 10}`,
    ['--v']: `${isVisible ? 'running' : 'initial'}`,
  }) as React.CSSProperties;
  const shadowStyle: string = 'drop-shadow(1px 1.5px 0.8px rgb(0 0 0 / 0.25))';

  return (
    <div ref={ref} id={'tools'} className={'bg-[#eaedf2] py-24 text-zinc-900'}>
      <div className={'container'}>
        <div className="section-title">
          <h2 className="text-4xl font-bold mb-2.5 relative z-10 pb-2.5 text-zinc-950">TOOLS AND TECHS</h2>
          <p className="text-gray-600 mb-8">A SENIOR FRONT-END & FULLSTACK BASED IN COLOMBIA</p>
        </div>
        <div className={'flex flex-col lg:flex-row gap-32'}>
          <div className={'flex flex-col gap-7 flex-1'}>
            {tools.map((tool) => (
              <div key={tool.name} style={style(tool.level)}>
                <h2 className={'mb-2.5 font-medium'}>{tool.name}</h2>
                <div className="skill-bar">
                  <div className="skill-bar-in bg-[#64748b]"
                       role="progressbar"
                       aria-label={tool.name}
                       aria-valuenow={92}
                       aria-valuemin={0}
                       aria-valuemax={100}
                       style={{width: `${tool.level <= 2 ? (tool.level + 1) * 10 : tool.level * 10}%`}}>
                    <span className={'text-sm text-zinc-500'}>{tool.level * 10}%</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className={'flex-1 -mt-16 lg:-mt-32'}>
            <div className={'relative skill-cake flex items-center justify-center'}>
              <PieChart
                className={'z-10'}
                data={skills}
                animate={true}
                animationDuration={1.5 * 1000}
                reveal={isVisible ? 100 : 0}
                paddingAngle={5}
                lineWidth={20}
                segmentsStyle={() => ({filter: shadowStyle})}
                radius={45}

              />
              <PieChart
                className={'absolute w-9/12 p-1 z-10'}
                data={frameworks}
                animate={true}
                animationDuration={1.5 * 1000}
                reveal={isVisible ? 100 : 0}
                paddingAngle={5}
                lineWidth={25}
                segmentsStyle={() => ({filter: shadowStyle})}
                radius={45}
                onMouseOver={(event, dataIndex) => {
                  setTooltip({x: event.clientX, y: event.clientY, isOpen: true, index: dataIndex, type: 'framework'});
                }}
                onMouseOut={() => {
                  setTooltip({...tooltip, isOpen: false});
                }}
              />
              <PieChart
                className={'absolute w-6/12 h-3/6 p-1 z-20'}
                data={languages}
                animate={true}
                animationDuration={1.5 * 1000}
                reveal={isVisible ? 100 : 0}
                paddingAngle={5}
                lineWidth={35}
                segmentsStyle={() => ({filter: shadowStyle})}
                radius={45}
                onMouseOver={(event, dataIndex) => {
                  setTooltip({x: event.clientX, y: event.clientY, isOpen: true, index: dataIndex, type: 'languages'});
                }}
                onMouseOut={() => {
                  setTooltip({...tooltip, isOpen: false});
                }}
              />
              <Tooltip id="label"
                       noArrow={true}
                       className="!text-xs z-50"
                       position={tooltip}
                       isOpen={tooltip.isOpen}>
                <div>
                  <h1>{tooltip.type === 'framework' ? frameworks[tooltip.index]?.title : languages[tooltip.index]?.title}</h1>
                </div>
              </Tooltip>
            </div>
            <div
              className={'flex flex-row flex-wrap gap-4 justify-around  font-semibold mt-5 text-sm'}>
              {[...frameworks, ...languages].map(tech =>
                <div key={tech.id}
                     className={'flex flex-row items-center justify-center'}>
                  <div className={'size-2 rounded-full mr-1.5 border'} style={{backgroundColor: tech.color}}></div>
                  <p>{tech.title}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
