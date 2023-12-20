import { useState } from 'react'
import data from './data'
import Menu from './Menu'
import './App.css'

function Categories({categories, filterItems}) {
  

  return (
    <div className='category'>
      {categories.map((category,index) => {
        return (
            <button
            className='btn' 
            type="button" 
            key = {index} 
            onClick={() => filterItems(category)}>
                {category}
            </button>
      )
      })
    }
    </div>
  )
}

export default Categories