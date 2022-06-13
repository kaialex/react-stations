// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = prop => {
  const [selectedBreed, setSelectedBreed] = React.useState('african')
  const [breeddata, setBreeddata] = React.useState([])

  const handleChange = event => {
    setSelectedBreed(event.target.value)
    console.log(selectedBreed)
  }

  const Updateimage = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/10`)
      .then(response => response.json())
      .then(data => data.message)
      .then(data => setBreeddata(data))
  }

  console.log(breeddata)

  return (
    <>
      <select onChange={e => handleChange(e)} value={selectedBreed}>
        {prop.breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button onClick={() => Updateimage()}>表示</button>
      <div className="flexbox">
        {breeddata.map(image => (
          <img key={image} src={image} alt="dog" />
        ))}
      </div>
    </>
  )
}
