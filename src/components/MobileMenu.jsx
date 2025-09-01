export const MobileMenu = ({ isOpen }) => {
  const menuProps = [
    {
      url: '#inicio',
      text: 'INICIO',
    },
    {
      url: '#sobre-mi',
      text: 'SOBRE MI',
    },
    {
      url: '#habilidades',
      text: 'HABILIDADES',
    },
    {
      url: '#proyectos',
      text: 'PROYECTOS',
    },
    {
      url: '#contacto',
      text: 'CONTACTO',
    },
  ]
  return (
    <div
      className={`fixed top-16 right-0 h-full w-60 sm:w-90 bg-black shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div>
        <ul className="flex flex-col mt-8 space-y-6  font-inter text-xs sm:text-base px-11">
          {menuProps.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="hover:text-brand transition-all transition-duration-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
