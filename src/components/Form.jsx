import React from 'react'

function Form() {
  return (
    <div>
       <div className="bookTitle">
            <input type="text" placeholder="Book Title" />
       </div>
       <div className="bookCategory">
            <select name="category" id="category">
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            </select>
       </div>
       <div>
         <button>Add Book</button>
       </div>
      
    </div>
  )
}

export default Form
