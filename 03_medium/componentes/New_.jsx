import { Tag } from './Tag'
import '../estilos/Tag-new.css'
import '../estilos/Neww.css'

export function Neww ({ nombreNew, titularNew, subTitulo, fecha, texTag, perfilImg, newImg, favoritoMarc }) {
  // Verificamos el estado del favorito
  let favortio = 'no-favorito.svg'
  if (favoritoMarc) {
    favortio = 'favorito.svg'
  }

  const rutaImgPerfil = '../media/media-news/perfil-img/' + perfilImg
  // Retornamos el objeto
  return (
    <article className='articulo-new'>
      <div className='contenedor-elementos-new'>
        <div className='contenedor-img-nombre-new'>
          <img src={rutaImgPerfil} alt='Foto de perfil' />
          <p className='nombre-new'>{nombreNew}</p>
        </div>
        <div className='contenedor-titular-new'>
          <p className='titular-new'>{titularNew}</p>
          {subTitulo && <span className='sub-titulo-new'>{subTitulo}</span>}
        </div>
        <div className='contenedor-fecha-tag-favorito'>
          <div className='contenedor-fecha-tag'>
            <span className='span-fecha'>{fecha}</span>
            <Tag text={texTag} />
          </div>
          <div className='contenedor-favorito'>
            <img src={`../media/media-news/${favortio}`} alt='Icono de añadir a favoritos' />
          </div>
        </div>
      </div>
      <div className='contenedor-imagen-new'>
        <img src={`../media/media-news/new-img/${newImg}`} alt='Foto de presentacion de la noticia' />
      </div>
    </article>
  )
}
