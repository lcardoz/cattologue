import React from 'react';
import {useEffect, useState} from 'react';
import CatCard from './CatCard';

const Cats = () => {
  const [cats, setCats] = useState()

  useEffect(() => {
    // fetch cats
    console.log('OINK')
  }, [])

  // const renderedCats = cats.map(cat => <CatCard cat={cat} />)

  return (
    <div>
      <h1>Cats</h1>
      {/* {renderedCats} */}
      <CatCard />
    </div>
  )
}

export default Cats;