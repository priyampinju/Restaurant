import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card-container">
      {menuData.map((curElem) => {

        const {id,name,price, category ,image, description} = curElem;
        return (
          <>
            <div className="card-container">
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">{id}</span>
              <span className="card-category subtle">{category}</span>
              <h3 className="card-title">{name} </h3>
              <span className="card-description subtle">{description} </span>
              <img src={image} alt={name} srcset="" />
              <h6 className="card-price">{price} </h6>
              <span className="card-tag subtle">Add To Cart</span>
            </div>
          </div>
        </div>
          </>
        )
      })
    }   
    </section>
    </>
  )
}

export default MenuCard
