import Header from '@/app/header/header';
import Home from '@/app/home/home';
import About from '@/app/about/about';
import Skills from '@/app/skills/skills';
import Tools from '@/app/tools/tools';
import './style.scss';

export default function Main() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
    </>
  );
}
