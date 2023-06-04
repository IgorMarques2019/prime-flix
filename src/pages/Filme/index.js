import { useParams, useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import api from "../../service/api";
import Loader from "../../components/Loading";
import './scss/filme.css'
import { toast } from "react-toastify";




function Filme(){
  const {id} = useParams('')
  const [filme,setFilme] = useState({})
  const [loading,setLoading] = useState(true)
  const navigation = useNavigate()
  let {genres} = filme
  console.log(genres)
  
  let a = {
    background:`url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
  }
  
 
  
  
  useEffect(()=>{
      async function loadMovie(){
        await api.get(`movie/${id}`,{
          params:{
            api_key:"df22c6b8bc22a39ec7790977bae4c1f6",
            language:'pt-BR',
          }
          
        })
        .then((response)=>{
          setFilme(response.data)
            setLoading(false)
        })

        .catch((error)=>{
          navigation('/',{replace:true})
          return;
        })
      }
      
      loadMovie()

      
    },[navigation,id])

    function saveMovie(){
      let minhaLista = localStorage.getItem('@primeflix')
      let filmesSalvos = JSON.parse(minhaLista) || []

      const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)
      if(!hasFilme) {
        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix',JSON.stringify(filmesSalvos))
        toast.success('Filme adicionado com sucesso',{
          draggable: true,
          
        })
      }else {
        toast.warn('Esse item já está na lista!',{
          draggable: true,
        })
      }
      
    }


    if(loading){
      return (
        <Loader/>
      )

    }else {
  return(
    <main>
       <section style={a} id="banner_movie">
        <div id="bg_banner_movie">
          <div id="movie_info">

            <div id="poster_movie">
              <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt=''/>
            </div>

            <div id="movie_desc">
              <div id="title_score">
                <h1>{filme.title}</h1>
                <span>{Number(filme.vote_average).toFixed(1)}</span>
              </div>
              <div id="genres_movie">
               {genres.map((item)=>{
                return(
                  <span>{item.name}</span>
                )
               })}
               </div>

              <p>{filme.overview}</p>
              
              <div id="button_container">
                <button onClick={saveMovie}  id="favoritoBtn"><ion-icon name="bookmark-outline"></ion-icon> Favoritos</button>
                <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} >
                <button id="trailerBtn"><ion-icon name="play-outline"></ion-icon>Trailer</button>
                </a>
              </div>

               

              

            </div>

          </div>
        </div>

      
      </section> 
    </main>
  )
}//Fim do else
}

export default Filme;