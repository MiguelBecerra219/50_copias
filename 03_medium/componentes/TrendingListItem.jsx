import '../estilos/TrendingListItem.css'

export function TrendingListItem () {
  return (
    <article>
      <div className='contenedor-item'>
        <div className='contenedor-span'>
          <span>01</span>
        </div>
        <div className='contenedor-contenido'>
          <div className='contenedor-nombre'>
            <img src='../media/perfil.jpg' alt='' />
            <p>Marie Le Conte</p>
          </div>
          <div className='contenedor-titulo'>
            <h3>Limbs</h3>
          </div>
          <div className='contenedor-fecha'>
            <p>aug 9 . 4 min read</p>
          </div>
        </div>
      </div>
    </article>
  )
}
