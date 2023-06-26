import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CatForm = ({checkUser}) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    color: '',
    disposition: '',
    image: ''
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/cats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
          checkUser()
          navigate('/cats')
      } else {
        r.json().then(console.error)
      }
    })
  }

  return (
    <>
      <h2>New Cat</h2>
      <div className='catform'>
        <form onSubmit={handleSubmit}>
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
            <option value="" disabled selected>Select sex...</option>
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
      </div>
    </>
  )
}

export default CatForm;