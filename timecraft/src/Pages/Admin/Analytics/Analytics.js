import React, { useState, useEffect } from 'react'
import SideNav from '../Components/SideNav/SideNav'
import { Variables } from '../../../Variables'
import axios from 'axios'
import StatisticCard from '../Components/StatisticCard/StatisticCard'
import "./Analytics.css"
const Analytics = () => {
  const [sales, setSales] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);
  const [timeoffRequests, setTimeoffRequests] = useState(0);
  const [newProducts, setNewProducts] = useState(0);
  useEffect(() => {
    getTotalSales();
    numberOfNewCustomers();
    numberOfTimeoffRequests();
    numberOfNewProducts();
  }, []);

  const getTotalSales = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/GetTotalSales?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setSales(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const numberOfNewCustomers = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/NewCustomers?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setNewCustomers(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  const numberOfTimeoffRequests = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/NumberOfTimeoffRequests?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setTimeoffRequests(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  const numberOfNewProducts = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Statistics/NumberOfProducts?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setNewProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  let salesStat = {
    icon: "analytics",
    mainText: "Number of sales",
    percentage: Math.round(sales / 20000 * 100),
    stat: sales + "€",
    date: "Last year",
  };
  let employeesStat = {
    icon: "bar_chart",
    mainText: "New employees",
    percentage: Math.round(newCustomers / 500 * 100),
    stat: newCustomers,
    date: "Last year",
  };
  let timeoffRequestsStat = {
    icon: "thumb_up",
    mainText: "Number of timeoffRequests",
    percentage: Math.round(timeoffRequests / 500 * 100),
    stat: timeoffRequests,
    date: "Last year",
  };

  let productsStat = {
    icon: "analytics",
    mainText: "New products",
    percentage: Math.round(newProducts / 500 * 100),
    stat: newProducts,
    date: "Last year",
  };

  return (
    <div className="analytics">
      <SideNav />
      <div>
        <h1 class='title'>Analytics</h1>
        <p class='date'>Last 365 days</p>
        <div className="cards">
          <StatisticCard props={salesStat} />
          <StatisticCard props={employeesStat} />
          <StatisticCard props={timeoffRequestsStat} />
          <StatisticCard props={productsStat} />
        </div>
      </div>
    </div>
  )
}

export default Analytics