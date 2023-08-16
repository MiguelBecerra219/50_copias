import { TrendingListItem } from './TrendingListItem'
import '../estilos/TrendingList.css'
import { trendingItems } from '../constantes/items.js'

export function TrendingList () {
  return (
    <section className='section-trending-list'>
      <div className='contenedor-trending-list'>
        <header className='header-trending-list'>
          <div className='contenedor-icono'>
            <img src='../media/trending-logo.svg' alt='' />
          </div>
          <div className='contenedor-titulo'>
            <h2>Trending on Medium</h2>
          </div>
        </header>
        <main className='contenedor-items'>
          {trendingItems.map(item => (
            <TrendingListItem key={item.numero} numero={item.numero} foto={item.foto} nombre={item.nombre} titulo={item.titulo} fecha={item.fecha} />
          ))}
        </main>
      </div>
    </section>
  )
}
