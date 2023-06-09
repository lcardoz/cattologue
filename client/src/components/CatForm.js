import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const CatForm = ({handleSubmit}) => {
  const navigate = useNavigate()

  const location = useLocation()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    color: '',
    disposition: '',
    image: ''
  });

  useEffect(() => {
    if (location.pathname === '/edit-cat') {
      setFormData({
        id: location.state.id,
        name: location.state.name,
        age: location.state.age,
        sex: location.state.sex,
        color: location.state.color,
        disposition: location.state.disposition,
        image: location.state.image
      })
    }
  }, [])
  

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDelete = () => {
    fetch(`/cats/${location.state.id}`, {method: 'DELETE'})
    .then(r => {
      if (r.ok) {
        navigate('/cats')
      } else {
        r.json().then(console.error)
      }
    })
  }

  return (
    <>
      {location.pathname === '/edit-cat' ?
        <h2>Edit Cat</h2>
      :
        <h2>New Cat</h2>
      }
      <div className='catform'>
        <form onSubmit={(e) => handleSubmit(e, formData)}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
            placeholder="Enter name..."
            />
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInput}
            placeholder="Enter age..."
            />
          <label>Sex: </label>
          <select name="sex" value={formData.sex} onChange={handleInput}>
            <option value="" disabled defaultValue>Select sex...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <label>Color: </label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInput}
            placeholder="Enter color or breed..."
          />
          <label>Disposition: </label>
          <input
            type="text"
            name="disposition"
            value={formData.disposition}
            onChange={handleInput}
            placeholder="Describe disposition..."
          />
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInput}
            placeholder="Enter image URL..."
            />
          <input type="submit"/>
        </form>
        {location.pathname === '/edit-cat' ?
          <button onClick={handleDelete}>Delete Cat</button>
        : null}
      </div>
    </>
  )
}

export default CatForm;