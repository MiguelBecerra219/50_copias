import '../estilos/TrendingListItem.css'

export function TrendingListItem ({ numero, foto, nombre, titulo, fecha }) {
  const rutaFoto = '../media/' + foto

  return (
    <article>
      <div className='contenedor-item'>
        <div className='contenedor-span'>
          <span>{numero}</span>
        </div>
        <div className='contenedor-contenido'>
          <div className='contenedor-nombre'>
            <img src={rutaFoto} alt='Foto del usuario' />
            <a href=''>{nombre}</a>
          </div>
          <div className='contenedor-titulo'>
            <a href=''>{titulo}</a>
          </div>
          <div className='contenedor-fecha'>
            <p>{fecha}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
