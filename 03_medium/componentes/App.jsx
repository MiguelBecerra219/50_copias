import { Encabezado } from './Encabezado'
import '../estilos/App.css'
import { Baner } from './Baner'
import { TrendingList } from './TrendingList'

export function App () {
  return (
    <>
      <section className='section-principal'>
        <Encabezado />
        <Baner />
      </section>
      <TrendingList />
    </>
  )
}
