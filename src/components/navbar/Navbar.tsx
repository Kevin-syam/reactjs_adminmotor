import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <span>adminmotor</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='' className='icon' />
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className='notifications'>
          <img src='/notifications.svg' alt='' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='https://asset-2.tstatic.net/kalteng/foto/bank/images/One-piece-godoy.jpg'
          alt='' />
          <span>Monkey D Luffy</span> 
        </div>
        <img src='/settings.svg' alt='' className='icon' />
      </div>
    </div>
  )
}
