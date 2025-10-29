import Logo from '../assets/Logo.svg'



function Header() {
  return (
    <header className="fixed top-0 left-0 right-0  flex items-center justify-between p-6 bg-gray-200 z-50">
      <img src={Logo} className="logo" alt="Vite logo" />
      <ul className="flex gap-6 list-none">
        <li className="p-4">Como funciona</li>
        <li className="p-4">Doar</li>
        <li className="p-4">Adquirir</li>
        <li className="p-4 bg-green-500 rounded-2xl  hover:bg-green-800">
          Começar Agora
        </li>
      </ul>
    </header>
  )
}
export default Header
