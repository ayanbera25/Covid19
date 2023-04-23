import React, { useEffect, useState } from "react";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import Widgets from "./Widgets";
import { useNavigate } from "react-router-dom";

const StateWiseTable = () => {
    let navigate=useNavigate();
    let [data,setData]=useState([]);
    const [rowsData,setRowsData]=useState([]);
    const [totalCaseObj,setTotal]=useState({});
    
    useEffect(()=>{
        getCovidData();
    },[])
   

    const ayan=()=>{
        // navigate('/pages')
    }

    const xyz=()=>{
        console.log(totalCaseObj);
    }

    const getCovidData = async()=>{
        const res=await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.statewise);
        data=actualData.statewise;
        setTotal(data[0]);
        //xyz();
        let rows=[];
        for(let i=0;i<data.length;i++){
            let obj={
                id:i,
                state:data[i].state,
                confirmed:data[i].confirmed,
                deaths:data[i].deaths,
                active:data[i].active,
                recovered:data[i].recovered,
                lastupdatedtime:data[i].lastupdatedtime
            }
            rows.push(obj);
        }
        setRowsData(rows);
    
    }
    
    
    const columns = [
      { key: 'state', name: 'State' },
      { key: 'confirmed', name: 'Confirmed Cases' },
      { key: 'deaths', name: 'Death Cases' },
      { key: 'active', name: 'Active Cases' },
      { key: 'recovered', name: 'Total Recovered' },
      { key: 'lastupdatedtime', name: 'Last Updated On' }
    ];

  return (
    <>
    <div className="widgetsContainer" style={{margin:"3px"}}>
        <Widgets name={"Confirmed"} value={totalCaseObj.confirmed}/>
        <Widgets name={"Death"} value={totalCaseObj.deaths}/>
        <Widgets name={"Active"} value={totalCaseObj.active}/>
        <Widgets name={"Recovered"} value={totalCaseObj.recovered}/>
    </div><hr />
    <DataGrid columns={columns} rows={rowsData} onCellClick={ayan}/>
    </>
  );
};

export default StateWiseTable;
