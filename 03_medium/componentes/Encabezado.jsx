export function Encabezado () {
  return (
    <header className='header'>
      {/* Dividimos el contenido en dos bloqueas para poder separarlos poniendo uno a cada lado de la pagina */}
      {/* Bloque con el logo */}
      <div className='contenedor-logo'>
        <img src='../media/Medium_(website)_logo.svg.png' alt='Logo de medium' className='header-logo' />
      </div>
      {/* Bloque con los enlaces y el boton */}
      <div className='contenedor-links'>
        <a href='' className='link-header'>Our story</a>
        <a href='' className='link-header'>Membership</a>
        <a href='' className='link-header'>Write</a>
        <a href='' className='link-header'>Sing In</a>
        {/* Bloque para separar el boton */}
        <div className='contenedor-boton-header'>
          <button className='boton-header'>Get started</button>
        </div>
      </div>
    </header>
  )
}
