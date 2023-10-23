import "./Players.css"

const Players = ({name, image, jersryNumber, team, age, nationality}) => {
  return (
    <div className='container'>
      <div className='card'>
        <div>
          <img src={image} alt="Players image" />
        </div>
        <div>
          <h2 className='title'>{name}</h2>
        </div>
        <div>
          <p> JerseyNumber: #{jersryNumber}</p>
          <p> Team: {team}</p>
          <p> Age: {age}</p>
          <p> Nationality: {nationality}</p>
        </div>

      </div>
      
    </div>
  )
}

export default Players