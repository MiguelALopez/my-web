import { About, Header, Home, Portfolio, Skills, Tools } from './components';

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
