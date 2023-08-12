import { TrendingListItem } from './TrendingListItem'
import '../estilos/TrendingList.css'

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
        <TrendingListItem />
        <TrendingListItem />
        <TrendingListItem />
      </div>
    </section>
  )
}
