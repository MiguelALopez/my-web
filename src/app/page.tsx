import Header from '@/app/header/header';
import Home from '@/app/home/home';
import './style.scss';

export default function Main() {
  return (
    <>
      <Header/>
      <Home/>
      <section id="about" className="bg-white min-h-screen">
        <div className="container mx-auto py-5">
          <h1 className="text-black">Hola mundo</h1>
        </div>
      </section>
    </>
  );
}
