import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './scss/favoritos.css'

import { toast } from "react-toastify";

function Favoritos(){
  const [filmes,setFilmes] = useState([])
    useEffect(()=>{
      const minhaLista = localStorage.getItem('@primeflix')
      setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function deleteMovie(id){
      let filterMovie = filmes.filter((item)=>{
        return (item.id !== id)
      })
      setFilmes(filterMovie)
      localStorage.setItem('@primeflix',JSON.stringify(filterMovie))
      toast.success('Item removido!')
      return;
    }

  return(
    <main className="container">
          
          <div id="movie_list">
          <div id="title_movie">
            <h1>Favoritos</h1>
            <div>
            <ion-icon name="bookmarks"></ion-icon>
            <span>{filmes.length < 10 ?  `0${filmes.length}` : filmes.length}</span>
            </div>
            </div>
            

            <ul>
            {
            filmes.map((item)=> {
              return(
                <li key={item.id}><Link to={`/filme/${item.id}`}><span><ion-icon name="bookmark"></ion-icon>{item.title}</span></Link><button onClick={()=>deleteMovie(item.id)}><ion-icon name="trash-outline"></ion-icon></button></li>
              )
            })
            }
            </ul>
          </div>
    </main>
  )
}

export default Favoritos;