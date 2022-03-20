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
  fontSize: 'calc(40px + 2vmin)',
  color: 'white',
  textShadow: '5px 5px 10px blueviolet'
}

const Title = () => {
  return <header style={style}>
    <div style={{height: '160px'}}></div>
    TeatrAPP
    <img src={masks} width='180' alt='happy and sad theater masks'></img>
  </header>
}

export default Title