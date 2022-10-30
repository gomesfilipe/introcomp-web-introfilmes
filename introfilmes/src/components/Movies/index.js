import styles from './Movies.module.css'
import { Card } from "../Card";
import { useEffect, useState } from 'react';
import { Movie } from '../Movie';
import { api } from '../../lib/api'

const moviesList = [
  {
    name: 'Vingadores: Ultimato',
    year: 2019,
    description: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
    // photo: 'https://picsum.photos/700/800',
    photo: 'https://i.ibb.co/vdrw45P/vingadores-ultimato.jpg', 
    evaluation: 5
  },
  {
    name: 'Homem Aranha: Sem Volta para Casa',
    year: 2021,
    description: 'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.',
    photo: 'https://i.ibb.co/CzQRTvx/no-way-home.jpg', 
    evaluation: 5
  },
  {
    name: 'Carros',
    year: 2006,
    description: 'Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.',
    photo: 'https://i.ibb.co/sVv8yRB/carros.jpg', 
    evaluation: 4
  },
  {
    name: 'Coringa',
    year: 2019,
    description: 'Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.',
    photo: 'https://i.ibb.co/3TpxxxT/coringa.jpg', 
    evaluation: 4
  },
  {
    name: 'Fragmentado',
    year: 2017,
    description: 'Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar.',
    photo: 'https://i.ibb.co/6mKx93S/fragmentado.jpg', 
    evaluation: 3
  },
  {
    name: 'Interestelar',
    year: 2014,
    description: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
    photo: 'https://i.ibb.co/C5BKCkd/interestelar.jpg', 
    evaluation: 5
  },
  {
    name: 'O Rei Leão',
    year: 2019,
    description: 'Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana.',
    photo: 'https://i.ibb.co/CwmykwW/rei-leao.jpg', 
    evaluation: 2
  },
  {
    name: 'Titanic',
    year: 1998,
    description: 'Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica jornada do Titanic, em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.',
    photo: 'https://i.ibb.co/1zhdP78/titanic.jpg', 
    evaluation: 3
  },
  {
    name: 'Venom',
    year: 2018,
    description: 'O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie.',
    photo: 'https://i.ibb.co/PTcpzDP/venom.jpg', 
    evaluation: 3
  },
]

export function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const list = await api.get('/movies/all')
      return list
    }

    getMovies()
      .then(res => {
        setMovies(res.data)
      })
  } , [movies])

  return (
    <div className={styles.movies}>
      <h2>CATÁLOGO</h2>
      <div className={styles.cards}>
          {
            movies.map((movie, index) => {
              return (
                <Movie 
                  key={index} 
                  name={movie.name} 
                  year={movie.year} 
                  description={movie.description} 
                  photo={movie.photo} 
                  evaluation={movie.evaluation} 
                  movies = {movies}
                  setMovies={setMovies}
                  index={index}
                  id={movie.id}
                />
              ) 
            })
          }
          <Card key={movies.length} movies={movies} setMovies={setMovies} />
      </div>
    </div>
  )
}
