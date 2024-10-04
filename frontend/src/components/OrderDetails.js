import React from 'react';
import './OrderDetails.css';
import Header from './header1'
import { useSelector } from 'react-redux';;
const OrderDetails = () => {
    const data = useSelector((state) => state.user.user);
    const food = useSelector((state) => state.food.cart);
    return (
        <div>
             <Header/>
        <div className="order-container">
           
            <h1>Order #<span className="order-id">{data.user._id}</span></h1>
            <div className="delivery-info">
                <h3>Delivery Info</h3>
                <hr/>
                <p><strong>Name: </strong>{data.user.fullName}</p>
                <p><strong>Phone: </strong> {data.user.phoneNumber}</p>
                <p><strong>Address: </strong> Noida,UP Pin-201304</p>
                <p><strong>Amount: </strong> ₹204</p>
            </div>
            <div className="payment-info">
                <p><strong>Payment:</strong> <span className="paid">PAID</span></p>
                <p><strong>Order Status:</strong> <span className="processing">Processing</span></p>
            </div>
            <div className="order-items">
                <h3>Order Items:</h3>
                {food.map(item => (
                    <div key={item._id} className="item">
                        <img src={item.images[0].url} alt={item.name} />
                        <p>{item.name} - ₹{item.price} (1 Item)</p>
                    </div>
                ))}
               
            </div>
        </div>
        </div>
    );
};

export default OrderDetails;
