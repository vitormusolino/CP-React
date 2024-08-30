import Menu from "../Menu"

function Header() {

const menu = [
  {
    titulo: "Home",
    rota: '/'
  },
  {
    titulo: "Sobre",
    rota: '/sobre'
  },
  {
    titulo: "Contato",
    rota: '/contato'
  }
]

  return (
    <header>
      <nav>
        <ul className="menu-button">
          <li>
            <a><Menu headerMenu={menu}/></a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;