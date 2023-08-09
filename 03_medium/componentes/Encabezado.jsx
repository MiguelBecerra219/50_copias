export function Encabezado () {
  return (
    <header className='header'>
      <div className='contenedor-logo'>
        <img src='../media/logo-medium.png' alt='Logo de medium' />
      </div>
      <div className='contenedor-links'>
        <a href='' className='link-header'>Our story</a>
        <a href='' className='link-header'>Membership</a>
        <a href='' className='link-header'>Write</a>
        <a href='' className='link-header'>Sing In</a>
        <button className='boton-header'>Get started</button>
      </div>
    </header>
  )
}
