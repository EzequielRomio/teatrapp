import Theater from "./Theater";

const Theaters = ({ theaters }) => {
  return (
    <div>
      {theaters && theaters.map(theater => <Theater theater={theater}/>)}
    </div>
  )
}

export default Theaters