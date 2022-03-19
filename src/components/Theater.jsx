import { THEATERS_HEADERS, DEFAULT_THEATER_IMG, IMG } from "../constants"

const Theater = ({theater}) => {
  return (
    <ul>
      {THEATERS_HEADERS.map(header => (
        header === IMG ? 
        <img 
          src={theater[IMG]} 
          width={theater[IMG] === DEFAULT_THEATER_IMG ? '100px' : ''}
        ></img> : 
        <li>{theater[header]}</li>
      ))}
    </ul>
  )
}

export default Theater