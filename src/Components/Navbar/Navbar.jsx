import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import "./Navbar.css"

const Navbar = () => {

    const [nav, setNav] = useState(false)


    return (
        <div className='container'>
            {/* leftside */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ cursor: "pointer" }} onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='logo-best'>Best <span className='logo-eats'>Eats</span></h1>
                <div className='container-buttons'>
                    <p className='delivery-btn'>Delivery</p>
                    <p style={{ padding: "0.5rem" }}>PickUp</p>
                </div>
            </div>
            {/*Search Input */}

            <div className='search-container'>
                <AiOutlineSearch size={20} />
                <input className='search-input' placeholder='Search food you like' />
            </div>

            {/* Cart Button */}

            <div className='cart-container'>
                <BsFillCartFill /> <p style={{ marginLeft: "7px" }}>Cart</p>
            </div>
            {/* Mobile Menu */}
            {/* overlay */}
            {
                nav ? <div className="container-overlay">
                </div> : " "
            }

            {/* side Drawer Menu */}

            <div className={nav ? "side-drawer" : "side-drawer-hidden"}  >
                <AiOutlineClose onClick={() => setNav(!nav)} size={25} style={{ position: "absolute", top: "20", cursor: "pointer", right: "5", }} />
                <h1 className='logo-best'>Best <span className='logo-eats'>Eats</span></h1>
                <nav>
                    <ul>
                        <li><TbTruckDelivery size={20} style={{ marginRight: "1rem" }} /> Orders</li>
                        <li><MdFavorite size={20} style={{ marginRight: "1rem" }} /> Favorites</li>
                        <li><FaWallet size={20} style={{ marginRight: "1rem" }} /> Wallet</li>
                        <li><MdHelp size={20} style={{ marginRight: "1rem" }} /> Help</li>
                        <li><AiFillTag size={20} style={{ marginRight: "1rem" }} /> Promotions</li>
                        <li><BsFillSaveFill size={20} style={{ marginRight: "1rem" }} /> Best Ones</li>
                        <li><FaUserFriends size={20} style={{ marginRight: "1rem" }} /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar