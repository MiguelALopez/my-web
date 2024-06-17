import Header from '@/app/header/header';
import Home from '@/app/home/home';
import About from '@/app/about/about';
import './style.scss';

export default function Main() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
    </>
  );
}
