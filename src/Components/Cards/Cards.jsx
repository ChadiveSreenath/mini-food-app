import React from 'react'
import "./Cards.css"

const Cards = () => {




    return (
        <div className='card-container'>
            {/* Card  */}
            <div style={{ position: "relative", borderRadius: "20px",width:"339px"}}>
                {/* overlay  */}
                <div className='card-overlay'>
                    <p className='card-text'>Sun's Out, BOGO's Out</p>
                    <p style={{ padding: "0rem 0.5rem", }}>Through 8/26</p>
                    <button className='order-btn'>Order Now</button>
                </div>
                <img src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt="" className='card-image' />
            </div>
            {/* Card  */}
            <div style={{ position: "relative", borderRadius: "20px",width:"339px" }}>
                {/* overlay  */}
                <div className='card-overlay'>
                    <p className='card-text'>New Restaurants</p>
                    <p style={{ padding: "0rem 0.5rem", }}>Added Daily</p>
                    <button className='order-btn'>Order Now</button>
                </div>
                <img src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt="" className='card-image' />
            </div>
            {/* Card  */}
            <div style={{ position: "relative", borderRadius: "20px",width:"339px" }}>
                {/* overlay  */}
                <div className='card-overlay'>
                    <p className='card-text'>We Deliver Desserts Too</p>
                    <p style={{ padding: "0rem 0.5rem", }}>Tasty Treats</p>
                    <button className='order-btn'>Order Now</button>
                </div>
                <img src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    alt='/' className='card-image' />
            </div>

        </div>
    )
}

export default Cards