import './scss/erro.css'
import { Link } from 'react-router-dom';
function ErroLoadPage(){
  return(
    <div id="error_container">
      <h1>404</h1>
      <p>Essa página não existe!</p>
      <Link to={'/'}>Ver os Filmes</Link>
    </div>
  )
}

export default ErroLoadPage;