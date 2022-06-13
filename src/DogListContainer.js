// DO NOT DELETE
import * as React from 'react'

import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([])

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(Object.keys(data.message)))
  }, [])

  console.log(breeds)
  return <BreedsSelect breeds={breeds} />
}
