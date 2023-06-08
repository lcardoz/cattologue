import React from 'react';
import {useEffect, useState} from 'react';
import CatCard from './CatCard';

const Cats = () => {
  const [cats, setCats] = useState()

  useEffect(() => {
    fetch('/cats')
    .then(r => r.json())
    .then(setCats)
  }, [])

  const renderedCats = cats?.map(cat => <CatCard key={cat.id} cat={cat} />)

  const handleClick = () => {
    console.log('button clicked')

  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Cats</h1>
      <button onClick={handleClick} style={{marginBottom: "20px"}}>Add Cat</button>
      {renderedCats}
    </div>
  )
}

export default Cats;