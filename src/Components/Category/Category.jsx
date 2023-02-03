import React from 'react'
import "./Category.css"
import { categories } from '../../Data/Data'

const Category = () => {
    return (
        <div className='category-container'>
            <h1 className='featured-text'>Top Rated Menu Items</h1>
            {/* Category  */}
            <div className='category-item'>
                {
                    categories.map((item, i) => (
                        <div key={i} className="category-card">
                            <h2 style={{ font: "bold" }}>{item.name}</h2>
                            <img src={item.image} alt={item.name} style={{width:"5rem"}} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category