// DO NOT DELETE
// DO NOT DELETE
import * as React from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [state, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1476.jpg',
  )

  const handleClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }

  return (
    <div>
      <DogImage url={state} />
      <button onClick={() => handleClick()}>更新</button>
    </div>
  )
}
