import React, {useState} from 'react';

const CatForm = () => {

  const [formData, setFormData] = useState({

  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted form', formData)
    // reset form data
  }

  return (
    <>
      CatForm
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
          placeholder="name"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInput}
          placeholder="age"
        />
        <select name="sex" value={formData.sex} onChange={handleInput}>
          <option value="" disabled selected>Sex</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInput}
          placeholder="image"
        />
        <input
          type="text"
          name="disposition"
          value={formData.disposition}
          onChange={handleInput}
          placeholder="disposition"
        />
        <input type="submit"/>
      </form>
    </>
  )
}

export default CatForm;