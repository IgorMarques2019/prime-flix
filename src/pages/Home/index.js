import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import './scss/home.css'
import api from "../../service/api";
import Loader from "../../components/Loading";
//https://api.themoviedb.org/3/movie/popular?api_key=df22c6b8bc22a39ec7790977bae4c1f6&language=pt-BR


function Home(){
  
  const [filmes,setFilmes] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{

    async function loadFilmes(){
     await api.get('/movie/popular',{
      params:{
        api_key:"df22c6b8bc22a39ec7790977bae4c1f6",
        language:"pt-br",
        page:16,
      }
    })
    .then((response) =>{
      setFilmes(response.data.results)
      setLoading(false)
    })
  
}
loadFilmes()
},[])

if(loading){
  <Loader/>
}else {
  return (
    <div className="container_filmes">
      {filmes.map((item)=>{
        return(
          <article key={item.id}>
            <Link to={`/filme/${item.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
            <h2>{item.title}</h2>
            </Link>
          </article>
        )
      })}
    </div>
  )
}



  
}

export default Home;