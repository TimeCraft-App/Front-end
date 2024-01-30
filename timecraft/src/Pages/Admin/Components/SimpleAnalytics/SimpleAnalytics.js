import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Variables } from '../../../../Variables';
import "./SimpleAnalytics.css"

const SimpleAnalytics = () => {
    const [dayBeforeYesterdayTimeoffRequests, setDayBeforeYesterdayTimeoffRequests] = useState(0.0);
    const [dayBeforeYesterdayProducts, setDayBeforeYesterdayProducts] = useState(0.0);
    const [dayBeforeYesterdayCustomers, setDayBeforeYesterdayCustomers] = useState(0.0);

    const [yesterdayTimeoffRequests, setYesterdayTimeoffRequests] = useState(0.0);
    const [yesterdayProducts, setYesterdayProducts] = useState(0.0);
    const [yesterdayCustomers, setYesterdayCustomers] = useState(0.0);

    const [timeoffRequestsPercentage, setTimeoffRequestsPercentage] = useState(0.0);
    const [productsPercentage, setProductsPercentage] = useState(0.0);
    const [employeesPercentage, setCustomersPercentage] = useState(0.0);

    useEffect(() => {
        getYesterdayCustomers()
        getYesterdayTimeoffRequests();
        getYesterdayProducts();
        getDayBeforeYesterdayCustomers();
        getDayBeforeYesterdayTimeoffRequests()
        getDayBeforeYesterdayProducts();
        calculatePercentages()
    }, [])

    const getDayBeforeYesterdayTimeoffRequests = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfTimeoffRequests?sinceNumberOfDays=2`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setDayBeforeYesterdayTimeoffRequests(response.data - yesterdayTimeoffRequests)
        } catch (error) {
        }
    }


    const getDayBeforeYesterdayProducts = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfProducts?sinceNumberOfDays=2`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setDayBeforeYesterdayProducts(response.data - yesterdayProducts)
        } catch (error) {
        }
    }

    const getDayBeforeYesterdayCustomers = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NewCustomers?sinceNumberOfDays=2`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setDayBeforeYesterdayCustomers(response.data - yesterdayCustomers)

        } catch (error) {
        }
    }

    const getYesterdayTimeoffRequests = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfTimeoffRequests?sinceNumberOfDays=1`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setYesterdayTimeoffRequests(response.data)
        } catch (error) {
        }
    }

    const getYesterdayProducts = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfProducts?sinceNumberOfDays=1`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setYesterdayProducts(response.data)
        } catch (error) {
        }
    }
    const getYesterdayCustomers = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NewCustomers?sinceNumberOfDays=1`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setYesterdayCustomers(response.data)

        } catch (error) {
        }
    }

    const calculatePercentages = () => {
        setTimeoffRequestsPercentage((yesterdayTimeoffRequests - dayBeforeYesterdayTimeoffRequests) / (dayBeforeYesterdayTimeoffRequests * 100))
        setCustomersPercentage((yesterdayCustomers - dayBeforeYesterdayCustomers) / (dayBeforeYesterdayCustomers * 100))
        setProductsPercentage((yesterdayProducts - dayBeforeYesterdayProducts) / (dayBeforeYesterdayProducts * 100))
    }
    return (
        <div className='simple__analytics'>
            <div className='timeoffRequests analytic' title='Show More'>
                <div className='order__logo__container'>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </div>
                <div className='description'>
                    <p>TIMEOFF_REQUESTS MADE</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: timeoffRequestsPercentage < 0 ? "darkred" : "green" }} className='percentage'>{timeoffRequestsPercentage}%</p>
                <p className='total'>{yesterdayTimeoffRequests}</p>
            </div>
            <div className='new__products analytic' title='Show More'>
                <div className='products__logo__container'>
                    <span className="material-symbols-outlined">
                        inventory
                    </span>
                </div>
                <div className='description'>
                    <p>NEW PRODUCTS</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: productsPercentage < 0 ? "darkred" : "green" }} className='percentage'>{productsPercentage}%</p>
                <p className='total'>{yesterdayProducts}</p>
            </div>
            <div className='new__employees analytic' title='Show More'>
                <div className='employees__logo__container'>
                    <span className="material-symbols-outlined">
                        person_add
                    </span>
                </div>
                <div className='description'>
                    <p>NEW EMPLOYEE</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: employeesPercentage < 0 ? "darkred" : "green" }} className='percentage'>{employeesPercentage}%</p>
                <p className='total'>{yesterdayCustomers}</p>
            </div>
        </div>
    )
}

export default SimpleAnalytics