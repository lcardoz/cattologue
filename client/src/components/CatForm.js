import React, {useState} from 'react';

const CatForm = () => {

  const initialState = {
    name: '',
    age: '', // Will have to convert this to int on backend
    sex: '',
    disposition: '',
    image: ''
  }

  const [formData, setFormData] = useState(initialState);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted form', formData)
    setFormData(initialState)
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