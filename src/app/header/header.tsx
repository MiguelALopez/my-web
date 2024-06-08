import { FaGithub, FaLinkedinIn, FaRegFileAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

function Header() {
  const sections: { name: string, redirect: string }[] = [
    {name: 'Home', redirect: '#home'},
    {name: 'About', redirect: '#about'},
    {name: 'Portfolio', redirect: '#portfolio'},
  ];
  const icons: { icon: IconType, redirect: string }[] = [
    {icon: FaGithub, redirect: 'https://github.com/MiguelALopez'},
    {icon: FaLinkedinIn, redirect: 'https://www.linkedin.com/in/miguelalopezf/'},
    {
      icon: FaRegFileAlt,
      redirect: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9d6e0ef2-05fc-4d43-973c-83027291a0d2'
    },
  ];

  return (
    <div className="fixed w-full">
      <div className="container mx-auto px-5 my-8 flex flex-row justify-between">
        <div className="flex flex-wrap items-center justify-start flex-1">
          {sections.map((section, i) => (
            <a key={i} href={section.redirect}>
              <span className="mx-5 text-md font-medium" key={i}>{section.name}</span>
            </a>
          ))}
        </div>

        {/*<h1 className="flex flex-wrap items-center justify-center text-2xl font-bold flex-1">ML</h1>*/}

        <div className="flex flex-wrap items-center justify-end flex-1">
          {icons.map((Object, i) => (
            <a className="mx-3" target="_blank" key={i} href={Object.redirect}>
              <Object.icon size={25} key={i}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
