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
      <td>
        <a href={play[DETAILS]} target="_blank">
          {play[PLAY]}
        </a>
      </td>
      <td>{play[TIME]}</td>
      <td>{play[THEATER]}</td>
      <td>{play[ADDRES]}</td>
      <td>{play[PHONE]}</td>
      <td>{play[PRICE]}</td>
    </tr>   
  ) 
}

export default Play