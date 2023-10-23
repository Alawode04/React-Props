import Players from './components/Players'
import './App.css'

const App = () => {
  const players = [
    {
      name:"Lionel Messi",
      age: 36,
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRWZahGYzkieBfnLHeLjSKPue1S0AokNoqyaZHE6iuKtNFZHd9ZUOkInBXoNg-JGwbSzomWlDB7SHZZ9X0",
      team: "Barcelona",
      nationality: "Argentina",
      jerseyNumber: 10
    },

    {
      name:"Zlatan Ibrahimovic",
      age: 42,
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/23/08/Zlatan-Ibrahimovic.jpg",
      team: "PSG",
      nationality: "Sweden",
      jerseyNumber: 10
    },

    {
      name:"Ashley Cole",
      age: 42,
      image: "https://img.a.transfermarkt.technology/portrait/big/3182-1683297696.jpg?lm=1",
      team: "Chelsea",
      nationality: "England",
      jerseyNumber: 3
    },

    {
      name:"Gareth Bale",
      age: "34",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/2022_FIFA_World_Cup_United_States_1%E2%80%931_Wales_-_%2832%29_%28cropped%29.jpg",
      team: "Tottenham",
      nationality: "Wales",
      jerseyNumber: 11
    },

    {
      name:"Bukayo Saka",
      age: 22,
      image: "https://shorturl.at/etzCV",
      team: "Arsenal",
      nationality: "England",
      jerseyNumber: 45
    },
  ]
 

  return (
    <>
      <h1>Football Players</h1>
      <div className='grid'>
        {players.map(({name, image, age, jerseyNumber,team, nationality}, index) => (
          <Players key={index}
          name={name}
          image={image}
          jersryNumber={jerseyNumber}
          nationality={nationality}
          team={team}
          age={age}
          />
        ))}
      </div>
      
    </>
  )
}

export default App
