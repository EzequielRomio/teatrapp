import masks from '../assets/black-masks.png'
import theaterBg from '../assets/theatre-bg.png'

const style = {
  // backgroundColor: '#282c34',
  // backgroundImage: `url(${theaterBg})`,
  // backgroundSize: 'cover',
  minHeight: '20vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(48px + 2vmin)',
  color: 'white',
  textShadow: '6px 6px 10px #000',
}

const Title = () => {
  return (
    <header style={style} className={'bg-grad'}>
      <div>
      <span style={{
        //transform: 'rotate(-8deg)', 
        wordBreak: 'break-word', margin: '40px 20px 40px 20px'}} className={'title-font'}>Dame Teatro</span>
      {/* <img src={masks} width='80' alt='happy and sad theater masks'></img> */}

      </div>
      
      <span style={{fontSize: 'calc(12px + 2vmin)',margin: 20}}>Buscá una obra de teatro para ver hoy y ahora de manera fácil</span>
      {/* <img src={masks} width='180' alt='happy and sad theater masks'></img>       */}
    </header>
  )
}

export default Title