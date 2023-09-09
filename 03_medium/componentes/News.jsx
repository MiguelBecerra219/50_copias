import { Neww } from './New_'
import { newList } from '../constantes/items'

export function News () {
  return (
    <section>
      <div className='contenedor'>
        {newList.map(item => (
          <Neww key={item.numero} nombreNew={item.nombreNew} titular={item.titularNew} subTitulo={item.subTitulo} fecha={item.fecha} texTag={item.texTag} perfilImg={item.imgPerfil} newImg={item.imgNew} favoritoMarc={item.favoritoMarc} />
        ))}
      </div>
    </section>
  )
}
