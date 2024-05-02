import { NavLink } from 'react-router-dom'
import '../assets/cartPage.css'
import useFetch from '../hooks/useFetch'

const CartPage = () => {
    const { apiData, isLoading } = useFetch('/api/cart')
    return (
        <>
            <nav>
                <p className='text'>Product Cart</p>
                <NavLink to='/addToCart' className='add-item-btn'>
                    Add new item
                </NavLink>
            </nav>
            {isLoading && <p>Loading...</p>}

            <div className="products">
                {apiData &&
                    <ul>
                        {apiData.map((item, index) => (
                            <li key={index}>
                                <h4 style={{ color: '#444', marginBottom: '0.5rem' }}>{item.name}</h4>
                                <div className="item-details">
                                    <h5>Price: {item.price}</h5>
                                    <div className="dash"></div>
                                    <h5>Quantity: {item.quantity}</h5>
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                }
            </div>
        </>
    )
}

export default CartPage
