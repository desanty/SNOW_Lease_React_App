//import React from 'react';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import CreateNewLease from './CreateNewLease';
const App = () => {
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    axios.get('/api/now/table/x_nuvo_re_rem_lease_contract?sysparm_display_value=true&sysparm_fields=number%2Cname%2Clease_side%2Cstate%2Cstart_date', {
      withCredentials: true
    })
      .then(res => {
        setIncidents(res.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, 
  []);
  return (
    <div className="App">
      <div className='Head'>
        <header className="App-header"> Real Estate Asset Management </header>
      </div>
      <div className='Tabs'>
        <Tabs>
          <div className='rect_tabs'>
          <TabList className="tabList">
            <div className='Tabs'>
              <Tab className="Tab1">Assets</Tab>
              <Tab className="Tab1">Dashboard</Tab>
              <Tab className="Tab1">Timeline</Tab>
              <Tab className="Tab1">Accounting</Tab>
              <Tab className="Tab1">Pending Task</Tab>
            </div>
          </TabList>
          <div className='Content'>
            <TabPanel>
              <table className="table">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Lease Side</th>
                    <th>Lease State</th>                    
                    <th>Commencement Date</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map(item => (
                    <tr key={item.sys_id}>
                      <td>{item.number}</td>
                      <td>{item.name}</td>
                      <td>{item.lease_side}</td>
                      <td>{item.state}</td>
                      <td>{item.start_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
