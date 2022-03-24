import { 
  THEATER, 
  ADDRES, 
  DETAILS, 
  PHONE, 
  PLAY, 
  PRICE,
  TIME 
} from "../constants"

const Play = ({play}) => {
  return (
    <tr style={{height: '40px'}}>
      <td style={{minWidth: '220px'}}>
        <a href={play[DETAILS]} target="_blank" rel="noreferrer">
          {play[PLAY]}
        </a>
      </td>
      <td>{play[TIME]}</td>
      <td style={{whiteSpace: 'nowrap', paddingLeft: '5px', paddingRight: '5px'}}>{play[THEATER]}</td>
      <td>
        <a href={`https://maps.google.com/?q=${play[ADDRES]}, Buenos Aires`} target="_blank" rel="noreferrer">
          {play[ADDRES]}
        </a>
      </td>
      <td style={{whiteSpace: 'nowrap'}}>{play[PHONE] === '0' || !play[PHONE] ? '-' : play[PHONE]}</td>
      <td>{(play[PRICE]).replaceAll(' ', '')}</td>
    </tr>   
  ) 
}

export default Play