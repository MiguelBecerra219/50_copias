import '../estilos/Discover.css'
import { DiscoverMore } from '../constantes/items'
import { Tag } from './Tag'
import { useId } from 'react'

export function Discover () {
  return (
    <section className='section-tags'>
      <header className='header-tags'>
        <h3>Discover more of what matters to you</h3>
      </header>
      <main className='main-tags'>
        <div className='contenedor-tags'>
          {DiscoverMore.map(texto => (
            <Tag key={useId()} text={texto} />
          ))}
        </div>
      </main>
      <footer className='footer-tags'>
        <a href=''>See more topics
        </a>
      </footer>
    </section>
  )
}
