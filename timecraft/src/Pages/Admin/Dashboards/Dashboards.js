import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav/SideNav";
import StatisticCard from "../Components/StatisticCard/StatisticCard";
import RecentTimeoffRequests from "../Components/RecentTimeoffRequests/RecentTimeoffRequests";
import axios from "axios";
import { Variables } from "../../../Variables";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Dashboards.css";
import RecentUpdates from "../Components/RecentUpdates/RecentUpdates";
import SimpleAnalytics from "../Components/SimpleAnalytics/SimpleAnalytics";
const Dashboards = () => {
  const [sales, setSales] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);
  const [timeoffRequests, setTimeoffRequests] = useState(0);
  useEffect(() => {
    getTotalSales();
    numberOfNewCustomers();
    numberOfTimeoffRequests();
  }, []);


  const getTotalSales = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/GetTotalSales?sinceNumberOfDays=${7}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setSales(response.data)
    }catch (error){
      console.log(error)
    }
  }

  const numberOfNewCustomers = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/NewCustomers?sinceNumberOfDays=${7}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setNewCustomers(response.data)
    }catch (error){
      console.log(error)
    }
  }


  const numberOfTimeoffRequests = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/NumberOfTimeoffRequests?sinceNumberOfDays=${7}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      setTimeoffRequests(response.data)
    }catch (error){
      console.log(error)
    }
  }

  const StyledNavLink = styled(NavLink)`
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    margin: 10px 0;
    font-weight: 700;
  `;

  let salesStat = {
    icon: "analytics",
    mainText: "Number of sales",
    percentage: Math.round(sales/500 * 100),
    stat: sales + "€",
    date: "Last 7 days",
  };
  let employeesStat = {
    icon: "bar_chart",
    mainText: "New employees",
    percentage: Math.round(newCustomers/20 * 100),
    stat: newCustomers,
    date: "Last 7 days",
  };
  let timeoffRequestsStat = {
    icon: "thumb_up",
    mainText: "Number of timeoffRequests",
    percentage: Math.round(timeoffRequests/20 * 100),
    stat: timeoffRequests,
    date: "Last 7 days",
  };
  
  return (
    <div className="dashboards">
      <SideNav />
      <div className="statistics">
        <h1 className="title">Dashboard</h1>
        <div className="cards">
          <StatisticCard props={salesStat} />
          <StatisticCard props={employeesStat} />
          <StatisticCard props={timeoffRequestsStat} />
        </div>
        <div className="hide__md">
          <p className="recent__timeoffRequests__title">Recent timeoffRequests</p>
          <RecentTimeoffRequests />
          <StyledNavLink to="/admin/timeoffRequests">Show All</StyledNavLink>
        </div>
      </div>
      <div>
        <p className="current__user">
          Hey,{" "}
          <strong>{`${localStorage.getItem("usersName") != null ? localStorage.getItem("usersName") : ""} ${localStorage.getItem("usersLastName") != null ? localStorage.getItem("usersLastName") : ""}`}</strong>
        </p>
        <div>
          <p className="recent__updates__title">Recent Updates</p>
          <RecentUpdates />
        </div>
        <div>
          <p className="simple__analytics__title">Simple Analytics</p>
          <SimpleAnalytics />
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
