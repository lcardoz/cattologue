import React from 'react';
import {useEffect, useState} from 'react';
import CatCard from './CatCard';

const Cats = ( {user} ) => {
  const [cats, setCats] = useState([])
  const [showOnlyMyCats, setShowOnlyMyCats] = useState(false)

  // console.log(cats)
  // console.log(user)

  useEffect(() => {
    fetch('/cats')
    .then(r => r.json())
    .then(setCats)
  }, [])

  const handleClick = () => {
    console.log('button clicked')
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Cats</h1>
      <button onClick={handleClick} style={{marginBottom: "20px"}}>Add Cat</button>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showOnlyMyCats}
            onChange={() => setShowOnlyMyCats(!showOnlyMyCats)}
          />
          Show only my cats
        </label>
        {cats
          .filter(cat => (!showOnlyMyCats || cat.user.id === user.id))
          .map(cat => <CatCard key={cat.id} cat={cat} />)
        }
      </div>
    </div>
  )
}

export default Cats;