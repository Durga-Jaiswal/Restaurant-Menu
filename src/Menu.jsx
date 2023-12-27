import { useState } from 'react'
import items from './data'
import Categories from './Categories'

import './App.css'

function Menu({items}) {
  

  return (
    <>
      <div className='menu-container'>
       {items.map((menuItem)=>{
          const {id, title, img, price, desc, category} = menuItem;
          return (
            <article key={id} className='menu-item'>              <img src={img} alt={title} className='img'/>

              <div className='item-info'>
                <div className='flex'>
                  <h3>{title}</h3>
                  <p>${price}</p>
                </div>
                <p>{desc}</p>
              </div>

            </article>
          );
       })}
      </div>
    </>
  )
}

export default Menu