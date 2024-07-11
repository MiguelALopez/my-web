import Header from '@/app/components/header/header';
import Home from '@/app/components/home/home';
import About from '@/app/components/about/about';
import Skills from '@/app/components/skills/skills';
import Tools from '@/app/components/tools/tools';
import Portfolio from '@/app/components/portfolio/portfolio';
import './style.scss';

export default function Main() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Portfolio/>
    </>
  );
}
