import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CatCard from './CatCard';

const Cats = ( {user} ) => {
  const navigate = useNavigate()

  const [cats, setCats] = useState([])
  const [showOnlyMyCats, setShowOnlyMyCats] = useState(false)
  const [search, setSearch] =useState('')

  useEffect(() => {
    fetch('/cats')
    .then(r => r.json())
    .then(setCats)
  }, [])

  return (
    <div style={{textAlign: "center"}}>
      <h1>Cats</h1>
      <button onClick={() => navigate('/new-cat')} style={{marginBottom: "20px"}}>Add Cat</button>
      <div>
        {user ?
          <label >
            <input
              type="checkbox"
              checked={showOnlyMyCats}
              onChange={() => setShowOnlyMyCats(!showOnlyMyCats)}
            />
            Only show my cats
          </label>
        : null}
        <div style={{marginTop: "20px", marginBottom: "20px"}}>
          <input 
            type="text" 
            placeholder="Search for a cat..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          >
          </input>
        </div>
        {cats
          .filter(cat => (!showOnlyMyCats || cat.user.id === user.id) &&
            cat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(cat => <CatCard key={cat.id} cat={cat} />)
        }
      </div>
    </div>
  )
}

export default Cats;