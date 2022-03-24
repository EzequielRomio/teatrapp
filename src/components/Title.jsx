import masks from '../assets/masks.png'
import theaterBg from '../assets/theatre-bg.png'

const style = {
  backgroundColor: '#282c34',
  backgroundImage: `url(${theaterBg})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(48px + 2vmin)',
  color: 'white',
  textShadow: '6px 6px 10px #000'
}

const Title = () => {
  return (
    <header style={style} className={'title-font'}>
      <div style={{height: '160px'}}></div>
      <span style={{transform: 'rotate(-3deg)'}}>A LLENAR LAS SALAS!</span>
      
      <img src={masks} width='180' alt='happy and sad theater masks'></img>      
      

    </header>
  )
}

export default Title