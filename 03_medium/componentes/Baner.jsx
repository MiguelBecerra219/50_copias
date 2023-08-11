export function Baner () {
  return (
    <section className='contenedor-principal'>
      {/* Hacemos un contenedor interno para el baner */}
      <article className='contenedor-baner'>
        <div className='contenedor-titulo'>
          <h1>Stay curious</h1>
        </div>
        <div className='contenedor-parrafo'>
          <p>Discover stories, thinking, and expertise from weiters on any topic.</p>
        </div>
        <div className='contenedor-boton'>
          <button>Start reading</button>
        </div>
        <div className='contenedor-animacion'>
          <img src='' alt='' />
        </div>
      </article>
    </section>
  )
}
