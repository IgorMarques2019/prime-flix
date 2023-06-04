import './style/header.css'
import { Link } from 'react-router-dom';
function Header(){
  return(
    <header>
      <div className="container">
      <Link to={'/'}>PrimeFlix</Link>
      <Link to={'/favoritos'}>Minha Lista</Link>
      </div>
    </header>
  )
}

export default Header;