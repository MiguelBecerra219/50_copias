export function Encabezado () {
  return (
    <header className='header'>
      <div className='contenedor-logo'>
        <img src='../media/Medium_(website)_logo.svg.png' alt='Logo de medium' className='header-logo' />
      </div>
      <div className='contenedor-links'>
        <a href='' className='link-header'>Our story</a>
        <a href='' className='link-header'>Membership</a>
        <a href='' className='link-header'>Write</a>
        <a href='' className='link-header'>Sing In</a>
        <div className='contenedor-boton-header'>
          <button className='boton-header'>Get started</button>
        </div>
      </div>
    </header>
  )
}
