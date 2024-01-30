import React, { useState, useEffect } from 'react'
import { Variables } from '../../../../Variables';
import "./RecentTimeoffRequests.css"
import axios from 'axios';

const RecentTimeoffRequests = () => {
    const [recentTimeoffRequests, setRecentTimeoffRequests] = useState([]);

    useEffect(() => {
        getRecentTimeoffRequests()
    }, [])

    const getRecentTimeoffRequests = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `TimeoffRequest/RecentTimeoffRequests`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setRecentTimeoffRequests(response.data);
        } catch (error) {
        }

    }
    return (
        <div className='recent__timeoffRequests'>
            <table >
                <thead>
                    <tr>
                        <th>TimeoffRequest ID</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTimeoffRequests.map(order => (
                        <tr key={order.orderId} className='table__row'>
                            <td>{order.orderId}</td>
                            <td>{order.orderFinalPrice} €</td>
                            <td style={{ fontWeight: 700, color: order.orderStatus === 'Completed' ? '#097969' : (order.orderStatus === 'Verified' ? '#FDDA0D' : 'blue') }}>{order.orderStatus}</td>
                            <td><a
                                href={`order-details/${order.orderId}`}
                                className="edit__button btn"
                            ><input type='button' value='Details' className='details__button' /></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default RecentTimeoffRequests