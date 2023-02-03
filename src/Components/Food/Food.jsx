import React, { useState } from 'react'
import "./Food.css"
import { data } from '../../Data/Data'

const Food = () => {


  const [foods, setFoods] = useState(data)

  console.log(foods)

  const filterCat = (cat) => {
    setFoods(data.filter((item) => (
      item.category === cat
    )))
  }

  const filterPrice = (price) => {
    setFoods(data.filter((item) => (
      item.price === price
    )))
  }

  return (
    <div className='food-container'>
      <h1 className='featured-text'>Top Rated Menu Items</h1>
      {/* filter Row  */}
      <div className="filter-container">
        <div>
          {/* filter Type */}
          <p style={{ fontWeight: "bold", color: "#374151" }}>Filter By Type</p>
          <div className='filter-type'>
            <button onClick={()=>setFoods(data)}>All</button>
            <button onClick={()=>filterCat("pizza")} >Pizza</button>
            <button onClick={()=>filterCat("burger")} >Burger</button>
            <button onClick={()=>filterCat("chicken")} >Chicken</button>
            <button onClick={()=>filterCat("salad")} >Salads</button>
          </div>
        </div>
        {/* filter by price  */}
        <div >
          <p style={{ fontWeight: "bold", color: "#374151" }}>Filter By Price</p>
          <div className='filter-type' >
            <button onClick={() => filterPrice("$")}>$</button>
            <button onClick={() => filterPrice("$$")}>$$</button>
            <button onClick={() => filterPrice("$$$")}>$$$</button>
            <button onClick={() => filterPrice("$$$$")}>$$$$</button>
          </div>
        </div>
      </div>

      {/* display food data  */}

      <div className='food-data-container'>
        {
          foods.map((item, i) => (
            <div key={i} className="food-card">
              <img src={item.image} alt={item.name} />
              <div className="food-card-text">
                <p style={{ fontWeight: "bold" }}>{item.name}</p>
                <p>
                  <span style={{ color: "white", backgroundColor: "#f97316", borderRadius: "9999px", padding: "4px" }}>{item.price}</span>
                </p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Food