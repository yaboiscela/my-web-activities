
function Header(){
    return(
      <header className='reasons-header'>
        <div className='logo'>
          <img src='src/assets/react.svg'></img><h1>React</h1>
        </div>
        <nav>
          <ul className='nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
export default Header;