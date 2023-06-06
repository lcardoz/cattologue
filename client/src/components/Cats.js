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

  return (
    <div>
      <h1>Cats</h1>
      {renderedCats}
    </div>
  )
}

export default Cats;